import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Etik İlkelerimiz",
  description:
    "Akademik Merkez'in akademik dürüstlük, özgünlük, sorumluluk ve kurum kurallarını gözetme konusundaki etik ilkeleri.",
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

          <h2>Kurum kuralları ve sorumluluk</h2>
          <p>
            Danışmanlık kapsamı belirlenirken ilgili üniversitenin güncel yazım kılavuzu,
            etik kuralları ve gerekli olduğunda ÜAK'ın ilan ettiği başvuru koşulları dikkate
            alınır. Akademik Merkez'in YÖK veya ÜAK ile kurumsal bağlantısı yoktur; bir
            başvurunun kabul edileceğini ya da akademik sonuç alınacağını garanti etmez.
            Çalışmanın içeriği, özgünlüğü, beyanları ve teslimi araştırmacının sorumluluğundadır.
          </p>

          <h2>Yasaklanan talepler</h2>
          <p>
            Kişi adına tez, makale veya ödev üretimi; veri uydurma ya da değiştirme; sahte
            kaynak oluşturma; intihal gizleme ve tespit sistemlerini yanıltma talepleri kabul
            edilmez. Editörlük, çeviri ve yöntem desteği araştırmacının anlamlı katkısını ve
            nihai kontrolünü ortadan kaldıracak biçimde yürütülmez.
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
