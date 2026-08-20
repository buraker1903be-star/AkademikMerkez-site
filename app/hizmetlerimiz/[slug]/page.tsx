import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getService } from "@/lib/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getService(params.slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/hizmetlerimiz/${service.slug}` },
    openGraph: { title: service.title, description: service.short },
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">Anasayfa / Hizmetlerimiz / {service.title}</div>
          <h1>{service.title}</h1>
          <p>{service.short}</p>
        </div>
      </section>

      <section className="section">
        <div className="container service-detail-grid">
          <div className="prose">
            <p>{service.description}</p>
            <h2>Bu hizmet kapsamında neler sunuyoruz?</h2>
            <ul>
              {service.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <h2>Kimler için uygundur?</h2>
            <p>{service.audience}</p>
            <div className="badge-row">
              <span className="badge">Danışmanlık esaslı</span>
              <span className="badge">Kurum ölçütleri gözetilir</span>
              <span className="badge">KVKK çerçevesinde veri işleme</span>
            </div>
          </div>

          <aside>
            <div className="form-card">
              <h3 style={{ marginBottom: 10 }}>Bu hizmet için teklif alın</h3>
              <p style={{ color: "var(--muted)", fontSize: 13.5, marginBottom: 18 }}>
                Formu doldurun, uzman ekibimiz size özel bir görüşme planlasın.
              </p>
              <Link href={`/teklif-al?hizmet=${encodeURIComponent(service.title)}`} className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Teklif Al →
              </Link>
            </div>

            <div style={{ marginTop: 24 }}>
              <h4 style={{ fontSize: 14, marginBottom: 12, color: "var(--navy)" }}>Diğer Hizmetler</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link href={`/hizmetlerimiz/${o.slug}`} style={{ fontSize: 13.5, fontWeight: 600, color: "var(--navy-2)" }}>
                      {o.title} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
