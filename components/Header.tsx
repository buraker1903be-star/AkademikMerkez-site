import HeaderClient, { type MenuGroup } from "./HeaderClient";
import { CATEGORY_ICON } from "./Icon";
import { categories, servicesByCategory, services } from "@/lib/services";
import { SITE } from "@/lib/site";

// Menü verisi sunucuda hazırlanır; tarayıcıya yalnızca başlık ve bağlantılar gider.
export default function Header() {
  const menu: MenuGroup[] = categories.map((c) => ({
    key: c.key,
    title: c.title,
    icon: CATEGORY_ICON[c.key],
    items: servicesByCategory(c.key).map((s) => ({ slug: s.slug, title: s.title })),
  }));

  return <HeaderClient menu={menu} appUrl={SITE.appUrl} serviceCount={services.length} />;
}
