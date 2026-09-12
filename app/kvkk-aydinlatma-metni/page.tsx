import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { OPERATOR_NAME, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description: "Akademik Merkez KVKK Aydınlatma Metni ve kişisel verilerin işlenmesi hakkında bilgilendirme.",
  alternates: { canonical: "/kvkk-aydinlatma-metni" },
  robots: { index: true, follow: true },
};

export default function KvkkPage() {
  return (
    <main>
      <PageHero
        crumbs={[{ name: "KVKK Aydınlatma Metni", href: "/kvkk-aydinlatma-metni" }]}
        eyebrow="Yasal bilgilendirme"
        title="KVKK Aydınlatma Metni"
        lede="6698 sayılı Kişisel Verilerin Korunması Kanunu'nun 10. maddesi kapsamında bilgilendirme."
      />

      <section className="section-sm">
        <div className="container prose">
          <h2>Veri sorumlusu</h2>
          <p>
            Akademik Merkez markasının işletmecisi {OPERATOR_NAME} (&quot;Veri Sorumlusu&quot;) olarak,
            akademikmerkez.com internet sitesi, &quot;Teklif Al&quot; formu, e-posta, telefon ve WhatsApp
            üzerinden bizimle paylaştığınız kişisel verilerinizi 6698 sayılı Kişisel Verilerin Korunması
            Kanunu (&quot;KVKK&quot;) ve ilgili mevzuata uygun olarak işlemekteyiz.
            {SITE.showLegalName && SITE.mersisNo && <> MERSİS No: {SITE.mersisNo}.</>} İletişim:{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>, {SITE.address.street}, {SITE.address.postalCode}{" "}
            {SITE.address.district} / {SITE.address.city}.
          </p>

          <h2>İşlenen kişisel veriler</h2>
          <ul>
            <li>Kimlik bilgisi: ad ve soyad</li>
            <li>İletişim bilgisi: telefon numarası ve e-posta adresi</li>
            <li>Talep bilgisi: ilgilendiğiniz hizmet ve mesaj içeriği</li>
            <li>Hizmet sürecinde, yalnızca sizin paylaşmayı tercih ettiğiniz çalışma belgeleri</li>
          </ul>
          <p>
            Lütfen formlarda sağlık, din, etnik köken gibi özel nitelikli kişisel verilerinizi ve e-Devlet,
            YÖKSİS veya ÜAK sistemlerine ait şifrelerinizi paylaşmayınız; bu bilgiler hiçbir aşamada talep
            edilmez.
          </p>

          <h2>İşleme amaçları</h2>
          <ul>
            <li>Talebinizi değerlendirmek ve sizinle iletişime geçmek</li>
            <li>Size uygun danışmanlık hizmetini planlamak ve teklif sunmak</li>
            <li>Hizmet sözleşmesinin kurulması ve yürütülmesi</li>
            <li>Yasal yükümlülüklerin yerine getirilmesi ve olası uyuşmazlıklarda hakların korunması</li>
          </ul>

          <h2>Toplama yöntemi ve hukuki sebepler</h2>
          <p>
            Kişisel verileriniz; internet sitemizdeki form, e-posta, telefon ve WhatsApp aracılığıyla
            elektronik ortamda toplanır. Verileriniz KVKK&apos;nın 5. maddesinin 2. fıkrasında yer alan
            &quot;bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması&quot; (c),
            &quot;veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi&quot; (ç) ve &quot;ilgili kişinin
            temel hak ve özgürlüklerine zarar vermemek kaydıyla veri sorumlusunun meşru menfaati&quot; (f)
            hukuki sebeplerine dayanılarak işlenir.
          </p>

          <h2>Kişisel verilerin aktarılması</h2>
          <p>
            Kişisel verileriniz; talebinizin değerlendirilmesi için yetkili çalışanlarımız ve danışmanlarımız
            ile paylaşılabilir, yasal zorunluluk hâlinde yetkili kamu kurum ve kuruluşlarına aktarılabilir.
            Sitemizin barındırma ve form altyapısında kullanılan bulut hizmet sağlayıcılarının sunucuları yurt
            dışında bulunabileceğinden, bu kapsamdaki aktarımlar KVKK&apos;nın 9. maddesinde öngörülen şartlara
            uygun olarak gerçekleştirilir. Verileriniz pazarlama amacıyla üçüncü kişilerle paylaşılmaz.
          </p>

          <h2>Saklama süresi</h2>
          <p>
            Kişisel verileriniz, talebinizin değerlendirilmesi ve varsa aramızda kurulacak hizmet ilişkisinin
            gerektirdiği süre boyunca, ilgili mevzuatta öngörülen süreler saklı kalmak kaydıyla saklanır; bu
            sürelerin sona ermesiyle silinir, yok edilir veya anonim hâle getirilir.
          </p>

          <h2>KVKK&apos;nın 11. maddesi kapsamındaki haklarınız</h2>
          <ul>
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme</li>
            <li>İşlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
            <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
            <li>Eksik veya yanlış işlenmiş olması hâlinde düzeltilmesini isteme</li>
            <li>KVKK&apos;nın 7. maddesindeki şartlar çerçevesinde silinmesini veya yok edilmesini isteme</li>
            <li>Düzeltme, silme ve yok etme işlemlerinin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
            <li>Münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
            <li>Kanuna aykırı işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme</li>
          </ul>

          <h2>Başvuru yöntemi</h2>
          <p>
            Haklarınıza ilişkin taleplerinizi, Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ&apos;e
            uygun olarak; yukarıdaki adresimize yazılı olarak ya da daha önce bize bildirdiğiniz ve
            sistemimizde kayıtlı bulunan e-posta adresinizden <a href={`mailto:${SITE.email}`}>{SITE.email}</a>{" "}
            adresine iletebilirsiniz. Başvurunuz, niteliğine göre en kısa sürede ve en geç otuz gün içinde
            ücretsiz olarak sonuçlandırılır.
          </p>

          <h2>Çerezler ve ticari iletiler</h2>
          <p>
            İnternet sitemizde reklam veya takip amaçlı çerez kullanılmamaktadır. Önceden onayınız alınmadan
            tarafınıza ticari elektronik ileti gönderilmez.
          </p>
        </div>
      </section>
    </main>
  );
}
