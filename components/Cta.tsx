import Link from "next/link";
import Reveal from "./Reveal";
import { whatsappHref } from "./WhatsAppButton";
import { METIN, yol, type Dil } from "@/lib/i18n";

const VARSAYILAN_BASLIK = {
  tr: (
    <>
      Araştırmanızı <span className="serif gold">birlikte</span> güçlendirelim.
    </>
  ),
  en: (
    <>
      Let&apos;s strengthen your research <span className="serif gold">together</span>.
    </>
  ),
};

export default function Cta({
  dil = "tr",
  title,
  text,
}: {
  dil?: Dil;
  title?: React.ReactNode;
  text?: string;
}) {
  const m = METIN[dil];
  return (
    <section className="section-sm">
      <div className="container">
        <Reveal className="cta">
          <p className="eyebrow">{m.onGorusme}</p>
          <h2 className="headline">{title ?? VARSAYILAN_BASLIK[dil]}</h2>
          <p className="lede">{text ?? m.ctaMetin}</p>
          <div className="hero-actions">
            <Link href={yol(dil, "/teklif-al")} className="btn btn-gold btn-lg">
              {m.teklifAl}
            </Link>
            <a href={whatsappHref(m.whatsappMesaj)} target="_blank" rel="noopener noreferrer" className="btn btn-glass btn-lg">
              {m.whatsappYazin}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
