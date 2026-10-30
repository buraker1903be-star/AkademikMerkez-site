// Blog yazıları (30.10.2026). Yazılar content/blog/<slug>.md dosyalarında;
// bu modül onları DERLEME SIRASINDA okur, denetler ve HTML'e çevirir.
// Site statik kalsın diye veritabanı ya da içerik yönetim sistemi yok:
// yeni yazı = yeni dosya + commit, Vercel yeniden yayımlar.
//
// Yalnızca sunucuda (sayfa, site haritası, RSS) içe aktarılır; fs kullanır.
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { Marked, type Tokens } from "marked";
import { services, type Faq } from "./services";

const KLASOR = path.join(process.cwd(), "content", "blog");

/*
  Yazarlar tek yerde. Kişi adıyla yazılan yazı (unvanı ve uzmanlığıyla)
  güvenilirlik sinyali olarak kurum adından daha değerlidir; gerçek bir
  danışman yazdığında buraya "kisi" türünde eklenir.
*/
type Yazar = {
  ad: string;
  tur: "kurum" | "kisi";
  unvan?: string;
  hakkinda?: string;
  /** Kişinin akademik profilleri (ORCID, Google Akademik...). */
  profiller?: string[];
};

export const YAZARLAR: Record<string, Yazar> = {
  editorluk: {
    ad: "Akademik Merkez Editörlüğü",
    tur: "kurum",
    hakkinda: "Yazılar, Akademik Merkez'in yöntem ve analiz danışmanlarınca hazırlanır ve yayımlanmadan önce editörlükçe gözden geçirilir.",
  },
};

export type Baslik = { id: string; metin: string };

export type Yazi = {
  slug: string;
  baslik: string;
  /** Arama sonucunda görünen açıklama (en çok 160 karakter). */
  aciklama: string;
  /** Yazının başındaki "Kısaca" cevabı: soruya 2-3 cümlelik doğrudan yanıt. */
  ozet: string;
  /** YYYY-AA-GG */
  yayin: string;
  /** YYYY-AA-GG; içerik değişmediyse yayın tarihi. */
  guncelleme: string;
  yazar: Yazar;
  /** İlgili hizmetlerin slug'ları; yazıdan hizmete, hizmetten yazıya bağlantı. */
  hizmetler: string[];
  anahtarKelimeler: string[];
  sss: Faq[];
  html: string;
  basliklar: Baslik[];
  okumaDakika: number;
};

const TARIH = /^\d{4}-\d{2}-\d{2}$/;

/*
  YAML tırnaksız tarihi (2026-10-30) Date nesnesine çeviriyor, tırnaklıyı
  metin bırakıyor; yazar hangisini yazarsa yazsın aynı sonuç çıksın.
*/
function tarih(deger: unknown, alan: string, dosya: string): string {
  const metin = deger instanceof Date ? deger.toISOString().slice(0, 10) : String(deger ?? "");
  if (!TARIH.test(metin)) throw new Error(`${dosya}: "${alan}" YYYY-AA-GG biçiminde olmalı (şu an: ${metin || "boş"}).`);
  return metin;
}

function metin(deger: unknown, alan: string, dosya: string): string {
  if (typeof deger !== "string" || !deger.trim()) throw new Error(`${dosya}: "${alan}" alanı boş.`);
  return deger.trim();
}

