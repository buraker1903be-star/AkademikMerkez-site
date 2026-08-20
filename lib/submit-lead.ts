"use client";

export type LeadPayload = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  honeypot: string;
};

export type LeadResult = { ok: true } | { ok: false; error: string };

const FRIENDLY_ERRORS: Record<string, string> = {
  invalid_name: "Lütfen adınızı ve soyadınızı eksiksiz girin.",
  contact_required: "Size ulaşabilmemiz için e-posta veya telefon numaranızdan en az birini girin.",
  organization_not_found: "Şu anda talebinizi alamıyoruz, lütfen daha sonra tekrar deneyin.",
  rate_limited: "Talebiniz zaten alındı. Kısa süre içinde tekrar göndermenize gerek yok.",
};

export async function submitLead(payload: LeadPayload): Promise<LeadResult> {
  // Basit bot koruması: gizli alan doluysa sessizce başarı döndür.
  if (payload.honeypot) {
    return { ok: true };
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const orgSlug = process.env.NEXT_PUBLIC_ORG_SLUG || "akademikmerkez";

  if (!url || !key) {
    return { ok: false, error: "Site yapılandırması eksik. Lütfen yönetici ile iletişime geçin." };
  }

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
        p_message: payload.message,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      const match = /"message":"([a-z_]+)"/.exec(text) || /"code":"([a-z_]+)"/.exec(text);
      const code = match?.[1];
      return { ok: false, error: (code && FRIENDLY_ERRORS[code]) || "Talebiniz gönderilemedi, lütfen tekrar deneyin." };
    }

    return { ok: true };
  } catch {
    return { ok: false, error: "Bağlantı hatası oluştu, lütfen internet bağlantınızı kontrol edip tekrar deneyin." };
  }
}
