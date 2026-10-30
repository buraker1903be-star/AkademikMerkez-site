import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import Accordion from "@/components/Accordion";
import JsonLd from "@/components/JsonLd";
import Cta from "@/components/Cta";
import Icon, { CATEGORY_ICON } from "@/components/Icon";
import { MeshVisual, PythonCode, QualVisual, StatsVisual } from "@/components/Visuals";
import { hizmetler, hizmetYolu, kategoridekiler, kategoriler } from "@/lib/hizmetler";
import { faqSchema } from "@/lib/schema";
import { alternatifler, yol } from "@/lib/i18n";

// İngilizce anasayfa: Türkçesi app/(tr)/page.tsx ile aynı yapı, yalnızca metin.
export const metadata: Metadata = {
  title: { absolute: "AkademikMerkez | Thesis, Statistics and Data Analysis Consulting" },
  description:
    "Independent academic consultancy: methodology, statistical analysis, SPSS, MAXQDA, ANSYS and Python consulting, literature review, academic editing and translation for theses, articles and associate professorship applications.",
  alternates: alternatifler("/", "en"),
};

const MARQUEE = [
  "SPSS", "R", "Python", "Jamovi", "JASP", "MAXQDA", "ANSYS Workbench", "ANSYS Mechanical",
  "ANSYS Fluent", "pandas", "SciPy", "Jupyter", "Zotero", "Mendeley", "EndNote",
  "Web of Science", "Scopus", "TR Dizin", "Qualtrics", "Google Forms",
];

const STEPS = [
  { t: "Share your request", d: "Fill in the form or message us on WhatsApp; describe what you need in a few sentences." },
  { t: "Initial consultation", d: "A consultant from your field contacts you and you define the scope together." },
  { t: "A transparent plan", d: "Scope, timeline and fee are shared in writing; there are no surprise costs." },
  { t: "The consulting process", d: "Regular sessions, annotated outputs and file tracking, all in line with the plan." },
];

const HOME_FAQS = [
  {
    q: "What is AkademikMerkez?",
    a: "AkademikMerkez is an independent academic consultancy offering methodology, analysis, literature, language and formatting consulting to undergraduate, master's and doctoral students and to academics, for theses, articles and associate professorship applications.",
  },
  {
    q: "Which analysis services do you offer?",
    a: "We provide methodological consulting in statistical analysis, quantitative analysis with SPSS, qualitative analysis with MAXQDA, engineering analysis with ANSYS and data analysis with Python.",
  },
  {
    q: "How does analysis consulting work?",
    a: "First we review your research question and data and build the analysis plan together. We then carry out the analysis steps with you, explaining the reasoning behind each one. The aim is for you to understand your findings so that you can interpret and defend them.",
  },
  {
    q: "Can you write my thesis or article for me?",
    a: "No. In line with our ethical principles and the regulations, we do not prepare theses, articles, assignments or application files on anyone's behalf. Through methodology, analysis, language and process consulting, we help you complete your own work to a high standard.",
  },
  {
    q: "How can I get a quote?",
    a: "Simply fill in the Get a Quote form or message us on WhatsApp. Your request is usually reviewed within 24 hours, and you receive a transparent quote covering scope, timeline and fee.",
  },
];

