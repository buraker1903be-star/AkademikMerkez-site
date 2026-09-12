import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Accordion from "@/components/Accordion";
import ServiceCard from "@/components/ServiceCard";
import JsonLd from "@/components/JsonLd";
import Icon from "@/components/Icon";
import { whatsappHref } from "@/components/WhatsAppButton";
import { getCategory, getService, services, servicesByCategory } from "@/lib/services";
import { faqSchema, serviceSchema } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getService(params.slug);
  if (!service) return {};
  const description = `${service.short} ${service.description}`.slice(0, 158).replace(/\s+\S*$/, "") + "…";
  return {
    title: service.title,
    description,
    keywords: [service.title, ...service.tools, getCategory(service.category).title, "akademik danışmanlık"],
    alternates: { canonical: `/hizmetlerimiz/${service.slug}` },
    openGraph: {
      title: `${service.title} | Akademik Merkez`,
      description: service.short,
      url: `/hizmetlerimiz/${service.slug}`,
    },
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) notFound();

  const category = getCategory(service.category);
  const siblings = servicesByCategory(service.category).filter((s) => s.slug !== service.slug);
  const related = (siblings.length >= 3 ? siblings : [...siblings, ...services.filter((s) => s.category !== service.category)]).slice(0, 3);

  return (
    <main>
      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={faqSchema(service.faqs)} />

      <PageHero
        crumbs={[
          { name: "Hizmetlerimiz", href: "/hizmetlerimiz" },
          { name: service.title, href: `/hizmetlerimiz/${service.slug}` },
        ]}
        eyebrow={category.title}
        title={service.title}
        lede={service.short}
      >
        <div className="hero-actions">
          <Link href={`/teklif-al?hizmet=${encodeURIComponent(service.title)}`} className="btn btn-primary btn-lg">
            Teklif Al
          </Link>
          <Link href={`/hizmetlerimiz#${category.key}`} className="btn btn-outline btn-lg">
            Kategorideki tüm hizmetler
          </Link>
        </div>
      </PageHero>

      <section className="section-sm">
        <div className="container detail">
          <div>
            <Reveal className="detail-block">
              <h2>Genel bakış</h2>
              <p className="detail-lead">{service.description}</p>
              <div className="chip-row" aria-label="Kullanılan yazılım ve araçlar">
                {service.tools.map((t) => (
                  <span key={t} className="chip chip-lg">{t}</span>
                ))}
              </div>
            </Reveal>

            <Reveal className="detail-block">
              <h2>Bu hizmette neler yapıyoruz?</h2>
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
              <h2>Örnek çalışma konuları</h2>
              <div className="examples">
                {service.examples.map((e, i) => (
                  <div key={e} className="example">
                    <span>0{i + 1}</span>
                    {e}
                  </div>
                ))}
              </div>
              <p className="detail-note">Örnekler hizmet kapsamını anlatmak içindir; her çalışma kendi araştırma sorusuna göre planlanır.</p>
            </Reveal>

            <Reveal className="detail-block">
              <h2>Süreç sonunda elinizde olanlar</h2>
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
              <h2>Kimler için uygun?</h2>
              <div className="audience">
                <Icon name="users" size={22} />
                <span>{service.audience}</span>
              </div>
            </Reveal>

            <Reveal className="detail-block">
              <h2>Sık sorulan sorular</h2>
              <Accordion items={service.faqs} />
            </Reveal>
          </div>

          <aside>
            <div className="aside-card">
              <p className="eyebrow">Ön görüşme</p>
              <h2>{service.title} için teklif alın</h2>
              <p>İhtiyacınızı paylaşın; kapsamı, takvimi ve ücreti işe başlamadan birlikte netleştirelim.</p>
              <ul className="aside-list">
                <li><Icon name="clock" size={18} /> Genellikle 24 saat içinde dönüş</li>
                <li><Icon name="users" size={18} /> Alanınıza uygun uzman eşleştirmesi</li>
                <li><Icon name="lock" size={18} /> Gizlilik ve KVKK güvencesi</li>
              </ul>
              <Link href={`/teklif-al?hizmet=${encodeURIComponent(service.title)}`} className="btn btn-gold btn-block">
                Teklif Al
              </Link>
              <a
                href={whatsappHref(`Merhaba, ${service.title} hizmeti hakkında bilgi almak istiyorum.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-glass btn-block"
              >
                WhatsApp&apos;tan sorun
              </a>
              <p className="aside-note">
                Danışmanlık esaslı hizmettir; çalışmanın içeriği, özgünlüğü ve nihai akademik sorumluluğu
                araştırmacıya aittir.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <Reveal className="section-head left">
            <p className="eyebrow">İlgili hizmetler</p>
            <h2 className="title-lg">Bunlar da ilginizi çekebilir.</h2>
          </Reveal>
          <div className="svc-grid stretch">
            {related.map((s, i) => (
              <Reveal key={s.slug} delay={i * 70}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
