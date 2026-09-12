import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
import { getService } from "@/lib/services";
import { OPERATOR_NAME, SITE } from "@/lib/site";

const COLUMNS: { title: string; slugs: string[] }[] = [
  {
    title: "Analiz",
    slugs: ["spss-analizi", "r-analizi", "amos-yapisal-esitlik-modeli", "smartpls-analizi", "python-analizi", "makine-ogrenmesi-yapay-zeka"],
  },
  {
    title: "Mühendislik ve Nitel",
    slugs: ["ansys-analizi", "ansys-fluent-cfd-analizi", "sonlu-elemanlar-analizi", "matlab-simulink-analizi", "maxqda-analizi", "nvivo-analizi"],
  },
  {
    title: "Akademik Süreç",
    slugs: ["tez-makale-yontem-danismanligi", "sistematik-derleme-meta-analiz", "dergi-secimi-yayin-sureci", "docentlik-basvuru-danismanligi", "akademik-dil-imla-editorlugu", "akademik-ceviri"],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Image src="/logo-trimmed.png" alt="Akademik Merkez" width={1897} height={311} />
            <p>
              Lisans, yüksek lisans, doktora ve doçentlik süreçlerinde yöntem, analiz, dil ve süreç
              danışmanlığı. Araştırmacının özgün üretimini merkeze alan etik ve şeffaf bir çalışma
              çerçevesi.
            </p>
            <div className="footer-contact">
              <a href={`mailto:${SITE.email}`}>
                <Icon name="mail" size={16} /> {SITE.email}
              </a>
              <a href={`tel:${SITE.phone}`}>
                <Icon name="phone" size={16} /> {SITE.phoneDisplay}
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="footer-h">{col.title}</p>
              <ul>
                {col.slugs.map((slug) => {
                  const s = getService(slug);
                  return s ? (
                    <li key={slug}>
                      <Link href={`/hizmetlerimiz/${slug}`}>{s.title}</Link>
                    </li>
                  ) : null;
                })}
              </ul>
            </div>
          ))}

          <div>
            <p className="footer-h">Kurumsal</p>
            <ul>
              <li><Link href="/hizmetlerimiz">Tüm Hizmetler</Link></li>
              <li><Link href="/hakkimizda">Hakkımızda</Link></li>
              <li><Link href="/etik-ilkelerimiz">Etik İlkelerimiz</Link></li>
              <li><Link href="/sikca-sorulan-sorular">Sıkça Sorulan Sorular</Link></li>
              <li><Link href="/iletisim">İletişim</Link></li>
              <li><Link href="/kvkk-aydinlatma-metni">KVKK Aydınlatma Metni</Link></li>
              <li><Link href="/teklif-al">Teklif Al</Link></li>
              <li><a href={`${SITE.appUrl}/takip`}>Dosya Takip</a></li>
              <li><a href={`${SITE.appUrl}/login`}>Personel Girişi</a></li>
            </ul>
          </div>
        </div>

        <p className="footer-disclaimer">
          Akademik Merkez bağımsız bir danışmanlık hizmetidir; YÖK, ÜAK veya herhangi bir üniversiteyle
          kurumsal bağlantısı yoktur. Hizmetlerimiz danışmanlık esaslıdır; kişi adına tez, makale veya
          ödev üretilmez. Güncel kurum ölçütleri esas alınır; nihai uygunluk ve başvuru sorumluluğu
          araştırmacıya aittir.
        </p>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {OPERATOR_NAME}. Tüm hakları saklıdır.
          </span>
          <address>
            {SITE.address.street}, {SITE.address.postalCode} {SITE.address.district} / {SITE.address.city}
          </address>
        </div>
      </div>
    </footer>
  );
}
