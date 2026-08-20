import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OrganizationJsonLd from "@/components/OrganizationJsonLd";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://akademikmerkez.com"),
  title: {
    default: "Akademik Merkez | Tez, Makale ve Doçentlik Danışmanlığı",
    template: "%s | Akademik Merkez",
  },
  description:
    "Akademik Merkez; tez, makale ve doçentlik başvuru süreçlerinde etik ilkelere dayalı yöntem, analiz, literatür, dil editörlüğü ve akademik çeviri danışmanlığı sunar.",
  keywords: [
    "akademik danışmanlık",
    "tez danışmanlığı",
    "istatistik danışmanlığı",
    "SPSS analiz",
    "literatür tarama",
    "akademik çeviri",
    "doçentlik başvuru dosyası",
    "akademik dil editörlüğü",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Akademik Merkez",
    title: "Akademik Merkez | Tez, Makale ve Doçentlik Danışmanlığı",
    description:
      "Yöntem, analiz, dil ve süreç danışmanlığıyla araştırmanızı daha sağlam bir akademik zeminde ilerletin.",
    url: "https://akademikmerkez.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akademik Merkez",
    description:
      "Tez, makale ve doçentlik süreçlerinde kurumsal akademik danışmanlık.",
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <OrganizationJsonLd />
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