export default function EnglishHomePage() {
  const services = hizmetler("en");
  return (
    <main>
      <JsonLd data={faqSchema(HOME_FAQS)} />

      {/* HERO */}
      <section className="hero">
        <div className="hero-aurora" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="intro">
            <Link href={`${yol("en", "/hizmetlerimiz")}#analiz`} className="hero-badge">
              <b>New</b> SPSS, MAXQDA, ANSYS and Python analysis consulting
              <Icon name="arrowRight" size={14} strokeWidth={2} />
            </Link>
          </div>
          <h1 className="display intro" style={{ animationDelay: "80ms" }}>
            Academic excellence,
            <br />
            <span className="serif gold">made personal.</span>
          </h1>
          <p className="lede intro" style={{ animationDelay: "160ms" }}>
            Methodology, analysis, literature, language and formatting consulting for theses, articles and
            associate professorship applications. Your original work stays yours; we make the process
            transparent, instructive and trackable.
          </p>
          <div className="hero-actions intro" style={{ animationDelay: "240ms" }}>
            <Link href={yol("en", "/teklif-al")} className="btn btn-primary btn-lg">
              Book a consultation
            </Link>
            <Link href={yol("en", "/hizmetlerimiz")} className="btn btn-outline btn-lg">
              Explore our services
            </Link>
          </div>
        </div>

        <div className="hero-stage">
          <div className="hero-media">
            <Image
              src="/images/hero-akademik-merkez.webp"
              alt="An academic research desk with books, notes and a laptop"
              fill
              priority
              sizes="(max-width: 1600px) 100vw, 1600px"
            />
          </div>
          <div className="float-card fc-1" aria-hidden="true">
            <span className="fc-icon"><Icon name="cube" /></span>
            <span><strong>ANSYS</strong><small>Structural and flow analysis</small></span>
          </div>
          <div className="float-card fc-2" aria-hidden="true">
            <span className="fc-icon"><Icon name="quote" /></span>
            <span><strong>MAXQDA</strong><small>Qualitative analysis</small></span>
          </div>
          <div className="float-card fc-3" aria-hidden="true">
            <span className="fc-icon"><Icon name="chart" /></span>
            <span><strong>SPSS</strong><small>Quantitative analysis</small></span>
          </div>
        </div>
      </section>

      {/* YAZILIM BANDI */}
      <section className="marquee-section" aria-label="Software and tools we consult on">
        <p className="marquee-label">Some of the software and tools we consult on</p>
        <div className="marquee">
          <div className="marquee-track">
            {[...MARQUEE, ...MARQUEE].map((t, i) => (
              <span key={i} className="marquee-item" aria-hidden={i >= MARQUEE.length || undefined}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TANIM + RAKAMLAR */}
      <section className="section">
        <div className="container">
          <Reveal>
            <p className="statement">
              <strong>AkademikMerkez</strong> is an independent academic consultancy providing{" "}
              <strong>methodology, analysis, language and process consulting</strong> for theses, articles
              and associate professorship applications. Your original work <strong>stays yours</strong>; we
              make it stronger.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="stats">
              <div className="stat">
                <div className="stat-value"><CountUp to={services.length} /></div>
                <div className="stat-label">Services offered</div>
              </div>
              <div className="stat">
                <div className="stat-value"><CountUp to={100} suffix="%" /></div>
                <div className="stat-label">Consulting-based model</div>
              </div>
              <div className="stat">
                <div className="stat-value">24/7</div>
                <div className="stat-label">Submit a request anytime</div>
              </div>
              <div className="stat">
                <div className="stat-value"><CountUp to={24} suffix=" h" /></div>
                <div className="stat-label">Target for our first reply</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ANALİZ STÜDYOSU */}
      <section className="section section-gray" id="analiz">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Analysis services</p>
            <h2 className="headline">
              Don&apos;t just compute your data. <span className="serif">Interpret it correctly.</span>
            </h2>
            <p className="lede">
              From quantitative and qualitative analysis to engineering simulation, every step is explained
              with its rationale, so you can defend your findings with understanding.
            </p>
          </Reveal>

          <div className="bento">
            <Reveal className="tile tile-dark span-4">
              <p className="tile-kicker">Data Analysis with Python</p>
              <h3 className="tile-title">Every line of code, in a language you understand.</h3>
              <p className="tile-text">Annotated Jupyter Notebooks and reproducible analysis with pandas, SciPy and statsmodels.</p>
              <div className="tile-visual"><PythonCode dil="en" /></div>
              <Link href={yol("en", "/hizmetlerimiz/python-analizi")} className="tile-link" aria-label="View Python Data Analysis Consulting">
                <span className="tile-plus"><Icon name="arrowUpRight" size={16} strokeWidth={2} /></span>
              </Link>
            </Reveal>

            <Reveal className="tile span-2" delay={80}>
              <p className="tile-kicker">ANSYS Analysis</p>
              <h3 className="tile-title">Stress, heat and flow.</h3>
              <p className="tile-text">Validated numerical analysis with Workbench, Mechanical and Fluent.</p>
              <div className="tile-visual"><MeshVisual dil="en" /></div>
              <Link href={yol("en", "/hizmetlerimiz/ansys-analizi")} className="tile-link" aria-label="View ANSYS Analysis Consulting">
                <span className="tile-plus"><Icon name="arrowUpRight" size={16} strokeWidth={2} /></span>
              </Link>
            </Reveal>

            <Reveal className="tile tile-cream span-2">
              <p className="tile-kicker">Qualitative Analysis · MAXQDA</p>
              <h3 className="tile-title">From interviews to themes.</h3>
              <p className="tile-text">Code systems, theme maps and inter-coder agreement.</p>
              <div className="tile-visual"><QualVisual dil="en" /></div>
              <Link href={yol("en", "/hizmetlerimiz/maxqda-analizi")} className="tile-link" aria-label="View Qualitative Analysis with MAXQDA Consulting">
                <span className="tile-plus"><Icon name="arrowUpRight" size={16} strokeWidth={2} /></span>
              </Link>
            </Reveal>

            <Reveal className="tile span-2" delay={80}>
              <p className="tile-kicker">Quantitative Analysis · SPSS</p>
              <h3 className="tile-title">The right test, the right interpretation.</h3>
              <p className="tile-text">Assumption checks and APA 7-compliant reporting.</p>
              <div className="tile-visual"><StatsVisual /></div>
              <Link href={yol("en", "/hizmetlerimiz/spss-analizi")} className="tile-link" aria-label="View Quantitative Analysis with SPSS Consulting">
                <span className="tile-plus"><Icon name="arrowUpRight" size={16} strokeWidth={2} /></span>
              </Link>
            </Reveal>

            <Reveal className="tile tile-image span-2" delay={160}>
              <Image src="/images/dijital-calisma.webp" alt="" fill sizes="(max-width: 760px) 100vw, 34vw" />
              <p className="tile-kicker">Statistical Analysis</p>
              <h3 className="tile-title">Methodological support with SPSS, R and Python.</h3>
              <p className="tile-text">Choosing the right test and model, and interpreting results in academic language.</p>
              <Link href={yol("en", "/hizmetlerimiz/istatistiksel-analiz-danismanligi")} className="tile-link" aria-label="View Statistical Analysis Consulting">
                <span className="tile-plus"><Icon name="arrowUpRight" size={16} strokeWidth={2} /></span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* KATEGORİLER */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Our services</p>
            <h2 className="headline">
              At <span className="serif gold">every stage</span> of your academic journey.
            </h2>
            <p className="lede">
              From an undergraduate thesis to an associate professorship application, we offer methodological
              and consulting support throughout.
            </p>
          </Reveal>
          <div className="cat-grid stretch">
            {kategoriler("en").map((c, i) => {
              const list = kategoridekiler("en", c.key);
              return (
                <Reveal key={c.key} delay={i * 80}>
                  <article className="cat-card">
                    <span className="cat-icon"><Icon name={CATEGORY_ICON[c.key]} size={24} /></span>
                    <h3>{c.title}</h3>
                    <p>{c.short}</p>
                    <ul className="cat-list">
                      {list.map((s) => (
                        <li key={s.slug}>
                          <Link href={hizmetYolu("en", s.slug)}>
                            {s.title} <Icon name="arrowRight" size={16} />
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link href={`${yol("en", "/hizmetlerimiz")}#${c.key}`} className="link-arrow">
                      Learn more <Icon name="arrowRight" size={16} />
                    </Link>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* EDİTORYAL */}
      <section className="section section-gray">
        <div className="container split">
          <Reveal className="split-media">
            <Image src="/images/literatur-kaynaklari.webp" alt="Academic literature sources and books" fill sizes="(max-width: 760px) 100vw, 50vw" />
          </Reveal>
          <Reveal className="split-copy" delay={100}>
            <p className="eyebrow">In-depth work</p>
            <h2 className="headline">
              Beyond finding sources: <span className="serif">positioning them well.</span>
            </h2>
            <p className="lede">
              We treat literature strategy, choice of method and citation style as a single research system
              in which every part speaks to the others.
            </p>
            <ul className="checklist">
              <li><span className="check-dot"><Icon name="check" size={14} strokeWidth={2.4} /></span>Systematic search strategies across databases</li>
              <li><span className="check-dot"><Icon name="check" size={14} strokeWidth={2.4} /></span>Consulting on reference and citation styles (APA 7 etc.)</li>
              <li><span className="check-dot"><Icon name="check" size={14} strokeWidth={2.4} /></span>Building a literature map</li>
            </ul>
            <Link href={yol("en", "/hizmetlerimiz/literatur-tarama-danismanligi")} className="link-arrow">
              Explore literature review consulting <Icon name="arrowRight" size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container split reverse">
          <Reveal className="split-media">
            <Image src="/images/istatistiksel-analiz.webp" alt="Statistical analysis charts and data tables" fill sizes="(max-width: 760px) 100vw, 50vw" />
          </Reveal>
          <Reveal className="split-copy" delay={100}>
            <p className="eyebrow">Our approach</p>
            <h2 className="headline">
              Instructive, transparent, <span className="serif gold">trackable.</span>
            </h2>
            <p className="lede">
              Every analysis and consulting process is run with a reasoned choice of method, annotated
              outputs and regular feedback.
            </p>
            <ul className="checklist">
              <li><span className="check-dot"><Icon name="check" size={14} strokeWidth={2.4} /></span>Analysis plan and methodological rationale</li>
              <li><span className="check-dot"><Icon name="check" size={14} strokeWidth={2.4} /></span>Annotated analysis and project files</li>
              <li><span className="check-dot"><Icon name="check" size={14} strokeWidth={2.4} /></span>Table check against APA 7 and your institution&apos;s guide</li>
            </ul>
            <Link href={`${yol("en", "/hizmetlerimiz")}#analiz`} className="link-arrow">
              View analysis services <Icon name="arrowRight" size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SÜREÇ */}
      <section className="section section-gray">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">How we work</p>
            <h2 className="headline">
              Four steps, <span className="serif">complete clarity.</span>
            </h2>
          </Reveal>
          <div className="steps stretch">
            {STEPS.map((s, i) => (
              <Reveal key={s.t} delay={i * 90}>
                <div className="step">
                  <div className="step-n">0{i + 1}</div>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ETİK */}
      <section className="section section-dark">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Ethics and regulations</p>
            <h2 className="headline">
              Your original work <span className="serif gold">stays yours.</span>
            </h2>
            <p className="lede">
              We do not prepare theses, articles, assignments or application files on anyone&apos;s behalf.
              Through methodology, analysis, language and process consulting, we help you complete your own
              work to a high standard.
            </p>
          </Reveal>
          <Reveal className="ethic-grid" delay={100}>
            <div className="ethic">
              <Icon name="shield" size={28} />
              <h3>Consulting-based</h3>
              <p>Every process is carried out with the researcher&apos;s meaningful contribution and final control.</p>
            </div>
            <div className="ethic">
              <Icon name="doc" size={28} />
              <h3>YÖK and ÜAK regulations</h3>
              <p>
                We follow research and publication ethics and the current requirements of Türkiye&apos;s Council of
                Higher Education (YÖK) and Inter-University Board (ÜAK); we never ask for passwords.
              </p>
            </div>
            <div className="ethic">
              <Icon name="lock" size={28} />
              <h3>Data protection and confidentiality</h3>
              <p>The data and documents you share are kept confidential and processed only to provide the service.</p>
            </div>
          </Reveal>
          <div className="actions-center">
            <Link href={yol("en", "/etik-ilkelerimiz")} className="link-arrow">
              Read our ethical principles <Icon name="arrowRight" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Frequently asked</p>
            <h2 className="headline">Your questions, answered.</h2>
          </Reveal>
          <Accordion items={HOME_FAQS} />
          <div className="actions-center">
            <Link href={yol("en", "/sikca-sorulan-sorular")} className="link-arrow">
              See all questions <Icon name="arrowRight" size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Cta dil="en" />
    </main>
  );
}
