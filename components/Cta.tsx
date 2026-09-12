import Link from "next/link";
import Reveal from "./Reveal";
import { whatsappHref } from "./WhatsAppButton";

export default function Cta({
  title = (
    <>
      Araştırmanızı <span className="serif gold">birlikte</span> güçlendirelim.
    </>
  ),
  text = "Kapsam, takvim ve ücret işe başlamadan önce netleşir. Talebinize genellikle 24 saat içinde dönüş yapıyoruz.",
}: {
  title?: React.ReactNode;
  text?: string;
}) {
  return (
    <section className="section-sm">
      <div className="container">
        <Reveal className="cta">
          <p className="eyebrow">Ön görüşme</p>
          <h2 className="headline">{title}</h2>
          <p className="lede">{text}</p>
          <div className="hero-actions">
            <Link href="/teklif-al" className="btn btn-gold btn-lg">
              Teklif Al
            </Link>
            <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="btn btn-glass btn-lg">
              WhatsApp&apos;tan yazın
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
