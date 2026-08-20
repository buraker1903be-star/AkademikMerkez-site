import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Akademik Merkez ile iletişime geçin veya Teklif Al formunu doldurun.",
  alternates: { canonical: "/iletisim" },
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">Anasayfa / İletişim</div>
          <h1>İletişim</h1>
          <p>Sorularınız için bize ulaşın veya doğrudan Teklif Al formunu doldurun.</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-3">
          <div className="card">
            <div className="card-icon">@</div>
            <h3>E-posta</h3>
            <p>
              <a href="mailto:uzman@akademikmerkez.com" style={{ color: "var(--gold-dark)", fontWeight: 700 }}>
                uzman@akademikmerkez.com
              </a>
            </p>
          </div>
          <div className="card">
            <div className="card-icon">T</div>
            <h3>Telefon</h3>
            <p>
              <a href="tel:+905060009499" style={{ color: "var(--gold-dark)", fontWeight: 700 }}>
                0506 000 94 99
              </a>
            </p>
          </div>
          <div className="card">
            <div className="card-icon">A</div>
            <h3>Adres</h3>
            <p>
              Yakuplu Mah. Hürriyet Bulvarı Skyport Residence No:1 D:113
              <br />
              34524 Beylikdüzü / İstanbul
            </p>
          </div>
        </div>

        <div className="container" style={{ marginTop: 24 }}>
          <div className="cta-band">
            <div>
              <h3>En hızlı yanıt için</h3>
              <p>Teklif Al formunu doldurun, uzman ekibimiz doğrudan sizinle iletişime geçsin.</p>
            </div>
            <Link href="/teklif-al" className="btn btn-primary">Teklif Al →</Link>
          </div>
        </div>

        <div className="container prose" style={{ marginTop: 56 }}>
          <h2>Firma Bilgileri</h2>
          <p>
            ARVOCULTURE GROUP TEKNOLOJİ SANAYİ VE TİCARET LTD. ŞTİ.
            <br />
            Vergi No: 086 178 5335
            <br />
            Yakuplu Mah. Hürriyet Bulvarı Skyport Residence No:1 D:113, 34524 Beylikdüzü / İstanbul
          </p>
        </div>
      </section>
    </main>
  );
}
