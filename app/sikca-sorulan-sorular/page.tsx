import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Accordion from "@/components/Accordion";
import JsonLd from "@/components/JsonLd";
import Cta from "@/components/Cta";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular",
  description:
    "Akademik Merkez hizmetleri; SPSS, ANSYS, MAXQDA ve Python analiz süreci, ücretlendirme, gizlilik ve etik danışmanlık çerçevesi hakkında sıkça sorulan sorular.",
  alternates: { canonical: "/sikca-sorulan-sorular" },
};

const FAQS = [
  {
    q: "Hizmetleriniz tam olarak neyi kapsıyor?",
    a: "Tez, makale ve doçentlik süreçlerinde yöntem danışmanlığı; SPSS, R, AMOS, SmartPLS, Stata ile istatistiksel analiz; ANSYS, Fluent, Abaqus ve MATLAB ile mühendislik simülasyonu; MAXQDA ve NVivo ile nitel analiz; Python ile veri bilimi ve yapay zekâ; literatür tarama, meta-analiz, dil editörlüğü, akademik çeviri ve biçim danışmanlığı sunuyoruz. Tüm hizmetlerimiz danışmanlık ve süreç desteği niteliğindedir.",
  },
  {
    q: "ANSYS analizi desteği hangi konuları kapsıyor?",
    a: "ANSYS Workbench, Mechanical, Fluent ve CFX ile statik yapısal, modal, termal, akışkanlar dinamiği (CFD) ve akışkan-yapı etkileşimi analizlerinde; geometri hazırlığı, mesh, sınır koşulları, yakınsama ve doğrulama adımlarında danışmanlık veriyoruz.",
  },
  {
    q: "MAXQDA ile nitel analiz nasıl yürütülüyor?",
    a: "Transkriptlerin MAXQDA projesine aktarılması, kod sisteminin kurulması, kodlama stratejisi, kod ilişkileri ve tema haritalarıyla görselleştirme ile kodlayıcılar arası uyum hesaplaması aşamalarında birlikte çalışıyoruz. Proje dosyası ve kod kitabı açıklamalı olarak paylaşılır.",
  },
  {
    q: "Python analizlerinde kodları teslim ediyor musunuz?",
    a: "Evet. Tüm analizler açıklamalı Jupyter Notebook ve gerektiğinde .py betikleri olarak, tekrarlanabilir ortam bilgisiyle (requirements.txt) paylaşılır. İsterseniz birebir oturumlarla kodun mantığını birlikte çalışırız.",
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
    a: "Evet. Paylaştığınız tüm bilgi, veri ve belgeler gizli tutulur, yalnızca size hizmet sunmak amacıyla kullanılır ve KVKK Aydınlatma Metni'nde belirtilen esaslara göre işlenir.",
  },
  {
    q: "Ücretlendirme nasıl belirleniyor?",
    a: "Ücret, hizmetin kapsamına, sürecin uzunluğuna ve çalışmanın niteliğine göre belirlenir. Ön görüşmede size özel, şeffaf bir fiyat teklifi sunulur; sürpriz ek ücret uygulanmaz.",
  },
  {
    q: "Süreç ne kadar sürüyor?",
    a: "Süre, hizmetin türüne ve çalışmanın kapsamına göre değişir. Ön görüşme sonrasında birlikte oluşturduğumuz süreç planında net bir zaman çizelgesi paylaşılır.",
  },
  {
    q: "Çevrim içi çalışabiliyor muyuz?",
    a: "Evet. Türkiye'nin her yerinden ve yurt dışından çevrim içi görüşmeler, ekran paylaşımlı oturumlar ve güvenli dosya paylaşımıyla çalışıyoruz.",
  },
  {
    q: "Danışmanlarınız kimlerden oluşuyor?",
    a: "Alanında uzman, ilgili disiplinlerde akademik deneyime ve ilgili yazılımlarda uygulama tecrübesine sahip danışmanlarla çalışıyoruz. Talebinizin konusuna göre en uygun danışman sizinle eşleştirilir.",
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

export default function FaqPage() {
  return (
    <main>
      <JsonLd data={faqSchema(FAQS)} />
      <PageHero
        crumbs={[{ name: "Sıkça Sorulan Sorular", href: "/sikca-sorulan-sorular" }]}
        eyebrow="Sık sorulanlar"
        title={
          <>
            Sorularınız, <span className="serif gold">net yanıtlar.</span>
          </>
        }
        lede="Hizmetlerimiz, analiz süreçleri, gizlilik ve ücretlendirme hakkında en çok merak edilenler."
      />

      <section className="section-sm">
        <div className="container">
          <Accordion items={FAQS} />
          <p className="center" style={{ marginTop: 40, color: "var(--muted)" }}>
            Aradığınız cevabı bulamadınız mı?{" "}
            <Link href="/iletisim" className="link-arrow" style={{ fontSize: "inherit" }}>
              Bizimle iletişime geçin
            </Link>
          </p>
        </div>
      </section>

      <Cta />
    </main>
  );
}
