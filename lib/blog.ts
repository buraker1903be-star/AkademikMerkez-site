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
import { HIZMET_SLUG_EN } from "./services-en";
import { YAZI_SLUG_EN } from "./blog-eslesme";
import type { Dil } from "./i18n";

/*
  Türkçe yazılar content/blog/, İngilizceleri content/blog/en/ altında
  (28.10'daki iki dilli site düzeniyle aynı: Türkçe kökte, İngilizce /en).
  İngilizce yazı her zaman bir Türkçe yazının çevirisidir; eşleme
  lib/blog-eslesme.ts'te.
*/
const KLASOR: Record<Dil, string> = {
  tr: path.join(process.cwd(), "content", "blog"),
  en: path.join(process.cwd(), "content", "blog", "en"),
};

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

export const YAZARLAR: Record<string, Record<Dil, Yazar>> = {
  editorluk: {
    tr: {
      ad: "AkademikMerkez Editörlüğü",
      tur: "kurum",
      hakkinda: "Yazılar, AkademikMerkez'in yöntem ve analiz danışmanlarınca hazırlanır ve yayımlanmadan önce editörlükçe gözden geçirilir.",
    },
    en: {
      ad: "AkademikMerkez Editorial Team",
      tur: "kurum",
      hakkinda: "Articles are prepared by AkademikMerkez's methodology and analysis consultants and reviewed by the editorial team before publication.",
    },
  },
};

export type Baslik = { id: string; metin: string };

export type Yazi = {
  dil: Dil;
  slug: string;
  /** Öbür dildeki karşılığın slug'ı; çevirisi yoksa (ya da henüz yayında değilse) yok. */
  karsilik?: string;
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
  /**
   * İlgili hizmetlerin TÜRKÇE slug'ları (iki dilde de); yazıdan hizmete,
   * hizmetten yazıya bağlantı. Adrese çevirmek için hizmetYazisiYolu().
   */
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

const dosyalar = (dil: Dil) =>
  fs.existsSync(KLASOR[dil]) ? fs.readdirSync(KLASOR[dil]).filter((d) => d.endsWith(".md")) : [];

function oku(dil: Dil, dosya: string): Yazi {
  const slug = dosya.replace(/\.md$/, "");
  const ad = `content/blog/${dil === "en" ? "en/" : ""}${dosya}`;
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) {
    throw new Error(`${ad}: dosya adı adres olacak; yalnızca küçük harf, rakam ve tire.`);
  }
  const { data, content } = matter(fs.readFileSync(path.join(KLASOR[dil], dosya), "utf8"));

  const aciklama = metin(data.aciklama, "aciklama", ad);
  // Google açıklamayı 150-160 karakterde kesiyor; kesilen cümle tıklanmıyor.
  if (aciklama.length > 160) throw new Error(`${ad}: "aciklama" ${aciklama.length} karakter, en çok 160.`);

  const yazarAnahtari = typeof data.yazar === "string" ? data.yazar : "editorluk";
  const yazar = YAZARLAR[yazarAnahtari]?.[dil];
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
    dil,
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

/*
  Eşleme denetimi: tablodaki her satırın iki dosyası da olmalı, her
  İngilizce dosya tabloda olmalı. Yoksa derleme düşer — dil değiştirici
  olmayan bir sayfaya götürmesin ya da çeviri "karşılığı yok" diye
  sessizce yalnız kalmasın.
*/
function eslesmeyiDenetle() {
  const tr = new Set(dosyalar("tr").map((d) => d.replace(/\.md$/, "")));
  const en = new Set(dosyalar("en").map((d) => d.replace(/\.md$/, "")));
  const sorunlar: string[] = [];
  for (const [t, e] of Object.entries(YAZI_SLUG_EN)) {
    if (!tr.has(t)) sorunlar.push(`content/blog/${t}.md yok`);
    if (!en.has(e)) sorunlar.push(`content/blog/en/${e}.md yok`);
  }
  const eslenen = new Set(Object.values(YAZI_SLUG_EN));
  for (const e of en) if (!eslenen.has(e)) sorunlar.push(`content/blog/en/${e}.md lib/blog-eslesme.ts'te yok`);
  if (sorunlar.length) throw new Error(`Blog dil eşlemesi bozuk: ${sorunlar.join("; ")}.`);
}

let onbellek: Record<Dil, Yazi[]> | null = null;

/*
  Yayımlanmış yazılar, en yeniden eskiye. Yayın tarihi ileride olan yazı
  atlanır; site statik olduğu için o tarihten sonraki İLK DERLEMEDE
  yayına girer (kendiliğinden değil). Gün Türkiye saatiyle: sunucu UTC'de
  ve gece 00:00-03:00 arasında UTC günü bir önceki gündür.

  Karşılık yalnızca İKİ yazı da yayındaysa yazılır: biri ileri tarihliyse
  dil değiştirici ve hreflang henüz olmayan sayfayı göstermesin.
*/
export function yazilar(dil: Dil = "tr"): Yazi[] {
  if (!onbellek) {
    eslesmeyiDenetle();
    const bugun = new Date().toLocaleDateString("sv-SE", { timeZone: "Europe/Istanbul" });
    const yayinda = (d: Dil) =>
      dosyalar(d)
        .map((f) => oku(d, f))
        .filter((y) => y.yayin <= bugun)
        .sort((a, b) => b.yayin.localeCompare(a.yayin) || a.baslik.localeCompare(b.baslik, d));
    const tr = yayinda("tr");
    const en = yayinda("en");
    const trSlugu = Object.fromEntries(Object.entries(YAZI_SLUG_EN).map(([t, e]) => [e, t]));
    for (const y of tr) {
      const e = YAZI_SLUG_EN[y.slug];
      if (e && en.some((x) => x.slug === e)) y.karsilik = e;
    }
    for (const y of en) {
      const t = trSlugu[y.slug];
      if (tr.some((x) => x.slug === t)) y.karsilik = t;
    }
    onbellek = { tr, en };
  }
  return onbellek[dil];
}

export const yaziBul = (dil: Dil, slug: string) => yazilar(dil).find((y) => y.slug === slug);

/** Bir hizmete (Türkçe slug) bağlanan yazılar: hizmet sayfasının "İlgili yazılar" bölümü. */
export const hizmetinYazilari = (dil: Dil, trHizmetSlug: string) =>
  yazilar(dil).filter((y) => y.hizmetler.includes(trHizmetSlug));

export const blogYolu = (dil: Dil) => (dil === "en" ? "/en/blog" : "/blog");
export const yaziYolu = (dil: Dil, slug: string) => `${blogYolu(dil)}/${slug}`;

/** Yazının bağlandığı hizmetin o dildeki slug'ı. */
export const hizmetSlugu = (dil: Dil, trSlug: string) => (dil === "en" ? HIZMET_SLUG_EN[trSlug] : trSlug);

/** "30 Ekim 2026" / "30 October 2026" */
export const tarihYazisi = (gun: string, dil: Dil = "tr") =>
  new Date(`${gun}T12:00:00Z`).toLocaleDateString(dil === "en" ? "en-GB" : "tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Istanbul",
  });
