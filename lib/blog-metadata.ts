import type { Metadata } from "next";
import { alternatifler, yalnizTurkce } from "./i18n";
import { yaziYolu, type Yazi } from "./blog";

/*
  Yazı sayfasının metadata'sı iki dilde ortak. Çevirisi olan yazı
  karşılığıyla eşlenir (hreflang); olmayan Türkçe yazı yalnizTurkce()
  ile, İngilizce karşılık yazılmadan. İngilizce yazının karşılığı her
  zaman var (lib/blog-eslesme.ts), ama ileri tarihli Türkçe yazı henüz
  yayında değilse yine eşlenmez.
*/
export function yaziMetadata(y: Yazi): Metadata {
  const trYol = y.dil === "tr" ? yaziYolu("tr", y.slug) : y.karsilik ? yaziYolu("tr", y.karsilik) : undefined;
  const alternates = y.karsilik && trYol ? alternatifler(trYol, y.dil) : y.dil === "tr" ? yalnizTurkce(yaziYolu("tr", y.slug)) : { canonical: yaziYolu("en", y.slug) };
  return {
    title: y.baslik,
    description: y.aciklama,
    keywords: y.anahtarKelimeler,
    authors: [{ name: y.yazar.ad }],
    alternates,
    openGraph: {
      type: "article",
      title: `${y.baslik} | AkademikMerkez`,
      description: y.aciklama,
      url: yaziYolu(y.dil, y.slug),
      publishedTime: y.yayin,
      modifiedTime: y.guncelleme,
      authors: [y.yazar.ad],
    },
  };
}
