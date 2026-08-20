import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <Image src="/images/hero-akademik-merkez.webp" alt="Akademik araştırma çalışma masası" fill priority sizes="100vw" className="hero-background" />
        <div className="hero-overlay" />
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />
        <div className="container hero-grid">
          <div>
            <Reveal>
              <div className="kicker" style={{ color: "#e4c675" }}>
                ETİK AKADEMİK DANIŞMANLIK
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1>
                Araştırmanızı daha güçlü bir
                <span>akademik zeminde ilerletin.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="lead">
                Tez, makale ve doçentlik başvurularında yöntem, analiz, literatür,
                dil ve biçim danışmanlığı. Özgün çalışma size ait kalır; biz süreci
                şeffaf, öğretici ve izlenebilir hâle getiririz.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="hero-actions">
                <Link href="/teklif-al" className="btn btn-primary">
                  Ön Görüşme Talebi
                </Link>
                <Link href="/hizmetlerimiz" className="btn btn-outline-light">
                  Hizmetleri İncele
                </Link>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="trust-row">
                <div className="trust-item"><i>✓</i> Akademik dürüstlük odaklı</div>
                <div className="trust-item"><i>✓</i> Uzmanlık alanına göre eşleşme</div>
                <div className="trust-item"><i>✓</i> KVKK çerçevesinde veri işleme</div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="hero-card-wrap">
            <div className="hero-card hero-glass-card">
              <span className="eyebrow">Kişiye özel süreç</span>
              <h3>Önce ihtiyacı anlıyor, sonra kapsamı birlikte belirliyoruz.</h3>
              <p>Her çalışma; alan, kurum kılavuzu ve araştırma aşamasına göre ayrı değerlendirilir.</p>
              <Link href="/etik-ilkelerimiz" className="text-link">Etik çalışma çerçevemizi inceleyin <span>↗</span></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="stat-row">
              <div className="stat-card"><div className="stat-num"><CountUp to={8} suffix="+" /></div><div className="stat-label">Danışmanlık başlığı</div></div>
              <div className="stat-card"><div className="stat-num"><CountUp to={100} prefix="%" /></div><div className="stat-label">Danışmanlık ve editörlük modeli</div></div>
              <div className="stat-card"><div className="stat-num">7/24</div><div className="stat-label">Talep bırakma imkanı</div></div>
              <div className="stat-card"><div className="stat-num">Etik</div><div className="stat-label">Özgünlük sorumluluğu araştırmacıda</div></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section editorial-section">
        <div className="container editorial-grid">
          <Reveal className="editorial-media">
            <Image src="/images/literatur-kaynaklari.webp" alt="Akademik literatür kaynakları" fill sizes="(max-width: 900px) 100vw, 50vw" />
          </Reveal>
          <Reveal delay={100} className="editorial-copy">
            <div className="kicker">DERİNLİKLİ ÇALIŞMA</div>
            <h2>Kaynağa ulaşmaktan öte, kaynağı doğru konumlandırmak.</h2>
            <p className="lead">Literatür stratejisi, yöntem seçimi ve atıf düzenini birbiriyle konuşan tek bir araştırma sistemi olarak ele alıyoruz.</p>
            <Link href="/hizmetlerimiz/literatur-tarama-danismanligi" className="text-link">Literatür danışmanlığını keşfedin <span>→</span></Link>
          </Reveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div className="kicker">HİZMETLERİMİZ</div>
              <h2>Akademik yolculuğunuzun her aşamasında yanınızdayız</h2>
              <p className="lead">
                Lisans tez çalışmasından doçentlik başvurusuna, tüm süreçlerde yöntem ve
                danışmanlık desteği sunuyoruz.
              </p>
            </div>
          </Reveal>
          <div className="grid-3">
            {services.slice(0, 6).map((s, i) => (
              <Reveal key={s.slug} delay={i * 70}>
                <Link href={`/hizmetlerimiz/${s.slug}`} className="card service-card">
                  <div className="service-card-top"><span>0{i + 1}</span><b>↗</b></div>
                  <div className="card-icon">{s.title.charAt(0)}</div>
                  <h3>{s.title}</h3>
                  <p>{s.short}</p>
                  <span className="card-link">Detayları gör →</span>
                </Link>
              </Reveal>
            ))}
          </div>
          <div style={{ marginTop: 30, textAlign: "center" }}>
            <Link href="/hizmetlerimiz" className="btn btn-secondary">Tüm hizmetleri gör</Link>
          </div>
        </div>
      </section>

      <section className="section showcase-section">
        <div className="container showcase-grid">
          <Reveal className="showcase-card showcase-card-large">
            <Image src="/images/istatistiksel-analiz.webp" alt="İstatistiksel analiz danışmanlığı" fill sizes="(max-width: 900px) 100vw, 62vw" />
            <div className="showcase-shade" />
            <div className="showcase-content"><span>Analiz</span><h3>Veriyi yalnızca hesaplamayın. Doğru yorumlayın.</h3></div>
          </Reveal>
          <Reveal delay={100} className="showcase-card">
            <Image src="/images/dijital-calisma.webp" alt="Dijital akademik çalışma" fill sizes="(max-width: 900px) 100vw, 38vw" />
            <div className="showcase-shade" />
            <div className="showcase-content"><span>Editörlük</span><h3>Dilinizi koruyan akademik netlik.</h3></div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div className="kicker">NASIL ÇALIŞIYORUZ</div>
              <h2>Dört adımda süreciniz netleşsin</h2>
            </div>
          </Reveal>
          <div className="step-row">
            {[
              { n: "01", t: "Teklif Al", d: "Formu doldurun, ihtiyacınızı kısaca anlatın." },
              { n: "02", t: "Ön Görüşme", d: "Uzman ekibimiz sizinle iletişime geçip alanınıza uygun danışmanı belirler." },
              { n: "03", t: "Planlama", d: "Süreç planı ve zaman çizelgesi birlikte oluşturulur." },
              { n: "04", t: "Danışmanlık Süreci", d: "Belirlenen plana göre düzenli danışmanlık desteği alırsınız." },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <div className="step"><div className="step-num">{s.n}</div><h4>{s.t}</h4><p>{s.d}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <Reveal>
            <div className="cta-band">
              <div className="float-blob" style={{ width: 220, height: 220, top: -60, right: "10%", background: "rgba(199,154,68,0.22)" }} />
              <div>
                <h3>Akademik sürecinizi konuşalım</h3>
                <p>Kapsam, takvim ve sorumlulukları işe başlamadan önce birlikte netleştirelim.</p>
              </div>
              <Link href="/teklif-al" className="btn btn-primary">Hemen Teklif Al</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
