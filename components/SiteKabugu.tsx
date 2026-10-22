import { Inter, Instrument_Serif } from "next/font/google";
import Header from "./Header";
import Footer from "./Footer";
import JsonLd from "./JsonLd";
import WhatsAppButton from "./WhatsAppButton";
import { siteSchema } from "@/lib/schema";
import type { Dil } from "@/lib/i18n";
import "@/app/globals.css";

/*
  İKİ KÖK DÜZENİN ORTAK GÖVDESİ (22.10.2026). Türkçe (app/(tr)) ve
  İngilizce (app/en) ayrı kök düzenler: <html lang> her dilde doğru
  çıksın ve sayfalar statik kalsın (dili istekten okumak her sayfayı
  dinamik yapardı). Yazı tipleri, menü, alt bilgi ve takip kodu tek
  yerde; iki düzen yalnızca dili ve metadata'yı verir.
*/
const sans = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-sans",
});

const serif = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-serif",
});

/*
  Ziyaret istatistiği: ArvoOS Analitik modülü (AkademikMerkez paneli →
  Analitik). Kod çerez kullanmaz, IP saklamaz; form alanlarının içeriğini
  okumaz, yalnızca "form gönderildi" sayar. Anahtar gizli değil — hangi
  siteye yazılacağını söylüyor, kaynak alan adı ArvoOS tarafında ayrıca
  denetleniyor.
*/
const ANALITIK_ANAHTARI = "a81f300a74e542c4a4834501fb805954";

const ICERIGE_GEC = { tr: "İçeriğe geç", en: "Skip to content" };

export default function SiteKabugu({ dil, children }: { dil: Dil; children: React.ReactNode }) {
  return (
    <html lang={dil} className={`${sans.variable} ${serif.variable}`}>
      <body>
        <a href="#icerik" className="skip-link">
          {ICERIGE_GEC[dil]}
        </a>
        <JsonLd data={siteSchema(dil)} />
        <Header dil={dil} />
        <div id="icerik">{children}</div>
        <Footer dil={dil} />
        <WhatsAppButton dil={dil} />
        <script defer src="https://app.arvo-os.com/k.js" data-site={ANALITIK_ANAHTARI} />
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </body>
    </html>
  );
}
