export type CategoryKey = "tez" | "analiz" | "dil";

export type Category = {
  key: CategoryKey;
  title: string;
  short: string;
  description: string;
  deliverables: string[];
};

export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  category: CategoryKey;
  title: string;
  short: string;
  description: string;
  tools: string[];
  bullets: string[];
  examples: string[];
  audience: string;
  faqs: Faq[];
  /** Yeni eklenen hizmetleri işaretler. */
  isNew?: boolean;
};

// Not: Aşağıdaki hizmetler danışmanlık/yöntem desteği çerçevesinde sunulur.
// Akademik Merkez; öğrencinin veya akademisyenin adına çalışma üretmez,
// yalnızca yöntem, analiz, dil ve süreç danışmanlığı sağlar. Bu çerçevede
// YÖK ve ÜAK'ın güncel düzenlemeleri ile kurumların kuralları gözetilir;
// nihai akademik sorumluluk araştırmacıdadır.

export const categories: Category[] = [
  {
    key: "tez",
    title: "Tez ve Akademik Süreç",
    short: "Yöntem tasarımından literatüre, anketten doçentlik dosyasına ve jüri sunumuna.",
    description:
      "Araştırma sorusunun kurgusundan jüri sunumuna ve doçentlik başvuru dosyasına kadar akademik sürecin stratejik adımlarında yöntemsel ve süreç odaklı danışmanlık.",
    deliverables: [
      "Kişiye özel süreç planı ve zaman çizelgesi",
      "Kontrol listeleri ve yazılı geri bildirim",
      "Görüşme notları ve aksiyon maddeleri",
      "Kurum kılavuzuna uyum değerlendirmesi",
    ],
  },
  {
    key: "analiz",
    title: "Analiz Hizmetleri",
    short: "SPSS ile nicel, MAXQDA ile nitel analiz; ANSYS ve Python ile sayısal çalışmalar.",
    description:
      "Nicel ve nitel analizden mühendislik simülasyonuna kadar; yöntem seçimi, varsayım kontrolü ve bulguların akademik dille yorumlanması için öğretici danışmanlık.",
    deliverables: [
      "Analiz planı ve yöntem gerekçesi",
      "Açıklamalı analiz ve proje dosyaları",
      "APA 7 veya kurum kılavuzuna göre tablo ve grafik kontrolü",
      "Bulguları yorumlamanız için rehber notlar",
    ],
  },
  {
    key: "dil",
    title: "Dil ve Editörlük",
    short: "Türkçe ve İngilizce metinlerde akademik netlik, doğru terminoloji ve atıf düzeni.",
    description:
      "Metnin anlamına ve yazarın sesine sadık kalarak; dil, üslup, çeviri ve kaynakça uyumunda editörlük ve danışmanlık.",
    deliverables: [
      "Değişiklik izlemeli (track changes) dosya",
      "Terminoloji ve üslup notları",
      "Kaynakça tutarlılık raporu",
      "Kurum şablonuna uygun son kontrol",
    ],
  },
];

