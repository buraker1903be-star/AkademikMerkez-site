import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Cta from "@/components/Cta";
import Icon, { CATEGORY_ICON } from "@/components/Icon";
import { categories, services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Akademik Merkez; tez, makale ve doçentlik süreçlerinde yöntem, analiz, dil ve süreç danışmanlığı sunan, etik ve şeffaf çalışan bağımsız bir akademik danışmanlık merkezidir.",
  alternates: { canonical: "/hakkimizda" },
};

const VALUES = [
  { icon: "users" as const, t: "Uzman eşleştirme", d: "Talebiniz, alanında deneyimli ve ilgili yazılıma hâkim danışmanla eşleştirilir." },
  { icon: "doc" as const, t: "Şeffaf süreç", d: "Kapsam, takvim ve ücret baştan yazılı olarak netleşir; düzenli iletişim sürer." },
  { icon: "lock" as const, t: "Gizlilik", d: "Veri ve belgeleriniz KVKK çerçevesinde, yalnızca hizmet amacıyla işlenir." },
  { icon: "shield" as const, t: "Etik çerçeve", d: "Akademik dürüstlük ve araştırmacı sorumluluğu her sürecin merkezindedir." },
];

const AUDIENCE = [
  "Lisans ve yüksek lisans öğrencileri",
  "Doktora adayları ve doktora öğrencileri",
  "Doçentlik başvurusu hazırlayan akademisyenler",
  "Yayın süreci yürüten araştırmacılar",
  "Proje başvurusu hazırlayan Ar-Ge ekipleri",
  "Araştırma ve raporlama ihtiyacı olan kurumlar",
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        crumbs={[{ name: "Hakkımızda", href: "/hakkimizda" }]}
        eyebrow="Hakkımızda"
        title={
          <>
            Akademik süreçleri sadeleştiren <span className="serif gold">güvenilir merkez.</span>
          </>
        }
        lede="Araştırmacıların karşılaştığı yöntem, analiz, dil ve süreç zorluklarını; alanında uzman danışmanlarla doğru ve şeffaf bir şekilde aşmalarına yardımcı oluyoruz."
      />

      <section className="section-sm">
        <div className="container split">
          <Reveal className="split-media">
            <Image src="/images/literatur-kaynaklari.webp" alt="Akademik kaynaklar ve çalışma masası" fill sizes="(max-width: 760px) 100vw, 50vw" />
          </Reveal>
          <Reveal className="split-copy prose" delay={100}>
            <h2>Kim olduğumuz</h2>
            <p>
              Akademik Merkez; lisans, yüksek lisans, doktora öğrencileri ve doçentlik başvurusu hazırlayan
              akademisyenler için kurulmuş bağımsız bir akademik danışmanlık merkezidir. {categories.length}{" "}
              disiplinde {services.length} uzmanlık alanında; istatistikten mühendislik simülasyonuna, nitel
              analizden Python ile yapay zekâya kadar geniş bir yelpazede hizmet veriyoruz.
            </p>
            <h2>Nasıl çalışırız</h2>
            <p>
              Sunduğumuz tüm hizmetler <strong>danışmanlık ve süreç desteği</strong> niteliğindedir.
              Araştırma tasarımından analiz yöntemine, dil düzenlemesinden sunum hazırlığına kadar kendi
              çalışmanızı doğru ve güvenle yürütmeniz için bilgi, yöntem ve yönlendirme sağlarız. Ayrıntılar
              için <Link href="/etik-ilkelerimiz">Etik İlkelerimiz</Link> sayfasına göz atabilirsiniz.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Neden Akademik Merkez</p>
            <h2 className="headline">
              Güven, <span className="serif">ayrıntıda gizli.</span>
            </h2>
          </Reveal>
          <div className="value-grid stretch">
            {VALUES.map((v, i) => (
              <Reveal key={v.t} delay={i * 80}>
                <div className="value">
                  <Icon name={v.icon} size={28} />
                  <h3>{v.t}</h3>
                  <p>{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <Reveal className="split-copy">
            <p className="eyebrow">Kimlere hizmet veriyoruz</p>
            <h2 className="headline">
              Lisanstan doçentliğe, <span className="serif gold">her aşamada.</span>
            </h2>
            <ul className="checklist">
              {AUDIENCE.map((a) => (
                <li key={a}>
                  <span className="check-dot"><Icon name="check" size={14} strokeWidth={2.4} /></span>
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="split-copy" delay={100}>
            <p className="eyebrow">Uzmanlık alanlarımız</p>
            <ul className="cat-list" style={{ marginTop: 18 }}>
              {categories.map((c) => (
                <li key={c.key}>
                  <Link href={`/hizmetlerimiz#${c.key}`}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
                      <Icon name={CATEGORY_ICON[c.key]} size={18} /> {c.title}
                    </span>
                    <Icon name="arrowRight" size={16} />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <Cta />
    </main>
  );
}
