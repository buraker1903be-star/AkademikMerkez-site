import { notFound } from "next/navigation";

/*
  İki kök düzen olduğu için (app/(tr), app/en) kökte genel bir
  not-found yok: eşleşmeyen adres bu yakalayıcıya düşer ve kendi
  dilinin 404 sayfasını (not-found.tsx) gerçek 404 koduyla çizer.
*/
export default function Eksik() {
  notFound();
}
