"use client";

import { useId, useState } from "react";
import Icon from "./Icon";

export default function Accordion({
  items,
  defaultOpen = 0,
}: {
  items: { q: string; a: string }[];
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const base = useId();

  return (
    <div className="acc">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${base}-panel-${i}`;
        const buttonId = `${base}-button-${i}`;
        return (
          <div key={item.q} className={`acc-item ${isOpen ? "open" : ""}`}>
            <h3 className="acc-heading">
              <button
                id={buttonId}
                type="button"
                className="acc-trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span>{item.q}</span>
                <span className="acc-icon">
                  <Icon name="close" size={14} strokeWidth={2} />
                </span>
              </button>
            </h3>
            {/* İçerik her zaman DOM'da kalır; arama motorları kapalı yanıtları da okuyabilir. */}
            <div id={panelId} role="region" aria-labelledby={buttonId} className="acc-panel">
              <div className="acc-inner">
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
