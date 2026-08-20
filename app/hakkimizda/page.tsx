import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Akademik Merkez; tez, makale ve doçentlik süreçlerinde yöntem ve danışmanlık desteği sunan kurumsal bir akademik danışmanlık merkezidir.",
  alternates: { canonical: "/hakkimizda" },
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">Anasayfa / Hakkımızda</div>
          <h1>Hakkımızda</h1>
          <p>Akademik süreçlerin karmaşasını sadeleştiren, güvenilir bir danışmanlık merkeziyiz.</p>
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <h2>Kim olduğumuz</h2>
          <p>
            Akademik Merkez, lisans, yüksek lisans, doktora öğrencileri ve doçentlik
            başvurusu hazırlayan akademisyenler için kurulmuş bir akademik danışmanlık
            merkezidir. Amacımız, araştırmacıların karşılaştığı yöntem, analiz, dil ve süreç
            zorluklarını; alanında uzman danışmanlarımızla birlikte, doğru ve şeffaf bir
            şekilde aşmalarına yardımcı olmaktır.
          </p>

          <h2>Nasıl çalışırız</h2>
          <p>
            Sunduğumuz tüm hizmetler <strong>danışmanlık ve süreç desteği</strong> niteliğindedir.
            Araştırma tasarımından analiz yöntemine, dil düzenlemesinden sunum hazırlığına kadar
            sizin kendi çalışmanızı doğru ve güvenle yürütmeniz için bilgi, yöntem ve yönlendirme
            sağlarız. Bu yaklaşım akademik dürüstlüğü, araştırmacının fikrî emeğini ve kurumun
            güncel yazım/başvuru kurallarını merkeze alır; detaylar için{" "}
            <a href="/etik-ilkelerimiz" style={{ color: "var(--gold-dark)", fontWeight: 700 }}>
              Etik İlkelerimiz
            </a>{" "}
            sayfamıza göz atabilirsiniz.
          </p>

          <h2>Kimlere hizmet veriyoruz</h2>
          <ul>
            <li>Lisans ve yüksek lisans öğrencileri</li>
            <li>Doktora adayları ve doktora öğrencileri</li>
            <li>Doçentlik başvurusu hazırlayan akademisyenler</li>
            <li>Akademik makale ve yayın süreci yürüten araştırmacılar</li>
          </ul>

          <h2>Neden Akademik Merkez</h2>
          <ul>
            <li>Alanında uzman, deneyimli danışman kadrosu</li>
            <li>Şeffaf süreç planı ve düzenli iletişim</li>
            <li>Gizlilik ve KVKK uyumlu veri işleme</li>
            <li>Akademik dürüstlük ve araştırmacı sorumluluğu temelli hizmet çerçevesi</li>
          </ul>

          <div style={{ marginTop: 30 }}>
            <Link href="/teklif-al" className="btn btn-primary">Bizimle Çalışmaya Başlayın</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
