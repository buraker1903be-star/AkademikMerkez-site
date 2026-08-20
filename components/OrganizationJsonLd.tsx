export default function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Akademik Merkez",
    url: "https://akademikmerkez.com",
    description:
      "Tez, makale ve doçentlik süreçlerinde yöntem, istatistiksel analiz, literatür tarama, dil editörlüğü ve akademik danışmanlık hizmetleri.",
    areaServed: "TR",
    serviceType: [
      "Akademik danışmanlık",
      "İstatistiksel analiz danışmanlığı",
      "Literatür tarama danışmanlığı",
      "Akademik dil ve imla editörlüğü",
      "Akademik çeviri",
      "Doçentlik başvuru dosyası danışmanlığı",
    ],
    address: { "@type": "PostalAddress", addressCountry: "TR" },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
