import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description:
    "Tez/makale yöntem danışmanlığı, istatistiksel analiz, literatür tarama, akademik dil editörlüğü, çeviri ve doçentlik başvuru dosyası danışmanlığı.",
  alternates: { canonical: "/hizmetlerimiz" },
};

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">Anasayfa / Hizmetlerimiz</div>
          <h1>Hizmetlerimiz</h1>
          <p>
            Lisans, yüksek lisans, doktora ve doçentlik süreçlerinde; yöntem, analiz, dil ve
            danışmanlık desteği. Tüm hizmetlerimiz danışmanlık ve süreç desteği niteliğindedir.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 70}>
                <Link href={`/hizmetlerimiz/${s.slug}`} className="card">
                  <div className="card-icon">{s.title.charAt(0)}</div>
                  <h3>{s.title}</h3>
                  <p>{s.short}</p>
                  <span className="card-link">Detayları gör →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
