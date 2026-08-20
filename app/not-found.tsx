import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section" style={{ textAlign: "center" }}>
      <div className="container">
        <h1 style={{ fontSize: 40, marginBottom: 14 }}>Sayfa bulunamadı</h1>
        <p style={{ color: "var(--muted)", marginBottom: 24 }}>
          Aradığınız sayfa taşınmış veya kaldırılmış olabilir.
        </p>
        <Link href="/" className="btn btn-primary">Anasayfaya dön</Link>
      </div>
    </main>
  );
}
