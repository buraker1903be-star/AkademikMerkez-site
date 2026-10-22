import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Accordion from "@/components/Accordion";
import JsonLd from "@/components/JsonLd";
import Cta from "@/components/Cta";
import { faqSchema } from "@/lib/schema";
import { alternatifler, yol } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Frequently asked questions about Akademik Merkez's services, the analysis consulting process, confidentiality, YÖK and ÜAK regulations and our ethical consulting framework.",
  alternates: alternatifler("/sikca-sorulan-sorular", "en"),
};

const FAQS = [
  {
    q: "What exactly do your services cover?",
    a: "We provide consulting on methodology, statistical analysis, literature review, survey design, language editing, academic translation, reference and citation consistency, and defense preparation for theses, articles and associate professorship applications. On the analysis side, we offer quantitative analysis with SPSS, qualitative analysis with MAXQDA, and ANSYS and Python analysis consulting. All of our services are consulting and process support; we explain their scope in detail on our Ethical Principles page.",
  },
  {
    q: "Who carries out the analysis in analysis consulting?",
    a: "The analysis plan and steps are designed and carried out together with the researcher, and every step is explained with its rationale. The aim is for you to understand, reproduce and defend your analysis. Interpretation of the findings and the final text belong to the researcher.",
  },
  {
    q: "Are you affiliated with YÖK or ÜAK, and do you guarantee results?",
    a: "No. Akademik Merkez is an independent consultancy with no institutional affiliation to YÖK (Turkey's Council of Higher Education), ÜAK (Inter-University Board) or any university. We take into account the current regulations published by these institutions, but we do not guarantee acceptance, publication, graduation or academic success. Final control and responsibility rest with the researcher.",
  },
  {
    q: "Do I need to share my e-Devlet, YÖKSİS or ÜAK password?",
    a: "No. These passwords (for Turkey's e-government portal, the higher education information system and ÜAK) are never requested at any stage and should not be shared with anyone. Applications, uploads and submissions are made only by the researcher.",
  },
  {
    q: "Do I need to declare the consulting I received in my work?",
    a: "If the rules of your university or the journal require it, we recommend that you acknowledge the methodology, statistics, language editing or translation support you received in the acknowledgements or declarations section.",
  },
  {
    q: "What happens after I fill in the Get a Quote form?",
    a: "Your request reaches our team of experts and we usually contact you within 24 hours. Once you are matched with a suitable consultant, we create a process plan and timeline together.",
  },
  {
    q: "Are my information and my work kept confidential?",
    a: "Yes. All information and documents you share are kept confidential, used only to provide you with the service, and processed in accordance with the principles set out in our Privacy Notice.",
  },
  {
    q: "How are fees determined?",
    a: "The fee depends on the scope of the service, the length of the process and the nature of the work. After you fill in the Get a Quote form, we offer you a transparent, personalised quote in an initial consultation; no surprise extra fees are applied.",
  },
  {
    q: "How long does the process take?",
    a: "The duration depends on the type of service and the scope of the work. A clear timeline is shared in the process plan we prepare together after the initial consultation.",
  },
  {
    q: "Who are your consultants?",
    a: "We work with consultants who are experts in their fields and have academic experience in the relevant disciplines. The most suitable consultant is matched with you according to the subject of your request.",
  },
  {
    q: "How can I track my process?",
    a: "Once your request is created, you can view the status of your file at any time on our Track My File page using the tracking code sent to you.",
  },
  {
    q: "Do you only work with certain universities or departments?",
    a: "No. We work with undergraduate, master's and doctoral students from all universities in Türkiye and with academics preparing associate professorship applications, regardless of discipline.",
  },
];

export default function FaqPageEn() {
  return (
    <main>
      <JsonLd data={faqSchema(FAQS)} />
      <PageHero
        dil="en"
        crumbs={[{ name: "Frequently Asked Questions", href: yol("en", "/sikca-sorulan-sorular") }]}
        eyebrow="FAQ"
        title={
          <>
            Your questions, <span className="serif gold">clear answers.</span>
          </>
        }
        lede="The most common questions about our services, how the process works and confidentiality."
      />

      <section className="section-sm">
        <div className="container">
          <Accordion items={FAQS} />
          <p className="center" style={{ marginTop: 40, color: "var(--muted)" }}>
            Didn&apos;t find the answer you were looking for?{" "}
            <Link href={yol("en", "/iletisim")} className="link-arrow" style={{ fontSize: "inherit" }}>
              Get in touch with us
            </Link>
          </p>
        </div>
      </section>

      <Cta dil="en" />
    </main>
  );
}
