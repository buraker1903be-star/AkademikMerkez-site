import HeaderClient, { type MenuGroup } from "./HeaderClient";
import { CATEGORY_ICON } from "./Icon";
import { hizmetler, kategoridekiler, kategoriler } from "@/lib/hizmetler";
import type { Dil } from "@/lib/i18n";
import { SITE } from "@/lib/site";

// Menü verisi sunucuda hazırlanır; tarayıcıya yalnızca başlık ve bağlantılar gider.
export default function Header({ dil = "tr" }: { dil?: Dil }) {
  const menu: MenuGroup[] = kategoriler(dil).map((c) => ({
    key: c.key,
    title: c.title,
    icon: CATEGORY_ICON[c.key],
    items: kategoridekiler(dil, c.key).map((s) => ({ slug: s.slug, title: s.title })),
  }));

  return <HeaderClient dil={dil} menu={menu} appUrl={SITE.appUrl} serviceCount={hizmetler(dil).length} />;
}
