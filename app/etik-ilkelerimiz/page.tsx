import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Cta from "@/components/Cta";

export const metadata: Metadata = {
  title: "Etik İlkelerimiz",
  description:
    "Akademik Merkez'in akademik dürüstlük, YÖK ve ÜAK düzenlemelerine uyum, destek beyanı, gizlilik ve şeffaflık konusundaki etik ilkeleri.",
  alternates: { canonical: "/etik-ilkelerimiz" },
};

const PRINCIPLES = [
  {
    t: "Danışmanlık esaslı hizmet modeli",
    d: "Akademik Merkez olarak sunduğumuz tüm hizmetler; araştırma, yazım veya başvuru sürecinin öğrenci ya da akademisyen tarafından yürütülmesini destekleyen danışmanlık hizmetleridir. Herhangi bir tez, makale, ödev veya başvuru dosyasını müşterimiz adına baştan sona üretip teslim etmeyiz.",
  },
  {
    t: "YÖK, ÜAK ve kurum kurallarına uyum",
    d: "Danışmanlık kapsamı belirlenirken YÖK'ün bilimsel araştırma ve yayın etiğine ilişkin düzenlemeleri, ilgili üniversitenin güncel tez yazım kılavuzu ve etik kuralları ile doçentlik başvurularında ÜAK'ın yürürlükteki doçentlik mevzuatı ve başvuru şartları dikkate alınır. Akademik Merkez'in YÖK veya ÜAK ile kurumsal bağlantısı yoktur; bir başvurunun kabul edileceğini ya da akademik sonuç alınacağını garanti etmez. Çalışmanın içeriği, özgünlüğü, beyanları ve teslimi araştırmacının sorumluluğundadır.",
  },
  {
    t: "Analizde şeffaflık",
    d: "İstatistiksel, nitel ve mühendislik analizlerinde her adım gerekçesiyle açıklanır ve araştırmacıyla birlikte yürütülür. Amaç, araştırmacının analizini anlaması, tekrarlayabilmesi ve savunabilmesidir. Bulguların yorumu ve nihai metin araştırmacıya aittir.",
  },
  {
    t: "Destek beyanı",
    d: "Aldığınız yöntem, istatistik, dil editörlüğü veya çeviri desteğini; üniversitenizin ya da yayın yapacağınız derginin kuralları gerektiriyorsa teşekkür veya beyan bölümünde belirtmenizi öneririz. Alınan desteğin açıkça belirtilmesi, bilimsel araştırma ve yayın etiğinin temel ilkelerindendir.",
  },
  {
    t: "Hesap ve şifre güvenliği",
    d: "e-Devlet, YÖKSİS, ÜAK, üniversite bilgi sistemleri veya dergi gönderim sistemlerine ait şifreler hiçbir aşamada talep edilmez. Başvuru, yükleme ve gönderim işlemleri yalnızca araştırmacının kendisi tarafından yapılır.",
  },
  {
    t: "Gizlilik",
    d: "Sizinle paylaştığınız tüm bilgi ve belgeler gizli tutulur, yalnızca size hizmet sunmak amacıyla kullanılır ve KVKK Aydınlatma Metni'nde belirtilen esaslara göre işlenir.",
  },
  {
    t: "Şeffaflık",
    d: "Her danışmanlık sürecinin kapsamı, süresi ve ücreti önceden netleştirilir; sürpriz ücret veya kapsam değişikliği uygulanmaz.",
  },
];

export default function EthicsPage() {
  return (
    <main>
      <PageHero
        crumbs={[{ name: "Etik İlkelerimiz", href: "/etik-ilkelerimiz" }]}
        eyebrow="Etik ilkelerimiz"
        title={
          <>
            Akademik dürüstlük, <span className="serif gold">pazarlığa kapalı.</span>
          </>
        }
        lede="Akademik dürüstlüğe bağlılığımız, hizmet modelimizin temelidir. Nasıl çalıştığımızı ve neyi kabul etmediğimizi açıkça paylaşıyoruz."
      />

      <section className="section-sm">
        <div className="container">
          <div className="principles">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.t} className="principle">
                <div className="step-n">0{i + 1}</div>
                <div>
                  <h2>{p.t}</h2>
                  <p>{p.d}</p>
                </div>
              </Reveal>
            ))}
            <Reveal className="principle dark">
              <div className="step-n">✕</div>
              <div>
                <h2>Kabul etmediğimiz talepler</h2>
                <p>
                  Kişi adına tez, makale, ödev, proje veya başvuru dosyası hazırlanması; başkası adına sınav,
                  başvuru veya gönderim yapılması; veri uydurma, çarpıtma ya da değiştirme; sahte kaynak veya
                  atıf oluşturma; intihal gizleme ve benzerlik tespit sistemlerini yanıltma; haksız yazarlık
                  talepleri kabul edilmez. Editörlük, çeviri, analiz ve yöntem desteği araştırmacının anlamlı
                  katkısını ve nihai kontrolünü ortadan kaldıracak biçimde yürütülmez.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Cta />
    </main>
  );
}
