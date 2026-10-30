# Akademik Merkez — Public Site

Next.js 14 ile hazırlanmış, tamamen statik (SSG) SEO odaklı tanıtım sitesi.

## Kurulum (yerel geliştirme)

```
npm install
cp .env.example .env.local   # değerleri kendi Supabase bilgilerinizle doldurun
npm run dev
```

## Ortam değişkenleri

`.env.example` dosyasına bakın; altı değişkenin her biri için eksik olduğunda
ne olacağı orada yazılı. `NEXT_PUBLIC_*` değişkenler Vercel proje ayarlarında
(Settings > Environment Variables) tanımlanmalıdır.

### Ticari unvan

Ticari unvan şu an sitede gösterilmiyor; footer ve KVKK metninde "AkademikMerkez" yazar.
Unvanı yeniden göstermek için Vercel'de `SITE_LEGAL_NAME` (ve varsa `SITE_MERSIS_NO`) ortam
değişkenini tanımlayıp yeniden deploy etmek yeterlidir (bkz. `lib/site.ts`).

## Kontroller

```
npm run typecheck
npm run lint
```

Her push ve PR'da `.github/workflows/ci.yml` ikisini de çalıştırır. Derleme
CI'da değil, Vercel tarafında yapılır.

## Yayına alma (Vercel)

1. Bu klasörü GitHub'daki `AkademikMerkez-site` reposuna yükleyin.
2. vercel.com'da "Add New... > Project" ile bu repoyu içe aktarın.
3. Environment Variables kısmına `.env.example`'daki değişkenleri girin.
   Zorunlu olan ikisi `NEXT_PUBLIC_SUPABASE_URL` ve
   `NEXT_PUBLIC_SUPABASE_ANON_KEY`; gerisi boş bırakılabilir, her birinin
   varsayılanı örnek dosyada yazılı.
4. Deploy edin.
5. Vercel proje ayarlarından Domains kısmına `akademikmerkez.com` ve `www.akademikmerkez.com`
   ekleyin, verilen DNS kayıtlarını alan adı sağlayıcınızda (doruk.net) tanımlayın.

## Blog: yeni yazı nasıl eklenir?

1. `content/blog/` altına `<adres>.md` dosyası açın (ör. `anket-gecerlik-guvenirlik.md`
   → `akademikmerkez.com/blog/anket-gecerlik-guvenirlik`). Dosya adında yalnızca
   küçük harf, rakam ve tire.
2. Dosyanın başına bilgi bloğunu yazın; örnek için mevcut yazılara bakın:

   ```
   ---
   baslik: "Yazının başlığı"
   aciklama: "Arama sonucunda görünen açıklama, en çok 160 karakter."
   ozet: "Kısaca kutusu: sorunun 2-3 cümlelik doğrudan cevabı."
   yayin: "2026-11-15"
   guncelleme: "2026-12-01"   # isteğe bağlı, içerik değişince
   yazar: editorluk           # lib/blog.ts YAZARLAR
   hizmetler:                 # ilgili hizmet slug'ları (lib/services.ts)
     - spss-analizi
   anahtarKelimeler: [SPSS, ...]
   sss:
     - q: "Soru?"
       a: "Cevap."
   ---
   ```
3. Gövdeyi Markdown ile yazın. Ara başlıklar `##` ile ve mümkünse soru biçiminde
   ("Hangi test seçilmeli?"); her başlığın hemen altında cevap. Tablo, liste ve
   alıntı kullanılabilir.
4. Commit + push. Vercel yeniden derler; yazı blog listesine, site haritasına,
   RSS'e (`/blog/rss.xml`), `llms.txt`'e ve bağlı hizmet sayfasının "Bu konuda
   yazdıklarımız" bölümüne kendiliğinden girer.
5. **İngilizce çeviri (isteğe bağlı):** `content/blog/en/<ingilizce-adres>.md`
   dosyasını aynı bilgi bloğuyla İngilizce yazın (`hizmetler` yine Türkçe
   slug'larla) ve `lib/blog-eslesme.ts`'e `"<türkçe-adres>": "<ingilizce-adres>"`
   satırını ekleyin. İki yazı birbirine bağlanır: dil düğmesi karşılığa gider,
   arama motoru ikisini birbirinin çevirisi sayar. Çevirisi olmayan yazı
   yalnızca Türkçe kalır.

Bilgi bloğunda eksik/yanlış alan (tanımsız hizmet, 160'ı aşan açıklama, bozuk
tarih) ya da eşlemesi tutmayan bir çeviri **derlemeyi düşürür**: hatalı yazı sessizce yayına çıkmasın diye. Yayın
tarihi ileride olan yazı atlanır ve o tarihten sonraki ilk derlemede yayına
girer (kendiliğinden değil; site statik).

## Teklif Al formu nasıl çalışır?

Form, Supabase'de tanımlı `submit_public_lead` fonksiyonunu (bkz. ArvoOS reposundaki
`supabase/migrations/20260819000000_public_lead_intake.sql`) anon key ile çağırır.
Gelen talep, `akademikmerkez` organizasyonuna bağlı `crm_requests` tablosuna düşer ve
panelde CRM > Talepler sekmesinde görünür.
