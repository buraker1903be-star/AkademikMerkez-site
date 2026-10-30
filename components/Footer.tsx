import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
import { kategoridekiler, kategoriler, hizmetYolu } from "@/lib/hizmetler";
import { METIN, karsiYol, yol, type Dil } from "@/lib/i18n";
import { OPERATOR_NAME, SITE } from "@/lib/site";

export default function Footer({ dil = "tr" }: { dil?: Dil }) {
  const m = METIN[dil];
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Image src="/logo-trimmed.png" alt="Akademik Merkez" width={1897} height={311} sizes="180px" />
            <p>{m.footerTanitim}</p>
            <div className="footer-contact">
              <a href={`mailto:${SITE.email}`}>
                <Icon name="mail" size={16} /> {SITE.email}
              </a>
              <a href={`tel:${SITE.phone}`}>
                <Icon name="phone" size={16} /> {dil === "en" ? `+90 ${SITE.phoneDisplay.replace(/^0/, "")}` : SITE.phoneDisplay}
              </a>
            </div>
          </div>

          {kategoriler(dil).map((c) => (
            <div key={c.key}>
              <p className="footer-h">{c.title}</p>
              <ul>
                {kategoridekiler(dil, c.key).map((s) => (
                  <li key={s.slug}>
                    <Link href={hizmetYolu(dil, s.slug)}>{s.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="footer-h">{m.kurumsal}</p>
            <ul>
              <li><Link href={yol(dil, "/hizmetlerimiz")}>{m.tumHizmetler}</Link></li>
              <li><Link href={yol(dil, "/hakkimizda")}>{m.hakkimizda}</Link></li>
              <li><Link href={yol(dil, "/etik-ilkelerimiz")}>{m.etikUzun}</Link></li>
              <li><Link href={yol(dil, "/sikca-sorulan-sorular")}>{m.sssUzun}</Link></li>
              <li><Link href={yol(dil, "/blog")}>{m.blog}</Link></li>
              <li><Link href={yol(dil, "/iletisim")}>{m.iletisim}</Link></li>
              <li><Link href={yol(dil, "/kvkk-aydinlatma-metni")}>{m.kvkk}</Link></li>
              <li><Link href={yol(dil, "/teklif-al")}>{m.teklifAl}</Link></li>
              <li><a href={`${SITE.appUrl}/takip`}>{m.dosyaTakip}</a></li>
              <li><a href={`${SITE.appUrl}/login`}>{m.personelGirisi}</a></li>
              <li><a href={karsiYol(yol(dil, "/"))} hrefLang={dil === "en" ? "tr" : "en"}>{m.dilDegistir}</a></li>
            </ul>
          </div>
        </div>

        <p className="footer-disclaimer">{m.footerUyari}</p>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {OPERATOR_NAME}. {m.haklar}
            {SITE.showLegalName && SITE.mersisNo && <> · MERSİS No: {SITE.mersisNo}</>}
          </span>
          <address>
            {SITE.address.street}, {SITE.address.postalCode} {SITE.address.district} / {SITE.address.city}
            {dil === "en" ? ", Türkiye" : null}
          </address>
          <span className="footer-credit">
            Designed by
            <Image src="/brand/arvoos.png" alt="ArvoOS" width={1901} height={395} sizes="72px" />
          </span>
        </div>
      </div>
    </footer>
  );
}
