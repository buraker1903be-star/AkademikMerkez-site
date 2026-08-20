export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  bullets: string[];
  audience: string;
};

// Not: Aşağıdaki hizmetler danışmanlık/yöntem desteği çerçevesinde sunulur.
// Akademik Merkez; öğrencinin veya akademisyenin adına çalışma üretmez,
// yalnızca yöntem, analiz, dil ve süreç danışmanlığı sağlar. Bu çerçeve
// YÖK ve ÜAK mevzuatı ile uyumlu, yasal bir hizmet modelidir.
export const services: Service[] = [
  {
    slug: "tez-makale-yontem-danismanligi",
    title: "Tez ve Makale Yöntem Danışmanlığı",
    short: "Araştırma tasarımı, yöntem seçimi ve akademik süreç danışmanlığı.",
    description:
      "Araştırma sorunuzu netleştirmekten uygun yöntemin seçimine, bölüm planından jüri sürecine kadar tüm akademik yol haritanızda yanınızdayız. Çalışmayı sizin yerinize yazmıyoruz; araştırmanızı doğru kurgulamanız ve zamanında tamamlamanız için yöntemsel ve stratejik destek veriyoruz.",
    bullets: [
      "Araştırma sorusu ve hipotez netleştirme",
      "Uygun araştırma yöntemi ve deseni seçimi",
      "Bölüm planı ve zaman çizelgesi hazırlama",
      "Danışman ve jüri süreçlerine hazırlık desteği",
    ],
    audience: "Lisans, yüksek lisans ve doktora öğrencileri",
  },
  {
    slug: "istatistiksel-analiz-danismanligi",
    title: "İstatistiksel Analiz Danışmanlığı",
    short: "SPSS, R ve Python ile veri analizi yöntem desteği.",
    description:
      "Verinizi doğru testlerle, doğru varsayımlar altında analiz etmeniz için yöntemsel danışmanlık sağlıyoruz. SPSS, R ve Python üzerinde hangi analizin neden uygun olduğunu, sonuçların nasıl yorumlanacağını birlikte çalışarak aktarıyoruz.",
    bullets: [
      "Uygun istatistiksel test ve model seçimi",
      "SPSS / R / Python üzerinde analiz danışmanlığı",
      "Sonuçların akademik dille yorumlanması",
      "Tablo ve grafiklerin APA/YÖK formatına uygunluğu",
    ],
    audience: "Nicel araştırma yürüten tüm öğrenci ve akademisyenler",
  },
  {
    slug: "literatur-tarama-danismanligi",
    title: "Literatür Tarama Danışmanlığı",
    short: "Güncel, ilgili ve doğru kaynaklara ulaşma desteği.",
    description:
      "Alan yazınında kaybolmadan, çalışmanızla doğrudan ilgili ve güncel kaynaklara ulaşmanız için sistematik tarama stratejisi kurguluyoruz. Kaynak yönetimi ve atıf düzeni konusunda da yönlendirme sağlıyoruz.",
    bullets: [
      "Veri tabanlarında sistematik tarama stratejisi",
      "Güncel ve nitelikli kaynak belirleme",
      "Kaynakça ve atıf sistemleri (APA 7 vb.) danışmanlığı",
      "Alan yazını haritası (literature map) çıkarma",
    ],
    audience: "Tez, makale ve proje çalışması yürütenler",
  },
  {
    slug: "anket-tasarimi-raporlama",
    title: "Anket Tasarımı ve Raporlama Danışmanlığı",
    short: "Geçerli, güvenilir anket kurgusu ve sonuç raporlama.",
    description:
      "Araştırma sorunuza uygun, geçerlilik ve güvenilirliği yüksek anket/ölçek tasarımı konusunda danışmanlık veriyoruz. Toplanan verinin raporlanmasında akademik standartlara uygun sunum desteği sağlıyoruz.",
    bullets: [
      "Ölçek/anket maddesi tasarım danışmanlığı",
      "Geçerlilik-güvenilirlik değerlendirmesi yöntem desteği",
      "Veri toplama süreci planlama",
      "Bulguların akademik raporlama standardına uygun sunumu",
    ],
    audience: "Alan araştırması yürüten öğrenci ve kurumlar",
  },
  {
    slug: "akademik-dil-imla-editorlugu",
    title: "Akademik Dil ve İmla Editörlüğü",
    short: "Türkçe ve İngilizce metinlerde dil, imla ve akış düzenleme.",
    description:
      "Yazdığınız metnin anlamını değiştirmeden; dil bilgisi, imla, akademik üslup ve akış açısından gözden geçiriyoruz. Amacımız sizin sesinizi daha net ve akademik standartlara uygun şekilde ortaya çıkarmak.",
    bullets: [
      "Dil bilgisi ve imla düzenleme",
      "Akademik üslup ve terminoloji tutarlılığı",
      "Paragraf ve bölüm akışı önerileri",
      "Türkçe ve İngilizce metin desteği",
    ],
    audience: "Tez, makale, sunum ve rapor metni olan herkes",
  },
  {
    slug: "akademik-ceviri",
    title: "Akademik Çeviri",
    short: "Türkçe–İngilizce akademik metin çevirisi.",
    description:
      "Makale, özet (abstract), tez bölümü ve akademik yazışmalarınızı, alan terminolojisine hâkim çevirmenlerle Türkçe-İngilizce ve İngilizce-Türkçe olarak çeviriyoruz.",
    bullets: [
      "Makale ve tez bölümü çevirisi",
      "Abstract / özet çevirisi",
      "Akademik yazışma ve sunum çevirisi",
      "Alan terminolojisine uygun çeviri kontrolü",
    ],
    audience: "Uluslararası yayın ve başvuru süreci olan araştırmacılar",
  },
  {
    slug: "docentlik-basvuru-danismanligi",
    title: "Doçentlik Başvuru Dosyası Danışmanlığı",
    short: "ÜAK kriterlerine uygun başvuru dosyası hazırlama desteği.",
    description:
      "Doçentlik başvurunuzda ÜAK'ın (Üniversitelerarası Kurul) güncel kriterlerine göre yayın, atıf ve faaliyet dosyanızın eksiksiz ve doğru formatta hazırlanması için danışmanlık sağlıyoruz. Dosya düzeni, başvuru formu ve gerekli belgelerin derlenmesinde sürecinizi kolaylaştırıyoruz.",
    bullets: [
      "ÜAK kriterlerine göre dosya kontrol listesi",
      "Yayın, atıf ve faaliyet dökümü düzenleme desteği",
      "Başvuru formu ve ek belgelerin derlenmesi",
      "Alan endeksi ve puanlama tablosu danışmanlığı",
    ],
    audience: "Doçentlik başvurusu yapacak akademisyenler",
  },
  {
    slug: "sunum-juri-hazirlik",
    title: "Sunum ve Jüri Hazırlık Danışmanlığı",
    short: "Tez savunması ve jüri sunumuna özgüvenli hazırlık.",
    description:
      "Tez savunmanıza veya jüri sunumunuza, olası soruları öngörerek ve sunumunuzu güçlendirerek hazırlanmanızı sağlıyoruz. Slayt tasarımından sunuş tekniğine kadar destek veriyoruz.",
    bullets: [
      "Sunum içeriği ve slayt akışı danışmanlığı",
      "Olası jüri sorularına hazırlık",
      "Sunuş tekniği ve zaman yönetimi",
      "Prova ve geri bildirim oturumu",
    ],
    audience: "Savunma veya jüri sunumu yaklaşan öğrenciler",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
