import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import Accordion from "@/components/Accordion";
import JsonLd from "@/components/JsonLd";
import Cta from "@/components/Cta";
import Icon, { CATEGORY_ICON } from "@/components/Icon";
import { MeshVisual, PythonCode, QualVisual, StatsVisual } from "@/components/Visuals";
import { categories, services, servicesByCategory } from "@/lib/services";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const MARQUEE = [
  "SPSS", "R", "Python", "Jamovi", "JASP", "MAXQDA", "ANSYS Workbench", "ANSYS Mechanical",
  "ANSYS Fluent", "pandas", "SciPy", "Jupyter", "Zotero", "Mendeley", "EndNote",
  "Web of Science", "Scopus", "TR Dizin", "Qualtrics", "Google Forms",
];

const STEPS = [
  { t: "Talebinizi paylaşın", d: "Formu doldurun veya WhatsApp'tan yazın; ihtiyacınızı birkaç cümleyle anlatın." },
  { t: "Ön görüşme", d: "Alanınıza uygun danışman sizinle iletişime geçer, kapsamı birlikte netleştirirsiniz." },
  { t: "Şeffaf plan", d: "Kapsam, takvim ve ücret yazılı olarak paylaşılır; sürpriz maliyet yoktur." },
  { t: "Danışmanlık süreci", d: "Plan doğrultusunda düzenli oturumlar, açıklamalı çıktılar ve dosya takibi." },
];

const HOME_FAQS = [
  {
    q: "Akademik Merkez nedir?",
    a: "Akademik Merkez; lisans, yüksek lisans, doktora öğrencileri ve akademisyenlere tez, makale ve doçentlik süreçlerinde yöntem, analiz, literatür, dil ve biçim danışmanlığı sunan bağımsız bir akademik danışmanlık merkezidir.",
  },
  {
    q: "Hangi analiz hizmetlerini sunuyorsunuz?",
    a: "İstatistiksel analiz danışmanlığı, SPSS ile nicel analiz, MAXQDA ile nitel analiz, ANSYS ile mühendislik analizleri ve Python ile veri analizi alanlarında yöntemsel danışmanlık veriyoruz.",
  },
  {
    q: "Analiz danışmanlığı süreci nasıl işliyor?",
    a: "Önce araştırma sorunuzu ve verinizi inceleyerek analiz planını birlikte kuruyoruz. Ardından analiz adımlarını sizinle birlikte yürütüyor, her adımı gerekçesiyle açıklıyoruz. Amaç, bulgularınızı anlayarak yorumlayabilmeniz ve savunabilmenizdir.",
  },
  {
    q: "Tezimi veya makalemi sizin yazmanız mümkün mü?",
    a: "Hayır. Etik ilkelerimiz ve mevzuat gereği kişi adına tez, makale, ödev veya başvuru dosyası hazırlamıyoruz. Yöntem, analiz, dil ve süreç danışmanlığıyla kendi çalışmanızı güçlü biçimde tamamlamanızı destekliyoruz.",
  },
  {
    q: "Nasıl teklif alabilirim?",
    a: "Teklif Al formunu doldurmanız veya WhatsApp'tan yazmanız yeterli. Talebiniz genellikle 24 saat içinde değerlendirilir; kapsam, takvim ve ücret içeren şeffaf bir teklif sunulur.",
  },
];

