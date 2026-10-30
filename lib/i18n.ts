// İki dilli site (22.10.2026): Türkçe kökte, İngilizce /en altında.
//
// Adresler İNGİLİZCE ("/en/about", "/en/services/spss-analysis"):
// yabancı ziyaretçi ve arama motoru için okunur adres, Türkçe adresin
// /en önekli kopyasından daha iyi sıralanır. Bu yüzden her sayfanın
// karşılığı aşağıdaki tabloda; dil değiştirici ve hreflang aynı
// tablodan okur — iki ayrı yerde tutulsa biri eksik kalırdı.
import { HIZMET_SLUG_EN } from "./services-en";
import { YAZI_SLUG_EN } from "./blog-eslesme";

export type Dil = "tr" | "en";

const SAYFALAR: [tr: string, en: string][] = [
  ["/", "/en"],
  ["/hizmetlerimiz", "/en/services"],
  ["/hakkimizda", "/en/about"],
  ["/etik-ilkelerimiz", "/en/ethics"],
  ["/sikca-sorulan-sorular", "/en/faq"],
  ["/iletisim", "/en/contact"],
  ["/kvkk-aydinlatma-metni", "/en/privacy-notice"],
  ["/teklif-al", "/en/get-a-quote"],
  ["/blog", "/en/blog"],
];

const TR_HIZMET = "/hizmetlerimiz/";
const EN_HIZMET = "/en/services/";
const TR_BLOG = "/blog/";
const EN_BLOG = "/en/blog/";

/** Türkçe yolun İngilizce karşılığı (yoksa İngilizce anasayfa). */
export function enYolu(trYol: string): string {
  const sayfa = SAYFALAR.find(([tr]) => tr === trYol);
  if (sayfa) return sayfa[1];
  if (trYol.startsWith(TR_HIZMET)) {
    const en = HIZMET_SLUG_EN[trYol.slice(TR_HIZMET.length)];
    if (en) return EN_HIZMET + en;
  }
  /*
    Çevirisi olmayan yazıdan dil değiştirici İngilizce blog listesine
    gider. Bu yol hreflang'e YAZILMAZ: o yazılar yalnizTurkce() kullanır.
  */
  if (trYol.startsWith(TR_BLOG)) {
    const en = YAZI_SLUG_EN[trYol.slice(TR_BLOG.length)];
    return en ? EN_BLOG + en : "/en/blog";
  }
  return "/en";
}

/** İngilizce yolun Türkçe karşılığı (yoksa Türkçe anasayfa). */
export function trYolu(enYol: string): string {
  const sayfa = SAYFALAR.find(([, en]) => en === enYol);
  if (sayfa) return sayfa[0];
  if (enYol.startsWith(EN_HIZMET)) {
    const slug = enYol.slice(EN_HIZMET.length);
    const tr = Object.entries(HIZMET_SLUG_EN).find(([, en]) => en === slug)?.[0];
    if (tr) return TR_HIZMET + tr;
  }
  if (enYol.startsWith(EN_BLOG)) {
    const slug = enYol.slice(EN_BLOG.length);
    const tr = Object.entries(YAZI_SLUG_EN).find(([, en]) => en === slug)?.[0];
    return tr ? TR_BLOG + tr : "/blog";
  }
  return "/";
}

export const dilBul = (yol: string): Dil => (yol === "/en" || yol.startsWith("/en/") ? "en" : "tr");

/** Bulunulan sayfanın öbür dildeki adresi (dil değiştirici). */
export const karsiYol = (yol: string) => (dilBul(yol) === "en" ? trYolu(yol) : enYolu(yol));

/**
 * Sayfa metadata'sının alternates alanı: kanonik adres ve hreflang.
 * Türkçe sayfa x-default: sitenin asıl kitlesi Türkiye.
 */
export function alternatifler(trYol: string, dil: Dil) {
  const en = enYolu(trYol);
  return {
    canonical: dil === "en" ? en : trYol,
    languages: { "tr-TR": trYol, en, "x-default": trYol },
  };
}

/**
 * Çevirisi olmayan Türkçe yazı: hreflang'e İngilizce karşılık YAZILMAZ.
 * alternatifler() böyle bir yazıyı /en/blog'a bağlardı; bu, arama
 * motoruna "bu yazının çevirisi İngilizce blog listesidir" demek olur.
 */
export function yalnizTurkce(trYol: string) {
  return { canonical: trYol, languages: { "tr-TR": trYol, "x-default": trYol } };
}

