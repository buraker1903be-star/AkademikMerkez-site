import Link from "next/link";
import Icon from "./Icon";
import type { Service } from "@/lib/services";
import { hizmetYolu } from "@/lib/hizmetler";
import { METIN, type Dil } from "@/lib/i18n";

export default function ServiceCard({ service, dil = "tr" }: { service: Service; dil?: Dil }) {
  return (
    <Link href={hizmetYolu(dil, service.slug)} className="svc-card">
      <span className="svc-arrow">
        <Icon name="arrowUpRight" size={16} />
      </span>
      {service.isNew && <span className="svc-badge">{METIN[dil].yeni}</span>}
      <h3>{service.title}</h3>
      <p>{service.short}</p>
      <span className="chip-row">
        {service.tools.slice(0, 3).map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
      </span>
    </Link>
  );
}
