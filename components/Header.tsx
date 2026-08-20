"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/sikca-sorulan-sorular", label: "SSS" },
  { href: "/iletisim", label: "İletişim" },
];

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.akademikmerkez.com";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Akademik Merkez anasayfa">
          <Image
            src="/logo-trimmed.png"
            alt="Akademik Merkez — Bilimsel Araştırma ve Akademik Danışmanlık"
            width={1897}
            height={311}
            className="brand-logo-img"
            priority
          />
        </Link>

        <nav className="nav-desktop" aria-label="Ana menü">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="header-cta">
          <a className="btn btn-secondary nav-desktop-only" href={`${APP_URL}/takip`}>
            Dosya Takip
          </a>
          <Link href="/teklif-al" className="btn btn-primary">
            Teklif Al
          </Link>
          <button
            className="nav-toggle"
            aria-label="Menüyü aç/kapat"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      <div className={`nav-mobile ${open ? "open" : ""}`}>
        {NAV_LINKS.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
        <Link href="/teklif-al" onClick={() => setOpen(false)}>
          Teklif Al
        </Link>
      </div>
    </header>
  );
}
