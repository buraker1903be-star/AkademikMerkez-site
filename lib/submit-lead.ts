"use client";

import type { Dil } from "./i18n";

export type LeadPayload = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  honeypot: string;
};

export type LeadResult = { ok: true } | { ok: false; error: string };

const FRIENDLY_ERRORS: Record<Dil, Record<string, string>> = {
  tr: {
    invalid_name: "Lütfen adınızı ve soyadınızı eksiksiz girin.",
    contact_required: "Size ulaşabilmemiz için e-posta veya telefon numaranızdan en az birini girin.",
    organization_not_found: "Şu anda talebinizi alamıyoruz, lütfen daha sonra tekrar deneyin.",
    rate_limited: "Talebiniz zaten alındı. Kısa süre içinde tekrar göndermenize gerek yok.",
  },
  en: {
    invalid_name: "Please enter your full name.",
    contact_required: "Please enter at least your email address or phone number so that we can reach you.",
    organization_not_found: "We cannot receive your request right now. Please try again later.",
    rate_limited: "Your request has already been received. There is no need to send it again so soon.",
  },
};

const GENEL = {
  tr: {
    yapilandirma: "Site yapılandırması eksik. Lütfen yönetici ile iletişime geçin.",
    gonderilemedi: "Talebiniz gönderilemedi, lütfen tekrar deneyin.",
    baglanti: "Bağlantı hatası oluştu, lütfen internet bağlantınızı kontrol edip tekrar deneyin.",
  },
  en: {
    yapilandirma: "The site is not fully configured. Please contact us by email or WhatsApp.",
    gonderilemedi: "Your request could not be sent. Please try again.",
    baglanti: "A connection error occurred. Please check your internet connection and try again.",
  },
};

/*
  İngilizce formdan gelen talep CRM'e "[EN]" önekiyle düşer: ekip
  müşteriye İngilizce dönmesi gerektiğini talep listesinden görsün.
  Hizmet adı ise her iki dilde TÜRKÇE gider (form seçeneğinin değeri),
  CRM'deki talepler tek dilde gruplansın.
*/
export async function submitLead(payload: LeadPayload, dil: Dil = "tr"): Promise<LeadResult> {
  // Basit bot koruması: gizli alan doluysa sessizce başarı döndür.
  if (payload.honeypot) {
    return { ok: true };
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const orgSlug = process.env.NEXT_PUBLIC_ORG_SLUG || "akademikmerkez";

  if (!url || !key) {
    return { ok: false, error: GENEL[dil].yapilandirma };
  }

  const message = dil === "en" ? `[EN] ${payload.message}`.trim() : payload.message;

  try {
    const res = await fetch(`${url}/rest/v1/rpc/submit_public_lead`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: key,
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify({
        org_slug: orgSlug,
        p_customer_name: payload.name,
        p_email: payload.email || null,
        p_phone: payload.phone || null,
        p_service: payload.service,
        p_message: message,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      const match = /"message":"([a-z_]+)"/.exec(text) || /"code":"([a-z_]+)"/.exec(text);
      const code = match?.[1];
      return { ok: false, error: (code && FRIENDLY_ERRORS[dil][code]) || GENEL[dil].gonderilemedi };
    }

    return { ok: true };
  } catch {
    return { ok: false, error: GENEL[dil].baglanti };
  }
}
