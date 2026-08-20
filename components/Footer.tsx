import Link from "next/link";
import Image from "next/image";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.akademikmerkez.com";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Image src="/logo-trimmed.png" alt="Akademik Merkez" width={1897} height={311} className="footer-logo-img" />
            <p>
              Lisans, yüksek lisans, doktora ve doçentlik süreçlerinde yöntem, analiz, dil ve
              danışmanlık desteği. Araştırmacının özgün üretimini merkeze alan etik ve şeffaf
              bir çalışma çerçevesi sunuyoruz.
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
              <li><Link href="/sikca-sorulan-sorular">Sıkça Sorulan Sorular</Link></li>
              <li><Link href="/kvkk-aydinlatma-metni">KVKK Aydınlatma Metni</Link></li>
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
          <div>
            <h4>İletişim</h4>
            <ul>
              <li><a href="mailto:uzman@akademikmerkez.com">uzman@akademikmerkez.com</a></li>
              <li><a href="tel:+905060009499">0506 000 94 99</a></li>
              <li className="footer-address">
                Yakuplu Mah. Hürriyet Bulvarı
                <br />
                Skyport Residence No:1 D:113
                <br />
                34524 Beylikdüzü / İstanbul
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Akademik Merkez — ARVOCULTURE GROUP TEKNOLOJİ SANAYİ VE
            TİCARET LTD. ŞTİ. Tüm hakları saklıdır.
          </span>
          <span>YÖK veya ÜAK ile bağlantımız yoktur. Güncel kurum ölçütleri esas alınır; nihai uygunluk ve başvuru sorumluluğu araştırmacıya aittir.</span>
        </div>
      </div>
    </footer>
  );
}
