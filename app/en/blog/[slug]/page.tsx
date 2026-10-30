import type { Metadata } from "next";
import { notFound } from "next/navigation";
import YaziSayfasi from "@/components/YaziSayfasi";
import { yaziMetadata } from "@/lib/blog-metadata";
import { yaziBul, yazilar } from "@/lib/blog";

export const dynamicParams = false;

export function generateStaticParams() {
  return yazilar("en").map((y) => ({ slug: y.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const y = yaziBul("en", params.slug);
  return y ? yaziMetadata(y) : {};
}

export default function YaziSayfasiEn({ params }: { params: { slug: string } }) {
  const y = yaziBul("en", params.slug);
  if (!y) notFound();
  return <YaziSayfasi yazi={y} />;
}
