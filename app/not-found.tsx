import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="container">
        <p className="display gold">404</p>
        <h1 className="title-lg">Aradığınız sayfa bulunamadı.</h1>
        <p className="lede">Sayfa taşınmış veya kaldırılmış olabilir. Hizmetlerimize göz atabilir ya da anasayfaya dönebilirsiniz.</p>
        <div className="hero-actions">
          <Link href="/" className="btn btn-primary btn-lg">Anasayfaya dön</Link>
          <Link href="/hizmetlerimiz" className="btn btn-outline btn-lg">Hizmetler</Link>
        </div>
      </div>
    </main>
  );
}
