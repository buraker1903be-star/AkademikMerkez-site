import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Etik İlkelerimiz",
  description:
    "Akademik Merkez'in akademik dürüstlük, YÖK ve ÜAK mevzuatına uygunluk konusundaki etik ilkeleri.",
  alternates: { canonical: "/etik-ilkelerimiz" },
};

export default function EthicsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">Anasayfa / Etik İlkelerimiz</div>
          <h1>Etik İlkelerimiz</h1>
          <p>Akademik dürüstlüğe bağlılığımız, hizmet modelimizin temelidir.</p>
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <h2>Danışmanlık esaslı hizmet modeli</h2>
          <p>
            Akademik Merkez olarak sunduğumuz tüm hizmetler; araştırma, yazım veya başvuru
            sürecinin <strong>öğrenci ya da akademisyen tarafından yürütülmesini destekleyen</strong>{" "}
            danışmanlık hizmetleridir. Herhangi bir tez, makale, ödev veya başvuru dosyasını
            müşterimiz adına baştan sona üretip teslim etmeyiz.
          </p>

          <h2>Mevzuata uygunluk</h2>
          <p>
            Hizmetlerimizi, Yükseköğretim Kurulu (YÖK) ve Üniversitelerarası Kurul (ÜAK)
            mevzuatı ile akademik kurumların intihal ve akademik dürüstlük politikalarına
            uygun şekilde tasarlıyoruz. Danışmanlarımız, çalışmanın özgünlüğünün ve
            sorumluluğunun her zaman öğrenci/araştırmacıda kaldığı bir çerçevede destek
            verir.
          </p>

          <h2>Gizlilik</h2>
          <p>
            Sizinle paylaştığınız tüm bilgi ve belgeler gizli tutulur, yalnızca size hizmet
            sunmak amacıyla kullanılır ve KVKK Aydınlatma Metni'nde belirtilen esaslara göre
            işlenir.
          </p>

          <h2>Şeffaflık</h2>
          <p>
            Her danışmanlık sürecinin kapsamı, süresi ve ücreti önceden netleştirilir;
            sürpriz ücret veya kapsam değişikliği uygulanmaz.
          </p>
        </div>
      </section>
    </main>
  );
}
