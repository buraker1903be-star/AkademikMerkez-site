# Akademik Merkez — tanıtım sitesi

Next.js 14 ile tamamen statik (SSG), SEO odaklı tanıtım sitesi. Tek dinamik
parça teklif formu. Kurulum ve ortam değişkenleri için `README.md` ve
`.env.example`.

## Dil

Metinler ve kod yorumları **Türkçe**. Yorumlar "ne yaptığını" değil **neden
öyle olduğunu** anlatır.

## Teklif formu

Form, ArvoOS'un veritabanındaki `submit_public_lead` fonksiyonunu anon
anahtarla doğrudan çağırır (`lib/submit-lead.ts`) ve talebi kurumun
(`NEXT_PUBLIC_ORG_SLUG`, varsayılan `akademikmerkez`) CRM'ine düşürür.

- Fonksiyon ArvoOS deposunda tanımlı ve ArvoOS ile ARC'ın ortak
  veritabanında çalışır; canlı gövde ArvoARC/`supabase/schema/` altında.
  Fonksiyonun imzası (parametre adları) değişirse bu site de güncellenmeli.
- Kurum `active` değilse fonksiyon `organization_not_found` döner; form
  kullanıcıya genel bir hata gösterir.
- Aynı e-postadan 2 dakika içinde ikinci talep reddedilir (`rate_limited`).
- Bot koruması: gizli alan doluysa istek gönderilmeden başarı döner.

Kardeş sitedeki (arvo-os.com) talep formu 5 gün boyunca, var olmayan bir
sütuna başvuran fonksiyon yüzünden sessizce düştü. Bu formda veya
`submit_public_lead`'de değişiklik yaptığınızda gerçek bir deneme talebiyle
uçtan uca sınayın.

## Ticari unvan

Ticari unvan kaynak kodda tutulmuyor. `SITE_LEGAL_NAME` (ve varsa
`SITE_MERSIS_NO`) tanımlanınca alt bilgi, KVKK metni ve yapısal veri
kendiliğinden güncellenir (`lib/site.ts`).

## Kontroller

`npm run typecheck` ve `npm run lint` — ikisi de CI'da
(`.github/workflows/ci.yml`). Derleme CI'da değil, Vercel'de.
