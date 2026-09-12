import type { Metadata } from "next";
import { Suspense } from "react";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import { whatsappHref } from "@/components/WhatsAppButton";
import { categories, servicesByCategory } from "@/lib/services";
import { SITE } from "@/lib/site";
import LeadForm, { type ServiceGroup } from "./lead-form";

export const metadata: Metadata = {
  title: "Teklif Al",
  description:
    "İhtiyacınızı kısaca anlatın; Akademik Merkez uzman ekibi size en uygun danışmanı, süreç planını ve şeffaf teklifi 24 saat içinde sunsun.",
  alternates: { canonical: "/teklif-al" },
};

const NEXT_STEPS = [
  { t: "Talebiniz değerlendirilir", d: "Uzman ekibimiz ihtiyacınızı inceler." },
  { t: "Sizi arıyoruz", d: "Genellikle 24 saat içinde ön görüşme yapılır." },
  { t: "Şeffaf teklif", d: "Kapsam, takvim ve ücret yazılı olarak paylaşılır." },
];

export default function TeklifAlPage() {
  const groups: ServiceGroup[] = categories.map((c) => ({
    label: c.title,
    options: servicesByCategory(c.key).map((s) => s.title),
  }));

  return (
    <main>
      <PageHero
        crumbs={[{ name: "Teklif Al", href: "/teklif-al" }]}
        eyebrow="Teklif al"
        title={
          <>
            Birkaç cümle yeter. <span className="serif gold">Gerisini konuşalım.</span>
          </>
        }
        lede="Formu doldurun, talebiniz uzman ekibimize ulaşsın. Genellikle 24 saat içinde sizinle iletişime geçiyoruz."
      />

      <section className="section-sm">
        <div className="container offer-layout">
          <div className="offer-info">
            <h2>Sonrasında ne olur?</h2>
            <ol className="offer-steps">
              {NEXT_STEPS.map((s, i) => (
                <li key={s.t}>
                  <span className="step-n">{i + 1}</span>
                  <div>
                    <strong>{s.t}</strong>
                    <span>{s.d}</span>
                  </div>
                </li>
              ))}
            </ol>
            <div className="offer-quick">
              <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-lg">
                <Icon name="chat" size={18} /> WhatsApp&apos;tan yazın
              </a>
              <a href={`tel:${SITE.phone}`} className="btn btn-outline btn-lg">
                <Icon name="phone" size={18} /> {SITE.phoneDisplay}
              </a>
              <a href={`${SITE.appUrl}/takip`} className="btn btn-outline btn-lg">
                <Icon name="doc" size={18} /> Mevcut dosyamı takip et
              </a>
            </div>
          </div>

          <Suspense fallback={<div className="form-card">Form yükleniyor…</div>}>
            <LeadForm groups={groups} />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
