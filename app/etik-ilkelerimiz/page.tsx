import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Cta from "@/components/Cta";

export const metadata: Metadata = {
  title: "Etik İlkelerimiz",
  description:
    "Akademik Merkez'in akademik dürüstlük, özgünlük, sorumluluk, gizlilik ve kurum kurallarını gözetme konusundaki etik ilkeleri.",
  alternates: { canonical: "/etik-ilkelerimiz" },
};

const PRINCIPLES = [
  {
    t: "Danışmanlık esaslı hizmet modeli",
    d: "Sunduğumuz tüm hizmetler; araştırma, yazım veya başvuru sürecinin öğrenci ya da akademisyen tarafından yürütülmesini destekleyen danışmanlık hizmetleridir. Herhangi bir tez, makale, ödev veya başvuru dosyasını müşterimiz adına baştan sona üretip teslim etmeyiz.",
  },
  {
    t: "Kurum kuralları ve sorumluluk",
    d: "Danışmanlık kapsamı belirlenirken ilgili üniversitenin güncel yazım kılavuzu, etik kuralları ve gerekli olduğunda ÜAK'ın ilan ettiği başvuru koşulları dikkate alınır. Akademik Merkez'in YÖK veya ÜAK ile kurumsal bağlantısı yoktur; bir başvurunun kabul edileceğini ya da akademik sonuç alınacağını garanti etmez. Çalışmanın içeriği, özgünlüğü, beyanları ve teslimi araştırmacının sorumluluğundadır.",
  },
  {
    t: "Analizde şeffaflık",
    d: "İstatistik, simülasyon, nitel analiz ve Python çalışmalarında her adım gerekçesiyle açıklanır; kod, model ve proje dosyaları araştırmacının anlayıp tekrarlayabileceği biçimde paylaşılır. Bulguların yorumu ve nihai metin araştırmacıya aittir.",
  },
  {
    t: "Gizlilik",
    d: "Sizinle paylaştığınız tüm bilgi ve belgeler gizli tutulur, yalnızca size hizmet sunmak amacıyla kullanılır ve KVKK Aydınlatma Metni'nde belirtilen esaslara göre işlenir.",
  },
  {
    t: "Şeffaf kapsam ve ücret",
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
        lede="Etik ilkelere bağlılığımız, hizmet modelimizin temelidir. Nasıl çalıştığımızı ve neyi asla yapmadığımızı açıkça paylaşıyoruz."
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
                  Kişi adına tez, makale veya ödev üretimi; veri uydurma ya da değiştirme; sahte kaynak
                  oluşturma; intihal gizleme ve tespit sistemlerini yanıltma talepleri kabul edilmez.
                  Editörlük, çeviri, analiz ve yöntem desteği araştırmacının anlamlı katkısını ve nihai
                  kontrolünü ortadan kaldıracak biçimde yürütülmez.
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
