import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Cta from "@/components/Cta";
import Icon, { CATEGORY_ICON } from "@/components/Icon";
import { kategoriler } from "@/lib/hizmetler";
import { alternatifler, yol } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "AkademikMerkez is an academic consultancy offering methodology and consulting support for theses, articles and associate professorship applications.",
  alternates: alternatifler("/hakkimizda", "en"),
};

const VALUES = [
  { icon: "users" as const, t: "Expert consultants", d: "Your request is matched with an experienced consultant who specialises in your field." },
  { icon: "doc" as const, t: "Transparent process plan", d: "Scope, timeline and fee are agreed in writing from the start, with regular communication throughout." },
  { icon: "lock" as const, t: "Confidentiality and data protection", d: "Your data and documents are processed in line with KVKK, Turkey's data protection law, and only to provide the service." },
  { icon: "shield" as const, t: "Academic integrity", d: "A service framework built on the researcher's responsibility and the regulations of YÖK (Council of Higher Education) and ÜAK (Inter-University Board)." },
];

const AUDIENCE = [
  "Undergraduate and master's students",
  "Doctoral candidates and PhD students",
  "Academics preparing an associate professorship application",
  "Researchers working on academic articles and publications",
];

export default function AboutPageEn() {
  return (
    <main>
      <PageHero
        dil="en"
        crumbs={[{ name: "About Us", href: yol("en", "/hakkimizda") }]}
        eyebrow="About us"
        title={
          <>
            A trusted centre that <span className="serif gold">simplifies academic work.</span>
          </>
        }
        lede="We are a trusted consultancy that cuts through the complexity of academic processes."
      />

      <section className="section-sm">
        <div className="container split">
          <Reveal className="split-media">
            <Image src="/images/literatur-kaynaklari.webp" alt="Academic sources on a study desk" fill sizes="(max-width: 760px) 100vw, 50vw" />
          </Reveal>
          <Reveal className="split-copy prose" delay={100}>
            <h2>Who we are</h2>
            <p>
              AkademikMerkez is an academic consultancy for undergraduate, master&apos;s and doctoral students
              and for academics preparing associate professorship applications. Our aim is to help researchers
              overcome the methodological, analytical, language and process challenges they face, correctly and
              transparently, together with our expert consultants.
            </p>
            <h2>How we work</h2>
            <p>
              All of our services are <strong>consulting and process support</strong>. From research design to
              analysis methods and from language editing to presentation preparation, we provide knowledge,
              methodology and guidance so that you can carry out your own work correctly and with confidence.
              This approach puts academic integrity, the researcher&apos;s intellectual effort and your
              institution&apos;s current writing and application rules at the centre; for details, see our{" "}
              <Link href={yol("en", "/etik-ilkelerimiz")}>Ethical Principles</Link>.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Why AkademikMerkez</p>
            <h2 className="headline">
              Trust lies <span className="serif">in the details.</span>
            </h2>
          </Reveal>
          <div className="value-grid stretch">
            {VALUES.map((v, i) => (
              <Reveal key={v.t} delay={i * 80}>
                <div className="value">
                  <Icon name={v.icon} size={28} />
                  <h3>{v.t}</h3>
                  <p>{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <Reveal className="split-copy">
            <p className="eyebrow">Who we work with</p>
            <h2 className="headline">
              From undergraduate to associate professor, <span className="serif gold">at every stage.</span>
            </h2>
            <ul className="checklist">
              {AUDIENCE.map((a) => (
                <li key={a}>
                  <span className="check-dot"><Icon name="check" size={14} strokeWidth={2.4} /></span>
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="split-copy" delay={100}>
            <p className="eyebrow">Our service areas</p>
            <ul className="cat-list" style={{ marginTop: 18 }}>
              {kategoriler("en").map((c) => (
                <li key={c.key}>
                  <Link href={`${yol("en", "/hizmetlerimiz")}#${c.key}`}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
                      <Icon name={CATEGORY_ICON[c.key]} size={18} /> {c.title}
                    </span>
                    <Icon name="arrowRight" size={16} />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <Cta dil="en" />
    </main>
  );
}
