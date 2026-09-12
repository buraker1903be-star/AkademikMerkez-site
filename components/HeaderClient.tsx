"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Icon, { type IconName } from "./Icon";

export type MenuGroup = {
  key: string;
  title: string;
  icon: IconName;
  items: { slug: string; title: string }[];
};

const LINKS = [
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/etik-ilkelerimiz", label: "Etik İlkeler" },
  { href: "/sikca-sorulan-sorular", label: "SSS" },
  { href: "/iletisim", label: "İletişim" },
];

export default function HeaderClient({
  menu,
  appUrl,
  serviceCount,
}: {
  menu: MenuGroup[];
  appUrl: string;
  serviceCount: number;
}) {
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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
            <Link href="/" className="nav-brand" aria-label="Akademik Merkez anasayfa">
              <Image src="/logo-trimmed.png" alt="Akademik Merkez" width={1897} height={311} priority />
            </Link>

            <nav aria-label="Ana menü">
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
                    Hizmetler <Icon name="chevronDown" size={14} strokeWidth={2} />
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
              <a className="nav-quiet" href={`${appUrl}/takip`}>
                Dosya Takip
              </a>
              <a className="btn btn-outline btn-sm nav-staff" href={`${appUrl}/login`}>
                <Icon name="lock" size={14} strokeWidth={2} /> Personel Giriş
              </a>
              <Link href="/teklif-al" className="btn btn-primary btn-sm">
                Teklif Al
              </Link>
              <button
                type="button"
                className="nav-toggle"
                aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
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
                        <Link href={`/hizmetlerimiz/${item.slug}`} onClick={() => setMega(false)}>
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="mega-promo">
                <p className="eyebrow">Ön görüşme</p>
                <p className="mega-promo-title">İhtiyacınızı paylaşın, kapsamı birlikte netleştirelim.</p>
                <Link href="/teklif-al" className="btn btn-gold btn-sm" onClick={() => setMega(false)}>
                  Teklif Al
                </Link>
              </div>
            </div>
            <div className="mega-foot">
              <Link href="/hizmetlerimiz" className="link-arrow" onClick={() => setMega(false)}>
                Tüm hizmetleri keşfedin <Icon name="arrowRight" size={16} />
              </Link>
              <span>
                {serviceCount} hizmet · {menu.length} ana alan
              </span>
            </div>
          </div>
        </div>
      </div>

      <div id="mobile-menu" className={`sheet ${open ? "open" : ""}`}>
        <nav aria-label="Mobil menü">
          <ul className="sheet-links">
            <li>
              <Link href="/hizmetlerimiz">Hizmetler</Link>
            </li>
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
          <p className="sheet-label">Uzmanlık alanları</p>
          <ul className="sheet-cats">
            {menu.map((g) => (
              <li key={g.key}>
                <Link href={`/hizmetlerimiz#${g.key}`} onClick={() => setOpen(false)}>
                  {g.title} <Icon name="arrowRight" size={16} />
                </Link>
              </li>
            ))}
          </ul>
          <div className="sheet-actions">
            <Link href="/teklif-al" className="btn btn-primary btn-lg">
              Teklif Al
            </Link>
            <a href={`${appUrl}/takip`} className="btn btn-outline">
              Dosya Takip
            </a>
            <a href={`${appUrl}/login`} className="btn btn-outline">
              Personel Girişi
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
