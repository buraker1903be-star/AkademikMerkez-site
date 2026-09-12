export type CategoryKey = "nicel" | "python" | "muhendislik" | "nitel" | "tez" | "dil";

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
  featured?: boolean;
};

// Not: Aşağıdaki hizmetler danışmanlık/yöntem desteği çerçevesinde sunulur.
// Akademik Merkez; öğrencinin veya akademisyenin adına çalışma üretmez,
// yalnızca yöntem, analiz, dil ve süreç danışmanlığı sağlar. Kurumların güncel
// kuralları gözetilir; nihai akademik sorumluluk araştırmacıdadır.

export const categories: Category[] = [
  {
    key: "nicel",
    title: "İstatistik ve Nicel Analiz",
    short: "SPSS, R, AMOS, SmartPLS ve Stata ile doğru test, doğru model, doğru yorum.",
    description:
      "Tanımlayıcı istatistikten yapısal eşitlik modellemesine kadar nicel araştırmanın her aşamasında; varsayım kontrolü, model seçimi ve raporlama standardına uygun yorum desteği.",
    deliverables: [
      "Analiz planı ve varsayım kontrol raporu",
      "Çıktı dosyaları (.spv, .R, .amw, .do vb.)",
      "APA 7 uyumlu tablo ve grafik taslakları",
      "Bulguları yorumlamanız için açıklamalı rehber",
    ],
  },
  {
    key: "python",
    title: "Python, Veri Bilimi ve Yapay Zekâ",
    short: "pandas'tan PyTorch'a, veriden içgörüye tekrarlanabilir analiz süreçleri.",
    description:
      "Veri temizlemeden makine öğrenmesine, doğal dil işlemeden görüntü işlemeye kadar Python ekosisteminde; açıklamalı, tekrarlanabilir ve akademik raporlamaya hazır analiz desteği.",
    deliverables: [
      "Açıklamalı Jupyter Notebook ve .py betikleri",
      "requirements.txt ile tekrarlanabilir ortam",
      "Model performans metrikleri ve görseller",
      "Yöntem bölümüne temel oluşturacak teknik not",
    ],
  },
  {
    key: "muhendislik",
    title: "Mühendislik ve Simülasyon",
    short: "ANSYS, Abaqus, COMSOL ve MATLAB ile sayısal analiz ve simülasyon.",
    description:
      "Yapısal, termal ve akışkanlar dinamiği problemlerinde; geometri hazırlığı, ağ (mesh) yapısı, sınır koşulları, doğrulama ve sonuçların mühendislik diliyle yorumlanması için uçtan uca danışmanlık.",
    deliverables: [
      "Model kurulum ve varsayım dokümanı",
      "Simülasyon dosyaları (.wbpj, .cas/.dat, .cae, .m vb.)",
      "Mesh bağımsızlık ve doğrulama çalışması",
      "Kontur, grafik ve animasyon çıktıları",
    ],
  },
  {
    key: "nitel",
    title: "Nitel ve Karma Yöntem Analizi",
    short: "MAXQDA, NVivo ve ATLAS.ti ile sistematik kodlama ve tema analizi.",
    description:
      "Görüşme, odak grup, doküman ve sosyal medya verilerinde; kod sistemi kurulumundan tema haritalarına, güvenirlik hesaplamasından karma yöntem entegrasyonuna kadar nitel araştırma danışmanlığı.",
    deliverables: [
      "Kod kitabı (codebook) ve kod sistemi",
      "MAXQDA / NVivo proje dosyası",
      "Kod-tema haritaları ve görselleştirmeler",
      "Kodlayıcılar arası uyum (Kappa) raporu",
    ],
  },
  {
    key: "tez",
    title: "Tez, Yayın ve Akademik Kariyer",
    short: "Yöntem tasarımından dergi seçimine, doçentlik dosyasından proje başvurusuna.",
    description:
      "Araştırma sorusunun kurgusundan yayın ve kariyer adımlarına kadar; akademik yolculuğun stratejik kararlarında yöntemsel ve süreç odaklı danışmanlık.",
    deliverables: [
      "Kişiye özel süreç planı ve zaman çizelgesi",
      "Kontrol listeleri ve yazılı geri bildirim",
      "Görüşme notları ve aksiyon maddeleri",
      "Kurum/dergi kılavuzuna uyum değerlendirmesi",
    ],
  },
  {
    key: "dil",
    title: "Dil, Çeviri ve Akademik Biçim",
    short: "Türkçe ve İngilizce metinlerde akademik netlik, doğru terminoloji, kusursuz biçim.",
    description:
      "Metnin anlamına ve yazarın sesine sadık kalarak; dil, üslup, çeviri, atıf ve tez yazım kılavuzu biçim uyumunda editörlük ve danışmanlık.",
    deliverables: [
      "Değişiklik izlemeli (track changes) dosya",
      "Terminoloji ve üslup notları",
      "Kaynakça tutarlılık raporu",
      "Kurum şablonuna uygun son biçim",
    ],
  },
];

