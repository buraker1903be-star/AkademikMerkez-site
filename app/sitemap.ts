import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { SITE } from "@/lib/site";

const LAST_MODIFIED = new Date("2026-09-13");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/hizmetlerimiz", priority: 0.9 },
    { path: "/teklif-al", priority: 0.8 },
    { path: "/hakkimizda", priority: 0.6 },
    { path: "/sikca-sorulan-sorular", priority: 0.6 },
    { path: "/etik-ilkelerimiz", priority: 0.5 },
    { path: "/iletisim", priority: 0.5 },
    { path: "/kvkk-aydinlatma-metni", priority: 0.2 },
  ];

  return [
    ...staticPages.map((p) => ({
      url: `${SITE.url}${p.path}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly" as const,
      priority: p.priority,
    })),
    ...services.map((s) => ({
      url: `${SITE.url}/hizmetlerimiz/${s.slug}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
