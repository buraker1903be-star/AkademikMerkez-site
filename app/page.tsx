import Link from "next/link";
import { services } from "@/lib/services";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="float-blob" style={{ width: 340, height: 340, top: -80, right: "8%", background: "rgba(199,154,68,0.28)" }} />
        <div className="float-blob" style={{ width: 260, height: 260, bottom: -60, left: "2%", background: "rgba(199,154,68,0.12)", animationDelay: "3s" }} />
        <div className="container hero-grid">
          <div>
            <Reveal>
              <div className="kicker" style={{ color: "#e4c675" }}>
                AKADEMİK DANIŞMANLIK VE SÜREÇ DESTEĞİ
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1>
                Akademik çalışmanızı
                <span>doğru yöntemle, zamanında tamamlayın.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="lead">
                Tez, makale ve doçentlik başvuru süreçlerinde yöntem, istatistiksel analiz,
                literatür tarama, dil editörlüğü ve akademik çeviri danışmanlığı sunuyoruz.
                Doğru kurgulamanız ve güvenle tamamlamanız için, sürecin her adımında
                yanınızda oluyoruz.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="hero-actions">
                <Link href="/teklif-al" className="btn btn-primary">
                  Ücretsiz Ön Görüşme İçin Teklif Al
                </Link>
                <Link href="/hizmetlerimiz" className="btn btn-outline-light">
                  Hizmetleri İncele
                </Link>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="trust-row">
                <div className="trust-item"><i>✓</i> YÖK ve ÜAK mevzuatına uygun danışmanlık</div>
                <div className="trust-item"><i>✓</i> Alanında uzman danışman kadrosu</div>
                <div className="trust-item"><i>✓</i> Gizlilik ve KVKK uyumlu süreç</div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="hero-card-wrap">
            <div className="hero-card">
              <h3>Talebinizi bırakın, sizi arayalım</h3>
              <p>Formu doldurun, uzman ekibimiz 24 saat içinde sizinle iletişime geçsin.</p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px", display: "grid", gap: 10 }}>
                {["Ücretsiz ön değerlendirme", "Alanınıza uygun danışman eşleşmesi", "Netlik ve şeffaf süreç planı"].map((t) => (
                  <li key={t} style={{ display: "flex", gap: 10, fontSize: 13.5, color: "#41525f", fontWeight: 600 }}>
                    <span style={{ color: "#b6892f" }}>●</span> {t}
                  </li>
                ))}
              </ul>
              <Link href="/teklif-al" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Teklif Al →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="stat-row">
              <div className="stat-card"><div className="stat-num"><CountUp to={8} suffix="+" /></div><div className="stat-label">Uzmanlık alanı</div></div>
              <div className="stat-card"><div className="stat-num"><CountUp to={100} prefix="%" /></div><div className="stat-label">Danışmanlık esaslı hizmet</div></div>
              <div className="stat-card"><div className="stat-num">7/24</div><div className="stat-label">Talep bırakma imkanı</div></div>
              <div className="stat-card"><div className="stat-num">TR</div><div className="stat-label">YÖK/ÜAK uyumlu çerçeve</div></div>
            </div>
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
                <Link href={`/hizmetlerimiz/${s.slug}`} className="card">
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
                <p>Formu doldurmanız yeterli — talebiniz doğrudan uzman ekibimize ulaşır.</p>
              </div>
              <Link href="/teklif-al" className="btn btn-primary">Hemen Teklif Al</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
