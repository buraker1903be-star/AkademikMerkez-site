import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Cta from "@/components/Cta";
import Icon from "@/components/Icon";
import { whatsappHref } from "@/components/WhatsAppButton";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Akademik Merkez ile e-posta, telefon veya WhatsApp üzerinden iletişime geçin; Teklif Al formuyla talebinizi iletin. Beylikdüzü / İstanbul.",
  alternates: { canonical: "/iletisim" },
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        crumbs={[{ name: "İletişim", href: "/iletisim" }]}
        eyebrow="İletişim"
        title={
          <>
            Konuşmaya <span className="serif gold">hazırız.</span>
          </>
        }
        lede="Sorularınız için bize ulaşın veya doğrudan Teklif Al formunu doldurun. Genellikle 24 saat içinde dönüş yapıyoruz."
      />

      <section className="section-sm">
        <div className="container contact-grid stretch">
          <Reveal>
            <a className="contact-card" href={`mailto:${SITE.email}`}>
              <span className="cat-icon"><Icon name="mail" size={22} /></span>
              <h2>E-posta</h2>
              <p>{SITE.email}</p>
            </a>
          </Reveal>
          <Reveal delay={70}>
            <a className="contact-card" href={`tel:${SITE.phone}`}>
              <span className="cat-icon"><Icon name="phone" size={22} /></span>
              <h2>Telefon</h2>
              <p>{SITE.phoneDisplay}</p>
            </a>
          </Reveal>
          <Reveal delay={140}>
            <a className="contact-card" href={whatsappHref()} target="_blank" rel="noopener noreferrer">
              <span className="cat-icon"><Icon name="chat" size={22} /></span>
              <h2>WhatsApp</h2>
              <p>Hemen yazın</p>
            </a>
          </Reveal>
          <Reveal delay={210}>
            <div className="contact-card">
              <span className="cat-icon"><Icon name="pin" size={22} /></span>
              <h2>Adres</h2>
              <address>
                {SITE.address.street}
                <br />
                {SITE.address.postalCode} {SITE.address.district} / {SITE.address.city}
              </address>
            </div>
          </Reveal>
        </div>
      </section>

      <Cta
        title={
          <>
            En hızlı yanıt için <span className="serif gold">teklif formu.</span>
          </>
        }
        text="Formu doldurun, uzman ekibimiz doğrudan sizinle iletişime geçsin."
      />
    </main>
  );
}
