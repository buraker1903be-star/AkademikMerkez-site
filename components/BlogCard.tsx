import Link from "next/link";
import Icon from "./Icon";
import { tarihYazisi, yaziYolu, type Yazi } from "@/lib/blog";

const OKUMA = { tr: "dk okuma", en: "min read" };

// Blog listesi, yazının altındaki "Diğer yazılar" ve hizmet sayfası aynı kartı kullanır.
// Başlık düzeyi çağırandan: listede h2, bir bölüm başlığının altında h3.
export default function BlogCard({ yazi, baslik: Baslik = "h2" }: { yazi: Yazi; baslik?: "h2" | "h3" }) {
  return (
    <Link href={yaziYolu(yazi.dil, yazi.slug)} className="svc-card blog-card">
      <span className="svc-arrow">
        <Icon name="arrowUpRight" size={16} />
      </span>
      <span className="post-meta">
        <time dateTime={yazi.yayin}>{tarihYazisi(yazi.yayin, yazi.dil)}</time> · {yazi.okumaDakika} {OKUMA[yazi.dil]}
      </span>
      <Baslik>{yazi.baslik}</Baslik>
      <p>{yazi.aciklama}</p>
    </Link>
  );
}
