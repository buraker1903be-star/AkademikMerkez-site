"use client";

import { useState } from "react";

export default function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="accordion">
      {items.map((item, i) => (
        <div key={item.q} className={`accordion-item ${open === i ? "is-open" : ""}`}>
          <button
            className="accordion-trigger"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span>{item.q}</span>
            <span className="accordion-icon">{open === i ? "−" : "+"}</span>
          </button>
          <div className="accordion-panel" style={{ maxHeight: open === i ? "400px" : "0px" }}>
            <p>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
