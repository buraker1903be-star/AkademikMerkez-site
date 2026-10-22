import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { OPERATOR_NAME, SITE } from "@/lib/site";
import { alternatifler, yol } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "Akademik Merkez Privacy Notice: information on how your personal data is processed under KVKK.",
  alternates: alternatifler("/kvkk-aydinlatma-metni", "en"),
  robots: { index: true, follow: true },
};

export default function PrivacyNoticePage() {
  return (
    <main>
      <PageHero
        dil="en"
        crumbs={[{ name: "Privacy Notice", href: yol("en", "/kvkk-aydinlatma-metni") }]}
        eyebrow="Legal information"
        title="Privacy Notice"
        lede="Information provided under Article 10 of Law No. 6698 on the Protection of Personal Data (KVKK)."
      />

      <section className="section-sm">
        <div className="container prose">
          <p>
            This is an English translation provided for information; in case of any discrepancy, the{" "}
            <Link href="/kvkk-aydinlatma-metni" hrefLang="tr">Turkish version</Link> prevails.
          </p>

          <h2>Data controller</h2>
          <p>
            As {OPERATOR_NAME} (the &quot;Data Controller&quot;), the operator of the Akademik Merkez brand, we
            process the personal data you share with us through the akademikmerkez.com website, the &quot;Get a
            Quote&quot; form, email, telephone and WhatsApp in accordance with Law No. 6698 on the Protection of
            Personal Data (&quot;KVKK&quot;) and related legislation.
            {SITE.showLegalName && SITE.mersisNo && <> MERSİS No: {SITE.mersisNo}.</>} Contact:{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>, {SITE.address.street}, {SITE.address.postalCode}{" "}
            {SITE.address.district} / {SITE.address.city}, Türkiye.
          </p>

          <h2>Personal data processed</h2>
          <ul>
            <li>Identity data: first name and surname</li>
            <li>Contact data: telephone number and email address</li>
            <li>Request data: the service you are interested in and the content of your message</li>
            <li>During the service, only the working documents you choose to share</li>
          </ul>
          <p>
            Please do not share special categories of personal data such as health, religion or ethnic origin in
            the forms, nor your passwords for the e-Devlet (Turkish e-government), YÖKSİS or ÜAK systems; this
            information is never requested at any stage.
          </p>

          <h2>Purposes of processing</h2>
          <ul>
            <li>Evaluating your request and contacting you</li>
            <li>Planning a suitable consulting service and providing a quote</li>
            <li>Establishing and performing the service contract</li>
            <li>Fulfilling legal obligations and protecting rights in the event of a dispute</li>
          </ul>

          <h2>Method of collection and legal grounds</h2>
          <p>
            Your personal data is collected electronically through the form on our website, email, telephone and
            WhatsApp. It is processed on the legal grounds set out in Article 5(2) of KVKK: that processing is
            &quot;directly related to the establishment or performance of a contract&quot; (c), &quot;necessary for
            the data controller to fulfil its legal obligation&quot; (ç), and &quot;necessary for the legitimate
            interests of the data controller, provided that it does not harm the fundamental rights and freedoms
            of the data subject&quot; (f).
          </p>

          <h2>Transfer of personal data</h2>
          <p>
            Your personal data may be shared with our authorised employees and consultants to evaluate your
            request, and may be transferred to authorised public institutions and organisations where required by
            law. As the servers of the cloud service providers used for our website hosting and form
            infrastructure may be located abroad, such transfers are carried out in accordance with the conditions
            set out in Article 9 of KVKK. Your data is not shared with third parties for marketing purposes.
          </p>

          <h2>Retention period</h2>
          <p>
            Your personal data is retained for as long as required to evaluate your request and, where applicable,
            for the duration of any service relationship established between us, subject to the periods set out
            in the relevant legislation; at the end of these periods it is deleted, destroyed or anonymised.
          </p>

          <h2>Your rights under Article 11 of KVKK</h2>
          <ul>
            <li>To learn whether your personal data is processed and, if so, to request information about it</li>
            <li>To learn the purpose of processing and whether it is used in line with that purpose</li>
            <li>To know the third parties in Türkiye or abroad to whom it is transferred</li>
            <li>To request correction if it is incomplete or inaccurate</li>
            <li>To request its deletion or destruction within the framework of the conditions in Article 7 of KVKK</li>
            <li>To request that third parties to whom it was transferred be notified of correction, deletion or destruction</li>
            <li>To object to a result against you arising from analysis exclusively through automated systems</li>
            <li>To claim compensation for damage suffered due to unlawful processing</li>
          </ul>

          <h2>How to apply</h2>
          <p>
            You may submit requests regarding your rights, in accordance with the Communiqué on the Procedures and
            Principles of Application to the Data Controller, in writing to our address above or from an email
            address you have previously notified to us and that is registered in our system to{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. Your application will be concluded free of charge as
            soon as possible and within thirty days at the latest, depending on its nature.
          </p>

          <h2>Cookies, visit statistics and commercial messages</h2>
          <p>
            Our website does not use cookies for advertising or tracking purposes. To understand how our website is
            used, visit statistics are kept anonymously: the pages viewed, the source of the visit (e.g. a search
            engine or social media), approximate location at country and city level, device and browser type, and
            whether a form was submitted. For these statistics no cookie or similar identifier is stored on your
            device, your IP address is not retained and the information you type into form fields is not read;
            records are kept for at most 400 days and are processed on the infrastructure of our service provider
            ArvoOS. Commercial electronic messages are not sent to you without your prior consent.
          </p>
        </div>
      </section>
    </main>
  );
}
