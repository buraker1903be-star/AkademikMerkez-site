import { SITE } from "./site";
import { allTools, categories, getCategory, servicesByCategory, type Faq, type Service } from "./services";

const ORG_ID = `${SITE.url}/#organization`;

const provider = {
  "@type": "ProfessionalService",
  "@id": ORG_ID,
  name: SITE.name,
  url: SITE.url,
};

export function siteSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": ORG_ID,
        name: SITE.name,
        alternateName: SITE.publicEntityName,
        ...(SITE.showLegalName ? { legalName: SITE.legalName } : {}),
        url: SITE.url,
        logo: `${SITE.url}/icon-512.png`,
        image: `${SITE.url}/opengraph-image.png`,
        description:
          "Akademik Merkez; tez, makale ve doçentlik süreçlerinde yöntem, istatistiksel analiz, SPSS ile nicel analiz, MAXQDA ile nitel analiz, ANSYS ve Python analiz danışmanlığı ile literatür, dil editörlüğü ve akademik çeviri hizmetleri sunan bağımsız bir akademik danışmanlık merkezidir.",
        email: SITE.email,
        telephone: SITE.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE.address.street,
          postalCode: SITE.address.postalCode,
          addressLocality: SITE.address.district,
          addressRegion: SITE.address.city,
          addressCountry: SITE.address.country,
        },
        areaServed: { "@type": "Country", name: "Türkiye" },
        availableLanguage: ["tr", "en"],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: SITE.phone,
          email: SITE.email,
          contactType: "customer service",
          areaServed: "TR",
          availableLanguage: ["Turkish", "English"],
        },
        knowsAbout: [...categories.map((c) => c.title), ...allTools],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Akademik danışmanlık ve analiz hizmetleri",
          itemListElement: categories.map((c) => ({
            "@type": "OfferCatalog",
            name: c.title,
            itemListElement: servicesByCategory(c.key).map((s) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: s.title,
                url: `${SITE.url}/hizmetlerimiz/${s.slug}`,
              },
            })),
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        inLanguage: "tr-TR",
        publisher: { "@id": ORG_ID },
      },
    ],
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.href === "/" ? "" : item.href}`,
    })),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceSchema(s: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    serviceType: s.title,
    description: s.description,
    url: `${SITE.url}/hizmetlerimiz/${s.slug}`,
    category: getCategory(s.category).title,
    provider,
    areaServed: { "@type": "Country", name: "Türkiye" },
    audience: { "@type": "Audience", audienceType: s.audience },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${SITE.url}/teklif-al`,
      servicePhone: SITE.phone,
    },
  };
}

export function serviceListSchema(list: Service[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Akademik Merkez hizmetleri",
    numberOfItems: list.length,
    itemListElement: list.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE.url}/hizmetlerimiz/${s.slug}`,
      name: s.title,
    })),
  };
}