export default function HomePage() {
  return (
    <main>
      <JsonLd data={faqSchema(HOME_FAQS)} />

      {/* HERO */}
      <section className="hero">
        <div className="hero-aurora" aria-hidden="true" />
        <div className="container hero-inner">
          {/* Hero, JavaScript beklemeden yalnızca CSS ile canlanır (açılış hızı ve SEO için). */}
          <div className="intro">
            <Link href="/hizmetlerimiz#analiz" className="hero-badge">
              <b>Yeni</b> SPSS, MAXQDA, ANSYS ve Python analiz danışmanlığı
              <Icon name="arrowRight" size={14} strokeWidth={2} />
            </Link>
          </div>
          <h1 className="display intro" style={{ animationDelay: "80ms" }}>
            Akademik mükemmellik,
            <br />
            <span className="serif gold">kişiye özel.</span>
          </h1>
          <p className="lede intro" style={{ animationDelay: "160ms" }}>
            Tez, makale ve doçentlik başvurularında yöntem, analiz, literatür, dil ve biçim danışmanlığı.
            Özgün çalışma size ait kalır; biz süreci şeffaf, öğretici ve izlenebilir hâle getiririz.
          </p>
          <div className="hero-actions intro" style={{ animationDelay: "240ms" }}>
            <Link href="/teklif-al" className="btn btn-primary btn-lg">
              Ön görüşme planlayın
            </Link>
            <Link href="/hizmetlerimiz" className="btn btn-outline btn-lg">
              Hizmetleri keşfedin
            </Link>
          </div>
        </div>

        <div className="hero-stage">
          <div className="hero-media">
            <Image
              src="/images/hero-akademik-merkez.webp"
              alt="Akademik araştırma çalışma masası: kitaplar, notlar ve dizüstü bilgisayar"
              fill
              priority
              sizes="(max-width: 1600px) 100vw, 1600px"
            />
          </div>
          <div className="float-card fc-1" aria-hidden="true">
            <span className="fc-icon"><Icon name="cube" /></span>
            <span><strong>ANSYS</strong><small>Yapısal ve akış analizleri</small></span>
          </div>
          <div className="float-card fc-2" aria-hidden="true">
            <span className="fc-icon"><Icon name="quote" /></span>
            <span><strong>MAXQDA</strong><small>Nitel analiz</small></span>
          </div>
          <div className="float-card fc-3" aria-hidden="true">
            <span className="fc-icon"><Icon name="chart" /></span>
            <span><strong>SPSS</strong><small>Nicel analiz</small></span>
          </div>
        </div>
      </section>

      {/* YAZILIM BANDI */}
      <section className="marquee-section" aria-label="Danışmanlık verdiğimiz yazılım ve araçlar">
        <p className="marquee-label">Danışmanlık verdiğimiz yazılım ve araçlardan bazıları</p>
        <div className="marquee">
          <div className="marquee-track">
            {[...MARQUEE, ...MARQUEE].map((t, i) => (
              <span key={i} className="marquee-item" aria-hidden={i >= MARQUEE.length || undefined}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TANIM + RAKAMLAR */}
      <section className="section">
        <div className="container">
          <Reveal>
            <p className="statement">
              <strong>Akademik Merkez</strong>, tez, makale ve doçentlik süreçlerinde{" "}
              <strong>yöntem, analiz, dil ve süreç danışmanlığı</strong> sunan bağımsız bir akademik
              danışmanlık merkezidir. Özgün çalışma <strong>size ait kalır</strong>; biz onu daha güçlü
              kılarız.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="stats">
              <div className="stat">
                <div className="stat-value"><CountUp to={services.length} /></div>
                <div className="stat-label">Hizmet başlığı</div>
              </div>
              <div className="stat">
                <div className="stat-value"><CountUp to={100} prefix="%" /></div>
                <div className="stat-label">Danışmanlık esaslı model</div>
              </div>
              <div className="stat">
                <div className="stat-value">7/24</div>
                <div className="stat-label">Talep bırakma imkânı</div>
              </div>
              <div className="stat">
                <div className="stat-value"><CountUp to={24} suffix=" sa" /></div>
                <div className="stat-label">İçinde ilk dönüş hedefi</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ANALİZ STÜDYOSU */}
      <section className="section section-gray" id="analiz">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Analiz hizmetleri</p>
            <h2 className="headline">
              Veriyi yalnızca hesaplamayın. <span className="serif">Doğru yorumlayın.</span>
            </h2>
            <p className="lede">
              Nicel ve nitel analizden mühendislik simülasyonuna; her adım gerekçesiyle açıklanır, siz de
              bulgularınızı anlayarak savunursunuz.
            </p>
          </Reveal>

          <div className="bento">
            <Reveal className="tile tile-dark span-4">
              <p className="tile-kicker">Python ile Veri Analizi</p>
              <h3 className="tile-title">Kodun her satırı, anlayacağınız dilde.</h3>
              <p className="tile-text">pandas, SciPy ve statsmodels ile açıklamalı Jupyter Notebook&apos;lar ve tekrarlanabilir analiz.</p>
              <div className="tile-visual"><PythonCode /></div>
              <Link href="/hizmetlerimiz/python-analizi" className="tile-link" aria-label="Python ile Veri Analizi Danışmanlığı sayfasını inceleyin">
                <span className="tile-plus"><Icon name="arrowUpRight" size={16} strokeWidth={2} /></span>
              </Link>
            </Reveal>

            <Reveal className="tile span-2" delay={80}>
              <p className="tile-kicker">ANSYS Analizi</p>
              <h3 className="tile-title">Gerilme, ısı ve akış.</h3>
              <p className="tile-text">Workbench, Mechanical ve Fluent ile doğrulanmış sayısal analizler.</p>
              <div className="tile-visual"><MeshVisual /></div>
              <Link href="/hizmetlerimiz/ansys-analizi" className="tile-link" aria-label="ANSYS Analiz Danışmanlığı sayfasını inceleyin">
                <span className="tile-plus"><Icon name="arrowUpRight" size={16} strokeWidth={2} /></span>
              </Link>
            </Reveal>

            <Reveal className="tile tile-cream span-2">
              <p className="tile-kicker">Nitel Analiz · MAXQDA</p>
              <h3 className="tile-title">Görüşmelerden temalara.</h3>
              <p className="tile-text">Kod sistemi, tema haritaları ve kodlayıcılar arası uyum.</p>
              <div className="tile-visual"><QualVisual /></div>
              <Link href="/hizmetlerimiz/maxqda-analizi" className="tile-link" aria-label="MAXQDA ile Nitel Analiz Danışmanlığı sayfasını inceleyin">
                <span className="tile-plus"><Icon name="arrowUpRight" size={16} strokeWidth={2} /></span>
              </Link>
            </Reveal>

            <Reveal className="tile span-2" delay={80}>
              <p className="tile-kicker">Nicel Analiz · SPSS</p>
              <h3 className="tile-title">Doğru test, doğru yorum.</h3>
              <p className="tile-text">Varsayım kontrolü ve APA 7 uyumlu raporlama.</p>
              <div className="tile-visual"><StatsVisual /></div>
              <Link href="/hizmetlerimiz/spss-analizi" className="tile-link" aria-label="SPSS ile Nicel Analiz Danışmanlığı sayfasını inceleyin">
                <span className="tile-plus"><Icon name="arrowUpRight" size={16} strokeWidth={2} /></span>
              </Link>
            </Reveal>

            <Reveal className="tile tile-image span-2" delay={160}>
              <Image src="/images/dijital-calisma.webp" alt="" fill sizes="(max-width: 760px) 100vw, 34vw" />
              <p className="tile-kicker">İstatistiksel Analiz</p>
              <h3 className="tile-title">SPSS, R ve Python ile yöntem desteği.</h3>
              <p className="tile-text">Uygun test ve model seçimi, sonuçların akademik dille yorumlanması.</p>
              <Link href="/hizmetlerimiz/istatistiksel-analiz-danismanligi" className="tile-link" aria-label="İstatistiksel Analiz Danışmanlığı sayfasını inceleyin">
                <span className="tile-plus"><Icon name="arrowUpRight" size={16} strokeWidth={2} /></span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* KATEGORİLER */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Hizmetlerimiz</p>
            <h2 className="headline">
              Akademik yolculuğunuzun <span className="serif gold">her aşamasında.</span>
            </h2>
            <p className="lede">
              Lisans tez çalışmasından doçentlik başvurusuna, tüm süreçlerde yöntem ve danışmanlık desteği
              sunuyoruz.
            </p>
          </Reveal>
          <div className="cat-grid stretch">
            {categories.map((c, i) => {
              const list = servicesByCategory(c.key);
              return (
                <Reveal key={c.key} delay={i * 80}>
                  <article className="cat-card">
                    <span className="cat-icon"><Icon name={CATEGORY_ICON[c.key]} size={24} /></span>
                    <h3>{c.title}</h3>
                    <p>{c.short}</p>
                    <ul className="cat-list">
                      {list.map((s) => (
                        <li key={s.slug}>
                          <Link href={`/hizmetlerimiz/${s.slug}`}>
                            {s.title} <Icon name="arrowRight" size={16} />
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link href={`/hizmetlerimiz#${c.key}`} className="link-arrow">
                      Ayrıntılı inceleyin <Icon name="arrowRight" size={16} />
                    </Link>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* EDİTORYAL */}
      <section className="section section-gray">
        <div className="container split">
          <Reveal className="split-media">
            <Image src="/images/literatur-kaynaklari.webp" alt="Akademik literatür kaynakları ve kitaplar" fill sizes="(max-width: 760px) 100vw, 50vw" />
          </Reveal>
          <Reveal className="split-copy" delay={100}>
            <p className="eyebrow">Derinlikli çalışma</p>
            <h2 className="headline">
              Kaynağa ulaşmaktan öte, <span className="serif">doğru konumlandırmak.</span>
            </h2>
            <p className="lede">
              Literatür stratejisi, yöntem seçimi ve atıf düzenini birbiriyle konuşan tek bir araştırma
              sistemi olarak ele alıyoruz.
            </p>
            <ul className="checklist">
              <li><span className="check-dot"><Icon name="check" size={14} strokeWidth={2.4} /></span>Veri tabanlarında sistematik tarama stratejisi</li>
              <li><span className="check-dot"><Icon name="check" size={14} strokeWidth={2.4} /></span>Kaynakça ve atıf sistemleri (APA 7 vb.) danışmanlığı</li>
              <li><span className="check-dot"><Icon name="check" size={14} strokeWidth={2.4} /></span>Alan yazını haritası (literature map) çıkarma</li>
            </ul>
            <Link href="/hizmetlerimiz/literatur-tarama-danismanligi" className="link-arrow">
              Literatür danışmanlığını keşfedin <Icon name="arrowRight" size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container split reverse">
          <Reveal className="split-media">
            <Image src="/images/istatistiksel-analiz.webp" alt="İstatistiksel analiz grafikleri ve veri tabloları" fill sizes="(max-width: 760px) 100vw, 50vw" />
          </Reveal>
          <Reveal className="split-copy" delay={100}>
            <p className="eyebrow">Çalışma yaklaşımımız</p>
            <h2 className="headline">
              Öğretici, şeffaf, <span className="serif gold">izlenebilir.</span>
            </h2>
            <p className="lede">
              Her analiz ve danışmanlık süreci; gerekçeli yöntem seçimi, açıklamalı çıktılar ve düzenli
              geri bildirimle yürütülür.
            </p>
            <ul className="checklist">
              <li><span className="check-dot"><Icon name="check" size={14} strokeWidth={2.4} /></span>Analiz planı ve yöntem gerekçesi</li>
              <li><span className="check-dot"><Icon name="check" size={14} strokeWidth={2.4} /></span>Açıklamalı analiz ve proje dosyaları</li>
              <li><span className="check-dot"><Icon name="check" size={14} strokeWidth={2.4} /></span>APA 7 ve kurum kılavuzuna göre tablo kontrolü</li>
            </ul>
            <Link href="/hizmetlerimiz#analiz" className="link-arrow">
              Analiz hizmetlerini inceleyin <Icon name="arrowRight" size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SÜREÇ */}
      <section className="section section-gray">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Nasıl çalışıyoruz</p>
            <h2 className="headline">
              Dört adımda, <span className="serif">tam netlik.</span>
            </h2>
          </Reveal>
          <div className="steps stretch">
            {STEPS.map((s, i) => (
              <Reveal key={s.t} delay={i * 90}>
                <div className="step">
                  <div className="step-n">0{i + 1}</div>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ETİK */}
      <section className="section section-dark">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Etik ve mevzuat</p>
            <h2 className="headline">
              Özgün çalışma <span className="serif gold">size ait kalır.</span>
            </h2>
            <p className="lede">
              Kişi adına tez, makale, ödev veya başvuru dosyası hazırlamıyoruz. Yöntem, analiz, dil ve süreç
              danışmanlığıyla kendi çalışmanızı güçlü biçimde tamamlamanızı sağlıyoruz.
            </p>
          </Reveal>
          <Reveal className="ethic-grid" delay={100}>
            <div className="ethic">
              <Icon name="shield" size={28} />
              <h3>Danışmanlık esaslı</h3>
              <p>Her süreç araştırmacının anlamlı katkısı ve nihai kontrolüyle yürütülür.</p>
            </div>
            <div className="ethic">
              <Icon name="doc" size={28} />
              <h3>YÖK ve ÜAK düzenlemeleri</h3>
              <p>Bilimsel araştırma ve yayın etiği ile güncel başvuru şartları esas alınır; şifre talep edilmez.</p>
            </div>
            <div className="ethic">
              <Icon name="lock" size={28} />
              <h3>KVKK ve gizlilik</h3>
              <p>Paylaştığınız veri ve belgeler gizli tutulur, yalnızca hizmet amacıyla işlenir.</p>
            </div>
          </Reveal>
          <div className="actions-center">
            <Link href="/etik-ilkelerimiz" className="link-arrow">
              Etik ilkelerimizi okuyun <Icon name="arrowRight" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Sık sorulanlar</p>
            <h2 className="headline">Merak ettikleriniz.</h2>
          </Reveal>
          <Accordion items={HOME_FAQS} />
          <div className="actions-center">
            <Link href="/sikca-sorulan-sorular" className="link-arrow">
              Tüm soruları görün <Icon name="arrowRight" size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Cta />
    </main>
  );
}
