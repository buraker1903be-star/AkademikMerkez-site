"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Icon from "@/components/Icon";
import { submitLead } from "@/lib/submit-lead";

export type ServiceGroup = { label: string; options: string[] };

export default function LeadForm({ groups }: { groups: ServiceGroup[] }) {
  const params = useSearchParams();
  const requested = params.get("hizmet") || "";
  const preselected = groups.some((g) => g.options.includes(requested)) ? requested : "";
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = new FormData(event.currentTarget);
    const result = await submitLead({
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
      service: String(form.get("service") || ""),
      message: String(form.get("message") || ""),
      honeypot: String(form.get("website") || ""),
    });

    if (result.ok) {
      setStatus("ok");
    } else {
      setStatus("err");
      setErrorMsg(result.error);
    }
  }

  if (status === "ok") {
    return (
      <div className="form-success" role="status">
        <span className="cat-icon"><Icon name="check" size={24} strokeWidth={2.2} /></span>
        <h2>Talebiniz alındı.</h2>
        <p>Uzman ekibimiz en kısa sürede sizinle iletişime geçecek. Teşekkür ederiz.</p>
        <Link href="/hizmetlerimiz" className="link-arrow" style={{ marginTop: 24 }}>
          Hizmetleri keşfetmeye devam edin <Icon name="arrowRight" size={16} />
        </Link>
      </div>
    );
  }

  const busy = status === "loading";

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <h2>Talep formu</h2>
      <p className="form-sub">Yıldızlı alanlar zorunludur. E-posta veya telefondan en az birini paylaşın.</p>

      {status === "err" && <p className="form-msg err" role="alert">{errorMsg}</p>}

      <input type="text" name="website" className="honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="field-grid">
        <div className="field">
          <label htmlFor="name">Ad Soyad *</label>
          <input id="name" name="name" type="text" autoComplete="name" required minLength={2} maxLength={120} disabled={busy} />
        </div>
        <div className="field">
          <label htmlFor="phone">Telefon</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="05xx xxx xx xx" disabled={busy} />
        </div>
      </div>

      <div className="field-grid">
        <div className="field">
          <label htmlFor="email">E-posta</label>
          <input id="email" name="email" type="email" autoComplete="email" placeholder="ad@ornek.com" disabled={busy} />
        </div>
        <div className="field">
          <label htmlFor="service">İlgilendiğiniz hizmet *</label>
          <select id="service" name="service" required defaultValue={preselected} disabled={busy}>
            <option value="" disabled>
              Seçiniz
            </option>
            {groups.map((g) => (
              <optgroup key={g.label} label={g.label}>
                {g.options.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </optgroup>
            ))}
            <option value="Diğer / Emin değilim">Diğer / Emin değilim</option>
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="message">Kısaca ihtiyacınızı anlatın</label>
        <textarea
          id="message"
          name="message"
          maxLength={1500}
          placeholder="Örn. Yüksek lisans tezimde ANSYS Fluent ile ısı değiştirici analizi için danışmanlığa ihtiyacım var."
          disabled={busy}
        />
      </div>

      <label className="consent">
        <input type="checkbox" required disabled={busy} />
        <span>
          <a href="/kvkk-aydinlatma-metni" target="_blank" rel="noreferrer">
            KVKK Aydınlatma Metni
          </a>
          &apos;ni okudum ve anladım. *
        </span>
      </label>

      <p className="form-note">
        Hizmetlerimiz danışmanlık esaslıdır; kişi adına tez, ödev, makale veya başvuru dosyası hazırlanması
        talepleri kabul edilmez. e-Devlet, YÖKSİS veya ÜAK şifrelerinizi paylaşmayınız.
      </p>

      <button className="btn btn-primary btn-lg btn-block" type="submit" disabled={busy}>
        {busy ? "Gönderiliyor…" : "Talebimi Gönder"}
      </button>
    </form>
  );
}
