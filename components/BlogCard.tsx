import Link from "next/link";
import Icon from "./Icon";
import { tarihYazisi, yaziYolu, type Yazi } from "@/lib/blog";

// Blog listesi ve yazının altındaki "Diğer yazılar" aynı kartı kullanır.
// Başlık düzeyi çağırandan: listede h2, yazı sayfasında bölüm başlığının altında h3.
export default function BlogCard({ yazi, baslik: Baslik = "h2" }: { yazi: Yazi; baslik?: "h2" | "h3" }) {
  return (
    <Link href={yaziYolu(yazi.slug)} className="svc-card blog-card">
      <span className="svc-arrow">
        <Icon name="arrowUpRight" size={16} />
      </span>
      <span className="post-meta">
        <time dateTime={yazi.yayin}>{tarihYazisi(yazi.yayin)}</time> · {yazi.okumaDakika} dk okuma
      </span>
      <Baslik>{yazi.baslik}</Baslik>
      <p>{yazi.aciklama}</p>
    </Link>
  );
}
