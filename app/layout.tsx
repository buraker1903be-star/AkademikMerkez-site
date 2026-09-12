import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";
import "./globals.css";

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

const DESCRIPTION =
  "Tez, makale ve doçentlik süreçlerinde SPSS, R, AMOS, ANSYS, MAXQDA ve Python ile analiz; yöntem, literatür, editörlük ve çeviri danışmanlığı. Etik ve şeffaf süreç.";

export const viewport: Viewport = {
  themeColor: "#fbfbfd",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Akademik Merkez | Tez, İstatistik ve Analiz Danışmanlığı",
    template: "%s | Akademik Merkez",
  },
  description: DESCRIPTION,
  applicationName: SITE.name,
  keywords: [
    "akademik danışmanlık",
    "tez danışmanlığı",
    "istatistik danışmanlığı",
    "SPSS analizi",
    "R analizi",
    "AMOS yapısal eşitlik modeli",
    "SmartPLS analizi",
    "ANSYS analizi",
    "ANSYS Fluent CFD",
    "sonlu elemanlar analizi",
    "MAXQDA analizi",
    "NVivo analizi",
    "nitel veri analizi",
    "Python veri analizi",
    "makine öğrenmesi danışmanlığı",
    "meta-analiz",
    "bibliyometrik analiz",
    "literatür tarama",
    "akademik çeviri",
    "akademik dil editörlüğü",
    "doçentlik başvuru dosyası",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "education",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: SITE.name,
    title: "Akademik Merkez | Tez, İstatistik ve Analiz Danışmanlığı",
    description:
      "İstatistikten ANSYS simülasyonuna, MAXQDA'dan Python ile yapay zekâya; 35 uzmanlık alanında etik akademik danışmanlık.",
    url: SITE.url,
  },
  twitter: {
    card: "summary_large_image",
    title: "Akademik Merkez",
    description: "Tez, makale ve doçentlik süreçlerinde premium akademik danışmanlık ve analiz merkezi.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  formatDetection: { telephone: false, email: false, address: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <a href="#icerik" className="skip-link">
          İçeriğe geç
        </a>
        <JsonLd data={siteSchema()} />
        <Header />
        <div id="icerik">{children}</div>
        <Footer />
        <WhatsAppButton />
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </body>
    </html>
  );
}
