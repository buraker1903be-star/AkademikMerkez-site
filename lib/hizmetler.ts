// Hizmet verisine dile göre erişim. Sayfalar ve ortak bileşenler
// lib/services.ts'e doğrudan değil buradan gider: dil seçimi tek yerde.
import type { Dil } from "./i18n";
import { categories, services, type CategoryKey, type Service } from "./services";
import { HIZMET_SLUG_EN, categoriesEn, servicesEn } from "./services-en";

export type DilliHizmet = Service & { trSlug: string; trTitle: string };

const tr: DilliHizmet[] = services.map((s) => ({ ...s, trSlug: s.slug, trTitle: s.title }));
const en: DilliHizmet[] = servicesEn.map((s) => ({ ...s, trTitle: services.find((t) => t.slug === s.trSlug)?.title ?? s.title }));

/*
  Eşleşme denetimi: İngilizce listede Türkçe bir hizmet eksikse ya da
  slug tablosuyla uyuşmuyorsa derleme düşsün — sessizce eksik bir
  İngilizce menü yayınlamaktansa.
*/
if (en.length !== tr.length || en.some((s) => HIZMET_SLUG_EN[s.trSlug] !== s.slug)) {
  throw new Error("lib/services-en.ts lib/services.ts ile eşleşmiyor (eksik hizmet ya da slug).");
}

export const hizmetler = (dil: Dil) => (dil === "en" ? en : tr);
export const kategoriler = (dil: Dil) => (dil === "en" ? categoriesEn : categories);
export const kategori = (dil: Dil, key: CategoryKey) => kategoriler(dil).find((c) => c.key === key)!;
export const kategoridekiler = (dil: Dil, key: CategoryKey) => hizmetler(dil).filter((s) => s.category === key);
export const hizmetBul = (dil: Dil, slug: string) => hizmetler(dil).find((s) => s.slug === slug);
export const hizmetYolu = (dil: Dil, slug: string) => (dil === "en" ? `/en/services/${slug}` : `/hizmetlerimiz/${slug}`);
