import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Cta from "@/components/Cta";
import { alternatifler, yol } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Our Ethical Principles",
  description:
    "AkademikMerkez's ethical principles on academic integrity, compliance with YÖK and ÜAK regulations, acknowledgement of support, confidentiality and transparency.",
  alternates: alternatifler("/etik-ilkelerimiz", "en"),
};

const PRINCIPLES = [
  {
    t: "A consulting-based service model",
    d: "All services offered by AkademikMerkez are consulting services that support the student or academic in carrying out their own research, writing or application process. We never produce a thesis, article, assignment or application file from start to finish and deliver it on a client's behalf.",
  },
  {
    t: "Compliance with YÖK, ÜAK and institutional rules",
    d: "When defining the scope of consulting, we take into account the regulations of YÖK (Turkey's Council of Higher Education) on research and publication ethics, the current thesis writing guide and ethical rules of the relevant university, and, for associate professorship applications, the associate professorship regulations and application requirements in force at ÜAK (Inter-University Board). AkademikMerkez has no institutional affiliation with YÖK or ÜAK and does not guarantee that an application will be accepted or that any academic outcome will be achieved. The content, originality, declarations and submission of the work are the researcher's responsibility.",
  },
  {
    t: "Transparency in analysis",
    d: "In statistical, qualitative and engineering analyses, every step is explained with its rationale and carried out together with the researcher. The aim is for the researcher to understand, reproduce and defend their analysis. Interpretation of the findings and the final text belong to the researcher.",
  },
  {
    t: "Acknowledgement of support",
    d: "If your university or the journal you are publishing in requires it, we recommend that you acknowledge the methodology, statistics, language editing or translation support you received in the acknowledgements or declarations section. Clearly declaring the support received is one of the core principles of research and publication ethics.",
  },
  {
    t: "Account and password security",
    d: "We never ask for passwords to e-Devlet (Turkey's e-government portal), YÖKSİS (the higher education information system), ÜAK, university information systems or journal submission systems. Applications, uploads and submissions are made only by the researcher.",
  },
  {
    t: "Confidentiality",
    d: "All information and documents you share with us are kept confidential, used only to provide you with the service, and processed in accordance with the principles set out in our Privacy Notice.",
  },
  {
    t: "Transparency",
    d: "The scope, duration and fee of every consulting engagement are agreed in advance; no surprise fees or changes of scope are applied.",
  },
];

export default function EthicsPageEn() {
  return (
    <main>
      <PageHero
        dil="en"
        crumbs={[{ name: "Our Ethical Principles", href: yol("en", "/etik-ilkelerimiz") }]}
        eyebrow="Our ethical principles"
        title={
          <>
            Academic integrity is <span className="serif gold">not negotiable.</span>
          </>
        }
        lede="Our commitment to academic integrity is the foundation of our service model. We openly share how we work and what we do not accept."
      />

      <section className="section-sm">
        <div className="container">
          <div className="principles">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.t} className="principle">
                <div className="step-n">0{i + 1}</div>
                <div>
                  <h2>{p.t}</h2>
                  <p>{p.d}</p>
                </div>
              </Reveal>
            ))}
            <Reveal className="principle dark">
              <div className="step-n">✕</div>
              <div>
                <h2>Requests we do not accept</h2>
                <p>
                  We do not accept requests to prepare a thesis, article, assignment, project or application file
                  on someone&apos;s behalf; to sit an exam or make an application or submission on someone else&apos;s
                  behalf; to fabricate, falsify or alter data; to create fake sources or citations; to conceal
                  plagiarism or mislead similarity-detection systems; or to obtain unjustified authorship. Editing,
                  translation, analysis and methodology support are never provided in a way that removes the
                  researcher&apos;s meaningful contribution and final control.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Cta dil="en" />
    </main>
  );
}
