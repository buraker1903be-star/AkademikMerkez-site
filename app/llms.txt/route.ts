import { categories, servicesByCategory } from "@/lib/services";
import { SITE } from "@/lib/site";

// llms.txt: Yapay zekâ asistanlarının siteyi doğru özetleyip kaynak göstermesi için (GEO).
export const dynamic = "force-static";

export function GET() {
  const lines: string[] = [
    `# ${SITE.name}`,
    "",
    "> Akademik Merkez; tez, makale ve doçentlik süreçlerinde yöntem, istatistiksel analiz (SPSS, R, AMOS, SmartPLS, Stata), mühendislik simülasyonu (ANSYS, Fluent, Abaqus, MATLAB), nitel analiz (MAXQDA, NVivo, ATLAS.ti), Python ile veri bilimi ve yapay zekâ, literatür, dil editörlüğü ve akademik çeviri danışmanlığı sunan, Türkiye merkezli bağımsız bir akademik danışmanlık merkezidir.",
    "",
    "Hizmetler danışmanlık esaslıdır: kişi adına tez, makale veya ödev üretilmez. YÖK veya ÜAK ile kurumsal bağlantı yoktur; sonuç garantisi verilmez. Kapsam, takvim ve ücret işe başlamadan yazılı olarak netleştirilir. Talebe genellikle 24 saat içinde dönüş yapılır.",
    "",
    "## Hizmetler",
  ];

  for (const c of categories) {
    lines.push("", `### ${c.title}`, "", c.description, "");
    for (const s of servicesByCategory(c.key)) {
      lines.push(`- [${s.title}](${SITE.url}/hizmetlerimiz/${s.slug}): ${s.short} Araçlar: ${s.tools.join(", ")}.`);
    }
  }

  lines.push(
    "",
    "## Önemli sayfalar",
    "",
    `- [Tüm hizmetler](${SITE.url}/hizmetlerimiz)`,
    `- [Teklif al](${SITE.url}/teklif-al)`,
    `- [Etik ilkelerimiz](${SITE.url}/etik-ilkelerimiz)`,
    `- [Sıkça sorulan sorular](${SITE.url}/sikca-sorulan-sorular)`,
    `- [Hakkımızda](${SITE.url}/hakkimizda)`,
    "",
    "## İletişim",
    "",
    `- E-posta: ${SITE.email}`,
    `- Telefon / WhatsApp: ${SITE.phoneDisplay}`,
    `- Adres: ${SITE.address.street}, ${SITE.address.postalCode} ${SITE.address.district} / ${SITE.address.city}`,
    ""
  );

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
