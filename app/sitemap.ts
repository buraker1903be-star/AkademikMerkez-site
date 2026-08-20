import type { MetadataRoute } from "next";
import { services } from "@/lib/services";

const BASE_URL = "https://akademikmerkez.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/hizmetlerimiz",
    "/hakkimizda",
    "/etik-ilkelerimiz",
    "/teklif-al",
    "/iletisim",
    "/kvkk-aydinlatma-metni",
    "/sikca-sorulan-sorular",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const servicePages = services.map((s) => ({
    url: `${BASE_URL}/hizmetlerimiz/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages];
}
