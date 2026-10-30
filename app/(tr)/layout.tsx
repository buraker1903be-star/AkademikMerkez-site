import type { Metadata, Viewport } from "next";
import SiteKabugu from "@/components/SiteKabugu";
import { SITE } from "@/lib/site";

// Türkçe sitenin kök düzeni. Gövde (yazı tipleri, menü, alt bilgi, takip
// kodu) iki dilde ortak: components/SiteKabugu.tsx. İngilizcesi app/en.

const DESCRIPTION =
  "Tez, makale ve doçentlik süreçlerinde yöntem, istatistiksel analiz, SPSS, MAXQDA, ANSYS ve Python analiz danışmanlığı; literatür, dil editörlüğü ve akademik çeviri.";

export const viewport: Viewport = {
  themeColor: "#fbfbfd",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "AkademikMerkez | Tez, İstatistik ve Analiz Danışmanlığı",
    template: "%s | AkademikMerkez",
  },
  description: DESCRIPTION,
  applicationName: SITE.name,
  keywords: [
    "akademik danışmanlık",
    "tez danışmanlığı",
    "istatistik danışmanlığı",
    "SPSS analizi",
    "nicel analiz",
    "nitel analiz",
    "MAXQDA analizi",
    "ANSYS analizi",
    "Python veri analizi",
    "literatür tarama",
    "anket tasarımı",
    "akademik çeviri",
    "akademik dil editörlüğü",
    "kaynakça düzenleme",
    "doçentlik başvuru dosyası",
    "tez savunması hazırlık",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "education",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    alternateLocale: ["en_US"],
    siteName: SITE.name,
    title: "AkademikMerkez | Tez, İstatistik ve Analiz Danışmanlığı",
    description:
      "Tez, makale ve doçentlik süreçlerinde yöntem, analiz, dil ve süreç danışmanlığı. SPSS, MAXQDA, ANSYS ve Python analiz desteği.",
    url: SITE.url,
  },
  twitter: {
    card: "summary_large_image",
    title: "AkademikMerkez",
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
  return <SiteKabugu dil="tr">{children}</SiteKabugu>;
}
