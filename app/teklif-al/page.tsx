import type { Metadata } from "next";
import { Suspense } from "react";
import LeadForm from "./lead-form";

export const metadata: Metadata = {
  title: "Teklif Al",
  description:
    "İhtiyacınızı kısaca anlatın, Akademik Merkez uzman ekibi size en uygun danışmanı ve süreç planını sunsun.",
  alternates: { canonical: "/teklif-al" },
};

export default function TeklifAlPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">Anasayfa / Teklif Al</div>
          <h1>Teklifinizi Alın</h1>
          <p>
            Formu doldurun, talebiniz uzman ekibimize ulaşsın. Genellikle 24 saat içinde
            sizinle iletişime geçiyoruz.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 640, margin: "0 auto" }}>
          <Suspense fallback={<div className="form-card">Form yükleniyor...</div>}>
            <LeadForm />
          </Suspense>
          <p style={{ textAlign: "center", color: "var(--muted)", fontSize: 13, marginTop: 20 }}>
            Zaten talebiniz mi var? {" "}
            <a href="https://app.akademikmerkez.com/takip" style={{ color: "var(--gold-dark)", fontWeight: 700 }}>
              Dosya durumunuzu buradan takip edin.
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
