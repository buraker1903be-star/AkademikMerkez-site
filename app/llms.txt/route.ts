import { SITE } from "@/lib/site";
import { categories, services } from "@/lib/services";
import { yaziYolu, yazilar } from "@/lib/blog";

export const dynamic = "force-static";

/*
  llms.txt (llmstxt.org önerisi): dil modellerine sitenin ne olduğunu ve
  hangi sayfaların asıl içerik taşıdığını düz metinle söyler. Standart
  henüz bağlayıcı değil ve her yapay zeka aracı okumuyor; maliyeti sıfır
  olduğu için var. Liste hizmet ve yazı verisinden üretilir, elle
  tutulan bir kopya ilk yeni yazıda eskirdi.
*/
export function GET() {
  const satir = (ad: string, yol: string, aciklama: string) => `- [${ad}](${SITE.url}${yol}): ${aciklama}`;

  const hizmetBolumleri = categories
    .map((c) => {
      const liste = services.filter((s) => s.category === c.key).map((s) => satir(s.title, `/hizmetlerimiz/${s.slug}`, s.short));
      return `### ${c.title}\n\n${liste.join("\n")}`;
    })
    .join("\n\n");

  const yaziListesi = yazilar("tr").map((y) => satir(y.baslik, yaziYolu("tr", y.slug), y.ozet));
  const enYazilar = yazilar("en").map((y) => satir(y.baslik, yaziYolu("en", y.slug), y.ozet));

  const metin = `# ${SITE.name}

> Türkiye'de tez, makale ve doçentlik süreçlerinde yöntem, istatistiksel analiz (SPSS, MAXQDA, ANSYS, Python), literatür, dil editörlüğü ve akademik çeviri danışmanlığı veren bağımsız bir akademik danışmanlık merkezi.

AkademikMerkez danışmanlık esaslı çalışır: kişi adına tez, makale, ödev ya da başvuru dosyası hazırlamaz; YÖK, ÜAK veya herhangi bir üniversiteyle kurumsal bağlantısı yoktur. Ayrıntı: ${SITE.url}/etik-ilkelerimiz

## Hizmetler

${hizmetBolumleri}

## Blog

${yaziListesi.length ? yaziListesi.join("\n") : "Henüz yazı yok."}

## Kurumsal

${[
    satir("Hakkımızda", "/hakkimizda", "AkademikMerkez'in çalışma biçimi."),
    satir("Etik İlkelerimiz", "/etik-ilkelerimiz", "Danışmanlık sınırları ve kabul edilmeyen talepler."),
    satir("Sıkça Sorulan Sorular", "/sikca-sorulan-sorular", "Süreç, gizlilik, ücret ve YÖK/ÜAK ilişkisi."),
    satir("İletişim", "/iletisim", `${SITE.email}, ${SITE.phoneDisplay}`),
  ].join("\n")}

## Optional

- [English version](${SITE.url}/en): İngilizce tanıtım sayfaları.
${enYazilar.length ? `\n### Blog (English)\n\n${enYazilar.join("\n")}\n` : ""}`;

  return new Response(metin, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
