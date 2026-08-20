import Link from "next/link";
import { services } from "@/lib/services";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="kicker" style={{ color: "#e4c675" }}>
              AKADEMİK DANIŞMANLIK VE SÜREÇ DESTEĞİ
            </div>
            <h1>
              Akademik çalışmanızı
              <span>doğru yöntemle, zamanında tamamlayın.</span>
            </h1>
            <p className="lead">
              Tez, makale ve doçentlik başvuru süreçlerinde yöntem, istatistiksel analiz,
              literatür tarama, dil editörlüğü ve akademik çeviri danışmanlığı sunuyoruz.
              Çalışmanızı sizin yerinize üretmiyoruz — doğru kurgulamanız ve güvenle
              tamamlamanız için yanınızda oluyoruz.
            </p>
            <div className="hero-actions">
              <Link href="/teklif-al" className="btn btn-primary">
                Ücretsiz Ön Görüşme İçin Teklif Al
              </Link>
              <Link href="/hizmetlerimiz" className="btn btn-outline-light">
                Hizmetleri İncele
              </Link>
            </div>
            <div className="trust-row">
              <div className="trust-item"><i>✓</i> YÖK ve ÜAK mevzuatına uygun danışmanlık</div>
              <div className="trust-item"><i>✓</i> Alanında uzman danışman kadrosu</div>
              <div className="trust-item"><i>✓</i> Gizlilik ve KVKK uyumlu süreç</div>
            </div>
          </div>

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
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="stat-row">
            <div className="stat-card"><div className="stat-num">8+</div><div className="stat-label">Uzmanlık alanı</div></div>
            <div className="stat-card"><div className="stat-num">%100</div><div className="stat-label">Danışmanlık esaslı hizmet</div></div>
            <div className="stat-card"><div className="stat-num">7/24</div><div className="stat-label">Talep bırakma imkanı</div></div>
            <div className="stat-card"><div className="stat-num">TR</div><div className="stat-label">YÖK/ÜAK uyumlu çerçeve</div></div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <div className="kicker">HİZMETLERİMİZ</div>
            <h2>Akademik yolculuğunuzun her aşamasında yanınızdayız</h2>
            <p className="lead">
              Lisans tez çalışmasından doçentlik başvurusuna, tüm süreçlerde yöntem ve
              danışmanlık desteği sunuyoruz.
            </p>
          </div>
          <div className="grid-3">
            {services.slice(0, 6).map((s) => (
              <Link key={s.slug} href={`/hizmetlerimiz/${s.slug}`} className="card">
                <div className="card-icon">{s.title.charAt(0)}</div>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                <span className="card-link">Detayları gör →</span>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: 30, textAlign: "center" }}>
            <Link href="/hizmetlerimiz" className="btn btn-secondary">Tüm hizmetleri gör</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="kicker">NASIL ÇALIŞIYORUZ</div>
            <h2>Dört adımda süreciniz netleşsin</h2>
          </div>
          <div className="step-row">
            <div className="step"><div className="step-num">01</div><h4>Teklif Al</h4><p>Formu doldurun, ihtiyacınızı kısaca anlatın.</p></div>
            <div className="step"><div className="step-num">02</div><h4>Ön Görüşme</h4><p>Uzman ekibimiz sizinle iletişime geçip alanınıza uygun danışmanı belirler.</p></div>
            <div className="step"><div className="step-num">03</div><h4>Planlama</h4><p>Süreç planı ve zaman çizelgesi birlikte oluşturulur.</p></div>
            <div className="step"><div className="step-num">04</div><h4>Danışmanlık Süreci</h4><p>Belirlenen plana göre düzenli danışmanlık desteği alırsınız.</p></div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="cta-band">
            <div>
              <h3>Akademik sürecinizi konuşalım</h3>
              <p>Formu doldurmanız yeterli — talebiniz doğrudan uzman ekibimize ulaşır.</p>
            </div>
            <Link href="/teklif-al" className="btn btn-primary">Hemen Teklif Al</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
