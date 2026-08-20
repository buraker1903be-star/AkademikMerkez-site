import type { Metadata } from "next";
import Link from "next/link";
import Accordion from "@/components/Accordion";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular",
  description:
    "Akademik Merkez hizmetleri, süreç işleyişi, gizlilik ve etik danışmanlık çerçevesi hakkında sıkça sorulan sorular.",
  alternates: { canonical: "/sikca-sorulan-sorular" },
};

const FAQS = [
  {
    q: "Hizmetleriniz tam olarak neyi kapsıyor?",
    a: "Tez, makale ve doçentlik süreçlerinde yöntem, istatistiksel analiz, literatür tarama, dil editörlüğü, akademik çeviri ve kaynakça/atıf uyum danışmanlığı sağlıyoruz. Tüm hizmetlerimiz danışmanlık ve süreç desteği niteliğindedir; kapsamını Etik İlkelerimiz sayfamızda detaylı olarak açıklıyoruz.",
  },
  {
    q: "YÖK ve ÜAK ile bağlantınız var mı; sonuç garantisi veriyor musunuz?",
    a: "Hayır. Akademik Merkez bağımsız bir danışmanlık hizmetidir; YÖK, ÜAK veya herhangi bir üniversiteyle kurumsal bağlantısı yoktur. İlgili kurumun yayımladığı güncel ölçütleri dikkate alırız ancak kabul, yayın, mezuniyet veya akademik başarı garantisi vermeyiz. Nihai kontrol ve sorumluluk araştırmacıya aittir.",
  },
  {
    q: "Teklif Al formunu doldurduktan sonra ne oluyor?",
    a: "Talebiniz uzman ekibimize ulaşır ve genellikle 24 saat içinde sizinle iletişime geçilir. İhtiyacınıza uygun danışmanla eşleştirildikten sonra birlikte bir süreç planı ve zaman çizelgesi oluşturulur.",
  },
  {
    q: "Bilgilerim ve çalışmam gizli tutuluyor mu?",
    a: "Evet. Paylaştığınız tüm bilgi ve belgeler gizli tutulur, yalnızca size hizmet sunmak amacıyla kullanılır ve KVKK Aydınlatma Metni'nde belirtilen esaslara göre işlenir.",
  },
  {
    q: "Ücretlendirme nasıl belirleniyor?",
    a: "Ücret, hizmetin kapsamına, sürecin uzunluğuna ve çalışmanın niteliğine göre belirlenir. Teklif Al formunu doldurduktan sonra yapılan ön görüşmede size özel, şeffaf bir fiyat teklifi sunulur; sürpriz ek ücret uygulanmaz.",
  },
  {
    q: "Süreç ne kadar sürüyor?",
    a: "Süre, hizmetin türüne ve çalışmanın kapsamına göre değişir. Ön görüşme sonrasında birlikte oluşturduğumuz süreç planında net bir zaman çizelgesi paylaşılır.",
  },
  {
    q: "Danışmanlarınız kimlerden oluşuyor?",
    a: "Alanında uzman, ilgili disiplinlerde akademik deneyime sahip danışmanlarla çalışıyoruz. Talebinizin konusuna göre en uygun danışman sizinle eşleştirilir.",
  },
  {
    q: "Sürecimi nasıl takip edebilirim?",
    a: "Talebiniz oluşturulduktan sonra size iletilen takip kodu ile dosya durumunuzu Dosya Takip sayfamızdan istediğiniz zaman görüntüleyebilirsiniz.",
  },
  {
    q: "Sadece belirli üniversite veya bölümlere mi hizmet veriyorsunuz?",
    a: "Hayır. Türkiye'deki tüm üniversitelerden lisans, yüksek lisans, doktora öğrencilerine ve doçentlik başvurusu hazırlayan akademisyenlere, disiplin fark etmeksizin hizmet veriyoruz.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">Anasayfa / Sıkça Sorulan Sorular</div>
          <h1>Sıkça Sorulan Sorular</h1>
          <p>Hizmetlerimiz, süreç işleyişi ve gizlilik hakkında en çok merak edilenler.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 820, margin: "0 auto" }}>
          <Accordion items={FAQS} />
          <p style={{ textAlign: "center", color: "var(--muted)", marginTop: 36, fontSize: 14.5 }}>
            Aradığınız cevabı bulamadınız mı?{" "}
            <Link href="/iletisim" style={{ color: "var(--gold-dark)", fontWeight: 700 }}>
              Bizimle iletişime geçin
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
