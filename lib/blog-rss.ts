import { SITE } from "./site";
import { blogYolu, yaziYolu, yazilar } from "./blog";
import type { Dil } from "./i18n";

const kacis = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const rfc822 = (gun: string) => new Date(`${gun}T09:00:00+03:00`).toUTCString();

const KANAL = {
  tr: { aciklama: "Tez, makale ve doçentlik süreçlerinde yöntem ve analiz üzerine uygulamalı rehberler.", dil: "tr-TR" },
  en: { aciklama: "Practical guides on research methods and analysis for theses, articles and academic careers.", dil: "en" },
};

/*
  RSS: okuyucular ve içerik toplayıcılar yeni yazıyı buradan öğrenir.
  Her dilin kendi beslemesi var (/blog/rss.xml, /en/blog/rss.xml).
  Gövde olarak "Kısaca" özeti gider, yazının tamamı değil: tam metni
  başka sitede yeniden yayımlayan toplayıcı, asıl sayfayla yarışan bir
  kopya üretir.
*/
export function rssYaniti(dil: Dil) {
  const liste = yazilar(dil);
  const k = KANAL[dil];
  const ogeler = liste
    .map((y) => {
      const url = `${SITE.url}${yaziYolu(dil, y.slug)}`;
      return `    <item>
      <title>${kacis(y.baslik)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${rfc822(y.yayin)}</pubDate>
      <description>${kacis(y.ozet)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>AkademikMerkez Blog</title>
    <link>${SITE.url}${blogYolu(dil)}</link>
    <atom:link href="${SITE.url}${blogYolu(dil)}/rss.xml" rel="self" type="application/rss+xml" />
    <description>${k.aciklama}</description>
    <language>${k.dil}</language>
${liste[0] ? `    <lastBuildDate>${rfc822(liste.map((y) => y.guncelleme).sort().at(-1)!)}</lastBuildDate>\n` : ""}${ogeler}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