/** Türkçe başlıktan bağlantı kimliği: "Hangi testi seçmeli?" → "hangi-testi-secmeli". */
export function kimlik(metin: string): string {
  const harf: Record<string, string> = { ç: "c", ğ: "g", ı: "i", İ: "i", ö: "o", ş: "s", ü: "u" };
  return metin
    .replace(/[çğıİöşü]/gi, (h) => harf[h] ?? harf[h.toLowerCase()] ?? h)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/*
  Ara başlıklar (##) kimlik alır ve içindekiler tablosuna girer. Yapay zeka
  arama motorları ve Google "bu bölüme git" bağlantısını bu kimliklerden
  kuruyor; soru biçimindeki ara başlık + hemen altında cevap, alıntılanan
  biçimin ta kendisi.
*/
function cevir(govde: string) {
  const basliklar: Baslik[] = [];
  const kullanilan = new Set<string>();
  const md = new Marked({ gfm: true });
  md.use({
    renderer: {
      heading({ tokens, depth, text }: Tokens.Heading) {
        const ic = this.parser.parseInline(tokens);
        if (depth !== 2 && depth !== 3) return `<h${depth}>${ic}</h${depth}>\n`;
        let id = kimlik(text) || "bolum";
        for (let i = 2; kullanilan.has(id); i++) id = `${kimlik(text)}-${i}`;
        kullanilan.add(id);
        if (depth === 2) basliklar.push({ id, metin: text.replace(/[*_`]/g, "") });
        return `<h${depth} id="${id}">${ic}</h${depth}>\n`;
      },
      link({ href, title, tokens }: Tokens.Link) {
        const ic = this.parser.parseInline(tokens);
        const dis = /^https?:\/\//.test(href);
        const baslik = title ? ` title="${title}"` : "";
        return dis
          ? `<a href="${href}"${baslik} target="_blank" rel="noopener noreferrer">${ic}</a>`
          : `<a href="${href}"${baslik}>${ic}</a>`;
      },
    },
  });
  const html = md.parse(govde, { async: false });
  return { html, basliklar };
}

function oku(dosya: string): Yazi {
  const slug = dosya.replace(/\.md$/, "");
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) {
    throw new Error(`content/blog/${dosya}: dosya adı adres olacak; yalnızca küçük harf, rakam ve tire.`);
  }
  const { data, content } = matter(fs.readFileSync(path.join(KLASOR, dosya), "utf8"));
  const ad = `content/blog/${dosya}`;

  const aciklama = metin(data.aciklama, "aciklama", ad);
  // Google açıklamayı 150-160 karakterde kesiyor; kesilen cümle tıklanmıyor.
  if (aciklama.length > 160) throw new Error(`${ad}: "aciklama" ${aciklama.length} karakter, en çok 160.`);

  const yazarAnahtari = typeof data.yazar === "string" ? data.yazar : "editorluk";
  const yazar = YAZARLAR[yazarAnahtari];
  if (!yazar) throw new Error(`${ad}: "${yazarAnahtari}" adlı yazar lib/blog.ts YAZARLAR içinde yok.`);

  const hizmetler: string[] = Array.isArray(data.hizmetler) ? data.hizmetler : [];
  const eksik = hizmetler.filter((h) => !services.some((s) => s.slug === h));
  // Yanlış yazılmış bir slug sessizce kırık bağlantı yayınlamasın.
  if (eksik.length) throw new Error(`${ad}: tanımsız hizmet: ${eksik.join(", ")}.`);

  const sss: Faq[] = Array.isArray(data.sss) ? data.sss : [];
  if (sss.some((f) => !f?.q || !f?.a)) throw new Error(`${ad}: her "sss" maddesinde "q" ve "a" olmalı.`);

  const yayin = tarih(data.yayin, "yayin", ad);
  const guncelleme = data.guncelleme ? tarih(data.guncelleme, "guncelleme", ad) : yayin;
  if (guncelleme < yayin) throw new Error(`${ad}: "guncelleme" yayın tarihinden önce olamaz.`);

  const { html, basliklar } = cevir(content);
  const kelime = content.split(/\s+/).filter(Boolean).length;

  return {
    slug,
    baslik: metin(data.baslik, "baslik", ad),
    aciklama,
    ozet: metin(data.ozet, "ozet", ad),
    yayin,
    guncelleme,
    yazar,
    hizmetler,
    anahtarKelimeler: Array.isArray(data.anahtarKelimeler) ? data.anahtarKelimeler : [],
    sss,
    html,
    basliklar,
    okumaDakika: Math.max(1, Math.round(kelime / 200)),
  };
}

let onbellek: Yazi[] | null = null;

/*
  Yayımlanmış yazılar, en yeniden eskiye. Yayın tarihi ileride olan yazı
  atlanır; site statik olduğu için o tarihten sonraki İLK DERLEMEDE
  yayına girer (kendiliğinden değil). Gün Türkiye saatiyle: sunucu UTC'de
  ve gece 00:00-03:00 arasında UTC günü bir önceki gündür.
*/
export function yazilar(): Yazi[] {
  if (!onbellek) {
    const bugun = new Date().toLocaleDateString("sv-SE", { timeZone: "Europe/Istanbul" });
    const dosyalar = fs.existsSync(KLASOR) ? fs.readdirSync(KLASOR).filter((d) => d.endsWith(".md")) : [];
    onbellek = dosyalar
      .map(oku)
      .filter((y) => y.yayin <= bugun)
      .sort((a, b) => b.yayin.localeCompare(a.yayin) || a.baslik.localeCompare(b.baslik, "tr"));
  }
  return onbellek;
}

export const yaziBul = (slug: string) => yazilar().find((y) => y.slug === slug);

/** Bir hizmete bağlanan yazılar: hizmet sayfasının "İlgili yazılar" bölümü. */
export const hizmetinYazilari = (hizmetSlug: string) => yazilar().filter((y) => y.hizmetler.includes(hizmetSlug));

export const yaziYolu = (slug: string) => `/blog/${slug}`;

/** "30 Ekim 2026" */
export const tarihYazisi = (gun: string) =>
  new Date(`${gun}T12:00:00Z`).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Istanbul" });
