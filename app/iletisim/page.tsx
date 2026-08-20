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
        <div className="container grid-2">
          <div className="card">
            <h3>E-posta</h3>
            <p>
              <a href="mailto:info@akademikmerkez.com" style={{ color: "var(--gold-dark)", fontWeight: 700 }}>
                info@akademikmerkez.com
              </a>
            </p>
          </div>
          <div className="card">
            <h3>Teklif Al</h3>
            <p>En hızlı yanıt için Teklif Al formunu doldurmanızı öneririz.</p>
            <Link href="/teklif-al" className="btn btn-primary">Teklif Al →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
