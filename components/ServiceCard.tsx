import Link from "next/link";
import Icon from "./Icon";
import type { Service } from "@/lib/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={`/hizmetlerimiz/${service.slug}`} className="svc-card">
      <span className="svc-arrow">
        <Icon name="arrowUpRight" size={16} />
      </span>
      {service.isNew && <span className="svc-badge">Yeni</span>}
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
