import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import BlogCard from "@/components/BlogCard";
import Cta from "@/components/Cta";
import { blogSchema } from "@/lib/schema";
import { yalnizTurkce } from "@/lib/i18n";
import { yazilar } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tez, makale ve doçentlik süreçlerinde yöntem, istatistiksel analiz, SPSS, MAXQDA ve akademik yazım üzerine uygulamalı rehber yazılar.",
  alternates: { ...yalnizTurkce("/blog"), types: { "application/rss+xml": "/blog/rss.xml" } },
  openGraph: { title: "Blog | Akademik Merkez", url: "/blog" },
};

export default function BlogPage() {
  const liste = yazilar();

  return (
    <main>
      <JsonLd data={blogSchema(liste)} />
      <PageHero
        crumbs={[{ name: "Blog", href: "/blog" }]}
        eyebrow="Blog"
        title={
          <>
            Yöntem ve analiz, <span className="serif gold">adım adım.</span>
          </>
        }
        lede="Araştırmanızı kendiniz yürütebilmeniz için yazılmış uygulamalı rehberler: hangi yöntem neden seçilir, analiz nasıl yapılır ve nasıl raporlanır."
      />

      <section className="section-sm">
        <div className="container">
          {liste.length === 0 ? (
            <p className="center blog-bos">İlk yazılarımız hazırlanıyor.</p>
          ) : (
            <div className="blog-grid stretch">
              {liste.map((y, i) => (
                <Reveal key={y.slug} delay={i * 70}>
                  <BlogCard yazi={y} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <Cta />
    </main>
  );
}
