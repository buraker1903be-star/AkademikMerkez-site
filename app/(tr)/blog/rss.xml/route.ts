import { SITE } from "@/lib/site";
import { yaziYolu, yazilar } from "@/lib/blog";

// Derlemede bir kez üretilir; site statik kalır.
export const dynamic = "force-static";

const kacis = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const rfc822 = (gun: string) => new Date(`${gun}T09:00:00+03:00`).toUTCString();

/*
  RSS: okuyucular ve içerik toplayıcılar yeni yazıyı buradan öğrenir.
  Gövde olarak "Kısaca" özeti gider, yazının tamamı değil: tam metni
  başka sitede yeniden yayımlayan toplayıcı, asıl sayfayla yarışan bir
  kopya üretir.
*/
export function GET() {
  const liste = yazilar();
  const ogeler = liste
    .map((y) => {
      const url = `${SITE.url}${yaziYolu(y.slug)}`;
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
    <title>Akademik Merkez Blog</title>
    <link>${SITE.url}/blog</link>
    <atom:link href="${SITE.url}/blog/rss.xml" rel="self" type="application/rss+xml" />
    <description>Tez, makale ve doçentlik süreçlerinde yöntem ve analiz üzerine uygulamalı rehberler.</description>
    <language>tr-TR</language>
${liste[0] ? `    <lastBuildDate>${rfc822(liste[0].guncelleme)}</lastBuildDate>\n` : ""}${ogeler}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
