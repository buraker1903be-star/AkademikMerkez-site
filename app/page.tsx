import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import Accordion from "@/components/Accordion";
import JsonLd from "@/components/JsonLd";
import Cta from "@/components/Cta";
import Icon, { CATEGORY_ICON } from "@/components/Icon";
import { FlowVisual, MeshVisual, NetworkVisual, PythonCode, QualVisual, StatsVisual } from "@/components/Visuals";
import { categories, services, servicesByCategory, toolCount } from "@/lib/services";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const MARQUEE = [
  "SPSS", "R", "Python", "ANSYS Fluent", "ANSYS Mechanical", "MAXQDA", "NVivo", "ATLAS.ti",
  "AMOS", "SmartPLS", "Stata", "EViews", "MATLAB", "Simulink", "Abaqus", "COMSOL",
  "Minitab", "TensorFlow", "PyTorch", "scikit-learn", "VOSviewer", "Zotero", "LaTeX", "Power BI",
];

const STEPS = [
  { t: "Talebinizi paylaşın", d: "Formu doldurun veya WhatsApp'tan yazın; ihtiyacınızı birkaç cümleyle anlatın." },
  { t: "Ön görüşme", d: "Alanınıza uygun uzman danışman sizinle iletişime geçer, kapsamı birlikte netleştirirsiniz." },
  { t: "Şeffaf plan", d: "Kapsam, takvim ve ücret yazılı olarak paylaşılır; sürpriz maliyet yoktur." },
  { t: "Danışmanlık süreci", d: "Plan doğrultusunda düzenli oturumlar, açıklamalı çıktılar ve dosya takibi." },
];

