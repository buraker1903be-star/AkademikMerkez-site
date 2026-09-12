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
    "Akademik Merkez hizmetleri, analiz danışmanlığı süreci, gizlilik, YÖK ve ÜAK düzenlemeleri ve etik danışmanlık çerçevesi hakkında sıkça sorulan sorular.",
  alternates: { canonical: "/sikca-sorulan-sorular" },
};

const FAQS = [
  {
    q: "Hizmetleriniz tam olarak neyi kapsıyor?",
    a: "Tez, makale ve doçentlik süreçlerinde yöntem, istatistiksel analiz, literatür tarama, anket tasarımı, dil editörlüğü, akademik çeviri, kaynakça/atıf uyumu ve jüri hazırlığı danışmanlığı sağlıyoruz. Analiz tarafında SPSS ile nicel analiz, MAXQDA ile nitel analiz, ANSYS ve Python analiz danışmanlığı sunuyoruz. Tüm hizmetlerimiz danışmanlık ve süreç desteği niteliğindedir; kapsamını Etik İlkelerimiz sayfamızda detaylı olarak açıklıyoruz.",
  },
  {
    q: "Analiz danışmanlığında analizi kim yapıyor?",
    a: "Analiz planı ve adımlar araştırmacıyla birlikte kurgulanır ve yürütülür; her adım gerekçesiyle açıklanır. Amaç, analizinizi anlamanız, tekrarlayabilmeniz ve savunabilmenizdir. Bulguların yorumu ve nihai metin araştırmacıya aittir.",
  },
  {
    q: "YÖK ve ÜAK ile bağlantınız var mı; sonuç garantisi veriyor musunuz?",
    a: "Hayır. Akademik Merkez bağımsız bir danışmanlık hizmetidir; YÖK, ÜAK veya herhangi bir üniversiteyle kurumsal bağlantısı yoktur. İlgili kurumların yayımladığı güncel düzenlemeleri dikkate alırız ancak kabul, yayın, mezuniyet veya akademik başarı garantisi vermeyiz. Nihai kontrol ve sorumluluk araştırmacıya aittir.",
  },
  {
    q: "e-Devlet, YÖKSİS veya ÜAK şifremi paylaşmam gerekiyor mu?",
    a: "Hayır. Bu şifreler hiçbir aşamada talep edilmez ve kimseyle paylaşılmamalıdır. Başvuru, yükleme ve gönderim işlemleri yalnızca araştırmacının kendisi tarafından yapılır.",
  },
  {
    q: "Aldığım danışmanlığı çalışmamda belirtmem gerekir mi?",
    a: "Üniversitenizin veya derginin kuralları gerektiriyorsa, aldığınız yöntem, istatistik, dil editörlüğü veya çeviri desteğini teşekkür ya da beyan bölümünde belirtmenizi öneririz.",
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
        lede="Hizmetlerimiz, süreç işleyişi ve gizlilik hakkında en çok merak edilenler."
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
