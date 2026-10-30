import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Accordion from "@/components/Accordion";
import ServiceCard from "@/components/ServiceCard";
import JsonLd from "@/components/JsonLd";
import BlogCard from "@/components/BlogCard";
import Icon from "@/components/Icon";
import { whatsappHref } from "@/components/WhatsAppButton";
import { hizmetBul, hizmetler, hizmetYolu, kategori, kategoridekiler } from "@/lib/hizmetler";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { alternatifler, yol } from "@/lib/i18n";
import { hizmetinYazilari } from "@/lib/blog";

export const dynamicParams = false;

export function generateStaticParams() {
  return hizmetler("en").map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = hizmetBul("en", params.slug);
  if (!service) return {};
  const description = `${service.short} ${service.description}`.slice(0, 158).replace(/\s+\S*$/, "") + "…";
  return {
    title: service.title,
    description,
    keywords: [service.title, ...service.tools, kategori("en", service.category).title, "academic consulting"],
    alternates: alternatifler(`/hizmetlerimiz/${service.trSlug}`, "en"),
    openGraph: {
      title: `${service.title} | Akademik Merkez`,
      description: service.short,
      url: hizmetYolu("en", service.slug),
    },
  };
}

export default function ServiceDetailPageEn({ params }: { params: { slug: string } }) {
  const service = hizmetBul("en", params.slug);
  if (!service) notFound();

  const category = kategori("en", service.category);
  const siblings = kategoridekiler("en", service.category).filter((s) => s.slug !== service.slug);
  const related = (siblings.length >= 3 ? siblings : [...siblings, ...hizmetler("en").filter((s) => s.category !== service.category)]).slice(0, 3);
  // Hizmetten yazıya bağlantı; yazılar hizmeti Türkçe slug'ıyla anar.
  const yazilar = hizmetinYazilari("en", service.trSlug).slice(0, 3);
  /* Form seçeneğinin değeri hizmetin Türkçe adı (components/LeadForm.tsx). */
  const teklif = `${yol("en", "/teklif-al")}?hizmet=${encodeURIComponent(service.trTitle)}`;

  return (
    <main>
      <JsonLd data={serviceSchema(service, "en")} />
      <JsonLd data={faqSchema(service.faqs)} />

      <PageHero
        dil="en"
        crumbs={[
          { name: "Our Services", href: yol("en", "/hizmetlerimiz") },
          { name: service.title, href: hizmetYolu("en", service.slug) },
        ]}
        eyebrow={category.title}
        title={service.title}
        lede={service.short}
      >
        <div className="hero-actions">
          <Link href={teklif} className="btn btn-primary btn-lg">
            Get a Quote
          </Link>
          <Link href={`${yol("en", "/hizmetlerimiz")}#${category.key}`} className="btn btn-outline btn-lg">
            All services in this category
          </Link>
        </div>
      </PageHero>

      <section className="section-sm">
        <div className="container detail">
          <div>
            <Reveal className="detail-block">
              <h2>Overview</h2>
              <p className="detail-lead">{service.description}</p>
              <div className="chip-row" aria-label="Software and tools used">
                {service.tools.map((t) => (
                  <span key={t} className="chip chip-lg">{t}</span>
                ))}
              </div>
            </Reveal>

            <Reveal className="detail-block">
              <h2>What we do in this service</h2>
              <ul className="checklist">
                {service.bullets.map((b) => (
                  <li key={b}>
                    <span className="check-dot"><Icon name="check" size={14} strokeWidth={2.4} /></span>
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="detail-block">
              <h2>Example topics</h2>
              <div className="examples">
                {service.examples.map((e, i) => (
                  <div key={e} className="example">
                    <span>0{i + 1}</span>
                    {e}
                  </div>
                ))}
              </div>
              <p className="detail-note">These examples illustrate the scope of the service; every project is planned around its own research question.</p>
            </Reveal>

            <Reveal className="detail-block">
              <h2>What you will have at the end</h2>
              <div className="deliver">
                {category.deliverables.map((d) => (
                  <div key={d} className="deliver-item">
                    <Icon name="doc" size={20} />
                    {d}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="detail-block">
              <h2>Who is it for?</h2>
              <div className="audience">
                <Icon name="users" size={22} />
                <span>{service.audience}</span>
              </div>
            </Reveal>

            <Reveal className="detail-block">
              <h2>Frequently asked questions</h2>
              <Accordion items={service.faqs} />
            </Reveal>
          </div>

          <aside>
            <div className="aside-card">
              <p className="eyebrow">Free consultation</p>
              <h2>Get a quote for {service.title}</h2>
              <p>Tell us what you need; we will agree on the scope, timeline and fee together before any work begins.</p>
              <ul className="aside-list">
                <li><Icon name="clock" size={18} /> Usually a reply within 24 hours</li>
                <li><Icon name="users" size={18} /> Matched with an expert in your field</li>
                <li><Icon name="lock" size={18} /> Confidentiality and data protection (KVKK)</li>
              </ul>
              <Link href={teklif} className="btn btn-gold btn-block">
                Get a Quote
              </Link>
              <a
                href={whatsappHref(`Hello, I would like to learn more about your ${service.title} service.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-glass btn-block"
              >
                Ask on WhatsApp
              </a>
              <p className="aside-note">
                This is a consulting service; the content, originality and final academic responsibility for the
                work rest with the researcher.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {yazilar.length > 0 && (
        <section className="section-sm">
          <div className="container">
            <Reveal className="section-head left">
              <p className="eyebrow">Blog</p>
              <h2 className="title-lg">Our articles on this topic</h2>
            </Reveal>
            <div className="blog-grid stretch">
              {yazilar.map((y, i) => (
                <Reveal key={y.slug} delay={i * 70}>
                  <BlogCard yazi={y} baslik="h3" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section section-gray">
        <div className="container">
          <Reveal className="section-head left">
            <p className="eyebrow">Related services</p>
            <h2 className="title-lg">You may also be interested in.</h2>
          </Reveal>
          <div className="svc-grid stretch">
            {related.map((s, i) => (
              <Reveal key={s.slug} delay={i * 70}>
                <ServiceCard service={s} dil="en" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
