import type { Metadata } from "next";
import BlogListesi from "@/components/BlogListesi";
import { alternatifler } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tez, makale ve doçentlik süreçlerinde yöntem, istatistiksel analiz, SPSS, MAXQDA ve akademik yazım üzerine uygulamalı rehber yazılar.",
  alternates: { ...alternatifler("/blog", "tr"), types: { "application/rss+xml": "/blog/rss.xml" } },
  openGraph: { title: "Blog | AkademikMerkez", url: "/blog" },
};

export default function BlogPage() {
  return <BlogListesi dil="tr" />;
}
