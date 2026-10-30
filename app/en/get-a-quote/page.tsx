import type { Metadata } from "next";
import { Suspense } from "react";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import { whatsappHref } from "@/components/WhatsAppButton";
import { kategoridekiler, kategoriler } from "@/lib/hizmetler";
import { SITE } from "@/lib/site";
import LeadForm, { type ServiceGroup } from "@/components/LeadForm";
import { METIN, alternatifler, yol } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Briefly tell us what you need; AkademikMerkez's team of experts will offer you the most suitable consultant, a process plan and a transparent quote within 24 hours.",
  alternates: alternatifler("/teklif-al", "en"),
};

const NEXT_STEPS = [
  { t: "We review your request", d: "Our team of experts assesses what you need." },
  { t: "We call you", d: "An initial consultation usually takes place within 24 hours." },
  { t: "A transparent quote", d: "Scope, timeline and fee are shared in writing." },
];

export default function GetAQuotePage() {
  /* Seçeneğin değeri Türkçe ad: CRM'e tek dilde düşsün (components/LeadForm.tsx). */
  const groups: ServiceGroup[] = kategoriler("en").map((c) => ({
    label: c.title,
    options: kategoridekiler("en", c.key).map((s) => ({ value: s.trTitle, label: s.title })),
  }));

  return (
    <main>
      <PageHero
        dil="en"
        crumbs={[{ name: "Get a Quote", href: yol("en", "/teklif-al") }]}
        eyebrow="Get a quote"
        title={
          <>
            A few sentences are enough. <span className="serif gold">We&apos;ll take it from there.</span>
          </>
        }
        lede="Fill in the form and your request will reach our team of experts. We usually get in touch within 24 hours."
      />

      <section className="section-sm">
        <div className="container offer-layout">
          <div className="offer-info">
            <h2>What happens next?</h2>
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
              <a href={whatsappHref(METIN.en.whatsappMesaj)} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-lg">
                <Icon name="chat" size={18} /> Message us on WhatsApp
              </a>
              <a href={`tel:${SITE.phone}`} className="btn btn-outline btn-lg">
                <Icon name="phone" size={18} /> {`+90 ${SITE.phoneDisplay.replace(/^0/, "")}`}
              </a>
              <a href={`${SITE.appUrl}/takip`} className="btn btn-outline btn-lg">
                <Icon name="doc" size={18} /> Track my existing file
              </a>
            </div>
          </div>

          <Suspense fallback={<div className="form-card">Loading form…</div>}>
            <LeadForm groups={groups} dil="en" />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
