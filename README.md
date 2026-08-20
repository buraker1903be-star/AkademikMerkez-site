# Akademik Merkez — Public Site

Next.js 14 ile hazırlanmış, tamamen statik (SSG) SEO odaklı tanıtım sitesi.

## Kurulum (yerel geliştirme)

```
npm install
cp .env.example .env.local   # değerleri kendi Supabase bilgilerinizle doldurun
npm run dev
```

## Ortam değişkenleri

`.env.example` dosyasına bakın. `NEXT_PUBLIC_*` değişkenler Vercel proje ayarlarında
(Settings > Environment Variables) tanımlanmalıdır.

## Yayına alma (Vercel)

1. Bu klasörü GitHub'daki `AkademikMerkez-site` reposuna yükleyin.
2. vercel.com'da "Add New... > Project" ile bu repoyu içe aktarın.
3. Environment Variables kısmına `.env.example`'daki 4 değişkeni girin.
4. Deploy edin.
5. Vercel proje ayarlarından Domains kısmına `akademikmerkez.com` ve `www.akademikmerkez.com`
   ekleyin, verilen DNS kayıtlarını alan adı sağlayıcınızda (doruk.net) tanımlayın.

## Teklif Al formu nasıl çalışır?

Form, Supabase'de tanımlı `submit_public_lead` fonksiyonunu (bkz. ArvoOS reposundaki
`supabase/migrations/20260819000000_public_lead_intake.sql`) anon key ile çağırır.
Gelen talep, `akademikmerkez` organizasyonuna bağlı `crm_requests` tablosuna düşer ve
panelde CRM > Talepler sekmesinde görünür.
