import { rssYaniti } from "@/lib/blog-rss";

// Derlemede bir kez üretilir; site statik kalır.
export const dynamic = "force-static";

export function GET() {
  return rssYaniti("tr");
}
