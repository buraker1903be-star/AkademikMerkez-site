"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";
import { services } from "@/lib/services";
import { submitLead } from "@/lib/submit-lead";

export default function LeadForm() {
  const params = useSearchParams();
  const preselected = params.get("hizmet") || "";
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
      event.currentTarget.reset();
    } else {
      setStatus("err");
      setErrorMsg(result.error);
    }
  }

  if (status === "ok") {
    return (
      <div className="form-msg ok" role="status">
        Talebiniz alındı. Uzman ekibimiz en kısa sürede sizinle iletişime geçecek. Teşekkür
        ederiz.
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      {status === "err" && <p className="form-msg err" role="alert">{errorMsg}</p>}

      <input type="text" name="website" className="honeypot" tabIndex={-1} autoComplete="off" />

      <div className="field-grid">
        <div className="field">
          <label htmlFor="name">Ad Soyad *</label>
          <input id="name" name="name" type="text" required minLength={2} maxLength={120} disabled={status === "loading"} />
        </div>
        <div className="field">
          <label htmlFor="phone">Telefon</label>
          <input id="phone" name="phone" type="tel" placeholder="05xx xxx xx xx" disabled={status === "loading"} />
        </div>
      </div>

      <div className="field-grid">
        <div className="field">
          <label htmlFor="email">E-posta</label>
          <input id="email" name="email" type="email" placeholder="ad@ornek.com" disabled={status === "loading"} />
        </div>
        <div className="field">
          <label htmlFor="service">İlgilendiğiniz Hizmet *</label>
          <select id="service" name="service" required defaultValue={preselected} disabled={status === "loading"}>
            <option value="" disabled>
              Seçiniz
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Diğer / Emin değilim">Diğer / Emin değilim</option>
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="message">Kısaca ihtiyacınızı anlatın</label>
        <textarea id="message" name="message" maxLength={1500} placeholder="Örn. Yüksek lisans tez konumla ilgili yöntem danışmanlığına ihtiyacım var." disabled={status === "loading"} />
      </div>

      <label className="consent">
        <input type="checkbox" required disabled={status === "loading"} />
        <span>
          Kişisel verilerimin{" "}
          <a href="/kvkk-aydinlatma-metni" target="_blank" rel="noreferrer">
            KVKK Aydınlatma Metni
          </a>{" "}
          kapsamında işlenmesini kabul ediyorum. *
        </span>
      </label>

      <button className="btn btn-primary" type="submit" disabled={status === "loading"} style={{ width: "100%", justifyContent: "center" }}>
        {status === "loading" ? "Gönderiliyor..." : "Talebimi Gönder"}
      </button>
    </form>
  );
}
