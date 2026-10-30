import Link from "next/link";
import PageHero from "./PageHero";
import Reveal from "./Reveal";
import Accordion from "./Accordion";
import ServiceCard from "./ServiceCard";
import JsonLd from "./JsonLd";
import BlogCard from "./BlogCard";
import Icon from "./Icon";
import { hizmetBul } from "@/lib/hizmetler";
import { blogPostingSchema, faqSchema } from "@/lib/schema";
import { yol } from "@/lib/i18n";
import { hizmetSlugu, tarihYazisi, yaziYolu, yazilar, type Yazi } from "@/lib/blog";

// Yazı sayfasının gövdesi iki dilde ortak (app/(tr)/blog/[slug], app/en/blog/[slug]).
const METIN = {
  tr: {
    yayin: "Yayın",
    guncelleme: "Güncelleme",
    okuma: "dk okuma",
    kisaca: "Kısaca",
    icindekiler: "İçindekiler",
    sss: "Sık sorulan sorular",
    yazar: "Yazar",
    onGorusme: "Ön görüşme",
    destek: (hizmet?: string) => (hizmet ? `${hizmet} için teklif alın` : "Çalışmanız için destek alın"),
    asideMetin: "Yönteminizi ya da analizinizi birlikte gözden geçirelim; kapsamı ve takvimi işe başlamadan netleştirelim.",
    donus: "Genellikle 24 saat içinde dönüş",
    eslesme: "Alanınıza uygun uzman eşleştirmesi",
    gizlilik: "Gizlilik ve KVKK güvencesi",
    teklifAl: "Teklif Al",
    not: "Danışmanlık esaslı hizmettir; çalışmanın içeriği, özgünlüğü ve nihai akademik sorumluluğu araştırmacıya aittir.",
    ilgiliHizmetler: "İlgili hizmetler",
    birlikte: "Bu konuda birlikte çalışabiliriz.",
    digerleri: "Diğer yazılar",
  },
  en: {
    yayin: "Published",
    guncelleme: "Updated",
    okuma: "min read",
    kisaca: "In short",
    icindekiler: "Contents",
    sss: "Frequently asked questions",
    yazar: "Author",
    onGorusme: "Free consultation",
    destek: (hizmet?: string) => (hizmet ? `Get a quote for ${hizmet}` : "Get support for your study"),
    asideMetin: "Let's review your method or analysis together and agree on scope and timeline before any work begins.",
    donus: "We usually reply within 24 hours",
    eslesme: "Matched with a consultant in your field",
    gizlilik: "Confidentiality and data protection",
    teklifAl: "Get a Quote",
    not: "This is a consulting service; the content, originality and final academic responsibility of the work remain with the researcher.",
    ilgiliHizmetler: "Related services",
    birlikte: "We can work on this together.",
    digerleri: "More articles",
  },
};

export default function YaziSayfasi({ yazi: y }: { yazi: Yazi }) {
  const dil = y.dil;
  const m = METIN[dil];
  const hizmetler = y.hizmetler.map((h) => hizmetBul(dil, hizmetSlugu(dil, h))).filter((s) => s !== undefined);
  const anaHizmet = hizmetler[0];
  // Form seçeneğinin değeri hizmetin Türkçe adı (components/LeadForm.tsx); İngilizce sayfada da öyle.
  const teklif = anaHizmet ? `${yol(dil, "/teklif-al")}?hizmet=${encodeURIComponent(anaHizmet.trTitle)}` : yol(dil, "/teklif-al");
  const digerleri = yazilar(dil).filter((d) => d.slug !== y.slug).slice(0, 3);

  return (
    <main>
      <JsonLd data={blogPostingSchema(y)} />
      {y.sss.length > 0 && <JsonLd data={faqSchema(y.sss)} />}

      <PageHero
        dil={dil}
        crumbs={[
          { name: "Blog", href: yol(dil, "/blog") },
          { name: y.baslik, href: yaziYolu(dil, y.slug) },
        ]}
        eyebrow="Blog"
        title={y.baslik}
      >
        {/* Yazar ve tarih ekranda görünür: yapısal veride yazıp sayfada göstermemek güven sinyalini boşa çıkarır. */}
        <p className="post-byline">
          <span>{y.yazar.ad}</span>
          <span>
            {m.yayin}: <time dateTime={y.yayin}>{tarihYazisi(y.yayin, dil)}</time>
          </span>
          {y.guncelleme !== y.yayin && (
            <span>
              {m.guncelleme}: <time dateTime={y.guncelleme}>{tarihYazisi(y.guncelleme, dil)}</time>
            </span>
          )}
          <span>
            {y.okumaDakika} {m.okuma}
          </span>
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
              <p className="eyebrow">{m.kisaca}</p>
              <p>{y.ozet}</p>
            </div>

            {y.basliklar.length > 2 && (
              <nav className="post-toc" aria-label={m.icindekiler}>
                <p className="post-toc-baslik">{m.icindekiler}</p>
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
                <h2>{m.sss}</h2>
                <Accordion items={y.sss} />
              </div>
            )}

            <div className="yazar-kutu">
              <p className="eyebrow">{m.yazar}</p>
              <p className="yazar-ad">
                {y.yazar.ad}
                {y.yazar.unvan && <span> · {y.yazar.unvan}</span>}
              </p>
              {y.yazar.hakkinda && <p>{y.yazar.hakkinda}</p>}
            </div>
          </article>

          <aside>
            <div className="aside-card">
              <p className="eyebrow">{m.onGorusme}</p>
              <h2>{m.destek(anaHizmet?.title)}</h2>
              <p>{m.asideMetin}</p>
              <ul className="aside-list">
                <li><Icon name="clock" size={18} /> {m.donus}</li>
                <li><Icon name="users" size={18} /> {m.eslesme}</li>
                <li><Icon name="lock" size={18} /> {m.gizlilik}</li>
              </ul>
              <Link href={teklif} className="btn btn-gold btn-block">
                {m.teklifAl}
              </Link>
              <p className="aside-note">{m.not}</p>
            </div>
          </aside>
        </div>
      </section>

      {hizmetler.length > 0 && (
        <section className="section-sm section-gray">
          <div className="container">
            <Reveal className="section-head left">
              <p className="eyebrow">{m.ilgiliHizmetler}</p>
              <h2 className="title-lg">{m.birlikte}</h2>
            </Reveal>
            <div className="svc-grid stretch">
              {hizmetler.map((s, i) => (
                <Reveal key={s.slug} delay={i * 70}>
                  <ServiceCard service={s} dil={dil} />
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
              <h2 className="title-lg">{m.digerleri}</h2>
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
