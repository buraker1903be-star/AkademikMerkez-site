import PageHero from "./PageHero";
import Reveal from "./Reveal";
import JsonLd from "./JsonLd";
import BlogCard from "./BlogCard";
import Cta from "./Cta";
import { blogSchema } from "@/lib/schema";
import { yol, type Dil } from "@/lib/i18n";
import { yazilar } from "@/lib/blog";

// Blog listesinin gövdesi iki dilde ortak; sayfa dosyaları yalnızca dili ve metadata'yı verir.
const METIN = {
  tr: {
    baslik: (
      <>
        Yöntem ve analiz, <span className="serif gold">adım adım.</span>
      </>
    ),
    giris:
      "Araştırmanızı kendiniz yürütebilmeniz için yazılmış uygulamalı rehberler: hangi yöntem neden seçilir, analiz nasıl yapılır ve nasıl raporlanır.",
    bos: "İlk yazılarımız hazırlanıyor.",
  },
  en: {
    baslik: (
      <>
        Methods and analysis, <span className="serif gold">step by step.</span>
      </>
    ),
    giris:
      "Practical guides written so you can run your own research: which method to choose and why, how to carry out the analysis and how to report it.",
    bos: "Our first articles are on the way.",
  },
};

export default function BlogListesi({ dil }: { dil: Dil }) {
  const liste = yazilar(dil);
  const m = METIN[dil];

  return (
    <main>
      <JsonLd data={blogSchema(liste, dil)} />
      <PageHero dil={dil} crumbs={[{ name: "Blog", href: yol(dil, "/blog") }]} eyebrow="Blog" title={m.baslik} lede={m.giris} />

      <section className="section-sm">
        <div className="container">
          {liste.length === 0 ? (
            <p className="center blog-bos">{m.bos}</p>
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

      <Cta dil={dil} />
    </main>
  );
}
