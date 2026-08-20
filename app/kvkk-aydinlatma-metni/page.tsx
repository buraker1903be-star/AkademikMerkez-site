import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description: "Akademik Merkez KVKK Aydınlatma Metni ve kişisel verilerin işlenmesi hakkında bilgilendirme.",
  alternates: { canonical: "/kvkk-aydinlatma-metni" },
  robots: { index: true, follow: true },
};

export default function KvkkPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">Anasayfa / KVKK Aydınlatma Metni</div>
          <h1>KVKK Aydınlatma Metni</h1>
          <p>6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında bilgilendirme.</p>
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <p>
            Akademik Merkez ("Veri Sorumlusu") olarak, akademikmerkez.com üzerinden
            "Teklif Al" formu ile paylaştığınız ad-soyad, telefon, e-posta ve mesaj
            içeriğindeki kişisel verileriniz; 6698 sayılı Kişisel Verilerin Korunması Kanunu
            ("KVKK") uyarınca aşağıda açıklanan kapsamda işlenmektedir.
          </p>

          <h2>Verilerin işlenme amacı</h2>
          <ul>
            <li>Talebinizi değerlendirmek ve sizinle iletişime geçmek</li>
            <li>Size uygun danışmanlık hizmetini planlamak</li>
            <li>Yasal yükümlülüklerin yerine getirilmesi</li>
          </ul>

          <h2>Verilerin saklanma süresi</h2>
          <p>
            Kişisel verileriniz, talebinizin değerlendirilmesi ve varsa aramızda kurulacak
            hizmet ilişkisinin gerektirdiği süre boyunca, ilgili mevzuatta öngörülen süreler
            saklı kalmak kaydıyla saklanır.
          </p>

          <h2>Haklarınız</h2>
          <p>
            KVKK'nın 11. maddesi uyarınca; kişisel verilerinizin işlenip işlenmediğini
            öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacını öğrenme,
            yurt içinde/yurt dışında aktarıldığı üçüncü kişileri bilme, eksik/yanlış işlenmişse
            düzeltilmesini isteme, silinmesini/yok edilmesini isteme haklarına sahipsiniz. Bu
            haklarınızı kullanmak için{" "}
            <a href="mailto:info@akademikmerkez.com" style={{ color: "var(--gold-dark)", fontWeight: 700 }}>
              info@akademikmerkez.com
            </a>{" "}
            adresinden bize ulaşabilirsiniz.
          </p>

          <h2>Rıza</h2>
          <p>
            "Teklif Al" formunu göndererek, yukarıda açıklanan amaçlarla kişisel
            verilerinizin işlenmesine açık rıza vermiş olursunuz.
          </p>
        </div>
      </section>
    </main>
  );
}
