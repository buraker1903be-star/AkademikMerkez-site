import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import JsonLd from "@/components/JsonLd";
import Cta from "@/components/Cta";
import Icon, { CATEGORY_ICON } from "@/components/Icon";
import { categories, services, servicesByCategory, toolCount } from "@/lib/services";
import { serviceListSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Hizmetlerimiz: Akademik Danışmanlık ve Analiz Hizmetleri",
  description:
    "SPSS, R, AMOS, SmartPLS, ANSYS, Fluent CFD, MAXQDA, NVivo ve Python analizi; tez yöntem, literatür, meta-analiz, dergi seçimi, doçentlik, editörlük ve çeviri danışmanlığı.",
  alternates: { canonical: "/hizmetlerimiz" },
  openGraph: {
    title: "Akademik Merkez Hizmetleri",
    description: "6 disiplinde 35 akademik danışmanlık ve analiz hizmeti.",
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
            Her analiz. Her aşama. <span className="serif gold">Tek merkez.</span>
          </>
        }
        lede="İstatistik ve nicel analizden mühendislik simülasyonuna, nitel analizden Python ile yapay zekâya; tez, yayın ve dil süreçlerinde uçtan uca danışmanlık. Tüm hizmetlerimiz danışmanlık ve süreç desteği niteliğindedir."
      >
        <div className="hero-meta">
          <span className="chip chip-lg">{services.length} hizmet</span>
          <span className="chip chip-lg">{categories.length} disiplin</span>
          <span className="chip chip-lg">{toolCount}+ yazılım ve araç</span>
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
        text="Listede yer almayan bir yazılım, yöntem veya ihtiyaç için de bize yazın; uygun uzmanla eşleştirelim."
      />
    </main>
  );
}
