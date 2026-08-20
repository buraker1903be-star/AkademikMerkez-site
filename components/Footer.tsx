import Link from "next/link";
import Image from "next/image";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.akademikmerkez.com";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Image src="/logo-white-trimmed.png" alt="Akademik Merkez" width={1878} height={308} className="footer-logo-img" />
            <p>
              Lisans, yüksek lisans, doktora ve doçentlik süreçlerinde yöntem, analiz, dil ve
              danışmanlık desteği. Çalışmalarınızı sizin yerinize üretmeyiz; süreci doğru ve
              zamanında yönetmeniz için yanınızda oluruz.
            </p>
          </div>
          <div>
            <h4>Hizmetler</h4>
            <ul>
              <li><Link href="/hizmetlerimiz">Tüm Hizmetler</Link></li>
              <li><Link href="/hizmetlerimiz/tez-makale-yontem-danismanligi">Tez/Makale Danışmanlığı</Link></li>
              <li><Link href="/hizmetlerimiz/istatistiksel-analiz-danismanligi">İstatistiksel Analiz</Link></li>
              <li><Link href="/hizmetlerimiz/docentlik-basvuru-danismanligi">Doçentlik Dosyası</Link></li>
            </ul>
          </div>
          <div>
            <h4>Kurumsal</h4>
            <ul>
              <li><Link href="/hakkimizda">Hakkımızda</Link></li>
              <li><Link href="/etik-ilkelerimiz">Etik İlkelerimiz</Link></li>
              <li><Link href="/kvkk-aydinlatma-metni">KVKK Aydınlatma Metni</Link></li>
              <li><Link href="/iletisim">İletişim</Link></li>
            </ul>
          </div>
          <div>
            <h4>Erişim</h4>
            <ul>
              <li><Link href="/teklif-al">Teklif Al</Link></li>
              <li><a href={`${APP_URL}/takip`}>Dosya Takip</a></li>
              <li><a href={`${APP_URL}/login`}>Personel Girişi</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Akademik Merkez. Tüm hakları saklıdır.</span>
          <span>Hizmetlerimiz danışmanlık ve süreç desteği niteliğindedir; YÖK ve ÜAK mevzuatına uygun şekilde yürütülür.</span>
        </div>
      </div>
    </footer>
  );
}
