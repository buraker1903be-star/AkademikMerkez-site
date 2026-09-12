// Sitenin tamamında kullanılan kurumsal bilgiler tek yerden yönetilir.
export const SITE = {
  name: "Akademik Merkez",
  url: "https://akademikmerkez.com",
  appUrl: process.env.NEXT_PUBLIC_APP_URL || "https://app.akademikmerkez.com",
  email: "uzman@akademikmerkez.com",
  phone: "+905060009499",
  phoneDisplay: "0506 000 94 99",
  whatsapp: "905060009499",
  address: {
    street: "Yakuplu Mah. Hürriyet Bulvarı Skyport Residence No:1 D:113",
    postalCode: "34524",
    district: "Beylikdüzü",
    city: "İstanbul",
    country: "TR",
  },
  // Ticari unvan şimdilik gizli ve kaynak kodda tutulmuyor. Tekrar göstermek için
  // Vercel > Settings > Environment Variables'a SITE_LEGAL_NAME (ve varsa SITE_MERSIS_NO)
  // ekleyip yeniden deploy edin; footer, KVKK metni ve yapısal veri otomatik güncellenir.
  legalName: process.env.SITE_LEGAL_NAME?.trim() || "",
  mersisNo: process.env.SITE_MERSIS_NO?.trim() || "",
  publicEntityName: "AkademikMerkez",
  get showLegalName() {
    return this.legalName.length > 0;
  },
};

/** Footer, KVKK ve yapısal veride gösterilecek işletme adı. */
export const OPERATOR_NAME = SITE.showLegalName ? SITE.legalName : SITE.publicEntityName;
