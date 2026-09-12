import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { OPERATOR_NAME, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description: "Akademik Merkez KVKK Aydınlatma Metni ve kişisel verilerin işlenmesi hakkında bilgilendirme.",
  alternates: { canonical: "/kvkk-aydinlatma-metni" },
  robots: { index: true, follow: true },
};

export default function KvkkPage() {
  return (
    <main>
      <PageHero
        crumbs={[{ name: "KVKK Aydınlatma Metni", href: "/kvkk-aydinlatma-metni" }]}
        eyebrow="Yasal bilgilendirme"
        title="KVKK Aydınlatma Metni"
        lede="6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında bilgilendirme."
      />

      <section className="section-sm">
        <div className="container prose">
          <p>
            Akademik Merkez markasının işletmecisi {OPERATOR_NAME} (&quot;Veri Sorumlusu&quot;) olarak,
            akademikmerkez.com üzerinden &quot;Teklif Al&quot; formu ile paylaştığınız ad-soyad, telefon,
            e-posta ve mesaj içeriğindeki kişisel verileriniz; 6698 sayılı Kişisel Verilerin Korunması Kanunu
            (&quot;KVKK&quot;) uyarınca aşağıda açıklanan kapsamda işlenmektedir.
          </p>

          <h2>Verilerin işlenme amacı</h2>
          <ul>
            <li>Talebinizi değerlendirmek ve sizinle iletişime geçmek</li>
            <li>Size uygun danışmanlık hizmetini planlamak</li>
            <li>Yasal yükümlülüklerin yerine getirilmesi</li>
          </ul>

          <h2>Verilerin saklanma süresi</h2>
          <p>
            Kişisel verileriniz, talebinizin değerlendirilmesi ve varsa aramızda kurulacak hizmet ilişkisinin
            gerektirdiği süre boyunca, ilgili mevzuatta öngörülen süreler saklı kalmak kaydıyla saklanır.
          </p>

          <h2>Haklarınız</h2>
          <p>
            KVKK&apos;nın 11. maddesi uyarınca; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse
            buna ilişkin bilgi talep etme, işlenme amacını öğrenme, yurt içinde/yurt dışında aktarıldığı
            üçüncü kişileri bilme, eksik/yanlış işlenmişse düzeltilmesini isteme, silinmesini/yok edilmesini
            isteme haklarına sahipsiniz. Bu haklarınızı kullanmak için{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a> adresinden bize ulaşabilirsiniz.
          </p>

          <h2>Rıza</h2>
          <p>
            &quot;Teklif Al&quot; formunu göndererek, yukarıda açıklanan amaçlarla kişisel verilerinizin
            işlenmesine açık rıza vermiş olursunuz.
          </p>
        </div>
      </section>
    </main>
  );
}
