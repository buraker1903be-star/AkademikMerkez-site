import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Accordion from "@/components/Accordion";
import ServiceCard from "@/components/ServiceCard";
import JsonLd from "@/components/JsonLd";
import BlogCard from "@/components/BlogCard";
import Icon from "@/components/Icon";
import { getService } from "@/lib/services";
import { blogPostingSchema, faqSchema } from "@/lib/schema";
import { yalnizTurkce } from "@/lib/i18n";
import { tarihYazisi, yaziBul, yaziYolu, yazilar } from "@/lib/blog";

export const dynamicParams = false;

export function generateStaticParams() {
  return yazilar().map((y) => ({ slug: y.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const y = yaziBul(params.slug);
  if (!y) return {};
  return {
    title: y.baslik,
    description: y.aciklama,
    keywords: y.anahtarKelimeler,
    authors: [{ name: y.yazar.ad }],
    alternates: yalnizTurkce(yaziYolu(y.slug)),
    openGraph: {
      type: "article",
      title: `${y.baslik} | Akademik Merkez`,
      description: y.aciklama,
      url: yaziYolu(y.slug),
      publishedTime: y.yayin,
      modifiedTime: y.guncelleme,
      authors: [y.yazar.ad],
    },
  };
}

export default function YaziSayfasi({ params }: { params: { slug: string } }) {
  const y = yaziBul(params.slug);
  if (!y) notFound();

  const hizmetler = y.hizmetler.map((h) => getService(h)!).filter(Boolean);
  const anaHizmet = hizmetler[0];
  const digerleri = yazilar().filter((d) => d.slug !== y.slug).slice(0, 3);

  return (
    <main>
      <JsonLd data={blogPostingSchema(y)} />
      {y.sss.length > 0 && <JsonLd data={faqSchema(y.sss)} />}

      <PageHero
        crumbs={[
          { name: "Blog", href: "/blog" },
          { name: y.baslik, href: yaziYolu(y.slug) },
        ]}
        eyebrow="Blog"
        title={y.baslik}
      >
        {/* Yazar ve tarih ekranda görünür: yapısal veride yazıp sayfada göstermemek güven sinyalini boşa çıkarır. */}
        <p className="post-byline">
          <span>{y.yazar.ad}</span>
          <span>
            Yayın: <time dateTime={y.yayin}>{tarihYazisi(y.yayin)}</time>
          </span>
          {y.guncelleme !== y.yayin && (
            <span>
              Güncelleme: <time dateTime={y.guncelleme}>{tarihYazisi(y.guncelleme)}</time>
            </span>
          )}
          <span>{y.okumaDakika} dk okuma</span>
        </p>
      </PageHero>

      <section className="section-sm">
        <div className="container detail">
          <article>
            {/*
              "Kısaca": sorunun cevabı en üstte. Yapay zeka arama motorları
              ve Google'ın öne çıkan snippet'i en çok bu bloğu alıntılıyor;
              okuyucu da cevabı aramadan buluyor.
            */}
            <div className="post-ozet">
              <p className="eyebrow">Kısaca</p>
              <p>{y.ozet}</p>
            </div>

            {y.basliklar.length > 2 && (
              <nav className="post-toc" aria-label="İçindekiler">
                <p className="post-toc-baslik">İçindekiler</p>
                <ol>
                  {y.basliklar.map((b) => (
                    <li key={b.id}>
                      <a href={`#${b.id}`}>{b.metin}</a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            {/* İçerik depodaki Markdown dosyasından, derleme sırasında; dışarıdan gelen metin değil. */}
            <div className="prose post-govde" dangerouslySetInnerHTML={{ __html: y.html }} />

            {y.sss.length > 0 && (
              <div className="detail-block">
                <h2>Sık sorulan sorular</h2>
                <Accordion items={y.sss} />
              </div>
            )}

            <div className="yazar-kutu">
              <p className="eyebrow">Yazar</p>
              <p className="yazar-ad">
                {y.yazar.ad}
                {y.yazar.unvan && <span> · {y.yazar.unvan}</span>}
              </p>
              {y.yazar.hakkinda && <p>{y.yazar.hakkinda}</p>}
            </div>
          </article>

          <aside>
            <div className="aside-card">
              <p className="eyebrow">Ön görüşme</p>
              <h2>{anaHizmet ? `${anaHizmet.title} desteği` : "Çalışmanız için destek alın"}</h2>
              <p>Yönteminizi ya da analizinizi birlikte gözden geçirelim; kapsamı ve takvimi işe başlamadan netleştirelim.</p>
              <ul className="aside-list">
                <li><Icon name="clock" size={18} /> Genellikle 24 saat içinde dönüş</li>
                <li><Icon name="users" size={18} /> Alanınıza uygun uzman eşleştirmesi</li>
                <li><Icon name="lock" size={18} /> Gizlilik ve KVKK güvencesi</li>
              </ul>
              <Link
                href={anaHizmet ? `/teklif-al?hizmet=${encodeURIComponent(anaHizmet.title)}` : "/teklif-al"}
                className="btn btn-gold btn-block"
              >
                Teklif Al
              </Link>
              <p className="aside-note">
                Danışmanlık esaslı hizmettir; çalışmanın içeriği, özgünlüğü ve nihai akademik sorumluluğu
                araştırmacıya aittir.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {hizmetler.length > 0 && (
        <section className="section-sm section-gray">
          <div className="container">
            <Reveal className="section-head left">
              <p className="eyebrow">İlgili hizmetler</p>
              <h2 className="title-lg">Bu konuda birlikte çalışabiliriz.</h2>
            </Reveal>
            <div className="svc-grid stretch">
              {hizmetler.map((s, i) => (
                <Reveal key={s.slug} delay={i * 70}>
                  <ServiceCard service={s} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {digerleri.length > 0 && (
        <section className="section-sm">
          <div className="container">
            <Reveal className="section-head left">
              <p className="eyebrow">Blog</p>
              <h2 className="title-lg">Diğer yazılar</h2>
            </Reveal>
            <div className="blog-grid stretch">
              {digerleri.map((d, i) => (
                <Reveal key={d.slug} delay={i * 70}>
                  <BlogCard yazi={d} baslik="h3" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