export const services: Service[] = [
  // ───────────────────────── TEZ VE AKADEMİK SÜREÇ ─────────────────────────
  {
    slug: "tez-makale-yontem-danismanligi",
    category: "tez",
    title: "Tez ve Makale Yöntem Danışmanlığı",
    short: "Araştırma tasarımı, yöntem seçimi ve akademik süreç danışmanlığı.",
    description:
      "Araştırma sorunuzu netleştirmekten uygun yöntemin seçimine, bölüm planından jüri sürecine kadar tüm akademik yol haritanızda yanınızdayız. Çalışmayı sizin yerinize yazmıyoruz; araştırmanızı doğru kurgulamanız ve zamanında tamamlamanız için yöntemsel ve stratejik destek veriyoruz.",
    tools: ["Zotero", "Mendeley", "Microsoft Word"],
    bullets: [
      "Araştırma sorusu ve hipotez netleştirme",
      "Uygun araştırma yöntemi ve deseni seçimi",
      "Bölüm planı ve zaman çizelgesi hazırlama",
      "Danışman ve jüri süreçlerine hazırlık desteği",
    ],
    examples: [
      "Yüksek lisans tez önerisinin yöntemsel tutarlılık kontrolü",
      "Araştırma sorusu, yöntem ve analiz uyum matrisi hazırlama",
      "Tez izleme komitesi öncesi süreç planlaması",
      "Tezden makaleye geçiş için yayın planı",
    ],
    audience: "Lisans, yüksek lisans ve doktora öğrencileri",
    faqs: [
      {
        q: "Tez konumu henüz belirlemedim, bu aşamada destek alabilir miyim?",
        a: "Evet. İlgi alanınız, literatürdeki boşluklar ve uygulanabilirlik açısından olası konuları birlikte değerlendirir, araştırılabilir bir soruya dönüştürmeniz için yöntemsel çerçeve sunarız. Konu seçimi ve nihai karar size ve tez danışmanınıza aittir.",
      },
      {
        q: "Tezimi sizin yazmanız mümkün mü?",
        a: "Hayır. Etik ilkelerimiz ve mevzuat gereği kişi adına tez, makale veya ödev hazırlamıyoruz. Yöntem, analiz, dil ve süreç danışmanlığıyla kendi çalışmanızı güçlü biçimde tamamlamanızı destekliyoruz.",
      },
    ],
  },
  {
    slug: "literatur-tarama-danismanligi",
    category: "tez",
    title: "Literatür Tarama Danışmanlığı",
    short: "Güncel, ilgili ve doğru kaynaklara ulaşma desteği.",
    description:
      "Alan yazınında kaybolmadan, çalışmanızla doğrudan ilgili ve güncel kaynaklara ulaşmanız için sistematik tarama stratejisi kurguluyoruz. Kaynak yönetimi ve atıf düzeni konusunda da yönlendirme sağlıyoruz.",
    tools: ["Web of Science", "Scopus", "Google Scholar", "TR Dizin", "YÖK Ulusal Tez Merkezi", "Zotero"],
    bullets: [
      "Veri tabanlarında sistematik tarama stratejisi",
      "Güncel ve nitelikli kaynak belirleme",
      "Kaynakça ve atıf sistemleri (APA 7 vb.) danışmanlığı",
      "Alan yazını haritası (literature map) çıkarma",
    ],
    examples: [
      "Son beş yılın alan yazınını kapsayan literatür haritası",
      "Kavramsal çerçeve için kuramların karşılaştırma tablosu",
      "YÖK Ulusal Tez Merkezi'nde benzer çalışmaların taranması",
      "Zotero kütüphanesi ve etiketleme sistemi kurulumu",
    ],
    audience: "Tez, makale ve proje çalışması yürütenler",
    faqs: [
      {
        q: "Hangi veri tabanlarında tarama yapmalıyım?",
        a: "Alanınıza göre değişir: sağlıkta PubMed, sosyal bilimlerde Web of Science ve Scopus, Türkçe literatür için TR Dizin ve YÖK Ulusal Tez Merkezi öne çıkar. Size özel bir veri tabanı stratejisi belirleriz.",
      },
      {
        q: "Erişimim olmayan makalelere nasıl ulaşırım?",
        a: "Üniversite kütüphanesi uzaktan erişimi, açık erişim sürümleri, kurumsal arşivler ve yazarla iletişim gibi yasal yöntemler konusunda yönlendirme yapıyoruz.",
      },
    ],
  },
  {
    slug: "anket-tasarimi-raporlama",
    category: "tez",
    title: "Anket Tasarımı ve Raporlama Danışmanlığı",
    short: "Geçerli, güvenilir anket kurgusu ve sonuç raporlama.",
    description:
      "Araştırma sorunuza uygun, geçerlilik ve güvenilirliği yüksek anket/ölçek tasarımı konusunda danışmanlık veriyoruz. Toplanan verinin raporlanmasında akademik standartlara uygun sunum desteği sağlıyoruz.",
    tools: ["Google Forms", "Qualtrics", "LimeSurvey", "SPSS"],
    bullets: [
      "Ölçek/anket maddesi tasarım danışmanlığı",
      "Geçerlilik-güvenilirlik değerlendirmesi yöntem desteği",
      "Veri toplama süreci planlama",
      "Bulguların akademik raporlama standardına uygun sunumu",
    ],
    examples: [
      "Çalışan bağlılığı anketinin yapısının kurgulanması",
      "Hizmet memnuniyeti araştırması için örnekleme planı",
      "Koşullu sorular içeren çevrim içi anket kurulumu",
      "Pilot uygulama verisiyle madde analizi",
    ],
    audience: "Alan araştırması yürüten öğrenci ve kurumlar",
    faqs: [
      {
        q: "Etik kurul başvurusu için anket formu hazırlığında destek var mı?",
        a: "Evet. Etik kurul başvurusunda istenen gönüllü onam formu, veri toplama aracı ve araştırma protokolünün yöntemsel tutarlılığı için danışmanlık veriyoruz. Başvuru ve beyanlar araştırmacı tarafından yapılır.",
      },
      {
        q: "Kaç katılımcıya ulaşmam gerekiyor?",
        a: "Gerekli örneklem büyüklüğü evren büyüklüğüne, analiz yöntemine ve kabul edilen hata payına göre hesaplanır. Hesaplamayı birlikte yapıyor ve gerekçesini açıklıyoruz.",
      },
    ],
  },
  {
    slug: "docentlik-basvuru-danismanligi",
    category: "tez",
    title: "Doçentlik Başvuru Dosyası Danışmanlığı",
    short: "ÜAK'ın ilan ettiği güncel koşulları esas alan başvuru dosyası desteği.",
    description:
      "Doçentlik başvurunuzda ÜAK'ın (Üniversitelerarası Kurul) yayımladığı güncel koşulları inceleyerek yayın, atıf ve faaliyet bilgilerinizin sınıflandırılması ve dosya düzeni için danışmanlık sağlıyoruz. Nihai beyan, belge doğruluğu, puanlama ve başvuru sorumluluğu adaya aittir; kabul veya sonuç garantisi verilmez.",
    tools: ["Web of Science", "Scopus", "TR Dizin", "Excel"],
    bullets: [
      "ÜAK kriterlerine göre dosya kontrol listesi",
      "Yayın, atıf ve faaliyet dökümü düzenleme desteği",
      "Ek belgelerin düzenine ilişkin kontrol desteği",
      "Alan endeksi ve puanlama tablosu danışmanlığı",
    ],
    examples: [
      "Temel alan kriterlerine göre eksik puan kontrolü",
      "Atıf listesinin kaynak türüne göre sınıflandırılması",
      "Proje, tez yönetimi ve eğitim-öğretim faaliyetlerinin dökümü",
      "Başvuru öncesi dosya tutarlılık kontrolü",
    ],
    audience: "Doçentlik başvurusu yapacak akademisyenler",
    faqs: [
      {
        q: "Hangi dönemin kriterlerini esas alıyorsunuz?",
        a: "Başvuru yapacağınız dönem için ÜAK'ın yayımladığı güncel ve yürürlükteki koşulları esas alıyoruz. Nihai uygunluk değerlendirmesi ÜAK ve ilgili jüriler tarafından yapılır.",
      },
      {
        q: "e-Devlet veya ÜAK sistem şifremi paylaşmam gerekiyor mu?",
        a: "Hayır. Doçentlik başvurusu ÜAK sistemi üzerinden yalnızca aday tarafından yapılır. e-Devlet, YÖKSİS veya ÜAK sistem şifreniz hiçbir aşamada talep edilmez ve kimseyle paylaşılmamalıdır.",
      },
    ],
  },
  {
    slug: "sunum-juri-hazirlik",
    category: "tez",
    title: "Sunum ve Jüri Hazırlık Danışmanlığı",
    short: "Tez savunması ve jüri sunumuna özgüvenli hazırlık.",
    description:
      "Tez savunmanıza veya jüri sunumunuza, olası soruları öngörerek ve sunumunuzu güçlendirerek hazırlanmanızı sağlıyoruz. Slayt tasarımından sunuş tekniğine kadar destek veriyoruz.",
    tools: ["PowerPoint", "Keynote", "Canva"],
    bullets: [
      "Sunum içeriği ve slayt akışı danışmanlığı",
      "Olası jüri sorularına hazırlık",
      "Sunuş tekniği ve zaman yönetimi",
      "Prova ve geri bildirim oturumu",
    ],
    examples: [
      "Doktora tez savunması için sunum akışı",
      "Yüksek lisans jüri sorularına prova oturumu",
      "Kongre bildirisi sunum hazırlığı",
      "Tez izleme komitesi ara rapor sunumu",
    ],
    audience: "Savunma veya jüri sunumu yaklaşan öğrenciler",
    faqs: [
      {
        q: "Prova oturumları çevrim içi mi yapılıyor?",
        a: "Evet. Prova oturumları çevrim içi yapılabilir; sunumunuzu gerçek savunma koşullarına benzer biçimde prova eder, ayrıntılı geri bildirim veririz.",
      },
      {
        q: "Jüri hangi soruları sorabilir?",
        a: "Genellikle yöntem seçimi, örneklem, sınırlılıklar, literatüre katkı ve bulguların yorumu üzerine sorular gelir. Tezinize özel olası soru listesi üzerinden yanıtlarınızı birlikte çalışırız.",
      },
    ],
  },

  // ───────────────────────── ANALİZ HİZMETLERİ ─────────────────────────
  {
    slug: "istatistiksel-analiz-danismanligi",
    category: "analiz",
    title: "İstatistiksel Analiz Danışmanlığı",
    short: "SPSS, R ve Python ile veri analizi yöntem desteği.",
    description:
      "Verinizi doğru testlerle, doğru varsayımlar altında analiz etmeniz için yöntemsel danışmanlık sağlıyoruz. SPSS, R ve Python üzerinde hangi analizin neden uygun olduğunu, sonuçların nasıl yorumlanacağını birlikte çalışarak aktarıyoruz.",
    tools: ["SPSS", "R", "Python", "Jamovi", "JASP"],
    bullets: [
      "Uygun istatistiksel test ve model seçimi",
      "SPSS / R / Python üzerinde analiz danışmanlığı",
      "Sonuçların akademik dille yorumlanması",
      "Tablo ve grafiklerin APA veya kurum kılavuzuna göre kontrolü",
    ],
    examples: [
      "İki ölçek puanı arasındaki ilişkinin regresyon analiziyle incelenmesi",
      "Memnuniyet puanlarının demografik değişkenlere göre karşılaştırılması",
      "Ön test–son test deneysel desende tekrarlı ölçümler analizi",
      "Likert tipi anket verisinde betimsel ve çıkarımsal analiz",
    ],
    audience: "Nicel araştırma yürüten tüm öğrenci ve akademisyenler",
    faqs: [
      {
        q: "Hangi istatistiksel testi kullanacağımı bilmiyorum, yardımcı olur musunuz?",
        a: "Evet. Araştırma sorunuzu, değişken türlerinizi ve örneklem yapınızı birlikte inceleyerek uygun test veya modeli gerekçesiyle belirliyoruz. Seçimin nedenini yöntem bölümünüzde savunabilecek şekilde açıklıyoruz.",
      },
      {
        q: "Analiz sonuçlarını kendim yorumlayabilecek miyim?",
        a: "Amacımız tam olarak bu. Her adımı gerekçesiyle açıklıyor, yorumlama için rehber notlar paylaşıyoruz. Bulguların metne dönüştürülmesi ve nihai yorum araştırmacıya aittir.",
      },
    ],
  },
  {
    slug: "spss-analizi",
    category: "analiz",
    title: "SPSS ile Nicel Analiz Danışmanlığı",
    short: "IBM SPSS ile betimsel, karşılaştırmalı ve ilişkisel analizlerde yöntem danışmanlığı.",
    description:
      "IBM SPSS Statistics ile yürüttüğünüz nicel araştırmalarda veri hazırlığından raporlamaya kadar yöntemsel danışmanlık sunuyoruz. Uygun testleri birlikte belirliyor, analiz adımlarını sizinle birlikte yürütüyor ve çıktıların akademik dile nasıl aktarılacağını gösteriyoruz; böylece analizinizi anlayarak savunabilirsiniz.",
    tools: ["IBM SPSS Statistics", "PROCESS Macro", "Jamovi", "JASP"],
    bullets: [
      "Veri seti hazırlama, kodlama ve eksik veri kontrolü",
      "Betimsel istatistik, çapraz tablo ve ki-kare analizleri",
      "t-testi, ANOVA ve parametrik olmayan testler",
      "Korelasyon ve regresyon analizleri",
      "PROCESS Macro ile aracı ve düzenleyici etki analizi",
    ],
    examples: [
      "İş stresi ve tükenmişlik ilişkisinde aracı değişken analizi",
      "Öğrencilerin dijital okuryazarlık düzeylerinin karşılaştırılması",
      "Satın alma niyetini yordayan faktörlerin lojistik regresyonu",
      "Ölçek puanlarının cinsiyet ve yaş gruplarına göre farklılaşması",
    ],
    audience: "SPSS ile nicel araştırma yürüten tez öğrencileri ve araştırmacılar",
    isNew: true,
    faqs: [
      {
        q: "SPSS lisansım yok, yine de çalışabilir miyiz?",
        a: "Evet. Dilerseniz aynı analizleri ücretsiz alternatifler olan Jamovi veya JASP üzerinde yürütmeniz için de rehberlik ediyoruz; üniversitenizin SPSS lisansı olup olmadığını da kontrol etmenizi öneririz.",
      },
      {
        q: "Aracı ve düzenleyici etki analizlerinde destek veriyor musunuz?",
        a: "Evet. PROCESS Macro ile aracı ve düzenleyici etki modellerinin kurulumu ve bootstrap sonuçlarının yorumlanması konusunda yöntemsel danışmanlık veriyoruz.",
      },
    ],
  },
  {
    slug: "maxqda-analizi",
    category: "analiz",
    title: "MAXQDA ile Nitel Analiz Danışmanlığı",
    short: "Görüşme, odak grup ve doküman verilerinde kodlama ve tema analizi danışmanlığı.",
    description:
      "MAXQDA ile nitel verilerinizi sistematik biçimde analiz etmeniz için yöntemsel danışmanlık sunuyoruz. Proje kurulumundan kod sisteminin oluşturulmasına, tema haritalarından güvenirlik çalışmasına kadar her aşamayı birlikte planlıyor, kodlama mantığını öğreterek süreci sizinle yürütüyoruz.",
    tools: ["MAXQDA", "MAXMaps", "MAXQDA Analytics Pro"],
    bullets: [
      "Proje kurulumu, doküman grupları ve değişken tanımlama",
      "Tümevarımsal ve tümdengelimsel kod sistemi oluşturma",
      "Tematik analiz ve içerik analizi yöntem desteği",
      "Kod matrisi, kod ilişkileri ve MAXMaps ile görselleştirme",
      "Kodlayıcılar arası uyum (güvenirlik) çalışması",
    ],
    examples: [
      "Öğretmenlerle yapılan yarı yapılandırılmış görüşmelerde tematik analiz",
      "Sağlık çalışanlarının mesleki deneyimlerine ilişkin fenomenolojik analiz",
      "Kurumsal stratejik planlarda doküman analizi",
      "Odak grup verilerinde kod, alt tema ve tema hiyerarşisi",
    ],
    audience: "Eğitim, sağlık, sosyal bilimler ve işletme alanında nitel araştırma yürütenler",
    isNew: true,
    faqs: [
      {
        q: "Transkriptlerim hazır değil, bu aşamada da destek var mı?",
        a: "Evet. Transkripsiyon kurallarını, anonimleştirmeyi ve MAXQDA'ya uygun dosya formatını birlikte planlıyoruz. Görüşme kayıtlarınızın gizliliği KVKK çerçevesinde korunur.",
      },
      {
        q: "Nitel analizde güvenirliği nasıl sağlarız?",
        a: "Kodlayıcılar arası uyum, uzman incelemesi, katılımcı teyidi ve denetim izi gibi inandırıcılık stratejilerini araştırma deseninize uygun şekilde planlarız.",
      },
    ],
  },
  {
    slug: "ansys-analizi",
    category: "analiz",
    title: "ANSYS Analiz Danışmanlığı",
    short: "ANSYS Workbench ile yapısal, termal, modal ve akış analizlerinde danışmanlık.",
    description:
      "ANSYS Workbench ortamında mühendislik problemlerinizi sayısal olarak modellemeniz için yöntemsel danışmanlık sunuyoruz. Geometri hazırlığından mesh kalitesine, sınır koşullarından yakınsama kontrolüne ve sonuçların analitik veya deneysel verilerle doğrulanmasına kadar her adımı birlikte kurguluyor ve gerekçeleriyle açıklıyoruz.",
    tools: ["ANSYS Workbench", "ANSYS Mechanical", "ANSYS Fluent", "SpaceClaim"],
    bullets: [
      "Statik yapısal, modal ve burkulma analizleri",
      "Kararlı ve geçici rejim ısı transferi analizleri",
      "ANSYS Fluent ile akış ve ısı transferi (CFD) analizleri",
      "Mesh bağımsızlık çalışması ve yakınsama kontrolü",
      "Sonuçların analitik çözüm veya literatürle doğrulanması",
    ],
    examples: [
      "Kompozit kirişte statik ve modal analiz ile doğal frekans tespiti",
      "Elektronik kart soğutucusunda termal analiz",
      "Basınçlı kapta gerilme analizi ve emniyet katsayısı değerlendirmesi",
      "Borulu ısı değiştiricide akış ve ısı transferi analizi",
    ],
    audience: "Makine, inşaat, uçak, otomotiv ve enerji mühendisliği öğrencileri ile araştırmacılar",
    isNew: true,
    faqs: [
      {
        q: "ANSYS Student sürümüyle çalışabilir miyiz?",
        a: "Evet. Student sürümünün düğüm ve eleman sınırlamalarını dikkate alarak modeli buna uygun kurgularız. Daha büyük modellerde üniversitenizin lisansını kullanmanız önerilir.",
      },
      {
        q: "Simülasyon sonuçlarımın doğru olduğundan nasıl emin olurum?",
        a: "Mesh bağımsızlık çalışması, yakınsama kriterleri ve mümkünse analitik çözüm veya literatürdeki deneysel verilerle karşılaştırma yaparak sonuçların güvenilirliğini birlikte değerlendiririz. Bu adımlar yöntem bölümünüzü de güçlendirir.",
      },
    ],
  },
  {
    slug: "python-analizi",
    category: "analiz",
    title: "Python ile Veri Analizi Danışmanlığı",
    short: "pandas, NumPy, SciPy ve statsmodels ile tekrarlanabilir veri analizi danışmanlığı.",
    description:
      "Python ile veri temizleme, dönüştürme, istatistiksel analiz ve görselleştirme süreçlerinizde yöntemsel danışmanlık sunuyoruz. Analizler açıklamalı Jupyter Notebook'larda birlikte kurgulanır; her adımı anlayabilir, savunabilir ve yeniden üretebilirsiniz.",
    tools: ["Python", "pandas", "NumPy", "SciPy", "statsmodels", "Matplotlib", "Jupyter"],
    bullets: [
      "Büyük ve dağınık veri setlerinin pandas ile düzenlenmesi",
      "Keşifsel veri analizi ve aykırı değer kontrolü",
      "SciPy ve statsmodels ile hipotez testleri ve regresyon modelleri",
      "Matplotlib ve Seaborn ile yayın standardında grafikler",
      "Açıklamalı notebook ve tekrarlanabilir proje yapısı",
    ],
    examples: [
      "Açık belediye verilerinden hava kalitesi eğilim analizi",
      "Sensör verilerinde filtreleme ve istatistiksel özetleme",
      "Anket verisinin Python ile düzenlenmesi ve karşılaştırmalı analizi",
      "Zaman içinde değişen göstergelerin grafiklerle raporlanması",
    ],
    audience: "Mühendislik, fen, sağlık ve sosyal bilimlerde Python kullanan araştırmacılar",
    isNew: true,
    faqs: [
      {
        q: "Python bilmiyorum, yine de çalışabilir miyiz?",
        a: "Evet. Kodlar satır satır açıklamalı olarak ele alınır; isterseniz birebir oturumlarla temel Python ve pandas mantığını birlikte çalışırız. Amaç, analizinizi anlayıp savunabilmenizdir.",
      },
      {
        q: "Hangi ortamda çalışıyoruz?",
        a: "Jupyter Notebook veya kurulum gerektirmeyen Google Colab üzerinde, tekrarlanabilir ortam bilgisiyle birlikte çalışıyoruz.",
      },
    ],
  },

  // ───────────────────────── DİL VE EDİTÖRLÜK ─────────────────────────
  {
    slug: "akademik-dil-imla-editorlugu",
    category: "dil",
    title: "Akademik Dil ve İmla Editörlüğü",
    short: "Türkçe ve İngilizce metinlerde dil, imla ve akış düzenleme.",
    description:
      "Yazdığınız metnin anlamını değiştirmeden; dil bilgisi, imla, akademik üslup ve akış açısından gözden geçiriyoruz. Amacımız sizin sesinizi daha net ve akademik standartlara uygun şekilde ortaya çıkarmak.",
    tools: ["Microsoft Word (değişiklik izleme)", "TDK Yazım Kılavuzu", "APA 7"],
    bullets: [
      "Dil bilgisi ve imla düzenleme",
      "Akademik üslup ve terminoloji tutarlılığı",
      "Paragraf ve bölüm akışı önerileri",
      "Türkçe ve İngilizce metin desteği",
    ],
    examples: [
      "Tez metninin TDK yazım kurallarına göre gözden geçirilmesi",
      "Uluslararası dergiye gönderilecek İngilizce makalenin dil kontrolü",
      "Hakemin dil düzeltmesi talebi sonrası gözden geçirme",
      "Kongre bildiri özetinin akademik üslup kontrolü",
    ],
    audience: "Tez, makale, sunum ve rapor metni olan herkes",
    faqs: [
      {
        q: "Editörlük metnimin içeriğini değiştirir mi?",
        a: "Hayır. Anlamı ve bilimsel içeriği değiştirmeden dil, imla ve üslup düzenlemesi yaparız. Tüm değişiklikler izlenebilir biçimde işaretlenir; hangisini kabul edeceğinize siz karar verirsiniz.",
      },
      {
        q: "Aldığım editörlük desteğini belirtmem gerekir mi?",
        a: "Kurumunuzun veya derginin kuralları gerektiriyorsa, alınan dil editörlüğü desteğinin teşekkür bölümünde belirtilmesini öneririz.",
      },
    ],
  },
  {
    slug: "akademik-ceviri",
    category: "dil",
    title: "Akademik Çeviri",
    short: "Türkçe–İngilizce akademik metin çevirisi.",
    description:
      "Makale, özet (abstract), tez bölümü ve akademik yazışmalarınızı, alan terminolojisine hâkim çevirmenlerle Türkçe-İngilizce ve İngilizce-Türkçe olarak çeviriyoruz.",
    tools: ["Microsoft Word", "SDL Trados", "memoQ"],
    bullets: [
      "Makale ve tez bölümü çevirisi",
      "Abstract / özet çevirisi",
      "Akademik yazışma ve sunum çevirisi",
      "Alan terminolojisine uygun çeviri kontrolü",
    ],
    examples: [
      "Türkçe makalenin uluslararası dergi için İngilizceye çevirisi",
      "Tez özetinin (abstract) İngilizce çevirisi",
      "Ölçek maddelerinin çeviri–geri çeviri sürecine destek",
      "Kongre sunumu ve poster çevirisi",
    ],
    audience: "Uluslararası yayın ve başvuru süreci olan araştırmacılar",
    faqs: [
      {
        q: "Hangi alanlarda çeviri yapıyorsunuz?",
        a: "Sağlık, mühendislik, sosyal bilimler, eğitim ve iktisat başta olmak üzere geniş bir yelpazede, alan terminolojisine hâkim çevirmenlerle çalışıyoruz.",
      },
      {
        q: "Çeviri sonrası kontrol yapılıyor mu?",
        a: "Evet. Her çeviri, terminoloji tutarlılığı ve akademik üslup açısından ikinci bir kontrolden geçirilir.",
      },
    ],
  },
  {
    slug: "kaynakca-atif-uyum-danismanligi",
    category: "dil",
    title: "Kaynakça ve Atıf Uyum Danışmanlığı",
    short: "APA, MLA ve kurum şablonlarına uygun kaynakça ve atıf düzeni desteği.",
    description:
      "Çalışmanızdaki atıfların ve kaynakçanın; kurumunuzun istediği stile (APA 7, MLA, Chicago vb.) tam uyumlu, eksiksiz ve tutarlı olması için danışmanlık sağlıyoruz. Metin içi atıflarla kaynakça listesinin birebir eşleştiğini, biçim kurallarına uyduğunu ve gerekli tüm alanların doğru girildiğini birlikte kontrol ediyoruz.",
    tools: ["Zotero", "Mendeley", "EndNote"],
    bullets: [
      "Kurumun istediği atıf stiline (APA 7, MLA, Chicago vb.) uyum kontrolü",
      "Metin içi atıf ile kaynakça listesi tutarlılığı",
      "Kaynak yönetimi araçları (Zotero, Mendeley vb.) kullanım desteği",
      "Eksik veya hatalı kaynak kayıtlarının tamamlanması",
    ],
    examples: [
      "Kapsamlı bir doktora tezinde APA 7 tutarlılık kontrolü",
      "Numaralı atıf sistemi kullanan tezde atıf düzeni",
      "Farklı atıf stilleri arasında dönüştürme",
      "Zotero ile ortak kaynak kütüphanesi kurulumu",
    ],
    audience: "Kaynakçasını teslim öncesi son kez sağlama almak isteyen herkes",
    faqs: [
      {
        q: "Kaynakçamı otomatik hâle getirebilir miyim?",
        a: "Evet. Zotero veya Mendeley ile Word entegrasyonunu kurarak metin içi atıfların ve kaynakçanın otomatik güncellenmesini sağlamanız için destek veriyoruz.",
      },
      {
        q: "Sadece belirli bölümler için kontrol yaptırabilir miyim?",
        a: "Evet. Kapsam ihtiyacınıza göre belirlenir; tek bir bölüm, makale veya tezin tamamı için kontrol yapılabilir.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getCategory(key: CategoryKey) {
  return categories.find((c) => c.key === key)!;
}

export function servicesByCategory(key: CategoryKey) {
  return services.filter((s) => s.category === key);
}

/** Hizmetlerde kullanılan benzersiz yazılım ve araçlar (yapısal veri için). */
export const allTools = Array.from(new Set(services.flatMap((s) => s.tools)));
