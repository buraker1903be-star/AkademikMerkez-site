import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import JsonLd from "@/components/JsonLd";
import Cta from "@/components/Cta";
import Icon, { CATEGORY_ICON } from "@/components/Icon";
import { categories, services, servicesByCategory } from "@/lib/services";
import { serviceListSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description:
    "Tez ve makale yöntem danışmanlığı, istatistiksel analiz, SPSS ile nicel analiz, MAXQDA ile nitel analiz, ANSYS ve Python analiz danışmanlığı, literatür tarama, anket, doçentlik dosyası, dil editörlüğü, çeviri ve kaynakça.",
  alternates: { canonical: "/hizmetlerimiz" },
  openGraph: {
    title: "Akademik Merkez Hizmetleri",
    description: "Tez, analiz ve dil süreçlerinde akademik danışmanlık hizmetleri.",
    url: "/hizmetlerimiz",
  },
};

export default function ServicesPage() {
  return (
    <main>
      <JsonLd data={serviceListSchema(services)} />
      <PageHero
        crumbs={[{ name: "Hizmetlerimiz", href: "/hizmetlerimiz" }]}
        eyebrow="Hizmetlerimiz"
        title={
          <>
            Her aşamada, <span className="serif gold">yanınızdayız.</span>
          </>
        }
        lede="Lisans, yüksek lisans, doktora ve doçentlik süreçlerinde; yöntem, analiz, dil ve danışmanlık desteği. Tüm hizmetlerimiz danışmanlık ve süreç desteği niteliğindedir."
      >
        <div className="hero-meta">
          <span className="chip chip-lg">{services.length} hizmet</span>
          <span className="chip chip-lg">{categories.length} ana alan</span>
          <span className="chip chip-lg">Türkçe ve İngilizce</span>
        </div>
      </PageHero>

      <nav className="subnav" aria-label="Hizmet kategorileri">
        <div className="container subnav-inner">
          {categories.map((c) => (
            <a key={c.key} href={`#${c.key}`}>
              <Icon name={CATEGORY_ICON[c.key]} size={16} /> {c.title}
            </a>
          ))}
        </div>
      </nav>

      {categories.map((c) => (
        <section key={c.key} id={c.key} className="cat-section" aria-labelledby={`${c.key}-baslik`}>
          <div className="container">
            <Reveal className="cat-head">
              <div>
                <span className="cat-icon"><Icon name={CATEGORY_ICON[c.key]} size={24} /></span>
                <h2 id={`${c.key}-baslik`} className="title-lg">{c.title}</h2>
              </div>
              <p className="lede">{c.description}</p>
            </Reveal>
            <div className="svc-grid stretch">
              {servicesByCategory(c.key).map((s, i) => (
                <Reveal key={s.slug} delay={(i % 3) * 70}>
                  <ServiceCard service={s} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <Cta
        title={
          <>
            Aradığınızı bulamadınız mı? <span className="serif gold">Konuşalım.</span>
          </>
        }
        text="İhtiyacınızı bize yazın; kapsamı değerlendirip size uygun danışmanla eşleştirelim."
      />
    </main>
  );
}