export const services: Service[] = [
  // ───────────────────────── İSTATİSTİK VE NİCEL ANALİZ ─────────────────────────
  {
    slug: "istatistiksel-analiz-danismanligi",
    category: "nicel",
    title: "İstatistiksel Analiz Danışmanlığı",
    short: "SPSS, R ve Python ile veri analizi, test seçimi ve akademik yorum desteği.",
    description:
      "Verinizi doğru testlerle, doğru varsayımlar altında analiz etmeniz için yöntemsel danışmanlık sağlıyoruz. Araştırma sorunuza uygun analiz planını birlikte kuruyor, hangi testin neden seçildiğini ve sonuçların nasıl yorumlanacağını adım adım aktarıyoruz.",
    tools: ["SPSS", "R / RStudio", "Python", "Jamovi", "JASP", "G*Power"],
    bullets: [
      "Araştırma sorusuna uygun istatistiksel test ve model seçimi",
      "Normallik, homojenlik ve çoklu bağlantı gibi varsayım kontrolleri",
      "t-testi, ANOVA, MANOVA, korelasyon, regresyon ve parametrik olmayan testler",
      "G*Power ile örneklem büyüklüğü ve güç analizi",
      "Tablo ve grafiklerin APA 7 veya kurum kılavuzuna göre düzenlenmesi",
    ],
    examples: [
      "Öğretmen tükenmişliği ile iş doyumu arasındaki ilişkinin regresyon analizi",
      "Hasta memnuniyetinin demografik değişkenlere göre karşılaştırılması (ANOVA)",
      "Ön test–son test deneysel desende tekrarlı ölçümler analizi",
      "Likert ölçekli anket verisinde betimsel ve çıkarımsal analiz",
    ],
    audience: "Nicel araştırma yürüten lisans, yüksek lisans ve doktora öğrencileri ile akademisyenler",
    faqs: [
      {
        q: "Hangi istatistiksel testi kullanacağımı bilmiyorum, yardımcı olur musunuz?",
        a: "Evet. Araştırma sorunuzu, değişken türlerinizi ve örneklem yapınızı birlikte inceleyerek uygun test veya modeli gerekçesiyle belirliyoruz. Seçimin nedenini yöntem bölümünüzde savunabilecek şekilde açıklıyoruz.",
      },
      {
        q: "Analiz çıktılarını nasıl teslim ediyorsunuz?",
        a: "Analiz dosyaları, APA 7 uyumlu tablo taslakları ve bulguları yorumlamanız için açıklamalı bir rehber paylaşılır. Bulguların metne dönüştürülmesi ve nihai yorum araştırmacıya aittir.",
      },
    ],
  },
  {
    slug: "spss-analizi",
    category: "nicel",
    title: "SPSS Analizi",
    short: "IBM SPSS Statistics ile betimsel, karşılaştırmalı ve ilişkisel analiz desteği.",
    description:
      "IBM SPSS Statistics üzerinde veri girişinden raporlamaya kadar tüm analiz sürecinde danışmanlık sunuyoruz. Veri setinizi analiz için hazırlıyor, uygun testleri birlikte uyguluyor ve çıktı tablolarını akademik dile nasıl aktaracağınızı gösteriyoruz.",
    tools: ["IBM SPSS Statistics", "SPSS PROCESS Macro", "Excel"],
    bullets: [
      "Veri seti hazırlama, kodlama ve eksik veri analizi",
      "Frekans, çapraz tablo, ki-kare ve betimsel istatistikler",
      "t-testi, ANOVA, Mann-Whitney U, Kruskal-Wallis testleri",
      "Korelasyon, çoklu ve lojistik regresyon analizleri",
      "PROCESS Macro ile aracı (mediation) ve düzenleyici (moderation) etki analizi",
    ],
    examples: [
      "Hemşirelerde iş stresi ve tükenmişlik ilişkisinde aracı değişken analizi",
      "Üniversite öğrencilerinin dijital okuryazarlık düzeylerinin karşılaştırılması",
      "Tüketici satın alma niyetini yordayan faktörlerin lojistik regresyonu",
      "Ölçek puanlarının cinsiyet ve yaş gruplarına göre farklılaşması",
    ],
    audience: "SPSS ile nicel analiz yapan tez öğrencileri ve araştırmacılar",
    featured: true,
    faqs: [
      {
        q: "SPSS lisansım yok, yine de çalışabilir miyiz?",
        a: "Evet. Analiz sürecini birlikte yürütür, çıktı dosyalarını (.spv) ve dışa aktarılmış tabloları paylaşırız. Dilerseniz aynı analizleri ücretsiz alternatifler olan Jamovi veya JASP üzerinde tekrarlamanız için de rehberlik ederiz.",
      },
      {
        q: "Aracı ve düzenleyici etki analizlerini yapıyor musunuz?",
        a: "Evet. Hayes PROCESS Macro ile basit, paralel ve seri aracı modeller ile düzenleyici etki analizlerinde model kurulumu ve bootstrap sonuçlarının yorumlanması konusunda danışmanlık veriyoruz.",
      },
    ],
  },
  {
    slug: "r-analizi",
    category: "nicel",
    title: "R ile İstatistiksel Analiz",
    short: "R ve RStudio ile tekrarlanabilir, ileri düzey istatistik ve görselleştirme.",
    description:
      "R ve RStudio üzerinde tekrarlanabilir analiz akışları kurmanız için danışmanlık sağlıyoruz. Karma etkili modellerden Bayesçi analize, ggplot2 ile yayın kalitesinde görselleştirmeden R Markdown raporlamaya kadar geniş bir yelpazede destek veriyoruz.",
    tools: ["R", "RStudio", "tidyverse", "ggplot2", "lme4", "lavaan", "R Markdown / Quarto"],
    bullets: [
      "tidyverse ile veri temizleme ve dönüştürme",
      "Genelleştirilmiş doğrusal ve karma etkili modeller (lme4, glmmTMB)",
      "lavaan ile doğrulayıcı faktör analizi ve yapısal eşitlik modeli",
      "ggplot2 ile dergi standardında grafikler",
      "R Markdown / Quarto ile tekrarlanabilir rapor",
    ],
    examples: [
      "Çok düzeyli (okul–öğrenci) başarı verisinin karma modelle analizi",
      "Klinik deney verisinde sağkalım (Kaplan-Meier, Cox) analizi",
      "Tarımsal deneme verisinde varyans ve çoklu karşılaştırma analizi",
      "Yayın için ggplot2 ile çok panelli şekil hazırlama",
    ],
    audience: "Tekrarlanabilir ve ileri düzey analiz ihtiyacı olan araştırmacılar",
    faqs: [
      {
        q: "R kodlarını bana da öğretiyor musunuz?",
        a: "Evet. Tüm kodlar satır satır açıklamalı olarak paylaşılır ve istenirse birebir oturumlarla kodun mantığını, parametrelerini ve çıktının yorumunu birlikte çalışırız.",
      },
      {
        q: "SPSS yerine neden R tercih edilmeli?",
        a: "R ücretsizdir, karma modeller, Bayesçi analiz ve özel görselleştirme gibi ileri yöntemlerde çok daha esnektir. Kodlu yapısı sayesinde analiziniz tamamen tekrarlanabilir olur; bu da hakem süreçlerinde önemli bir avantajdır.",
      },
    ],
  },
  {
    slug: "amos-yapisal-esitlik-modeli",
    category: "nicel",
    title: "AMOS ile Yapısal Eşitlik Modellemesi",
    short: "AMOS, LISREL ve Mplus ile DFA, YEM ve yol analizi danışmanlığı.",
    description:
      "Kuramsal modelinizi yapısal eşitlik modellemesi (YEM) ile test etmeniz için danışmanlık sunuyoruz. Doğrulayıcı faktör analizinden ölçme değişmezliğine, yol analizinden aracı etki testine kadar model kurulumu ve uyum indekslerinin yorumunda yanınızdayız.",
    tools: ["IBM SPSS AMOS", "LISREL", "Mplus", "R lavaan"],
    bullets: [
      "Doğrulayıcı faktör analizi (DFA) ve ölçme modeli",
      "Yapısal model ve yol analizi kurulumu",
      "Uyum indeksleri (χ²/sd, CFI, TLI, RMSEA, SRMR) değerlendirmesi",
      "Birleşim ve ayrışma geçerliği (AVE, CR, HTMT)",
      "Bootstrap ile aracı etki ve çok gruplu analiz",
    ],
    examples: [
      "Örgütsel adalet → iş tatmini → işten ayrılma niyeti yapısal modeli",
      "Uyarlanan bir ölçeğin Türkçe formunun DFA ile doğrulanması",
      "Teknoloji kabul modelinin (TAM) öğretmen örnekleminde test edilmesi",
      "Kadın ve erkek gruplarında ölçme değişmezliği analizi",
    ],
    audience: "Kuramsal model test eden doktora öğrencileri ve akademisyenler",
    faqs: [
      {
        q: "Model uyum indeksleri kötü çıktı, ne yapabiliriz?",
        a: "Modifikasyon indekslerini kuramsal gerekçeyle birlikte değerlendirir, ölçme modelindeki sorunlu maddeleri tespit eder ve raporlanabilir, savunulabilir iyileştirmeler için yol haritası çıkarırız. Kuramdan bağımsız veri uydurma amaçlı düzenleme yapılmaz.",
      },
      {
        q: "AMOS ve SmartPLS arasındaki fark nedir?",
        a: "AMOS kovaryans tabanlı YEM (CB-SEM) kullanır ve kuram doğrulamaya uygundur; SmartPLS ise varyans tabanlı (PLS-SEM) olup tahmin odaklı ve küçük örneklemli çalışmalarda tercih edilir. Hangisinin uygun olduğunu araştırma amacınıza göre birlikte belirleriz.",
      },
    ],
  },
  {
    slug: "smartpls-analizi",
    category: "nicel",
    title: "SmartPLS (PLS-SEM) Analizi",
    short: "SmartPLS 4 ile ölçme ve yapısal model değerlendirme danışmanlığı.",
    description:
      "SmartPLS 4 üzerinde PLS-SEM analizinin tüm aşamalarında danışmanlık veriyoruz. Ölçme modelinin güvenirlik ve geçerliğinden yapısal modelin açıklayıcılık ve tahmin gücüne kadar, hakemlerin beklediği raporlama standardına uygun değerlendirme sunuyoruz.",
    tools: ["SmartPLS 4", "WarpPLS", "R seminr"],
    bullets: [
      "Yansıtıcı ve biçimlendirici ölçme modeli değerlendirmesi",
      "Güvenirlik (α, rho_A, CR) ve geçerlik (AVE, HTMT) analizleri",
      "Yol katsayıları, R², f² ve Q² değerlendirmesi",
      "PLSpredict, MGA ve IPMA analizleri",
      "Hair ve ark. (2022) raporlama önerilerine uyum",
    ],
    examples: [
      "Mobil bankacılık kullanım niyetini açıklayan UTAUT2 modeli",
      "Marka deneyimi ve sadakat ilişkisinde çok gruplu analiz",
      "Yeşil pazarlama algısının satın alma davranışına etkisi",
      "KOBİ'lerde dijital dönüşüm yeteneğinin performansa etkisi",
    ],
    audience: "İşletme, pazarlama ve yönetim bilişim sistemleri alanındaki araştırmacılar",
    faqs: [
      {
        q: "Örneklemim küçük, PLS-SEM uygun mu?",
        a: "PLS-SEM görece küçük örneklemlerde de çalışabilir; ancak minimum örneklem, modelin karmaşıklığına göre (ör. ters karekök yöntemi) hesaplanmalıdır. Uygunluğu birlikte değerlendiririz.",
      },
      {
        q: "Hakem SmartPLS analizime itiraz etti, destek veriyor musunuz?",
        a: "Evet. Hakem yorumlarını yöntemsel açıdan inceler, ek analiz gereksinimlerini belirler ve yanıt mektubunuzda kullanabileceğiniz yöntemsel gerekçeleri netleştirmeniz için danışmanlık veririz.",
      },
    ],
  },
  {
    slug: "ekonometrik-analiz",
    category: "nicel",
    title: "Ekonometrik Analiz (Stata ve EViews)",
    short: "Zaman serisi, panel veri ve nedensellik analizlerinde ekonometri danışmanlığı.",
    description:
      "Stata, EViews ve R üzerinde ekonometrik modelleme süreçlerinde danışmanlık sunuyoruz. Birim kök testlerinden eş bütünleşmeye, panel veri modellerinden nedensellik testlerine kadar, iktisat ve finans alanındaki çalışmalarınızda doğru model kurgusunu birlikte oluşturuyoruz.",
    tools: ["Stata", "EViews", "Gretl", "R plm", "Python statsmodels"],
    bullets: [
      "Birim kök (ADF, PP, KPSS) ve yapısal kırılma testleri",
      "ARDL, VAR, VECM ve eş bütünleşme analizleri",
      "Panel veri: sabit/rassal etkiler, GMM, panel nedensellik",
      "Granger ve Toda-Yamamoto nedensellik testleri",
      "Değişen varyans, otokorelasyon ve tanısal testler",
    ],
    examples: [
      "Enerji tüketimi ve ekonomik büyüme ilişkisinde ARDL sınır testi",
      "OECD ülkelerinde doğrudan yabancı yatırımın panel veri analizi",
      "Döviz kuru ve enflasyon arasında nedensellik analizi",
      "BIST şirketlerinde finansal oranların karlılığa etkisi (panel regresyon)",
    ],
    audience: "İktisat, finans, işletme ve kamu yönetimi alanındaki araştırmacılar",
    faqs: [
      {
        q: "Verilerimi nereden bulacağımı bilmiyorum, yardımcı olur musunuz?",
        a: "Evet. Dünya Bankası, OECD, TÜİK, TCMB EVDS gibi açık veri kaynaklarından değişkenlerinize uygun serileri nasıl derleyeceğiniz konusunda yönlendirme yapıyoruz.",
      },
      {
        q: "Stata mı EViews mi kullanmalıyım?",
        a: "Her ikisi de ekonometride yaygındır. Zaman serisi ağırlıklı çalışmalarda EViews, panel ve mikro ekonometride Stata daha pratik olabilir. Danışmanınızın ve bölümünüzün tercihini de dikkate alarak birlikte karar veririz.",
      },
    ],
  },
  {
    slug: "anket-tasarimi-raporlama",
    category: "nicel",
    title: "Anket Tasarımı ve Raporlama Danışmanlığı",
    short: "Geçerli, güvenilir anket kurgusu, veri toplama planı ve sonuç raporlama.",
    description:
      "Araştırma sorunuza uygun, geçerliği ve güvenirliği yüksek anket tasarımı konusunda danışmanlık veriyoruz. Madde yazımından çevrim içi form kurulumuna, örnekleme planından bulguların akademik standartlarda raporlanmasına kadar süreci birlikte yönetiyoruz.",
    tools: ["Google Forms", "Qualtrics", "SurveyMonkey", "LimeSurvey", "SPSS"],
    bullets: [
      "Araştırma amacına uygun anket yapısı ve madde yazımı danışmanlığı",
      "Kapsam geçerliği için uzman görüşü formu hazırlığı",
      "Pilot uygulama ve ön analiz",
      "Örnekleme yöntemi ve veri toplama planı",
      "Bulguların akademik raporlama standardına uygun sunumu",
    ],
    examples: [
      "Kurum içi çalışan bağlılığı anketinin tasarlanması ve raporlanması",
      "Belediye hizmet memnuniyeti araştırması için örnekleme planı",
      "Qualtrics ile koşullu (skip logic) çevrim içi anket kurulumu",
      "Pilot uygulama verisiyle madde analizi",
    ],
    audience: "Alan araştırması yürüten öğrenciler, akademisyenler ve kurumlar",
    faqs: [
      {
        q: "Etik kurul başvurusu için anket formu hazırlığında destek var mı?",
        a: "Evet. Etik kurul başvurusunda istenen gönüllü onam formu, veri toplama aracı ve araştırma protokolü bölümlerinin yöntemsel tutarlılığı için danışmanlık veriyoruz. Başvuru ve beyanlar araştırmacı tarafından yapılır.",
      },
      {
        q: "Kaç katılımcıya ulaşmam gerekiyor?",
        a: "Gerekli örneklem büyüklüğü evren büyüklüğüne, analiz yöntemine ve kabul edilen hata payına göre hesaplanır. G*Power veya formül tabanlı yöntemlerle hesaplamayı birlikte yapıyoruz.",
      },
    ],
  },
  {
    slug: "olcek-gelistirme-uyarlama",
    category: "nicel",
    title: "Ölçek Geliştirme ve Uyarlama",
    short: "Madde havuzundan AFA/DFA'ya, ölçek geliştirme ve Türkçeye uyarlama desteği.",
    description:
      "Yeni bir ölçek geliştirmek veya yabancı bir ölçeği Türkçeye uyarlamak isteyen araştırmacılara psikometrik süreçte danışmanlık veriyoruz. Madde havuzu oluşturmadan dil eşdeğerliğine, açımlayıcı ve doğrulayıcı faktör analizinden güvenirlik çalışmalarına kadar tüm adımları planlıyoruz.",
    tools: ["SPSS", "AMOS", "R psych / lavaan", "FACTOR", "JASP"],
    bullets: [
      "Madde havuzu, uzman görüşü ve kapsam geçerlik oranı (KGO/KGİ)",
      "Çeviri–geri çeviri ve dil eşdeğerliği çalışması",
      "Açımlayıcı faktör analizi (AFA) ve paralel analiz",
      "Doğrulayıcı faktör analizi (DFA) ile yapı geçerliği",
      "Cronbach α, McDonald ω, test-tekrar test güvenirliği",
    ],
    examples: [
      "Dijital bağımlılık ölçeğinin geliştirilmesi ve geçerlik çalışması",
      "Bir iş yeri esenliği ölçeğinin Türkçeye uyarlanması",
      "Öğretmen adayları için öz yeterlik ölçeğinin psikometrik analizi",
      "Ölçme değişmezliği ile kültürlerarası karşılaştırma",
    ],
    audience: "Eğitim bilimleri, psikoloji, sağlık ve sosyal bilimlerde ölçme aracı geliştirenler",
    faqs: [
      {
        q: "Ölçek uyarlamada izin almam gerekiyor mu?",
        a: "Evet. Ölçek uyarlama çalışmalarında özgün ölçek yazarından yazılı izin alınması etik bir gerekliliktir. İzin yazışmasının içeriği konusunda yönlendirme yapıyoruz.",
      },
      {
        q: "AFA ve DFA'yı aynı örneklemde yapabilir miyim?",
        a: "Genellikle önerilmez. Farklı örneklemler veya örneklemin rastgele ikiye bölünmesi daha güçlü bir kanıt sunar. Tasarımınızı bu açıdan birlikte değerlendiririz.",
      },
    ],
  },

  // ───────────────────────── PYTHON, VERİ BİLİMİ VE YAPAY ZEKÂ ─────────────────────────
  {
    slug: "python-analizi",
    category: "python",
    title: "Python Veri Analizi",
    short: "pandas, NumPy, SciPy ve statsmodels ile tekrarlanabilir veri analizi.",
    description:
      "Python ile veri toplama, temizleme, dönüştürme ve istatistiksel analiz süreçlerinizde danışmanlık sunuyoruz. Tüm analizler açıklamalı Jupyter Notebook'larda, tekrarlanabilir biçimde kurgulanır; böylece her adımı anlayabilir, savunabilir ve yeniden üretebilirsiniz.",
    tools: ["Python", "pandas", "NumPy", "SciPy", "statsmodels", "Jupyter", "Google Colab"],
    bullets: [
      "Büyük ve dağınık veri setlerinin pandas ile temizlenmesi",
      "Keşifsel veri analizi (EDA) ve aykırı değer tespiti",
      "SciPy ve statsmodels ile hipotez testleri ve regresyon modelleri",
      "Web kazıma (BeautifulSoup, Selenium) ve API ile veri toplama",
      "Açıklamalı notebook ve tekrarlanabilir proje yapısı",
    ],
    examples: [
      "Açık belediye verilerinden hava kalitesi eğilim analizi",
      "E-ticaret işlem verisinde müşteri segmentasyonu (RFM)",
      "Sensör verilerinde sinyal filtreleme ve istatistiksel özetleme",
      "Web kazıma ile toplanan fiyat verisinin karşılaştırmalı analizi",
    ],
    audience: "Mühendislik, fen, sağlık ve sosyal bilimlerde Python kullanan araştırmacılar",
    featured: true,
    faqs: [
      {
        q: "Python bilmiyorum, yine de çalışabilir miyiz?",
        a: "Evet. Kodları satır satır açıklamalı olarak paylaşıyor, isterseniz birebir oturumlarla temel Python ve pandas mantığını birlikte çalışıyoruz. Amaç, analizinizi anlayıp savunabilmenizdir.",
      },
      {
        q: "Kodları hangi ortamda teslim ediyorsunuz?",
        a: "Jupyter Notebook (.ipynb) ve gerektiğinde .py betikleri, requirements.txt ile birlikte teslim edilir. Google Colab üzerinde kurulum gerektirmeden çalışacak şekilde de hazırlanabilir.",
      },
    ],
  },
  {
    slug: "makine-ogrenmesi-yapay-zeka",
    category: "python",
    title: "Makine Öğrenmesi ve Yapay Zekâ",
    short: "scikit-learn, XGBoost, TensorFlow ve PyTorch ile model geliştirme danışmanlığı.",
    description:
      "Sınıflandırma, regresyon, kümeleme ve derin öğrenme problemlerinde model tasarımı, eğitim ve değerlendirme süreçlerinde danışmanlık veriyoruz. Doğru doğrulama stratejisi, hiperparametre optimizasyonu ve açıklanabilir yapay zekâ (SHAP) ile akademik olarak savunulabilir sonuçlara ulaşmanızı destekliyoruz.",
    tools: ["scikit-learn", "XGBoost", "LightGBM", "TensorFlow / Keras", "PyTorch", "SHAP", "Optuna"],
    bullets: [
      "Problem tanımı, öznitelik mühendisliği ve veri ön işleme",
      "Klasik ML: lojistik regresyon, SVM, Random Forest, XGBoost",
      "Derin öğrenme: ANN, CNN, LSTM ve Transformer mimarileri",
      "Çapraz doğrulama, hiperparametre optimizasyonu (Grid/Optuna)",
      "SHAP ve LIME ile açıklanabilir yapay zekâ",
    ],
    examples: [
      "Klinik verilerle diyabet riskinin sınıflandırılması",
      "Yapı malzemesi basınç dayanımının ML ile tahmini",
      "Müşteri kaybı (churn) tahmin modeli ve SHAP yorumu",
      "Dengesiz veri setinde SMOTE ile sahtecilik tespiti",
    ],
    audience: "Mühendislik, bilgisayar, sağlık ve işletme alanında yapay zekâ çalışan araştırmacılar",
    featured: true,
    faqs: [
      {
        q: "Modelimin doğruluğu çok yüksek çıktı, bu bir sorun mu?",
        a: "Olabilir. Aşırı öğrenme (overfitting) veya veri sızıntısı (data leakage) çok yüksek doğruluğun sık nedenleridir. Doğrulama stratejinizi ve ön işleme adımlarınızı birlikte denetleriz.",
      },
      {
        q: "GPU gerektiren modellerde nasıl çalışıyoruz?",
        a: "Derin öğrenme modelleri Google Colab veya Kaggle gibi GPU destekli ortamlarda çalışacak şekilde kurgulanır; donanım gereksinimi olmadan süreci yürütebilirsiniz.",
      },
    ],
  },
  {
    slug: "dogal-dil-isleme-metin-madenciligi",
    category: "python",
    title: "Doğal Dil İşleme ve Metin Madenciliği",
    short: "Duygu analizi, konu modelleme ve Türkçe NLP ile metinden anlam çıkarma.",
    description:
      "Sosyal medya gönderileri, müşteri yorumları, haber arşivleri veya akademik metinler gibi yapılandırılmamış verilerde doğal dil işleme (NLP) danışmanlığı sunuyoruz. Türkçe metin ön işlemeden BERT tabanlı modellere kadar modern yöntemlerle çalışıyoruz.",
    tools: ["spaCy", "NLTK", "Zemberek", "Hugging Face Transformers", "BERTopic", "Gensim"],
    bullets: [
      "Türkçe ve İngilizce metin ön işleme (kök bulma, lemmatizasyon)",
      "Duygu (sentiment) analizi ve metin sınıflandırma",
      "LDA ve BERTopic ile konu modelleme",
      "BERTurk gibi önceden eğitilmiş modellerle ince ayar (fine-tuning)",
      "Kelime bulutu, ağ analizi ve görselleştirme",
    ],
    examples: [
      "X (Twitter) gönderilerinde deprem sonrası kamuoyu duygu analizi",
      "Otel yorumlarında konu modelleme ile hizmet kalitesi boyutları",
      "Haber metinlerinin BERT ile kategorilere sınıflandırılması",
      "Tez özetlerinde yıllara göre araştırma eğilimi analizi",
    ],
    audience: "İletişim, pazarlama, siyaset bilimi, dilbilim ve bilgisayar alanındaki araştırmacılar",
    faqs: [
      {
        q: "Türkçe metinlerde NLP yapılabiliyor mu?",
        a: "Evet. Zemberek, BERTurk ve çok dilli Transformer modelleri gibi Türkçeye özgü araçlarla Türkçe metinlerde yüksek doğrulukla çalışmak mümkündür.",
      },
      {
        q: "Veri toplama aşamasında da destek veriyor musunuz?",
        a: "Evet. Platformların kullanım koşullarına ve etik ilkelere uygun biçimde API veya web kazıma ile veri toplama sürecini planlamanız için yönlendirme yapıyoruz.",
      },
    ],
  },
  {
    slug: "zaman-serisi-tahminleme",
    category: "python",
    title: "Zaman Serisi Analizi ve Tahminleme",
    short: "ARIMA, Prophet ve LSTM ile talep, fiyat ve üretim tahmini.",
    description:
      "Zamana bağlı verilerde eğilim, mevsimsellik ve kırılmaları analiz ederek geleceğe yönelik tahmin modelleri kurmanız için danışmanlık veriyoruz. Klasik istatistiksel yöntemleri derin öğrenme modelleriyle karşılaştırarak en uygun yaklaşımı birlikte belirliyoruz.",
    tools: ["statsmodels", "pmdarima", "Prophet", "sktime", "TensorFlow (LSTM)", "R forecast"],
    bullets: [
      "Durağanlık testleri, ayrıştırma ve mevsimsellik analizi",
      "ARIMA, SARIMA, SARIMAX ve üstel düzleştirme modelleri",
      "Prophet ile tatil ve dışsal etkili tahmin",
      "LSTM ve GRU ile derin öğrenme tabanlı tahmin",
      "MAE, RMSE, MAPE ile model karşılaştırma",
    ],
    examples: [
      "Elektrik tüketiminin saatlik tahmini (SARIMA ve LSTM karşılaştırması)",
      "Perakende satış verisinde talep tahmini",
      "Hisse senedi getirilerinde volatilite (GARCH) modellemesi",
      "Hastane acil servis başvurularının haftalık tahmini",
    ],
    audience: "Endüstri mühendisliği, ekonomi, enerji ve sağlık yönetimi alanındaki araştırmacılar",
    faqs: [
      {
        q: "Hangi tahmin modeli en iyisidir?",
        a: "Tek bir en iyi model yoktur; veri uzunluğu, mevsimsellik ve dışsal değişkenlere göre değişir. Birden fazla modeli aynı test dönemi üzerinde karşılaştırarak en uygununu belirleriz.",
      },
      {
        q: "Veri setim kısa, yine de tahmin yapılabilir mi?",
        a: "Kısa serilerde karmaşık derin öğrenme modelleri yerine üstel düzleştirme veya ARIMA gibi daha sade modeller genellikle daha güvenilirdir. Uygunluğu verinizi inceledikten sonra değerlendiririz.",
      },
    ],
  },
  {
    slug: "goruntu-isleme-bilgisayarli-goru",
    category: "python",
    title: "Görüntü İşleme ve Bilgisayarlı Görü",
    short: "OpenCV, YOLO ve CNN tabanlı modellerle görüntü analizi danışmanlığı.",
    description:
      "Tıbbi görüntüler, uydu fotoğrafları, endüstriyel kalite kontrol görüntüleri ve mikroskop verileri gibi alanlarda görüntü işleme ve bilgisayarlı görü danışmanlığı sunuyoruz. Veri etiketlemeden model eğitimine ve performans değerlendirmesine kadar süreci birlikte planlıyoruz.",
    tools: ["OpenCV", "scikit-image", "YOLO (Ultralytics)", "PyTorch", "TensorFlow", "Roboflow"],
    bullets: [
      "Görüntü ön işleme, filtreleme ve segmentasyon",
      "CNN ile sınıflandırma ve transfer öğrenme (ResNet, EfficientNet)",
      "YOLO ile nesne tespiti ve takip",
      "U-Net ile tıbbi görüntü segmentasyonu",
      "Veri artırma (augmentation) ve etiketleme süreci",
    ],
    examples: [
      "Göğüs röntgeni görüntülerinde transfer öğrenme ile sınıflandırma",
      "Üretim hattında yüzey hatası tespiti (YOLO)",
      "Tarım arazisi uydu görüntülerinde bitki sağlığı analizi",
      "Mikroskop görüntülerinde hücre sayımı ve segmentasyon",
    ],
    audience: "Biyomedikal, bilgisayar, elektrik-elektronik ve ziraat mühendisliği araştırmacıları",
    faqs: [
      {
        q: "Etiketli veri setim yok, ne yapabilirim?",
        a: "Açık erişimli veri setleri (Kaggle, Zenodo, kurum arşivleri) üzerinden başlanabilir veya Roboflow, CVAT gibi araçlarla kendi verinizi etiketleme sürecini planlayabiliriz.",
      },
      {
        q: "Tıbbi görüntü verilerinde gizlilik nasıl korunuyor?",
        a: "Paylaşılan tüm veriler gizli tutulur ve yalnızca hizmet amacıyla kullanılır. Görüntülerin kişisel veriden arındırılmış (anonimleştirilmiş) olarak paylaşılmasını ve etik kurul onayının bulunmasını öneriyoruz.",
      },
    ],
  },
  {
    slug: "veri-gorsellestirme-dashboard",
    category: "python",
    title: "Veri Görselleştirme ve Dashboard",
    short: "Matplotlib, Plotly, Streamlit ve Power BI ile yayın kalitesinde görseller.",
    description:
      "Karmaşık verileri; dergi standartlarında statik şekillere veya etkileşimli panolara (dashboard) dönüştürmeniz için danışmanlık veriyoruz. Doğru grafik türünü, renk erişilebilirliğini ve okunabilirliği gözeterek bulgularınızın etkisini artırıyoruz.",
    tools: ["Matplotlib", "Seaborn", "Plotly", "Streamlit", "Dash", "Power BI", "Tableau"],
    bullets: [
      "Dergi yazım kurallarına uygun (DPI, font, boyut) şekil hazırlığı",
      "Renk körlüğüne duyarlı, erişilebilir palet seçimi",
      "Plotly ve Streamlit ile etkileşimli panolar",
      "Power BI ve Tableau ile kurumsal raporlama",
      "Harita tabanlı görselleştirme (GeoPandas, Folium)",
    ],
    examples: [
      "Tez bulguları için çok panelli yayın şekilleri",
      "Kurum içi performans göstergeleri için Power BI panosu",
      "Türkiye il bazlı göstergelerin koroplet haritası",
      "Araştırma projesi sonuçlarının Streamlit ile web sunumu",
    ],
    audience: "Bulgularını etkili sunmak isteyen araştırmacılar ve kurumlar",
    faqs: [
      {
        q: "Dergi şekil gereksinimlerine uygun çıktı alabilir miyim?",
        a: "Evet. Hedef derginin istediği çözünürlük (ör. 300–600 DPI), dosya formatı (TIFF, EPS, PDF) ve boyut ölçülerine göre şekilleri hazırlamanız için destek veriyoruz.",
      },
      {
        q: "Dashboard'u kendi bilgisayarımda çalıştırabilir miyim?",
        a: "Evet. Streamlit ve Dash uygulamaları yerel bilgisayarda veya ücretsiz bulut ortamlarında çalışacak şekilde, kurulum talimatlarıyla birlikte hazırlanır.",
      },
    ],
  },

  // ───────────────────────── MÜHENDİSLİK VE SİMÜLASYON ─────────────────────────
  {
    slug: "ansys-analizi",
    category: "muhendislik",
    title: "ANSYS Analizi",
    short: "ANSYS Workbench ile yapısal, termal, modal ve akış analizleri danışmanlığı.",
    description:
      "ANSYS Workbench ortamında mühendislik problemlerinizi sayısal olarak modellemeniz için uçtan uca danışmanlık sunuyoruz. Geometri sadeleştirmeden mesh kalitesine, sınır koşullarından yakınsama kontrolüne ve sonuçların deneysel/analitik verilerle doğrulanmasına kadar her adımı birlikte kurguluyoruz.",
    tools: ["ANSYS Workbench", "ANSYS Mechanical", "ANSYS Fluent", "ANSYS CFX", "SpaceClaim", "DesignModeler"],
    bullets: [
      "Statik yapısal, modal, harmonik ve burkulma analizleri",
      "Kararlı ve geçici rejim ısı transferi analizleri",
      "Termo-mekanik ve akışkan-yapı etkileşimi (FSI) analizleri",
      "Mesh bağımsızlık çalışması ve yakınsama kontrolü",
      "Parametrik tasarım ve optimizasyon (DesignXplorer)",
    ],
    examples: [
      "Kompozit kirişte statik ve modal analiz ile doğal frekans tespiti",
      "Elektronik kart soğutucusunda termal analiz",
      "Basınçlı kapta gerilme analizi ve emniyet katsayısı değerlendirmesi",
      "Rüzgâr türbini kanadında akışkan-yapı etkileşimi analizi",
    ],
    audience: "Makine, inşaat, uçak, otomotiv, enerji ve metalurji mühendisliği öğrencileri ile araştırmacılar",
    featured: true,
    faqs: [
      {
        q: "ANSYS Student sürümüyle çalışabilir miyiz?",
        a: "Evet. ANSYS Student sürümünün düğüm/eleman sınırlamalarını dikkate alarak modeli buna uygun kurgularız. Daha büyük modellerde üniversitenizin lisansını kullanmanız önerilir.",
      },
      {
        q: "Simülasyon sonuçlarımın doğru olduğundan nasıl emin olurum?",
        a: "Mesh bağımsızlık çalışması, yakınsama kriterleri ve mümkünse analitik çözüm veya literatürdeki deneysel verilerle karşılaştırma yaparak sonuçların güvenilirliğini doğrularız. Bu adımlar tezinizin yöntem bölümünü de güçlendirir.",
      },
    ],
  },
  {
    slug: "ansys-fluent-cfd-analizi",
    category: "muhendislik",
    title: "ANSYS Fluent CFD Analizi",
    short: "Hesaplamalı akışkanlar dinamiği ile akış, ısı transferi ve yanma analizleri.",
    description:
      "ANSYS Fluent ve CFX ile hesaplamalı akışkanlar dinamiği (CFD) çalışmalarınızda danışmanlık veriyoruz. Doğru türbülans modelinin seçiminden sınır tabaka ağına, çok fazlı akışlardan yanma modellemesine kadar fiziksel olarak tutarlı sonuçlara ulaşmanızı destekliyoruz.",
    tools: ["ANSYS Fluent", "ANSYS CFX", "Fluent Meshing", "CFD-Post", "OpenFOAM"],
    bullets: [
      "Laminer ve türbülanslı akış (k-ε, k-ω SST, LES) modellemesi",
      "Isı değiştirici ve soğutma sistemi analizleri",
      "Çok fazlı akış (VOF, Mixture, Eulerian) ve kavitasyon",
      "Yanma, türlerin taşınımı ve reaksiyonlu akış",
      "Sınır tabaka mesh'i (y+) ve doğrulama çalışması",
    ],
    examples: [
      "Borulu ısı değiştiricide nanoakışkan ile ısı transferi iyileştirmesi",
      "Otomobil dış yüzeyinde aerodinamik sürükleme katsayısı analizi",
      "Veri merkezi soğutmasında hava akışı optimizasyonu",
      "Pompa çarkında kavitasyon analizi",
    ],
    audience: "Makine, enerji, kimya, uçak-uzay ve çevre mühendisliği araştırmacıları",
    featured: true,
    faqs: [
      {
        q: "Hangi türbülans modelini seçmeliyim?",
        a: "Seçim akışın doğasına, Reynolds sayısına ve ilgilendiğiniz fiziğe (duvar yakını, ayrılma, girdaplar) bağlıdır. Literatürdeki benzer çalışmalarla karşılaştırarak gerekçeli bir seçim yapmanız için danışmanlık veriyoruz.",
      },
      {
        q: "CFD sonuçlarımda yakınsama sorunu var, yardımcı olur musunuz?",
        a: "Evet. Mesh kalitesi, zaman adımı, relaksasyon faktörleri ve sınır koşullarını inceleyerek yakınsama sorunlarının kaynağını tespit eder ve çözüm adımlarını birlikte uygularız.",
      },
    ],
  },
  {
    slug: "sonlu-elemanlar-analizi",
    category: "muhendislik",
    title: "Sonlu Elemanlar Analizi (FEA)",
    short: "ANSYS Mechanical, Abaqus ve COMSOL ile yapısal ve çok fizikli analizler.",
    description:
      "Sonlu elemanlar yöntemiyle yapısal dayanım, yorulma, kırılma ve çok fizikli problemleri modellemeniz için danışmanlık sunuyoruz. Doğrusal olmayan malzeme davranışından temas problemlerine kadar ileri düzey analizlerde yöntemsel destek veriyoruz.",
    tools: ["ANSYS Mechanical", "Abaqus", "COMSOL Multiphysics", "SolidWorks Simulation", "HyperMesh"],
    bullets: [
      "Doğrusal ve doğrusal olmayan statik analizler",
      "Temas, sürtünme ve büyük deformasyon problemleri",
      "Yorulma ömrü ve kırılma mekaniği analizleri",
      "Hiperelastik ve plastik malzeme modelleri",
      "COMSOL ile çok fizikli (elektro-termal, piezoelektrik) modelleme",
    ],
    examples: [
      "Ortopedik implantta gerilme dağılımı analizi",
      "Kaynaklı bağlantıda yorulma ömrü tahmini",
      "Kauçuk contada hiperelastik malzeme modeliyle sızdırmazlık analizi",
      "Betonarme kirişte doğrusal olmayan hasar analizi (Abaqus CDP)",
    ],
    audience: "Makine, inşaat, biyomedikal ve malzeme mühendisliği araştırmacıları",
    faqs: [
      {
        q: "Abaqus ile ANSYS arasında hangisini seçmeliyim?",
        a: "Her ikisi de güçlüdür. Abaqus ileri doğrusal olmayan ve kompozit problemlerinde, ANSYS ise Workbench entegrasyonu ve çok fizikli analizlerde öne çıkar. Bölümünüzdeki lisans ve danışman tercihini de dikkate alarak karar veririz.",
      },
      {
        q: "Malzeme verilerini nereden bulabilirim?",
        a: "Literatürdeki deneysel çalışmalar, standartlar ve malzeme veri tabanlarından uygun verilerin seçimi konusunda yönlendirme yapıyor; gerekirse deneysel verinizden malzeme modeli kalibrasyonunda destek veriyoruz.",
      },
    ],
  },
  {
    slug: "matlab-simulink-analizi",
    category: "muhendislik",
    title: "MATLAB ve Simulink Analizi",
    short: "Sayısal yöntemler, sinyal işleme, kontrol sistemleri ve modelleme danışmanlığı.",
    description:
      "MATLAB ve Simulink ile sayısal hesaplama, sinyal işleme, kontrol sistemi tasarımı ve dinamik sistem modellemesi süreçlerinizde danışmanlık veriyoruz. Kodlarınızı okunabilir, verimli ve tekrarlanabilir hâle getirmenize yardımcı oluyoruz.",
    tools: ["MATLAB", "Simulink", "Simscape", "Control System Toolbox", "Signal Processing Toolbox"],
    bullets: [
      "Sayısal yöntemler ve diferansiyel denklem çözümleri",
      "Sinyal işleme: filtre tasarımı, FFT ve spektral analiz",
      "PID, durum uzayı ve optimal kontrol tasarımı",
      "Simulink ile dinamik sistem ve güç elektroniği modellemesi",
      "Optimizasyon ve genetik algoritma uygulamaları",
    ],
    examples: [
      "Fotovoltaik sistemde MPPT algoritmasının Simulink modeli",
      "EKG sinyalinde gürültü filtreleme ve özellik çıkarımı",
      "İnsansız hava aracı için PID kontrolcü tasarımı",
      "Elektrikli araç batarya yönetim sistemi simülasyonu",
    ],
    audience: "Elektrik-elektronik, mekatronik, kontrol ve biyomedikal mühendisliği öğrencileri",
    faqs: [
      {
        q: "MATLAB kodumu Python'a taşımak mümkün mü?",
        a: "Evet. NumPy, SciPy ve python-control gibi kütüphanelerle birçok MATLAB iş akışı Python'a taşınabilir. Uygunluğu ve olası farkları birlikte değerlendiririz.",
      },
      {
        q: "Simulink modelimde hata alıyorum, destek veriyor musunuz?",
        a: "Evet. Model yapısını, çözücü (solver) ayarlarını ve blok parametrelerini inceleyerek hataların kaynağını birlikte tespit eder ve modelin kararlı çalışmasını sağlarız.",
      },
    ],
  },
  {
    slug: "deney-tasarimi-optimizasyon",
    category: "muhendislik",
    title: "Deney Tasarımı ve Optimizasyon",
    short: "Taguchi, yanıt yüzey yöntemi ve Minitab ile deney tasarımı danışmanlığı.",
    description:
      "Deneysel çalışmalarınızı en az deneyle en fazla bilgiyi elde edecek şekilde tasarlamanız için danışmanlık sunuyoruz. Faktöriyel tasarımlardan Taguchi yöntemine, yanıt yüzey metodolojisinden çok amaçlı optimizasyona kadar süreci birlikte planlıyoruz.",
    tools: ["Minitab", "Design-Expert", "JMP", "Python pyDOE", "MATLAB"],
    bullets: [
      "Tam ve kesirli faktöriyel deney tasarımları",
      "Taguchi ortogonal dizileri ve S/N oranı analizi",
      "Yanıt yüzey metodolojisi (RSM): Box-Behnken, CCD",
      "ANOVA ile faktör etkilerinin anlamlılığı",
      "Gri ilişkisel analiz ve çok amaçlı optimizasyon",
    ],
    examples: [
      "CNC işlemede kesme parametrelerinin yüzey pürüzlülüğüne etkisi (Taguchi)",
      "Biyodizel üretiminde verim optimizasyonu (RSM)",
      "Katmanlı imalatta baskı parametrelerinin mekanik dayanıma etkisi",
      "Atık su arıtımında adsorpsiyon koşullarının optimizasyonu",
    ],
    audience: "Makine, imalat, kimya, gıda ve çevre mühendisliği araştırmacıları",
    faqs: [
      {
        q: "Deneyleri yapmadan önce mi sizinle çalışmalıyım?",
        a: "Evet, idealde deney öncesinde. Doğru tasarım, deney sayısını azaltır ve istatistiksel olarak anlamlı sonuç alma olasılığını artırır. Deney sonrası analizlerde de destek veriyoruz.",
      },
      {
        q: "Taguchi mi RSM mi kullanmalıyım?",
        a: "Taguchi, çok sayıda faktörün hızlı taranması ve dayanıklı tasarım için; RSM ise az sayıda kritik faktörde optimum noktanın hassas belirlenmesi için uygundur. Amacınıza göre birlikte karar veririz.",
      },
    ],
  },

  // ───────────────────────── NİTEL VE KARMA YÖNTEM ─────────────────────────
  {
    slug: "maxqda-analizi",
    category: "nitel",
    title: "MAXQDA Analizi",
    short: "MAXQDA ile görüşme ve doküman verilerinde kodlama, tema ve görselleştirme.",
    description:
      "MAXQDA ile nitel verilerinizi sistematik biçimde analiz etmeniz için danışmanlık sunuyoruz. Transkriptlerin projeye aktarılmasından kod sisteminin kurulmasına, tema haritalarından karma yöntem özelliklerine kadar MAXQDA'nın tüm gücünü araştırmanıza uygun şekilde kullanmanızı sağlıyoruz.",
    tools: ["MAXQDA", "MAXQDA Analytics Pro", "MAXDictio", "f4transkript"],
    bullets: [
      "Proje kurulumu, doküman grupları ve değişken tanımlama",
      "Tümevarımsal ve tümdengelimsel kod sistemi oluşturma",
      "Kod ilişkileri tarayıcısı, kod matrisi ve kod haritaları",
      "MAXMaps ile kavram haritası ve tema görselleştirme",
      "Kodlayıcılar arası uyum ve MAXDictio ile kelime analizi",
    ],
    examples: [
      "Öğretmenlerle yapılan yarı yapılandırılmış görüşmelerde tematik analiz",
      "Hemşirelerin pandemi deneyimlerine ilişkin fenomenolojik analiz",
      "Kurumsal stratejik planlarda doküman analizi",
      "Odak grup verilerinde kod–alt tema–tema hiyerarşisi",
    ],
    audience: "Eğitim, sağlık, sosyoloji, psikoloji ve işletme alanında nitel araştırma yapanlar",
    featured: true,
    faqs: [
      {
        q: "Transkriptlerim hazır değil, bu aşamada da destek var mı?",
        a: "Evet. Transkripsiyon kurallarını, anonimleştirmeyi ve MAXQDA'ya uygun dosya formatını birlikte planlıyoruz. Ses kayıtlarınızın gizliliği KVKK çerçevesinde korunur.",
      },
      {
        q: "MAXQDA mı NVivo mu kullanmalıyım?",
        a: "Her ikisi de güçlü nitel analiz yazılımlarıdır. MAXQDA görselleştirme ve karma yöntem özellikleriyle, NVivo ise geniş veri kaynaklarını yönetmedeki esnekliğiyle öne çıkar. Kurumunuzun lisansına ve araştırma deseninize göre birlikte karar veririz.",
      },
    ],
  },
  {
    slug: "nvivo-analizi",
    category: "nitel",
    title: "NVivo Analizi",
    short: "NVivo ile nitel veri kodlama, sorgulama ve raporlama danışmanlığı.",
    description:
      "NVivo üzerinde nitel araştırma projenizi baştan sona yapılandırmanız için danışmanlık veriyoruz. Görüşme, anket açık uçlu yanıtları, sosyal medya ve literatür verilerini tek projede yöneterek sorgular, matrisler ve görselleştirmelerle derinlikli analiz yapmanızı destekliyoruz.",
    tools: ["NVivo 14", "NVivo Transcription", "NCapture"],
    bullets: [
      "Dosya sınıflandırmaları ve vaka (case) yapısı kurulumu",
      "Kod (node) hiyerarşisi ve kodlama stratejisi",
      "Metin arama, kelime sıklığı ve matris kodlama sorguları",
      "Proje haritaları, kavram haritaları ve karşılaştırma diyagramları",
      "Literatür yönetimi ve NCapture ile web/sosyal medya verisi",
    ],
    examples: [
      "Kadın girişimcilerin deneyimlerine ilişkin görüşmelerin analizi",
      "Açık uçlu anket yanıtlarında kategori geliştirme",
      "Politika belgelerinde söylem ve içerik analizi",
      "Sistematik derleme kapsamında makalelerin NVivo ile kodlanması",
    ],
    audience: "Sosyal bilimler, eğitim ve sağlık bilimlerinde nitel araştırma yapanlar",
    faqs: [
      {
        q: "NVivo projemi danışmanımla paylaşabilir miyim?",
        a: "Evet. Proje dosyası (.nvp/.nvpx) ve dışa aktarılan kod kitabı, raporlar ve görseller danışmanınızla paylaşılabilecek şekilde düzenlenir.",
      },
      {
        q: "Nitel analizde güvenirliği nasıl sağlarız?",
        a: "Kodlayıcılar arası uyum (Kappa), uzman incelemesi, katılımcı teyidi ve denetim izi (audit trail) gibi inandırıcılık stratejilerini araştırma deseninize uygun şekilde planlarız.",
      },
    ],
  },
  {
    slug: "nitel-arastirma-danismanligi",
    category: "nitel",
    title: "Nitel Araştırma Danışmanlığı",
    short: "Tematik, içerik, söylem analizi ve gömülü teori; ATLAS.ti dahil tüm araçlarla.",
    description:
      "Nitel araştırma deseninizin kurgusundan veri analizine kadar yöntemsel danışmanlık sunuyoruz. Fenomenoloji, gömülü teori, durum çalışması ve etnografi gibi desenlerde; görüşme formu hazırlığından analiz yöntemine kadar tutarlı bir araştırma mimarisi kuruyoruz.",
    tools: ["ATLAS.ti", "MAXQDA", "NVivo", "Taguette", "Dedoose"],
    bullets: [
      "Araştırma deseni seçimi: fenomenoloji, durum çalışması, gömülü teori",
      "Görüşme ve gözlem formu hazırlama, uzman görüşü",
      "Braun ve Clarke tematik analiz, içerik ve söylem analizi",
      "Amaçlı örnekleme ve veri doygunluğu değerlendirmesi",
      "Geçerlik–güvenirlik (inandırıcılık) stratejileri",
    ],
    examples: [
      "Göçmen öğrencilerin okul uyum süreçlerine ilişkin durum çalışması",
      "Sağlık çalışanlarının mesleki tükenmişlik deneyimleri (fenomenoloji)",
      "Ders kitaplarında değerler eğitiminin içerik analizi",
      "Medya haberlerinde toplumsal cinsiyet temsilinin söylem analizi",
    ],
    audience: "Nitel veya karma desenli tez ve makale yürüten araştırmacılar",
    faqs: [
      {
        q: "Kaç katılımcıyla görüşme yapmalıyım?",
        a: "Nitel araştırmada sayı, desene ve veri doygunluğuna bağlıdır. Fenomenolojide genellikle 5–25 katılımcı önerilse de asıl ölçüt, yeni bilgi elde edilmemeye başlanmasıdır. Deseninize göre birlikte değerlendiririz.",
      },
      {
        q: "Görüşme sorularımı hazırlarken destek alabilir miyim?",
        a: "Evet. Araştırma sorularınızla uyumlu, yönlendirici olmayan açık uçlu sorular ve sonda soruları hazırlamanız için yöntemsel geri bildirim veriyoruz.",
      },
    ],
  },
  {
    slug: "karma-yontem-arastirma",
    category: "nitel",
    title: "Karma Yöntem Araştırma Danışmanlığı",
    short: "Nicel ve nitel verileri tek bir güçlü araştırma tasarımında bütünleştirme.",
    description:
      "Nicel ve nitel yaklaşımları birleştiren karma yöntem araştırmalarında desen seçimi, veri toplama sırası ve bulguların bütünleştirilmesi konusunda danışmanlık veriyoruz. Creswell ve Plano Clark çerçevesinde tutarlı ve savunulabilir bir araştırma kurgusu oluşturuyoruz.",
    tools: ["MAXQDA", "NVivo", "SPSS", "R", "Joint Display"],
    bullets: [
      "Yakınsayan paralel, açıklayıcı sıralı ve keşfedici sıralı desenler",
      "Nicel ve nitel aşamaların örnekleme ilişkisi",
      "Bütünleştirme (integration) stratejileri ve ortak gösterim tabloları",
      "Karma yöntem bulgularının raporlanması",
      "Yöntem bölümünün desen gerekçesiyle kurgulanması",
    ],
    examples: [
      "Uzaktan eğitim memnuniyeti: anket + görüşme ile açıklayıcı sıralı desen",
      "Hastane kalite uygulamalarında paralel karma desen",
      "Yeni geliştirilen ölçek için keşfedici sıralı desen",
      "Kurum kültürü araştırmasında ortak gösterim tablosu",
    ],
    audience: "Karma desenli tez yürüten doktora öğrencileri ve akademisyenler",
    faqs: [
      {
        q: "Karma yöntem tezim için daha mı uzun sürer?",
        a: "Genellikle evet; iki veri toplama ve analiz aşaması içerir. Bu nedenle erken aşamada gerçekçi bir zaman çizelgesi oluşturmanızı ve aşamalar arası geçişi planlamanızı öneriyoruz.",
      },
      {
        q: "Nicel ve nitel bulguları nasıl birleştiririm?",
        a: "Ortak gösterim tabloları (joint display), karşılaştırma, genişletme ve açıklama gibi bütünleştirme stratejileriyle bulguları anlamlı biçimde ilişkilendirmeniz için danışmanlık veriyoruz.",
      },
    ],
  },

  // ───────────────────────── TEZ, YAYIN VE AKADEMİK KARİYER ─────────────────────────
  {
    slug: "tez-makale-yontem-danismanligi",
    category: "tez",
    title: "Tez ve Makale Yöntem Danışmanlığı",
    short: "Araştırma tasarımı, yöntem seçimi ve akademik süreç danışmanlığı.",
    description:
      "Araştırma sorunuzu netleştirmekten uygun yöntemin seçimine, bölüm planından jüri sürecine kadar tüm akademik yol haritanızda yanınızdayız. Çalışmayı sizin yerinize yazmıyoruz; araştırmanızı doğru kurgulamanız ve zamanında tamamlamanız için yöntemsel ve stratejik destek veriyoruz.",
    tools: ["Zotero", "Mendeley", "Microsoft Word", "Notion", "Trello"],
    bullets: [
      "Araştırma sorusu ve hipotez netleştirme",
      "Uygun araştırma yöntemi ve deseni seçimi",
      "Tez önerisi (proposal) yapısı ve bölüm planı",
      "Gerçekçi zaman çizelgesi ve kilometre taşları",
      "Danışman ve jüri süreçlerine hazırlık desteği",
    ],
    examples: [
      "Yüksek lisans tez önerisinin yöntemsel tutarlılık kontrolü",
      "Doktora yeterlik sonrası tez izleme komitesi hazırlığı",
      "Tezden makale üretme stratejisi ve yayın planı",
      "Araştırma sorusu–yöntem–analiz uyum matrisi hazırlama",
    ],
    audience: "Lisans, yüksek lisans ve doktora öğrencileri",
    faqs: [
      {
        q: "Tez konumu henüz belirlemedim, bu aşamada destek alabilir miyim?",
        a: "Evet. İlgi alanınız, literatürdeki boşluklar ve uygulanabilirlik açısından olası konuları birlikte değerlendirir, araştırılabilir bir soruya dönüştürmeniz için yöntemsel çerçeve sunarız. Konu seçimi ve nihai karar size ve danışmanınıza aittir.",
      },
      {
        q: "Tezimi sizin yazmanız mümkün mü?",
        a: "Hayır. Etik ilkelerimiz gereği kişi adına tez, makale veya ödev üretmiyoruz. Yöntem, analiz, dil ve süreç danışmanlığı ile kendi çalışmanızı güçlü biçimde tamamlamanızı destekliyoruz.",
      },
    ],
  },
  {
    slug: "literatur-tarama-danismanligi",
    category: "tez",
    title: "Literatür Tarama Danışmanlığı",
    short: "Güncel, ilgili ve nitelikli kaynaklara sistematik biçimde ulaşma desteği.",
    description:
      "Alan yazınında kaybolmadan, çalışmanızla doğrudan ilgili ve güncel kaynaklara ulaşmanız için sistematik tarama stratejisi kurguluyoruz. Veri tabanı seçiminden arama dizesi oluşturmaya, kaynak yönetiminden literatür haritasına kadar süreci birlikte planlıyoruz.",
    tools: ["Web of Science", "Scopus", "PubMed", "Google Scholar", "ULAKBİM TR Dizin", "YÖK Tez", "Zotero"],
    bullets: [
      "Veri tabanlarında Boolean operatörlü arama dizesi oluşturma",
      "Güncel ve nitelikli kaynak belirleme (Q1–Q4, etki faktörü)",
      "Kaynak yönetim araçları ile kütüphane düzeni",
      "Alan yazını haritası (literature map) ve kavramsal çerçeve",
      "Kuramsal çerçeve bölümünün yapısal kurgusu",
    ],
    examples: [
      "Yapay zekâ ve eğitim konusunda son beş yılın literatür haritası",
      "Kavramsal çerçeve için kuramların karşılaştırma tablosu",
      "YÖK Tez Merkezi'nde benzer çalışmaların taranması",
      "Zotero kütüphanesi ve etiketleme sistemi kurulumu",
    ],
    audience: "Tez, makale ve proje çalışması yürüten araştırmacılar",
    faqs: [
      {
        q: "Hangi veri tabanlarında tarama yapmalıyım?",
        a: "Alanınıza göre değişir: sağlıkta PubMed ve Cochrane, sosyal bilimlerde Web of Science ve Scopus, Türkçe literatür için TR Dizin ve YÖK Tez Merkezi öne çıkar. Size özel bir veri tabanı stratejisi belirleriz.",
      },
      {
        q: "Erişimim olmayan makalelere nasıl ulaşırım?",
        a: "Üniversite kütüphanesi uzaktan erişimi, açık erişim sürümleri (Unpaywall, kurumsal arşivler) ve yazarla iletişim gibi yasal yöntemler konusunda yönlendirme yapıyoruz.",
      },
    ],
  },
  {
    slug: "sistematik-derleme-meta-analiz",
    category: "tez",
    title: "Sistematik Derleme ve Meta-Analiz",
    short: "PRISMA 2020 uyumlu sistematik derleme ve meta-analiz danışmanlığı.",
    description:
      "Kanıta dayalı araştırmanın en üst basamağı olan sistematik derleme ve meta-analiz çalışmalarınızda, PRISMA 2020 yönergelerine uygun protokol, tarama, seçim, kalite değerlendirmesi ve istatistiksel sentez süreçlerinde danışmanlık veriyoruz.",
    tools: ["Comprehensive Meta-Analysis (CMA)", "R metafor", "RevMan", "Rayyan", "Covidence", "JASP"],
    bullets: [
      "PICO/PICOS çerçevesi ve PROSPERO protokol hazırlığı",
      "Çoklu veri tabanında sistematik tarama ve PRISMA akış şeması",
      "Rayyan ile çift kör tarama ve çalışma seçimi",
      "Risk of Bias, GRADE ve kalite değerlendirme araçları",
      "Etki büyüklüğü, heterojenlik, yayın yanlılığı ve alt grup analizi",
    ],
    examples: [
      "Egzersizin depresyon üzerindeki etkisine ilişkin meta-analiz",
      "Eğitim teknolojilerinin akademik başarıya etkisi (Hedges' g)",
      "Hemşirelik girişimlerinin sistematik derlemesi ve PRISMA şeması",
      "Orman grafiği (forest plot) ve huni grafiği (funnel plot) yorumlama",
    ],
    audience: "Sağlık, eğitim ve sosyal bilimlerde kanıt sentezi yapan araştırmacılar",
    faqs: [
      {
        q: "Sistematik derleme ile meta-analiz arasındaki fark nedir?",
        a: "Sistematik derleme, belirli bir soruya ilişkin tüm kanıtların sistematik olarak taranması ve değerlendirilmesidir. Meta-analiz ise bu çalışmaların sonuçlarının istatistiksel olarak birleştirilmesidir. Her meta-analiz bir sistematik derlemeye dayanır.",
      },
      {
        q: "Protokolümü PROSPERO'ya kaydetmem gerekiyor mu?",
        a: "Sağlık alanında önemle önerilir ve birçok dergi tarafından beklenir. Protokol taslağının yöntemsel içeriği konusunda danışmanlık veriyoruz; kayıt işlemini araştırmacı yapar.",
      },
    ],
  },
  {
    slug: "bibliyometrik-analiz",
    category: "tez",
    title: "Bibliyometrik Analiz",
    short: "VOSviewer, Bibliometrix ve CiteSpace ile bilim haritalama.",
    description:
      "Bir araştırma alanının gelişimini, en etkili yazarlarını, dergilerini, ülkelerini ve tematik eğilimlerini bilim haritalama yöntemleriyle ortaya koymanız için danışmanlık sunuyoruz. Web of Science ve Scopus verileriyle yayın kalitesinde bibliyometrik analizler kurguluyoruz.",
    tools: ["VOSviewer", "R Bibliometrix / Biblioshiny", "CiteSpace", "Web of Science", "Scopus"],
    bullets: [
      "Arama stratejisi ve veri seti oluşturma (WoS, Scopus)",
      "Performans analizi: yazar, dergi, kurum ve ülke üretkenliği",
      "Ortak yazarlık, ortak atıf ve bibliyografik eşleşme ağları",
      "Anahtar kelime eş-dizimlilik ve tematik evrim analizi",
      "Yayın standardında ağ haritaları ve görselleştirme",
    ],
    examples: [
      "Sürdürülebilir turizm literatürünün 30 yıllık bibliyometrik analizi",
      "Yapay zekâ ve sağlık alanında ortak yazarlık ağları",
      "Endüstri 4.0 araştırmalarında tematik evrim haritası",
      "Türkiye adresli yayınların alan bazında karşılaştırılması",
    ],
    audience: "Makale üretmek isteyen doktora öğrencileri ve akademisyenler",
    faqs: [
      {
        q: "Bibliyometrik analiz tek başına makale olur mu?",
        a: "Evet. İyi kurgulanmış bir araştırma sorusu ve yorumlayıcı bir tartışma bölümüyle desteklenen bibliyometrik çalışmalar birçok indeksli dergide yayımlanmaktadır.",
      },
      {
        q: "Web of Science erişimim yok, ne yapabilirim?",
        a: "Üniversite kütüphaneniz aracılığıyla erişim sağlanabilir; alternatif olarak Dimensions veya OpenAlex gibi açık veri tabanlarıyla analiz yapılabilir. Uygun kaynağı birlikte belirleriz.",
      },
    ],
  },
  {
    slug: "dergi-secimi-yayin-sureci",
    category: "tez",
    title: "Dergi Seçimi ve Yayın Süreci Danışmanlığı",
    short: "SSCI, SCI-E, ESCI ve TR Dizin dergilerinde yayın stratejisi ve hakem yanıtı.",
    description:
      "Makalenizin kapsamına en uygun dergiyi belirlemekten gönderim sürecine, hakem yorumlarına yanıttan revizyon planına kadar yayın yolculuğunuzda stratejik danışmanlık sunuyoruz. Yağmacı (predatory) dergilerden korunmanız için de rehberlik ediyoruz.",
    tools: ["Journal Citation Reports", "Scopus Sources", "TR Dizin", "Elsevier / Springer Journal Finder"],
    bullets: [
      "Kapsam, indeks, etki faktörü ve süreç süresine göre dergi eşleştirme",
      "Yazım kılavuzu (author guidelines) uyum kontrolü",
      "Editöre ön yazı (cover letter) yapısı danışmanlığı",
      "Hakem yorumlarına yanıt mektubu (response letter) stratejisi",
      "Yağmacı dergi ve sahte indeks kontrolü",
    ],
    examples: [
      "Tezden üretilen makale için hedef dergi kısa listesi",
      "Majör revizyon kararı sonrası yanıt ve revizyon planı",
      "Reddedilen makalenin yeniden konumlandırılması",
      "Dergi yazım kılavuzuna göre makale yapısının kontrolü",
    ],
    audience: "Yayın süreci yürüten doktora öğrencileri ve akademisyenler",
    faqs: [
      {
        q: "Makalemin kabul edileceğini garanti ediyor musunuz?",
        a: "Hayır. Yayın kararı tamamen derginin editör ve hakemlerine aittir. Biz, makalenizi en uygun dergiye doğru stratejiyle göndermeniz ve süreci profesyonelce yönetmeniz için danışmanlık veriyoruz.",
      },
      {
        q: "Bir derginin yağmacı olup olmadığını nasıl anlarım?",
        a: "İndeks kayıtlarının resmî kaynaklardan doğrulanması, yayın ücreti politikası, hakem süreci şeffaflığı ve editör kurulu gibi ölçütlerle dergiyi birlikte değerlendiririz.",
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
    tools: ["ÜAK Başvuru Sistemi", "YÖKSİS", "Web of Science", "Scopus", "Excel"],
    bullets: [
      "ÜAK temel alan kriterlerine göre dosya kontrol listesi",
      "Yayın, atıf ve faaliyet dökümü düzenleme desteği",
      "Başlıca eser seçimi ve gerekçelendirme danışmanlığı",
      "Alan endeksi ve puanlama tablosu kontrolü",
      "Başvuru formu ve ek belgelerin derlenmesi",
    ],
    examples: [
      "Temel alan kriterlerine göre eksik puan analizi",
      "Atıf listesinin kaynak türüne göre sınıflandırılması",
      "Proje, tez yönetimi ve eğitim-öğretim faaliyetlerinin dökümü",
      "Başvuru öncesi dosya tutarlılık kontrolü",
    ],
    audience: "Doçentlik başvurusu yapacak akademisyenler",
    faqs: [
      {
        q: "Hangi dönemin kriterlerini esas alıyorsunuz?",
        a: "Başvuru yapacağınız dönem için ÜAK'ın yayımladığı güncel ve yürürlükteki koşulları esas alıyoruz. Kriter değişikliklerini düzenli olarak takip ediyoruz.",
      },
      {
        q: "Dosyamın eksiklerini önceden görebilir miyim?",
        a: "Evet. Mevcut yayın ve faaliyetlerinizi temel alan kriterleriyle karşılaştırarak eksik veya belirsiz kalemleri raporluyor, planlama yapmanıza yardımcı oluyoruz.",
      },
    ],
  },
  {
    slug: "proje-basvuru-danismanligi",
    category: "tez",
    title: "Proje Başvuru Danışmanlığı (TÜBİTAK ve BAP)",
    short: "TÜBİTAK 1001, 2209, 3501, BAP ve Horizon Europe başvurularında yöntemsel destek.",
    description:
      "Araştırma projesi başvurularınızda; özgün değer, yöntem, iş paketleri, risk yönetimi ve yaygın etki bölümlerinin değerlendirme ölçütleriyle uyumlu biçimde kurgulanması için danışmanlık veriyoruz. Proje fikrinizi hakem gözüyle güçlendirmenize yardımcı oluyoruz.",
    tools: ["TÜBİTAK PBS", "BAP Sistemleri", "Horizon Europe Funding Portal", "MS Project", "Gantt"],
    bullets: [
      "Çağrı ve değerlendirme ölçütleri analizi",
      "Özgün değer ve yaygın etki bölümlerinin kurgusu",
      "İş paketleri, iş-zaman çizelgesi (Gantt) ve başarı ölçütleri",
      "Risk yönetimi (B planı) tablosu",
      "Bütçe gerekçelendirme mantığı ve tutarlılık kontrolü",
    ],
    examples: [
      "TÜBİTAK 2209-A lisans öğrencisi araştırma projesi önerisi",
      "TÜBİTAK 1001 başvurusunda iş paketi ve risk tablosu",
      "BAP projesi için yöntem ve bütçe tutarlılığı",
      "Reddedilen projenin hakem yorumlarına göre yeniden kurgulanması",
    ],
    audience: "Proje başvurusu hazırlayan öğrenciler, akademisyenler ve Ar-Ge ekipleri",
    faqs: [
      {
        q: "Projemin desteklenmesini garanti ediyor musunuz?",
        a: "Hayır. Destek kararı ilgili kurumun panel ve hakem değerlendirmesine aittir. Biz başvurunuzun değerlendirme ölçütleriyle uyumlu, tutarlı ve güçlü olmasına odaklanıyoruz.",
      },
      {
        q: "Daha önce reddedilen projem için destek var mı?",
        a: "Evet. Panel ve hakem yorumlarını analiz ederek zayıf noktaları belirliyor ve yeniden başvuru için iyileştirme planı oluşturmanıza yardımcı oluyoruz.",
      },
    ],
  },
  {
    slug: "sunum-juri-hazirlik",
    category: "tez",
    title: "Sunum ve Jüri Hazırlık Danışmanlığı",
    short: "Tez savunması ve jüri sunumuna özgüvenli, etkileyici hazırlık.",
    description:
      "Tez savunmanıza veya jüri sunumunuza, olası soruları öngörerek ve sunumunuzu güçlendirerek hazırlanmanızı sağlıyoruz. Slayt akışından görsel tasarıma, sunuş tekniğinden zaman yönetimine kadar destek veriyoruz.",
    tools: ["PowerPoint", "Keynote", "Canva", "Beamer (LaTeX)"],
    bullets: [
      "Sunum içeriği ve slayt akışı danışmanlığı",
      "Sade, akademik ve etkileyici slayt tasarımı ilkeleri",
      "Olası jüri sorularına hazırlık",
      "Sunuş tekniği, beden dili ve zaman yönetimi",
      "Prova ve geri bildirim oturumu",
    ],
    examples: [
      "Doktora tez savunması için 30 dakikalık sunum kurgusu",
      "Yüksek lisans jüri sorularına prova oturumu",
      "Uluslararası kongre bildirisi sunum hazırlığı",
      "Tez izleme komitesi ara rapor sunumu",
    ],
    audience: "Savunma, jüri veya kongre sunumu yaklaşan öğrenci ve araştırmacılar",
    faqs: [
      {
        q: "Prova oturumları çevrim içi mi yapılıyor?",
        a: "Evet. Prova oturumları çevrim içi olarak yapılabilir; sunumunuzu gerçek savunma koşullarına benzer biçimde prova eder, ayrıntılı geri bildirim veririz.",
      },
      {
        q: "Jüri hangi soruları sorabilir?",
        a: "Genellikle yöntem seçimi, örneklem, sınırlılıklar, literatüre katkı ve bulguların yorumu üzerine sorular gelir. Tezinize özel olası soru listesi hazırlayarak yanıtlarınızı birlikte çalışırız.",
      },
    ],
  },

  // ───────────────────────── DİL, ÇEVİRİ VE AKADEMİK BİÇİM ─────────────────────────
  {
    slug: "akademik-dil-imla-editorlugu",
    category: "dil",
    title: "Akademik Dil ve İmla Editörlüğü",
    short: "Türkçe ve İngilizce metinlerde dil, imla, üslup ve akış düzenleme.",
    description:
      "Yazdığınız metnin anlamını değiştirmeden; dil bilgisi, imla, akademik üslup ve akış açısından gözden geçiriyoruz. Amacımız sizin sesinizi daha net ve akademik standartlara uygun şekilde ortaya çıkarmak.",
    tools: ["Microsoft Word (Track Changes)", "TDK Yazım Kılavuzu", "APA 7", "Grammarly"],
    bullets: [
      "Dil bilgisi, imla ve noktalama düzenlemesi (TDK)",
      "Akademik üslup ve terminoloji tutarlılığı",
      "Paragraf ve bölüm akışı önerileri",
      "İngilizce metinlerde native düzeyinde proofreading",
      "Değişiklik izlemeli ve açıklamalı teslim",
    ],
    examples: [
      "Doktora tezinin TDK yazım kurallarına göre redaksiyonu",
      "SSCI dergisine gönderilecek İngilizce makalenin dil düzenlemesi",
      "Hakemin dil düzeltmesi talebi sonrası proofreading",
      "Kongre bildiri özetinin akademik üslup kontrolü",
    ],
    audience: "Tez, makale, sunum ve rapor metni olan herkes",
    faqs: [
      {
        q: "Editörlük metnimin içeriğini değiştirir mi?",
        a: "Hayır. Anlamı ve bilimsel içeriği değiştirmeden dil, imla ve üslup düzenlemesi yaparız. Tüm değişiklikler izlenebilir biçimde işaretlenir; hangisini kabul edeceğinize siz karar verirsiniz.",
      },
      {
        q: "Dergi dil düzeltme belgesi (certificate) veriyor musunuz?",
        a: "Talep edilmesi hâlinde yapılan dil editörlüğü hizmetine ilişkin bir hizmet belgesi düzenlenebilir. Derginin özel olarak kabul ettiği kurum listesi varsa önceden kontrol edilmesini öneriyoruz.",
      },
    ],
  },
  {
    slug: "akademik-ceviri",
    category: "dil",
    title: "Akademik Çeviri",
    short: "Türkçe–İngilizce akademik metin çevirisi, alan terminolojisine hâkim ekip.",
    description:
      "Makale, özet (abstract), tez bölümü ve akademik yazışmalarınızı, alan terminolojisine hâkim çevirmenlerle Türkçe-İngilizce ve İngilizce-Türkçe olarak çeviriyoruz. Çeviri sonrası terminoloji ve akademik üslup kontrolü sürecin standart parçasıdır.",
    tools: ["SDL Trados", "memoQ", "Terminoloji sözlükleri", "Microsoft Word"],
    bullets: [
      "Makale ve tez bölümü çevirisi",
      "Abstract / özet ve anahtar kelime çevirisi",
      "Ölçek maddeleri için çeviri–geri çeviri desteği",
      "Akademik yazışma, ön yazı ve sunum çevirisi",
      "Alan terminolojisine uygun çeviri kontrolü",
    ],
    examples: [
      "Türkçe makalenin uluslararası dergi için İngilizceye çevirisi",
      "Tez özetinin (abstract) İngilizce çevirisi",
      "Yabancı ölçeğin geri çeviri yöntemiyle Türkçeye aktarımı",
      "Kongre sunumu ve poster çevirisi",
    ],
    audience: "Uluslararası yayın ve başvuru süreci olan araştırmacılar",
    faqs: [
      {
        q: "Hangi alanlarda çeviri yapıyorsunuz?",
        a: "Sağlık, mühendislik, sosyal bilimler, eğitim, iktisat ve hukuk başta olmak üzere geniş bir yelpazede, alan terminolojisine hâkim çevirmenlerle çalışıyoruz.",
      },
      {
        q: "Çeviri sonrası dil kontrolü yapılıyor mu?",
        a: "Evet. Her çeviri, terminoloji tutarlılığı ve akademik üslup açısından ikinci bir kontrolden geçirilir.",
      },
    ],
  },
  {
    slug: "kaynakca-atif-uyum-danismanligi",
    category: "dil",
    title: "Kaynakça ve Atıf Uyum Danışmanlığı",
    short: "APA 7, MLA, Chicago, IEEE ve Vancouver'a uygun kaynakça ve atıf düzeni.",
    description:
      "Çalışmanızdaki atıfların ve kaynakçanın, kurumunuzun istediği stile tam uyumlu, eksiksiz ve tutarlı olması için danışmanlık sağlıyoruz. Metin içi atıflarla kaynakça listesinin birebir eşleştiğini, biçim kurallarına uyduğunu ve gerekli tüm alanların doğru girildiğini birlikte kontrol ediyoruz.",
    tools: ["Zotero", "Mendeley", "EndNote", "APA 7", "IEEE", "Vancouver"],
    bullets: [
      "Kurumun istediği atıf stiline (APA 7, MLA, Chicago, IEEE, Vancouver) uyum kontrolü",
      "Metin içi atıf ile kaynakça listesi tutarlılığı",
      "DOI ve eksik künye bilgilerinin tamamlanması",
      "Zotero, Mendeley ve EndNote kurulum ve kullanım desteği",
      "Word ile otomatik kaynakça entegrasyonu",
    ],
    examples: [
      "300+ kaynaklı doktora tezinde APA 7 tutarlılık denetimi",
      "IEEE formatındaki mühendislik tezinde numaralı atıf düzeni",
      "Farklı stiller arasında (APA → Vancouver) dönüştürme",
      "Zotero ile ekip içi ortak kütüphane kurulumu",
    ],
    audience: "Kaynakçasını teslim öncesi son kez sağlama almak isteyen herkes",
    faqs: [
      {
        q: "Kaynakçamı otomatik hâle getirebilir miyim?",
        a: "Evet. Zotero veya Mendeley ile Word entegrasyonunu kurarak metin içi atıfların ve kaynakçanın otomatik güncellenmesini sağlamanız için destek veriyoruz.",
      },
      {
        q: "Sadece belirli bölümler için kontrol yaptırabilir miyim?",
        a: "Evet. Kapsam tamamen ihtiyacınıza göre belirlenir; tek bir bölüm, makale veya tezin tamamı için kontrol yapılabilir.",
      },
    ],
  },
  {
    slug: "tez-format-latex-duzenleme",
    category: "dil",
    title: "Tez Biçim Düzenleme (Word ve LaTeX)",
    short: "Enstitü yazım kılavuzuna uygun sayfa düzeni, şablon ve LaTeX dizgi desteği.",
    description:
      "Tezinizin enstitü yazım kılavuzuna tam uyumlu olması için biçim danışmanlığı sunuyoruz. Kenar boşluklarından başlık hiyerarşisine, otomatik içindekilerden tablo-şekil numaralandırmaya kadar Word ve LaTeX şablonlarında kusursuz bir görünüm elde etmenize yardımcı oluyoruz.",
    tools: ["Microsoft Word", "LaTeX", "Overleaf", "BibTeX", "Adobe Acrobat"],
    bullets: [
      "Enstitü yazım kılavuzuna göre sayfa düzeni ve kenar boşlukları",
      "Stiller ile otomatik başlık, içindekiler, tablo ve şekil listeleri",
      "Sayfa numaralandırma (Roma/Arap) ve bölüm geçişleri",
      "LaTeX / Overleaf tez şablonu kurulumu ve BibTeX entegrasyonu",
      "Teslim öncesi PDF/A dönüşümü ve son biçim kontrolü",
    ],
    examples: [
      "Enstitü şablonuna uygun otomatik içindekiler kurulumu",
      "Word'den LaTeX'e tez aktarımı ve dizgi",
      "Denklem ve algoritma içeren mühendislik tezinin biçim düzeni",
      "Biçim nedeniyle iade edilen tezin düzeltme listesi",
    ],
    audience: "Tez teslim aşamasındaki yüksek lisans ve doktora öğrencileri",
    faqs: [
      {
        q: "Tezim biçim kontrolünden geri döndü, hızlı destek alabilir miyim?",
        a: "Evet. Enstitüden gelen düzeltme listesini inceleyerek önceliklendirir ve teslim tarihinize uygun bir planla biçim düzenlemelerini yapmanız için destek veririz.",
      },
      {
        q: "LaTeX bilmiyorum, Overleaf kullanabilir miyim?",
        a: "Evet. Overleaf, kurulum gerektirmeyen çevrim içi bir LaTeX editörüdür. Şablonu kurar ve temel komutları kullanmanız için kısa bir rehber sunarız.",
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

// Yazım standartları ve yöntemler yazılım sayısına dahil edilmez.
const NON_SOFTWARE = new Set(["APA 7", "IEEE", "Vancouver", "TDK Yazım Kılavuzu", "Gantt", "Terminoloji sözlükleri", "Joint Display"]);

/** Tüm hizmetlerde kullanılan benzersiz yazılım, kütüphane ve araçlar. */
export const allTools = Array.from(new Set(services.flatMap((s) => s.tools))).filter((t) => !NON_SOFTWARE.has(t));

/** Pazarlama metinlerinde kullanılan, onluğa yuvarlanmış araç sayısı ("140+" gibi). */
export const toolCount = Math.floor(allTools.length / 10) * 10;