/** Ortak bileşenlerin metinleri. Sayfa içerikleri kendi dosyalarında. */
export const METIN = {
  tr: {
    anasayfa: "Anasayfa",
    sayfaKonumu: "Sayfa konumu",
    hizmetler: "Hizmetler",
    hakkimizda: "Hakkımızda",
    etik: "Etik İlkeler",
    etikUzun: "Etik İlkelerimiz",
    sss: "SSS",
    sssUzun: "Sıkça Sorulan Sorular",
    iletisim: "İletişim",
    blog: "Blog",
    kvkk: "KVKK Aydınlatma Metni",
    teklifAl: "Teklif Al",
    dosyaTakip: "Dosya Takip",
    personelGiris: "Personel Giriş",
    personelGirisi: "Personel Girişi",
    tumHizmetler: "Tüm Hizmetler",
    tumHizmetleriKesfet: "Tüm hizmetleri keşfedin",
    hizmetSayisi: (h: number, a: number) => `${h} hizmet · ${a} ana alan`,
    uzmanlikAlanlari: "Uzmanlık alanları",
    onGorusme: "Ön görüşme",
    megaPromo: "İhtiyacınızı paylaşın, kapsamı birlikte netleştirelim.",
    anaMenu: "Ana menü",
    mobilMenu: "Mobil menü",
    menuAc: "Menüyü aç",
    menuKapat: "Menüyü kapat",
    anasayfaEtiket: "Akademik Merkez anasayfa",
    kurumsal: "Kurumsal",
    footerTanitim:
      "Lisans, yüksek lisans, doktora ve doçentlik süreçlerinde yöntem, analiz, dil ve süreç danışmanlığı. Araştırmacının özgün üretimini merkeze alan etik ve şeffaf bir çalışma çerçevesi.",
    footerUyari:
      "Akademik Merkez bağımsız bir danışmanlık hizmetidir; YÖK, ÜAK veya herhangi bir üniversiteyle kurumsal bağlantısı yoktur. Hizmetlerimiz danışmanlık esaslıdır; kişi adına tez, makale, ödev veya başvuru dosyası hazırlanmaz ve hiçbir aşamada e-Devlet, YÖKSİS veya ÜAK sistem şifresi talep edilmez. YÖK ve ÜAK'ın güncel düzenlemeleri esas alınır; kabul veya sonuç garantisi verilmez, nihai uygunluk ve başvuru sorumluluğu araştırmacıya aittir.",
    haklar: "Tüm hakları saklıdır.",
    ctaMetin: "Kapsam, takvim ve ücret işe başlamadan önce netleşir. Talebinize genellikle 24 saat içinde dönüş yapıyoruz.",
    whatsappYazin: "WhatsApp'tan yazın",
    whatsappEtiket: "WhatsApp üzerinden bize yazın",
    whatsappMesaj: "Merhaba, Akademik Merkez hizmetleri hakkında bilgi almak istiyorum.",
    yeni: "Yeni",
    dilDegistir: "English",
    dilDegistirEtiket: "Switch to English",
  },
  en: {
    anasayfa: "Home",
    sayfaKonumu: "Breadcrumb",
    hizmetler: "Services",
    hakkimizda: "About",
    etik: "Ethics",
    etikUzun: "Our Ethical Principles",
    sss: "FAQ",
    sssUzun: "Frequently Asked Questions",
    iletisim: "Contact",
    blog: "Blog",
    kvkk: "Privacy Notice",
    teklifAl: "Get a Quote",
    dosyaTakip: "Track My File",
    personelGiris: "Staff Login",
    personelGirisi: "Staff Login",
    tumHizmetler: "All Services",
    tumHizmetleriKesfet: "Explore all services",
    hizmetSayisi: (h: number, a: number) => `${h} services · ${a} areas`,
    uzmanlikAlanlari: "Areas of expertise",
    onGorusme: "Free consultation",
    megaPromo: "Tell us what you need and we will define the scope together.",
    anaMenu: "Main menu",
    mobilMenu: "Mobile menu",
    menuAc: "Open menu",
    menuKapat: "Close menu",
    anasayfaEtiket: "Akademik Merkez home",
    kurumsal: "Company",
    footerTanitim:
      "Methodology, analysis, language and process consulting for undergraduate, master's, doctoral and associate professorship stages. An ethical, transparent way of working that keeps the researcher's original work at the centre.",
    footerUyari:
      "Akademik Merkez is an independent consultancy with no institutional affiliation to YÖK (Council of Higher Education), ÜAK (Inter-University Board) or any university. Our services are strictly consultative: we do not write theses, articles, assignments or application files on anyone's behalf, and we never ask for e-Devlet, YÖKSİS or ÜAK passwords. Current YÖK and ÜAK regulations apply; no acceptance or outcome is guaranteed, and final eligibility and responsibility for submission rest with the researcher.",
    haklar: "All rights reserved.",
    ctaMetin: "Scope, timeline and fee are agreed before any work begins. We usually reply within 24 hours.",
    whatsappYazin: "Message us on WhatsApp",
    whatsappEtiket: "Message us on WhatsApp",
    whatsappMesaj: "Hello, I would like to learn more about Akademik Merkez's services.",
    yeni: "New",
    dilDegistir: "Türkçe",
    dilDegistirEtiket: "Türkçe sürüme geç",
  },
} as const;

/** Dile göre sayfa yolu: ortak bileşenler sabit Türkçe yol yazmasın. */
export const yol = (dil: Dil, trYol: string) => (dil === "en" ? enYolu(trYol) : trYol);
