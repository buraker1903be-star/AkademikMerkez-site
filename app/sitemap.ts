import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { enYolu } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { yaziYolu, yazilar } from "@/lib/blog";

const LAST_MODIFIED = new Date("2026-10-22");

/*
  Her sayfa iki dilde ayrı satır ve her satır öbür dildeki karşılığını
  hreflang olarak taşır (22.10.2026, İngilizce sürüm). Arama motoru iki
  sayfayı kopya değil, birbirinin çevirisi sayar.
*/
export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/hizmetlerimiz", priority: 0.9, changeFrequency: "weekly" },
    { path: "/teklif-al", priority: 0.8, changeFrequency: "weekly" },
    { path: "/hakkimizda", priority: 0.6, changeFrequency: "weekly" },
    { path: "/sikca-sorulan-sorular", priority: 0.6, changeFrequency: "weekly" },
    { path: "/etik-ilkelerimiz", priority: 0.5, changeFrequency: "weekly" },
    { path: "/iletisim", priority: 0.5, changeFrequency: "weekly" },
    { path: "/kvkk-aydinlatma-metni", priority: 0.2, changeFrequency: "weekly" },
    ...services.map((s) => ({ path: `/hizmetlerimiz/${s.slug}`, priority: 0.8, changeFrequency: "monthly" as const })),
  ];

  const adres = (yol: string) => `${SITE.url}${yol === "/" ? "" : yol}`;

  const ikiDilli = pages.flatMap((p) => {
    const languages = { "tr-TR": adres(p.path), en: adres(enYolu(p.path)) };
    const ortak = { lastModified: LAST_MODIFIED, changeFrequency: p.changeFrequency, alternates: { languages } };
    return [
      { url: adres(p.path), priority: p.priority, ...ortak },
      /* İngilizce bir kademe aşağıda: sitenin asıl kitlesi Türkiye. */
      { url: adres(enYolu(p.path)), priority: Math.max(0.1, Math.round((p.priority - 0.1) * 10) / 10), ...ortak },
    ];
  });

  /*
    Blog: tarih sabit LAST_MODIFIED değil, yazının kendi güncelleme günü;
    arama motoru yeniden taramaya bu tarihe bakarak karar veriyor ve her
    yazıya aynı tarihi yazmak sinyali anlamsızlaştırır. Çevirisi olan
    yazı karşılığıyla hreflang taşır; olmayan Türkçe yazı yalnız kalır
    (İngilizce karşılık yazılmaz, bkz. yalnizTurkce).
  */
  const sonGun = (liste: { guncelleme: string }[]) => new Date(liste.map((y) => y.guncelleme).sort().at(-1)!);
  const blog: MetadataRoute.Sitemap = [];
  const tr = yazilar("tr");
  const en = yazilar("en");
  if (tr.length || en.length) {
    const languages = { "tr-TR": adres("/blog"), en: adres("/en/blog") };
    if (tr.length) blog.push({ url: adres("/blog"), lastModified: sonGun(tr), changeFrequency: "weekly", priority: 0.7, alternates: { languages } });
    if (en.length) blog.push({ url: adres("/en/blog"), lastModified: sonGun(en), changeFrequency: "weekly", priority: 0.6, alternates: { languages } });
  }
  for (const y of [...tr, ...en]) {
    const karsi = y.karsilik ? adres(yaziYolu(y.dil === "tr" ? "en" : "tr", y.karsilik)) : undefined;
    const kendi = adres(yaziYolu(y.dil, y.slug));
    blog.push({
      url: kendi,
      lastModified: new Date(y.guncelleme),
      changeFrequency: "monthly",
      priority: y.dil === "tr" ? 0.7 : 0.6,
      ...(karsi ? { alternates: { languages: y.dil === "tr" ? { "tr-TR": kendi, en: karsi } : { "tr-TR": karsi, en: kendi } } } : {}),
    });
  }

  return [...ikiDilli, ...blog];
}
