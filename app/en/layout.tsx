import type { Metadata, Viewport } from "next";
import SiteKabugu from "@/components/SiteKabugu";
import { SITE } from "@/lib/site";

// İngilizce sitenin kök düzeni (22.10.2026). Ayrı kök düzen, çünkü
// <html lang="en"> sayfa başına doğru çıkmalı ve site statik kalmalı.
// Gövde Türkçeyle ortak: components/SiteKabugu.tsx.

const DESCRIPTION =
  "Methodology, statistical analysis, SPSS, MAXQDA, ANSYS and Python analysis consulting for theses, articles and associate professorship applications; literature review, academic editing and translation.";

export const viewport: Viewport = {
  themeColor: "#fbfbfd",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "AkademikMerkez | Thesis, Statistics and Data Analysis Consulting",
    template: "%s | AkademikMerkez",
  },
  description: DESCRIPTION,
  applicationName: SITE.name,
  keywords: [
    "academic consulting",
    "thesis consulting",
    "dissertation methodology",
    "statistical analysis consulting",
    "SPSS analysis",
    "quantitative analysis",
    "qualitative analysis",
    "MAXQDA analysis",
    "ANSYS analysis",
    "Python data analysis",
    "literature review",
    "survey design",
    "academic translation Turkish English",
    "academic editing",
    "associate professorship application Turkey",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "education",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["tr_TR"],
    siteName: SITE.name,
    title: "AkademikMerkez | Thesis, Statistics and Data Analysis Consulting",
    description:
      "Methodology, analysis, language and process consulting for theses, articles and associate professorship applications. SPSS, MAXQDA, ANSYS and Python analysis support.",
    url: `${SITE.url}/en`,
  },
  twitter: {
    card: "summary_large_image",
    title: "AkademikMerkez",
    description: "Premium academic consulting and data analysis for theses, articles and academic careers.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  formatDetection: { telephone: false, email: false, address: false },
};

export default function EnglishRootLayout({ children }: { children: React.ReactNode }) {
  return <SiteKabugu dil="en">{children}</SiteKabugu>;
}
