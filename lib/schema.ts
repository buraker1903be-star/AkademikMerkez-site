import { SITE } from "./site";
import { allTools, type Faq, type Service } from "./services";
import { hizmetYolu, kategori, kategoridekiler, kategoriler } from "./hizmetler";
import { yol, type Dil } from "./i18n";
import type { Yazi } from "./blog";
import { HIZMET_SLUG_EN } from "./services-en";

const ACIKLAMA = {
  tr: "AkademikMerkez; tez, makale ve doçentlik süreçlerinde yöntem, istatistiksel analiz, SPSS ile nicel analiz, MAXQDA ile nitel analiz, ANSYS ve Python analiz danışmanlığı ile literatür, dil editörlüğü ve akademik çeviri hizmetleri sunan bağımsız bir akademik danışmanlık merkezidir.",
  en: "AkademikMerkez is an independent academic consultancy offering methodology, statistical analysis, quantitative analysis with SPSS, qualitative analysis with MAXQDA, ANSYS and Python analysis consulting, as well as literature review, academic editing and translation for theses, articles and associate professorship applications.",
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
        alternateName: SITE.alternateName,
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
        alternateName: SITE.alternateName,
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
    name: dil === "en" ? "AkademikMerkez services" : "AkademikMerkez hizmetleri",
    numberOfItems: list.length,
    itemListElement: list.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE.url}${hizmetYolu(dil, s.slug)}`,
      name: s.title,
    })),
  };
}

const blogId = (dil: Dil) => `${SITE.url}${dil === "en" ? "/en/blog" : "/blog"}#blog`;
const yaziUrl = (dil: Dil, slug: string) => `${SITE.url}${dil === "en" ? "/en/blog" : "/blog"}/${slug}`;
const DIL_KODU: Record<Dil, string> = { tr: "tr-TR", en: "en" };

function yazarSchema(y: Yazi) {
  if (y.yazar.tur === "kurum") {
    return { "@type": "Organization", name: y.yazar.ad, url: `${SITE.url}${yol(y.dil, "/blog")}`, parentOrganization: { "@id": ORG_ID } };
  }
  return {
    "@type": "Person",
    name: y.yazar.ad,
    ...(y.yazar.unvan ? { jobTitle: y.yazar.unvan } : {}),
    ...(y.yazar.profiller?.length ? { sameAs: y.yazar.profiller } : {}),
    worksFor: { "@id": ORG_ID },
  };
}

/*
  Yazı sayfasının yapısal verisi. Tarihler ve yazar, hem Google'ın
  makale sonuçları hem de yapay zeka arama motorları için "bu bilgi ne
  kadar güncel ve kimden" sorusunun cevabı; ekranda görünenle aynı
  olmalı, o yüzden ikisi de aynı Yazi nesnesinden okunur. Çeviri,
  aslına workTranslation/translationOfWork ile bağlanır.
*/
export function blogPostingSchema(y: Yazi) {
  const url = yaziUrl(y.dil, y.slug);
  const karsi: Dil = y.dil === "en" ? "tr" : "en";
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#yazi`,
    headline: y.baslik,
    description: y.aciklama,
    abstract: y.ozet,
    url,
    mainEntityOfPage: url,
    datePublished: y.yayin,
    dateModified: y.guncelleme,
    inLanguage: DIL_KODU[y.dil],
    timeRequired: `PT${y.okumaDakika}M`,
    image: `${SITE.url}/opengraph-image.png`,
    author: yazarSchema(y),
    publisher: { "@id": ORG_ID },
    isPartOf: { "@id": blogId(y.dil) },
    ...(y.anahtarKelimeler.length ? { keywords: y.anahtarKelimeler.join(", ") } : {}),
    ...(y.hizmetler.length
      ? {
          about: y.hizmetler.map((h) => ({
            "@type": "Service",
            url: `${SITE.url}${hizmetYolu(y.dil, y.dil === "en" ? HIZMET_SLUG_EN[h] : h)}`,
          })),
        }
      : {}),
    ...(y.karsilik
      ? { [y.dil === "en" ? "translationOfWork" : "workTranslation"]: { "@id": `${yaziUrl(karsi, y.karsilik)}#yazi` } }
      : {}),
  };
}

export function blogSchema(liste: Yazi[], dil: Dil = "tr") {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": blogId(dil),
    url: `${SITE.url}${yol(dil, "/blog")}`,
    name: "AkademikMerkez Blog",
    inLanguage: DIL_KODU[dil],
    publisher: { "@id": ORG_ID },
    blogPost: liste.map((y) => ({
      "@type": "BlogPosting",
      "@id": `${yaziUrl(dil, y.slug)}#yazi`,
      headline: y.baslik,
      url: yaziUrl(dil, y.slug),
      datePublished: y.yayin,
      dateModified: y.guncelleme,
    })),
  };
}
