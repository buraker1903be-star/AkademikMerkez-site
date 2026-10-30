// Blog yazılarının dil eşlemesi: Türkçe slug → İngilizce slug.
//
// Ayrı ve saf bir dosya, çünkü dil değiştirici (istemci bileşeni) bunu
// lib/i18n.ts üzerinden okuyor; lib/blog.ts fs kullandığı için tarayıcı
// paketine giremez. Hizmetlerdeki HIZMET_SLUG_EN ile aynı yöntem.
//
// Her satırın iki dosyası da olmalı (content/blog/<tr>.md ve
// content/blog/en/<en>.md); lib/blog.ts derlemede denetler. Çevirisi
// olmayan Türkçe yazı buraya yazılmaz, yalnızca Türkçe kalır.
export const YAZI_SLUG_EN: Record<string, string> = {
  "spss-normallik-testi": "spss-normality-test",
  "maxqda-nitel-kodlama": "maxqda-qualitative-coding",
};
