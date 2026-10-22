import { SITE } from "./site";
import { allTools, type Faq, type Service } from "./services";
import { hizmetYolu, kategori, kategoridekiler, kategoriler } from "./hizmetler";
import { yol, type Dil } from "./i18n";

const ACIKLAMA = {
  tr: "Akademik Merkez; tez, makale ve doçentlik süreçlerinde yöntem, istatistiksel analiz, SPSS ile nicel analiz, MAXQDA ile nitel analiz, ANSYS ve Python analiz danışmanlığı ile literatür, dil editörlüğü ve akademik çeviri hizmetleri sunan bağımsız bir akademik danışmanlık merkezidir.",
  en: "Akademik Merkez is an independent academic consultancy offering methodology, statistical analysis, quantitative analysis with SPSS, qualitative analysis with MAXQDA, ANSYS and Python analysis consulting, as well as literature review, academic editing and translation for theses, articles and associate professorship applications.",
};

const ORG_ID = `${SITE.url}/#organization`;

const provider = {
  "@type": "ProfessionalService",
  "@id": ORG_ID,
  name: SITE.name,
  url: SITE.url,
};

export function siteSchema(dil: Dil = "tr") {
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
        description: ACIKLAMA[dil],
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
        knowsAbout: [...kategoriler(dil).map((c) => c.title), ...allTools],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: dil === "en" ? "Academic consulting and analysis services" : "Akademik danışmanlık ve analiz hizmetleri",
          itemListElement: kategoriler(dil).map((c) => ({
            "@type": "OfferCatalog",
            name: c.title,
            itemListElement: kategoridekiler(dil, c.key).map((s) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: s.title,
                url: `${SITE.url}${hizmetYolu(dil, s.slug)}`,
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
        inLanguage: ["tr-TR", "en"],
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

export function serviceSchema(s: Service, dil: Dil = "tr") {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    serviceType: s.title,
    description: s.description,
    url: `${SITE.url}${hizmetYolu(dil, s.slug)}`,
    category: kategori(dil, s.category).title,
    provider,
    areaServed: { "@type": "Country", name: "Türkiye" },
    audience: { "@type": "Audience", audienceType: s.audience },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${SITE.url}${yol(dil, "/teklif-al")}`,
      servicePhone: SITE.phone,
    },
  };
}

export function serviceListSchema(list: Service[], dil: Dil = "tr") {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: dil === "en" ? "Akademik Merkez services" : "Akademik Merkez hizmetleri",
    numberOfItems: list.length,
    itemListElement: list.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE.url}${hizmetYolu(dil, s.slug)}`,
      name: s.title,
    })),
  };
}
