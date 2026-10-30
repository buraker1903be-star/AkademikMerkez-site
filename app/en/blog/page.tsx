import type { Metadata } from "next";
import BlogListesi from "@/components/BlogListesi";
import { alternatifler } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical guides on research methods, statistical analysis, SPSS, MAXQDA and academic writing for theses, articles and associate professorship applications.",
  alternates: { ...alternatifler("/blog", "en"), types: { "application/rss+xml": "/en/blog/rss.xml" } },
  openGraph: { title: "Blog | AkademikMerkez", url: "/en/blog" },
};

export default function BlogPageEn() {
  return <BlogListesi dil="en" />;
}