const HOME_FAQS = [
  {
    q: "Akademik Merkez nedir?",
    a: "Akademik Merkez; lisans, yüksek lisans, doktora öğrencileri ve akademisyenlere tez, makale ve doçentlik süreçlerinde yöntem, istatistiksel analiz, mühendislik simülasyonu, nitel analiz, Python ile veri bilimi, literatür, dil editörlüğü ve akademik çeviri alanlarında danışmanlık veren bağımsız bir akademik danışmanlık merkezidir.",
  },
  {
    q: "Hangi yazılımlarla analiz desteği veriyorsunuz?",
    a: "SPSS, R, AMOS, SmartPLS, Stata ve EViews ile nicel analiz; ANSYS Workbench, Fluent, Abaqus, COMSOL ve MATLAB ile mühendislik simülasyonu; MAXQDA, NVivo ve ATLAS.ti ile nitel analiz; Python (pandas, scikit-learn, TensorFlow, PyTorch) ile veri bilimi ve yapay zekâ çalışmalarında destek veriyoruz.",
  },
  {
    q: "ANSYS, MAXQDA veya Python analizi süreci nasıl işliyor?",
    a: "Önce araştırma sorunuzu ve verinizi inceleyerek analiz planını birlikte kuruyoruz. Ardından uygulamayı adım adım yürütüyor; model, kod veya proje dosyalarını açıklamalı olarak paylaşıyoruz. Bulguları yorumlamanız ve savunabilmeniz için rehberlik ediyoruz.",
  },
  {
    q: "Tezimi veya makalemi sizin yazmanız mümkün mü?",
    a: "Hayır. Etik ilkelerimiz gereği kişi adına tez, makale veya ödev üretmiyoruz. Yöntem, analiz, dil ve süreç danışmanlığıyla kendi çalışmanızı güçlü biçimde tamamlamanızı destekliyoruz.",
  },
  {
    q: "Nasıl teklif alabilirim?",
    a: "Teklif Al formunu doldurmanız veya WhatsApp'tan yazmanız yeterli. Talebiniz genellikle 24 saat içinde değerlendirilir ve kapsam, takvim ve ücret içeren şeffaf bir teklif sunulur.",
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
          {/* Hero, JavaScript beklemeden yalnızca CSS ile canlanır (LCP ve SEO için). */}
          <div className="intro">
            <Link href="/hizmetlerimiz" className="hero-badge">
              <b>Yeni</b> ANSYS, MAXQDA ve Python analiz hizmetleri
              <Icon name="arrowRight" size={14} strokeWidth={2} />
            </Link>
          </div>
          <h1 className="display intro" style={{ animationDelay: "80ms" }}>
            Akademik mükemmellik,
            <br />
            <span className="serif gold">kişiye özel.</span>
          </h1>
          <p className="lede intro" style={{ animationDelay: "160ms" }}>
            Tez, makale ve doçentlik süreçlerinde; istatistikten ANSYS simülasyonuna, MAXQDA ile nitel
            analizden Python ile yapay zekâya kadar {services.length} uzmanlık alanında etik, şeffaf ve
            öğretici akademik danışmanlık.
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
              sizes="(max-width: 1368px) 100vw, 1368px"
            />
          </div>
          <div className="float-card fc-1" aria-hidden="true">
            <span className="fc-icon"><Icon name="cube" /></span>
            <span><strong>ANSYS Fluent</strong><small>CFD ve ısı transferi</small></span>
          </div>
          <div className="float-card fc-2" aria-hidden="true">
            <span className="fc-icon"><Icon name="quote" /></span>
            <span><strong>MAXQDA</strong><small>Tematik kodlama</small></span>
          </div>
          <div className="float-card fc-3" aria-hidden="true">
            <span className="fc-icon"><Icon name="code" /></span>
            <span><strong>Python</strong><small>Makine öğrenmesi</small></span>
          </div>
        </div>
      </section>

      {/* YAZILIM BANDI */}
      <section className="marquee-section" aria-label="Danışmanlık verdiğimiz yazılımlar">
        <p className="marquee-label">{toolCount}+ yazılım, kütüphane ve araçta uzman danışmanlık</p>
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
                <div className="stat-label">Uzmanlık alanı</div>
              </div>
              <div className="stat">
                <div className="stat-value"><CountUp to={toolCount} suffix="+" /></div>
                <div className="stat-label">Yazılım, kütüphane ve araç</div>
              </div>
              <div className="stat">
                <div className="stat-value"><CountUp to={categories.length} /></div>
                <div className="stat-label">Disiplin kategorisi</div>
              </div>
              <div className="stat">
                <div className="stat-value"><CountUp to={24} suffix=" sa" /></div>
                <div className="stat-label">İçinde ilk dönüş</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ANALİZ STÜDYOSU */}
      <section className="section section-gray" id="analiz">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Analiz stüdyosu</p>
            <h2 className="headline">
              Verinizin dili ne olursa olsun, <span className="serif">biz konuşuyoruz.</span>
            </h2>
            <p className="lede">
              İstatistikten simülasyona, nitel kodlamadan yapay zekâya; her analiz açıklamalı,
              tekrarlanabilir ve savunulabilir.
            </p>
          </Reveal>

          <div className="bento">
            <Reveal className="tile tile-dark span-4">
              <p className="tile-kicker">Python Veri Analizi</p>
              <h3 className="tile-title">Kodun her satırı, anlayacağınız dilde.</h3>
              <p className="tile-text">pandas, SciPy, scikit-learn ve PyTorch ile açıklamalı Jupyter Notebook&apos;lar ve tekrarlanabilir analiz.</p>
              <div className="tile-visual"><PythonCode /></div>
              <Link href="/hizmetlerimiz/python-analizi" className="tile-link" aria-label="Python Veri Analizi hizmetini inceleyin">
                <span className="tile-plus"><Icon name="arrowUpRight" size={16} strokeWidth={2} /></span>
              </Link>
            </Reveal>

            <Reveal className="tile span-2" delay={80}>
              <p className="tile-kicker">ANSYS Analizi</p>
              <h3 className="tile-title">Gerilme, ısı ve akış.</h3>
              <p className="tile-text">Workbench, Mechanical ve Fluent ile doğrulanmış simülasyonlar.</p>
              <div className="tile-visual"><MeshVisual /></div>
              <Link href="/hizmetlerimiz/ansys-analizi" className="tile-link" aria-label="ANSYS Analizi hizmetini inceleyin">
                <span className="tile-plus"><Icon name="arrowUpRight" size={16} strokeWidth={2} /></span>
              </Link>
            </Reveal>

            <Reveal className="tile tile-cream span-2">
              <p className="tile-kicker">MAXQDA Analizi</p>
              <h3 className="tile-title">Görüşmelerden temalara.</h3>
              <p className="tile-text">Kod sistemi, tema haritaları ve kodlayıcılar arası uyum.</p>
              <div className="tile-visual"><QualVisual /></div>
              <Link href="/hizmetlerimiz/maxqda-analizi" className="tile-link" aria-label="MAXQDA Analizi hizmetini inceleyin">
                <span className="tile-plus"><Icon name="arrowUpRight" size={16} strokeWidth={2} /></span>
              </Link>
            </Reveal>

            <Reveal className="tile span-2" delay={80}>
              <p className="tile-kicker">İstatistiksel Analiz</p>
              <h3 className="tile-title">SPSS, R, AMOS, SmartPLS.</h3>
              <p className="tile-text">Doğru test, doğru model ve APA 7 uyumlu raporlama.</p>
              <div className="tile-visual"><StatsVisual /></div>
              <Link href="/hizmetlerimiz/istatistiksel-analiz-danismanligi" className="tile-link" aria-label="İstatistiksel Analiz hizmetini inceleyin">
                <span className="tile-plus"><Icon name="arrowUpRight" size={16} strokeWidth={2} /></span>
              </Link>
            </Reveal>

            <Reveal className="tile tile-dark span-2" delay={160}>
              <p className="tile-kicker">Makine Öğrenmesi</p>
              <h3 className="tile-title">Yapay zekâ, akademik titizlikle.</h3>
              <p className="tile-text">XGBoost&apos;tan Transformer&apos;a, SHAP ile açıklanabilir modeller.</p>
              <div className="tile-visual"><NetworkVisual /></div>
              <Link href="/hizmetlerimiz/makine-ogrenmesi-yapay-zeka" className="tile-link" aria-label="Makine Öğrenmesi ve Yapay Zekâ hizmetini inceleyin">
                <span className="tile-plus"><Icon name="arrowUpRight" size={16} strokeWidth={2} /></span>
              </Link>
            </Reveal>

            <Reveal className="tile tile-dark span-3">
              <p className="tile-kicker">ANSYS Fluent CFD</p>
              <h3 className="tile-title">Akışı görün. Isıyı ölçün.</h3>
              <p className="tile-text">Türbülans modellemesi, ısı değiştiriciler, çok fazlı akış ve doğrulama çalışmaları.</p>
              <div className="tile-visual"><FlowVisual /></div>
              <Link href="/hizmetlerimiz/ansys-fluent-cfd-analizi" className="tile-link" aria-label="ANSYS Fluent CFD Analizi hizmetini inceleyin">
                <span className="tile-plus"><Icon name="arrowUpRight" size={16} strokeWidth={2} /></span>
              </Link>
            </Reveal>

            <Reveal className="tile tile-image span-3" delay={80}>
              <Image src="/images/dijital-calisma.webp" alt="" fill sizes="(max-width: 760px) 100vw, 50vw" />
              <p className="tile-kicker">Tez ve Yayın</p>
              <h3 className="tile-title">Tezden yayına, stratejik rehberlik.</h3>
              <p className="tile-text">Yöntem tasarımı, sistematik derleme, dergi seçimi ve hakem yanıtı.</p>
              <Link href="/hizmetlerimiz#tez" className="tile-link" aria-label="Tez, Yayın ve Akademik Kariyer hizmetlerini inceleyin">
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
            <p className="eyebrow">Uzmanlık alanları</p>
            <h2 className="headline">
              Altı disiplin. <span className="serif gold">Tek merkez.</span>
            </h2>
            <p className="lede">
              Araştırmanızın hangi aşamasında olursanız olun; alanınıza uygun uzman danışmanla eşleşir,
              tek bir noktadan ilerlersiniz.
            </p>
          </Reveal>
          <div className="cat-grid stretch">
            {categories.map((c, i) => {
              const list = servicesByCategory(c.key);
              return (
                <Reveal key={c.key} delay={(i % 3) * 80}>
                  <article className="cat-card">
                    <span className="cat-icon"><Icon name={CATEGORY_ICON[c.key]} size={24} /></span>
                    <h3>{c.title}</h3>
                    <p>{c.short}</p>
                    <ul className="cat-list">
                      {list.slice(0, 4).map((s) => (
                        <li key={s.slug}>
                          <Link href={`/hizmetlerimiz/${s.slug}`}>
                            {s.title} <Icon name="arrowRight" size={16} />
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link href={`/hizmetlerimiz#${c.key}`} className="link-arrow">
                      Kategorideki {list.length} hizmetin tümü <Icon name="arrowRight" size={16} />
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
              <li><span className="check-dot"><Icon name="check" size={14} strokeWidth={2.4} /></span>Web of Science, Scopus ve TR Dizin&apos;de sistematik tarama</li>
              <li><span className="check-dot"><Icon name="check" size={14} strokeWidth={2.4} /></span>PRISMA 2020 uyumlu sistematik derleme ve meta-analiz</li>
              <li><span className="check-dot"><Icon name="check" size={14} strokeWidth={2.4} /></span>VOSviewer ve Bibliometrix ile bilim haritalama</li>
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
            <p className="eyebrow">Analiz felsefemiz</p>
            <h2 className="headline">
              Veriyi yalnızca hesaplamayın. <span className="serif gold">Doğru yorumlayın.</span>
            </h2>
            <p className="lede">
              Her analiz; varsayım kontrolü, gerekçeli yöntem seçimi ve bulguları savunabilmeniz için
              açıklamalı bir rehberle birlikte teslim edilir.
            </p>
            <ul className="checklist">
              <li><span className="check-dot"><Icon name="check" size={14} strokeWidth={2.4} /></span>Analiz planı ve varsayım kontrol raporu</li>
              <li><span className="check-dot"><Icon name="check" size={14} strokeWidth={2.4} /></span>Tekrarlanabilir kod, model ve proje dosyaları</li>
              <li><span className="check-dot"><Icon name="check" size={14} strokeWidth={2.4} /></span>APA 7 ve dergi standardında tablo ve şekiller</li>
            </ul>
            <Link href="/hizmetlerimiz#nicel" className="link-arrow">
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
            <p className="eyebrow">Etik çerçeve</p>
            <h2 className="headline">
              Özgün çalışma <span className="serif gold">size ait kalır.</span>
            </h2>
            <p className="lede">
              Kişi adına tez, makale veya ödev üretmiyoruz. Yöntem, analiz, dil ve süreç danışmanlığıyla
              kendi çalışmanızı güçlü biçimde tamamlamanızı sağlıyoruz.
            </p>
          </Reveal>
          <Reveal className="ethic-grid" delay={100}>
            <div className="ethic">
              <Icon name="shield" size={28} />
              <h3>Danışmanlık esaslı</h3>
              <p>Her süreç araştırmacının anlamlı katkısı ve nihai kontrolüyle yürütülür.</p>
            </div>
            <div className="ethic">
              <Icon name="lock" size={28} />
              <h3>Gizlilik ve KVKK</h3>
              <p>Paylaştığınız veri ve belgeler gizli tutulur, yalnızca hizmet amacıyla işlenir.</p>
            </div>
            <div className="ethic">
              <Icon name="doc" size={28} />
              <h3>Şeffaf kapsam</h3>
              <p>Kapsam, takvim ve ücret işe başlamadan yazılı olarak netleştirilir.</p>
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
