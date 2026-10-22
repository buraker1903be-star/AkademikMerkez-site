"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Icon, { type IconName } from "./Icon";
import { METIN, karsiYol, yol, type Dil } from "@/lib/i18n";
import { hizmetYolu } from "@/lib/hizmetler";

export type MenuGroup = {
  key: string;
  title: string;
  icon: IconName;
  items: { slug: string; title: string }[];
};

export default function HeaderClient({
  dil,
  menu,
  appUrl,
  serviceCount,
}: {
  dil: Dil;
  menu: MenuGroup[];
  appUrl: string;
  serviceCount: number;
}) {
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const m = METIN[dil];
  const LINKS = [
    { href: yol(dil, "/hakkimizda"), label: m.hakkimizda },
    { href: yol(dil, "/etik-ilkelerimiz"), label: m.etik },
    { href: yol(dil, "/sikca-sorulan-sorular"), label: m.sss },
    { href: yol(dil, "/iletisim"), label: m.iletisim },
  ];
  const teklif = yol(dil, "/teklif-al");
  const tumHizmetler = yol(dil, "/hizmetlerimiz");
  /* Dil değiştirici bulunulan sayfanın karşılığına gider (lib/i18n.ts). */
  const karsi = karsiYol(pathname);

  useEffect(() => {
    setOpen(false);
    setMega(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMega(false);
        setOpen(false);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <>
      <div className="nav-wrap" onMouseLeave={() => setMega(false)}>
        <header className={`nav ${scrolled || mega || open ? "is-solid" : ""}`}>
          <div className="container nav-inner">
            <Link href={yol(dil, "/")} className="nav-brand" aria-label={m.anasayfaEtiket}>
              <Image src="/logo-trimmed.png" alt="Akademik Merkez" width={1897} height={311} sizes="190px" priority />
            </Link>

            <nav aria-label={m.anaMenu}>
              <ul className="nav-links">
                <li>
                  <button
                    type="button"
                    className="nav-link"
                    aria-expanded={mega}
                    aria-controls="mega-menu"
                    onMouseEnter={() => setMega(true)}
                    onClick={() => setMega((v) => !v)}
                  >
                    {m.hizmetler} <Icon name="chevronDown" size={14} strokeWidth={2} />
                  </button>
                </li>
                {LINKS.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="nav-link"
                      aria-current={pathname === l.href ? "page" : undefined}
                      onMouseEnter={() => setMega(false)}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="nav-actions">
              <a className="nav-quiet nav-dil" href={karsi} hrefLang={dil === "en" ? "tr" : "en"} aria-label={m.dilDegistirEtiket}>
                {dil === "en" ? "TR" : "EN"}
              </a>
              <a className="nav-quiet" href={`${appUrl}/takip`}>
                {m.dosyaTakip}
              </a>
              <a className="btn btn-outline btn-sm nav-staff" href={`${appUrl}/login`}>
                <Icon name="lock" size={14} strokeWidth={2} /> {m.personelGiris}
              </a>
              <Link href={teklif} className="btn btn-primary btn-sm">
                {m.teklifAl}
              </Link>
              <button
                type="button"
                className="nav-toggle"
                aria-label={open ? m.menuKapat : m.menuAc}
                aria-expanded={open}
                aria-controls="mobile-menu"
                onClick={() => setOpen((v) => !v)}
              >
                <Icon name={open ? "close" : "menu"} size={18} />
              </button>
            </div>
          </div>
        </header>

        <div id="mega-menu" className={`mega ${mega ? "open" : ""}`}>
          <div className="container">
            <div className="mega-grid">
              {menu.map((g) => (
                <div key={g.key} className="mega-col">
                  <p className="mega-title">
                    <Icon name={g.icon} size={15} /> {g.title}
                  </p>
                  <ul>
                    {g.items.map((item) => (
                      <li key={item.slug}>
                        <Link href={hizmetYolu(dil, item.slug)} onClick={() => setMega(false)}>
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="mega-promo">
                <p className="eyebrow">{m.onGorusme}</p>
                <p className="mega-promo-title">{m.megaPromo}</p>
                <Link href={teklif} className="btn btn-gold btn-sm" onClick={() => setMega(false)}>
                  {m.teklifAl}
                </Link>
              </div>
            </div>
            <div className="mega-foot">
              <Link href={tumHizmetler} className="link-arrow" onClick={() => setMega(false)}>
                {m.tumHizmetleriKesfet} <Icon name="arrowRight" size={16} />
              </Link>
              <span>{m.hizmetSayisi(serviceCount, menu.length)}</span>
            </div>
          </div>
        </div>
      </div>

      <div id="mobile-menu" className={`sheet ${open ? "open" : ""}`}>
        <nav aria-label={m.mobilMenu}>
          <ul className="sheet-links">
            <li>
              <Link href={tumHizmetler}>{m.hizmetler}</Link>
            </li>
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
            <li>
              <a href={karsi} hrefLang={dil === "en" ? "tr" : "en"}>{m.dilDegistir}</a>
            </li>
          </ul>
          <p className="sheet-label">{m.uzmanlikAlanlari}</p>
          <ul className="sheet-cats">
            {menu.map((g) => (
              <li key={g.key}>
                <Link href={`${tumHizmetler}#${g.key}`} onClick={() => setOpen(false)}>
                  {g.title} <Icon name="arrowRight" size={16} />
                </Link>
              </li>
            ))}
          </ul>
          <div className="sheet-actions">
            <Link href={teklif} className="btn btn-primary btn-lg">
              {m.teklifAl}
            </Link>
            <a href={`${appUrl}/takip`} className="btn btn-outline">
              {m.dosyaTakip}
            </a>
            <a href={`${appUrl}/login`} className="btn btn-outline">
              {m.personelGirisi}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
