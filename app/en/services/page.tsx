import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import JsonLd from "@/components/JsonLd";
import Cta from "@/components/Cta";
import Icon, { CATEGORY_ICON } from "@/components/Icon";
import { hizmetler, kategoridekiler, kategoriler } from "@/lib/hizmetler";
import { serviceListSchema } from "@/lib/schema";
import { alternatifler, yol } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Thesis and article methodology consulting, statistical analysis, quantitative analysis with SPSS, qualitative analysis with MAXQDA, ANSYS and Python analysis consulting, literature review, surveys, associate professorship files, academic editing, translation and references.",
  alternates: alternatifler("/hizmetlerimiz", "en"),
  openGraph: {
    title: "AkademikMerkez Services",
    description: "Academic consulting services across thesis, analysis and language work.",
    url: yol("en", "/hizmetlerimiz"),
  },
};

export default function ServicesPageEn() {
  const services = hizmetler("en");
  const categories = kategoriler("en");
  return (
    <main>
      <JsonLd data={serviceListSchema(services, "en")} />
      <PageHero
        dil="en"
        crumbs={[{ name: "Our Services", href: yol("en", "/hizmetlerimiz") }]}
        eyebrow="Our services"
        title={
          <>
            At every stage, <span className="serif gold">by your side.</span>
          </>
        }
        lede="Methodology, analysis, language and consulting support for undergraduate, master's, doctoral and associate professorship stages. All of our services are consulting and process support."
      >
        <div className="hero-meta">
          <span className="chip chip-lg">{services.length} services</span>
          <span className="chip chip-lg">{categories.length} areas</span>
          <span className="chip chip-lg">Turkish and English</span>
        </div>
      </PageHero>

      <nav className="subnav" aria-label="Service categories">
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
              {kategoridekiler("en", c.key).map((s, i) => (
                <Reveal key={s.slug} delay={(i % 3) * 70}>
                  <ServiceCard service={s} dil="en" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <Cta
        dil="en"
        title={
          <>
            Can&apos;t find what you need? <span className="serif gold">Let&apos;s talk.</span>
          </>
        }
        text="Tell us what you need; we will assess the scope and match you with the right consultant."
      />
    </main>
  );
}
