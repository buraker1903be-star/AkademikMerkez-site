import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="container">
        <p className="display gold">404</p>
        <h1 className="title-lg">We couldn&apos;t find that page.</h1>
        <p className="lede">The page may have been moved or removed. You can browse our services or return to the home page.</p>
        <div className="hero-actions">
          <Link href="/en" className="btn btn-primary btn-lg">Back to home</Link>
          <Link href="/en/services" className="btn btn-outline btn-lg">Services</Link>
        </div>
      </div>
    </main>
  );
}
