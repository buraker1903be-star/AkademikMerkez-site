import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Cta from "@/components/Cta";
import Icon from "@/components/Icon";
import { whatsappHref } from "@/components/WhatsAppButton";
import { SITE } from "@/lib/site";
import { METIN, alternatifler, yol } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact AkademikMerkez by email, phone or WhatsApp, or send your request with the Get a Quote form. Beylikdüzü, Istanbul, Türkiye.",
  alternates: alternatifler("/iletisim", "en"),
};

export default function ContactPageEn() {
  return (
    <main>
      <PageHero
        dil="en"
        crumbs={[{ name: "Contact", href: yol("en", "/iletisim") }]}
        eyebrow="Contact"
        title={
          <>
            We are <span className="serif gold">ready to talk.</span>
          </>
        }
        lede="Reach out with your questions or fill in the Get a Quote form directly. We usually reply within 24 hours."
      />

      <section className="section-sm">
        <div className="container contact-grid stretch">
          <Reveal>
            <a className="contact-card" href={`mailto:${SITE.email}`}>
              <span className="cat-icon"><Icon name="mail" size={22} /></span>
              <h2>Email</h2>
              <p>{SITE.email}</p>
            </a>
          </Reveal>
          <Reveal delay={70}>
            <a className="contact-card" href={`tel:${SITE.phone}`}>
              <span className="cat-icon"><Icon name="phone" size={22} /></span>
              <h2>Phone</h2>
              <p>{`+90 ${SITE.phoneDisplay.replace(/^0/, "")}`}</p>
            </a>
          </Reveal>
          <Reveal delay={140}>
            <a className="contact-card" href={whatsappHref(METIN.en.whatsappMesaj)} target="_blank" rel="noopener noreferrer">
              <span className="cat-icon"><Icon name="chat" size={22} /></span>
              <h2>WhatsApp</h2>
              <p>Message us now</p>
            </a>
          </Reveal>
          <Reveal delay={210}>
            <div className="contact-card">
              <span className="cat-icon"><Icon name="pin" size={22} /></span>
              <h2>Address</h2>
              <address>
                {SITE.address.street}
                <br />
                {SITE.address.postalCode} {SITE.address.district} / {SITE.address.city}, Türkiye
              </address>
            </div>
          </Reveal>
        </div>
      </section>

      <Cta
        dil="en"
        title={
          <>
            For the fastest reply, <span className="serif gold">use the quote form.</span>
          </>
        }
        text="Fill in the form and our team of experts will contact you directly."
      />
    </main>
  );
}
