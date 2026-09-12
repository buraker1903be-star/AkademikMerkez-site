import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
import { categories, servicesByCategory } from "@/lib/services";
import { OPERATOR_NAME, SITE } from "@/lib/site";

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

          {categories.map((c) => (
            <div key={c.key}>
              <p className="footer-h">{c.title}</p>
              <ul>
                {servicesByCategory(c.key).map((s) => (
                  <li key={s.slug}>
                    <Link href={`/hizmetlerimiz/${s.slug}`}>{s.title}</Link>
                  </li>
                ))}
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
          kurumsal bağlantısı yoktur. Hizmetlerimiz danışmanlık esaslıdır; kişi adına tez, makale, ödev
          veya başvuru dosyası hazırlanmaz ve hiçbir aşamada e-Devlet, YÖKSİS veya ÜAK sistem şifresi talep
          edilmez. YÖK ve ÜAK&apos;ın güncel düzenlemeleri esas alınır; kabul veya sonuç garantisi verilmez,
          nihai uygunluk ve başvuru sorumluluğu araştırmacıya aittir.
        </p>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {OPERATOR_NAME}. Tüm hakları saklıdır.
            {SITE.showLegalName && SITE.mersisNo && <> · MERSİS No: {SITE.mersisNo}</>}
          </span>
          <address>
            {SITE.address.street}, {SITE.address.postalCode} {SITE.address.district} / {SITE.address.city}
          </address>
        </div>
      </div>
    </footer>
  );
}
