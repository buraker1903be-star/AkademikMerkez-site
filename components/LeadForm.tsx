"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Icon from "@/components/Icon";
import { submitLead } from "@/lib/submit-lead";
import { yol, type Dil } from "@/lib/i18n";

/*
  Seçeneğin DEĞERİ hizmetin Türkçe adı, ETİKETİ sayfanın dilinde: CRM'e
  her iki dilden de aynı hizmet adı düşer (lib/submit-lead.ts).
*/
export type ServiceGroup = { label: string; options: { value: string; label: string }[] };

const METIN = {
  tr: {
    alindi: "Talebiniz alındı.",
    alindiMetin: "Uzman ekibimiz en kısa sürede sizinle iletişime geçecek. Teşekkür ederiz.",
    devam: "Hizmetleri keşfetmeye devam edin",
    baslik: "Talep formu",
    alt: "Yıldızlı alanlar zorunludur. E-posta veya telefondan en az birini paylaşın.",
    ad: "Ad Soyad *",
    telefon: "Telefon",
    telefonOrnek: "05xx xxx xx xx",
    eposta: "E-posta",
    epostaOrnek: "ad@ornek.com",
    hizmet: "İlgilendiğiniz hizmet *",
    seciniz: "Seçiniz",
    diger: "Diğer / Emin değilim",
    mesaj: "Kısaca ihtiyacınızı anlatın",
    mesajOrnek: "Örn. Yüksek lisans tezimde ANSYS Fluent ile ısı değiştirici analizi için danışmanlığa ihtiyacım var.",
    kvkk: "KVKK Aydınlatma Metni",
    kvkkSon: "'ni okudum ve anladım. *",
    kvkkOn: "",
    not: "Hizmetlerimiz danışmanlık esaslıdır; kişi adına tez, ödev, makale veya başvuru dosyası hazırlanması talepleri kabul edilmez. e-Devlet, YÖKSİS veya ÜAK şifrelerinizi paylaşmayınız.",
    gonderiliyor: "Gönderiliyor…",
    gonder: "Talebimi Gönder",
  },
  en: {
    alindi: "Your request has been received.",
    alindiMetin: "Our team of experts will contact you shortly. Thank you.",
    devam: "Continue exploring our services",
    baslik: "Request form",
    alt: "Fields marked with an asterisk are required. Please share at least your email or phone number.",
    ad: "Full name *",
    telefon: "Phone",
    telefonOrnek: "+90 5xx xxx xx xx",
    eposta: "Email",
    epostaOrnek: "name@example.com",
    hizmet: "Service you are interested in *",
    seciniz: "Please select",
    diger: "Other / Not sure",
    mesaj: "Briefly describe what you need",
    mesajOrnek: "E.g. I need consulting on a heat exchanger analysis with ANSYS Fluent for my master's thesis.",
    kvkk: "Privacy Notice",
    kvkkSon: ". *",
    kvkkOn: "I have read and understood the ",
    not: "Our services are strictly consultative; requests to write a thesis, assignment, article or application file on someone's behalf are not accepted. Please do not share your e-Devlet, YÖKSİS or ÜAK passwords.",
    gonderiliyor: "Sending…",
    gonder: "Send My Request",
  },
};

export default function LeadForm({ groups, dil = "tr" }: { groups: ServiceGroup[]; dil?: Dil }) {
  const m = METIN[dil];
  const params = useSearchParams();
  /* ?hizmet= hizmet sayfasındaki "Teklif al" düğmesinden; değer Türkçe ad. */
  const requested = params.get("hizmet") || "";
  const preselected = groups.some((g) => g.options.some((o) => o.value === requested)) ? requested : "";
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = new FormData(event.currentTarget);
    const result = await submitLead(
      {
        name: String(form.get("name") || ""),
        email: String(form.get("email") || ""),
        phone: String(form.get("phone") || ""),
        service: String(form.get("service") || ""),
        message: String(form.get("message") || ""),
        honeypot: String(form.get("website") || ""),
      },
      dil,
    );

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
        <h2>{m.alindi}</h2>
        <p>{m.alindiMetin}</p>
        <Link href={yol(dil, "/hizmetlerimiz")} className="link-arrow" style={{ marginTop: 24 }}>
          {m.devam} <Icon name="arrowRight" size={16} />
        </Link>
      </div>
    );
  }

  const busy = status === "loading";

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <h2>{m.baslik}</h2>
      <p className="form-sub">{m.alt}</p>

      {status === "err" && <p className="form-msg err" role="alert">{errorMsg}</p>}

      <input type="text" name="website" className="honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="field-grid">
        <div className="field">
          <label htmlFor="name">{m.ad}</label>
          <input id="name" name="name" type="text" autoComplete="name" required minLength={2} maxLength={120} disabled={busy} />
        </div>
        <div className="field">
          <label htmlFor="phone">{m.telefon}</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder={m.telefonOrnek} disabled={busy} />
        </div>
      </div>

      <div className="field-grid">
        <div className="field">
          <label htmlFor="email">{m.eposta}</label>
          <input id="email" name="email" type="email" autoComplete="email" placeholder={m.epostaOrnek} disabled={busy} />
        </div>
        <div className="field">
          <label htmlFor="service">{m.hizmet}</label>
          <select id="service" name="service" required defaultValue={preselected} disabled={busy}>
            <option value="" disabled>
              {m.seciniz}
            </option>
            {groups.map((g) => (
              <optgroup key={g.label} label={g.label}>
                {g.options.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </optgroup>
            ))}
            <option value="Diğer / Emin değilim">{m.diger}</option>
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="message">{m.mesaj}</label>
        <textarea id="message" name="message" maxLength={1500} placeholder={m.mesajOrnek} disabled={busy} />
      </div>

      <label className="consent">
        <input type="checkbox" required disabled={busy} />
        <span>
          {m.kvkkOn}
          <a href={yol(dil, "/kvkk-aydinlatma-metni")} target="_blank" rel="noreferrer">
            {m.kvkk}
          </a>
          {m.kvkkSon}
        </span>
      </label>

      <p className="form-note">{m.not}</p>

      <button className="btn btn-primary btn-lg btn-block" type="submit" disabled={busy}>
        {busy ? m.gonderiliyor : m.gonder}
      </button>
    </form>
  );
}
