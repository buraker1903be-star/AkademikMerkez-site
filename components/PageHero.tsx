import type { ReactNode } from "react";
import Link from "next/link";
import JsonLd from "./JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { METIN, yol, type Dil } from "@/lib/i18n";

type Crumb = { name: string; href: string };

export default function PageHero({
  dil = "tr",
  crumbs,
  eyebrow,
  title,
  lede,
  children,
}: {
  dil?: Dil;
  crumbs: Crumb[];
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
}) {
  const m = METIN[dil];
  const trail = [{ name: m.anasayfa, href: yol(dil, "/") }, ...crumbs];

  return (
    <section className="page-hero">
      <JsonLd data={breadcrumbSchema(trail)} />
      <div className="page-aurora" aria-hidden="true" />
      <div className="container">
        <nav aria-label={m.sayfaKonumu}>
          <ol className="crumbs">
            {trail.map((c, i) =>
              i === trail.length - 1 ? (
                <li key={c.href} aria-current="page">{c.name}</li>
              ) : (
                <li key={c.href}>
                  <Link href={c.href}>{c.name}</Link>
                </li>
              )
            )}
          </ol>
        </nav>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {lede && <p className="lede">{lede}</p>}
        {children}
      </div>
    </section>
  );
}
