// Hizmetlerin İngilizce içeriği (22.10.2026). Türkçe asıl lib/services.ts;
// her İngilizce kayıt `trSlug` ile Türkçesine bağlı. Hizmet listesi
// değişirse (yeni hizmet, slug değişimi) bu dosya da güncellenmeli —
// lib/hizmetler.ts eşleşmeyen kaydı derleme sırasında yakalar.
import type { Category, Service } from "./services";

/** Türkçe slug → İngilizce slug. Adres eşlemesi (lib/i18n.ts) buradan okur. */
export const HIZMET_SLUG_EN: Record<string, string> = {
  "tez-makale-yontem-danismanligi": "thesis-and-article-methodology-consulting",
  "literatur-tarama-danismanligi": "literature-review-consulting",
  "anket-tasarimi-raporlama": "survey-design-and-reporting",
  "docentlik-basvuru-danismanligi": "associate-professorship-application-consulting",
  "sunum-juri-hazirlik": "presentation-and-defense-preparation",
  "istatistiksel-analiz-danismanligi": "statistical-analysis-consulting",
  "spss-analizi": "spss-analysis",
  "maxqda-analizi": "maxqda-analysis",
  "ansys-analizi": "ansys-analysis",
  "python-analizi": "python-data-analysis",
  "akademik-dil-imla-editorlugu": "academic-editing-and-proofreading",
  "akademik-ceviri": "academic-translation",
  "kaynakca-atif-uyum-danismanligi": "reference-and-citation-consulting",
};

export const categoriesEn: Category[] = [
  {
    key: "tez",
    title: "Thesis and Academic Process",
    short: "From research design and literature to surveys, associate professorship files and defense presentations.",
    description:
      "Methodological and process-focused consulting at the strategic steps of the academic journey, from framing the research question to the defense presentation and the associate professorship application file.",
    deliverables: [
      "A personalised process plan and timeline",
      "Checklists and written feedback",
      "Meeting notes and action items",
      "Review against your institution's guidelines",
    ],
  },
  {
    key: "analiz",
    title: "Analysis Services",
    short: "Quantitative analysis with SPSS, qualitative analysis with MAXQDA, numerical work with ANSYS and Python.",
    description:
      "From quantitative and qualitative analysis to engineering simulation: instructive consulting on choosing the method, checking assumptions and interpreting findings in academic language.",
    deliverables: [
      "Analysis plan and methodological rationale",
      "Annotated analysis and project files",
      "Table and figure check against APA 7 or your institution's guide",
      "Guidance notes to help you interpret your findings",
    ],
  },
  {
    key: "dil",
    title: "Language and Editing",
    short: "Academic clarity, accurate terminology and consistent citations in Turkish and English texts.",
    description:
      "Editing and consulting on language, style, translation and reference consistency, staying true to the meaning of the text and the author's voice.",
    deliverables: [
      "File with tracked changes",
      "Terminology and style notes",
      "Reference consistency report",
      "Final check against your institution's template",
    ],
  },
];

/* İçerik: her Türkçe hizmetin İngilizcesi; slug İngilizce, trSlug Türkçe. */
export const servicesEn: (Service & { trSlug: string })[] = [
  // ───────────────────────── THESIS AND ACADEMIC PROCESS ─────────────────────────
  {
    slug: "thesis-and-article-methodology-consulting",
    trSlug: "tez-makale-yontem-danismanligi",
    category: "tez",
    title: "Thesis and Article Methodology Consulting",
    short: "Consulting on research design, choice of method and the academic process.",
    description:
      "From sharpening your research question to choosing the right method, and from your chapter plan to the defense, we stand by you throughout your academic roadmap. We do not write the work for you; we provide methodological and strategic support so that you can design your research soundly and complete it on time.",
    tools: ["Zotero", "Mendeley", "Microsoft Word"],
    bullets: [
      "Clarifying the research question and hypotheses",
      "Choosing a suitable research method and design",
      "Preparing a chapter plan and timeline",
      "Support in preparing for supervisor and committee processes",
    ],
    examples: [
      "Checking the methodological consistency of a master's thesis proposal",
      "Preparing an alignment matrix of research questions, methods and analyses",
      "Process planning ahead of a thesis monitoring committee meeting",
      "A publication plan for turning a thesis into journal articles",
    ],
    audience: "Undergraduate, master's and doctoral students",
    faqs: [
      {
        q: "I have not chosen my thesis topic yet. Can I get support at this stage?",
        a: "Yes. We evaluate possible topics together in terms of your interests, gaps in the literature and feasibility, and offer a methodological framework to help you turn them into a researchable question. The choice of topic and the final decision rest with you and your thesis supervisor.",
      },
      {
        q: "Can you write my thesis for me?",
        a: "No. In line with our ethical principles and the regulations, we do not prepare theses, articles or assignments on anyone's behalf. Through methodology, analysis, language and process consulting, we help you complete your own work to a high standard.",
      },
    ],
  },
  {
    slug: "literature-review-consulting",
    trSlug: "literatur-tarama-danismanligi",
    category: "tez",
    title: "Literature Review Consulting",
    short: "Support in finding current, relevant and reliable sources.",
    description:
      "We design a systematic search strategy so that you can reach current sources directly relevant to your study without getting lost in the literature. We also guide you on reference management and citation style.",
    tools: ["Web of Science", "Scopus", "Google Scholar", "TR Dizin", "YÖK National Thesis Center", "Zotero"],
    bullets: [
      "Systematic search strategies across databases",
      "Identifying current, high-quality sources",
      "Consulting on reference and citation styles (APA 7 etc.)",
      "Building a literature map",
    ],
    examples: [
      "A literature map covering the past five years of research in the field",
      "A comparison table of theories for the conceptual framework",
      "Searching for similar studies in the YÖK (Council of Higher Education) National Thesis Center",
      "Setting up a Zotero library and tagging system",
    ],
    audience: "Anyone working on a thesis, article or research project",
    faqs: [
      {
        q: "Which databases should I search?",
        a: "It depends on your field: PubMed for health sciences, Web of Science and Scopus for the social sciences, and TR Dizin and the YÖK National Thesis Center for Turkish-language literature. We set out a database strategy tailored to you.",
      },
      {
        q: "How can I access articles I do not have access to?",
        a: "We guide you through legal routes such as your university library's remote access, open-access versions, institutional repositories and contacting the authors.",
      },
    ],
  },
  {
    slug: "survey-design-and-reporting",
    trSlug: "anket-tasarimi-raporlama",
    category: "tez",
    title: "Survey Design and Reporting Consulting",
    short: "Valid, reliable survey design and reporting of results.",
    description:
      "We advise on designing surveys and scales that fit your research question and offer high validity and reliability. We also support you in presenting the collected data in line with academic reporting standards.",
    tools: ["Google Forms", "Qualtrics", "LimeSurvey", "SPSS"],
    bullets: [
      "Consulting on scale and survey item design",
      "Methodological support for validity and reliability assessment",
      "Planning the data collection process",
      "Presenting findings in line with academic reporting standards",
    ],
    examples: [
      "Structuring an employee engagement survey",
      "A sampling plan for a service satisfaction study",
      "Setting up an online survey with conditional questions",
      "Item analysis using pilot data",
    ],
    audience: "Students and institutions conducting field research",
    faqs: [
      {
        q: "Do you support preparing survey forms for an ethics committee application?",
        a: "Yes. We advise on the methodological consistency of the informed consent form, data collection instrument and research protocol required for an ethics committee application. The application and declarations are made by the researcher.",
      },
      {
        q: "How many participants do I need to reach?",
        a: "The required sample size is calculated from the population size, the analysis method and the accepted margin of error. We do the calculation together and explain the reasoning behind it.",
      },
    ],
  },
  {
    slug: "associate-professorship-application-consulting",
    trSlug: "docentlik-basvuru-danismanligi",
    category: "tez",
    title: "Associate Professorship Application File Consulting",
    short: "Application file support based on the current criteria announced by ÜAK.",
    description:
      "For your associate professorship (doçentlik) application, we review the current criteria published by ÜAK (Inter-University Board) and advise on classifying your publications, citations and activities and on organising your file. The final declaration, accuracy of documents, scoring and responsibility for the application rest with the candidate; no acceptance or outcome is guaranteed.",
    tools: ["Web of Science", "Scopus", "TR Dizin", "Excel"],
    bullets: [
      "A file checklist based on ÜAK criteria",
      "Support in organising lists of publications, citations and activities",
      "Checking the arrangement of supporting documents",
      "Consulting on field indexes and the scoring table",
    ],
    examples: [
      "Checking for missing points against the criteria of the relevant field",
      "Classifying the citation list by source type",
      "Listing projects, thesis supervision and teaching activities",
      "A pre-application consistency check of the file",
    ],
    audience: "Academics preparing to apply for associate professorship",
    faqs: [
      {
        q: "Which period's criteria do you use?",
        a: "We use the current criteria in force published by ÜAK for the application period you are applying in. The final eligibility assessment is made by ÜAK and the relevant committees.",
      },
      {
        q: "Do I need to share my e-Devlet or ÜAK system password?",
        a: "No. The associate professorship application is submitted through the ÜAK system by the candidate only. Your e-Devlet (Turkish e-Government), YÖKSİS or ÜAK system passwords are never requested at any stage and should not be shared with anyone.",
      },
    ],
  },
  {
    slug: "presentation-and-defense-preparation",
    trSlug: "sunum-juri-hazirlik",
    category: "tez",
    title: "Presentation and Defense Preparation Consulting",
    short: "Confident preparation for your thesis defense and committee presentation.",
    description:
      "We help you prepare for your thesis defense or committee presentation by anticipating likely questions and strengthening your presentation. Our support ranges from slide design to delivery technique.",
    tools: ["PowerPoint", "Keynote", "Canva"],
    bullets: [
      "Consulting on presentation content and slide flow",
      "Preparing for likely committee questions",
      "Delivery technique and time management",
      "Rehearsal and feedback session",
    ],
    examples: [
      "Presentation flow for a doctoral thesis defense",
      "A rehearsal session on master's committee questions",
      "Preparing a conference paper presentation",
      "A progress report presentation for a thesis monitoring committee",
    ],
    audience: "Students with an upcoming defense or committee presentation",
    faqs: [
      {
        q: "Are rehearsal sessions held online?",
        a: "Yes. Rehearsal sessions can be held online; we rehearse your presentation under conditions similar to the real defense and give detailed feedback.",
      },
      {
        q: "What questions might the committee ask?",
        a: "Questions usually focus on the choice of method, the sample, limitations, the contribution to the literature and the interpretation of findings. We work on your answers together using a list of likely questions specific to your thesis.",
      },
    ],
  },

  // ───────────────────────── ANALYSIS SERVICES ─────────────────────────
  {
    slug: "statistical-analysis-consulting",
    trSlug: "istatistiksel-analiz-danismanligi",
    category: "analiz",
    title: "Statistical Analysis Consulting",
    short: "Methodological support for data analysis with SPSS, R and Python.",
    description:
      "We provide methodological consulting so that you analyse your data with the right tests under the right assumptions. Working together in SPSS, R and Python, we explain which analysis is appropriate and why, and how the results should be interpreted.",
    tools: ["SPSS", "R", "Python", "Jamovi", "JASP"],
    bullets: [
      "Choosing appropriate statistical tests and models",
      "Analysis consulting in SPSS / R / Python",
      "Interpreting results in academic language",
      "Checking tables and figures against APA or your institution's guide",
    ],
    examples: [
      "Examining the relationship between two scale scores with regression analysis",
      "Comparing satisfaction scores across demographic variables",
      "Repeated-measures analysis in a pre-test–post-test experimental design",
      "Descriptive and inferential analysis of Likert-type survey data",
    ],
    audience: "All students and academics conducting quantitative research",
    faqs: [
      {
        q: "I do not know which statistical test to use. Can you help?",
        a: "Yes. By reviewing your research question, variable types and sample structure together, we identify the appropriate test or model with its rationale. We explain the choice so that you can defend it in your methods chapter.",
      },
      {
        q: "Will I be able to interpret the results myself?",
        a: "That is exactly our aim. We explain every step with its rationale and share guidance notes for interpretation. Turning the findings into text and the final interpretation are the researcher's responsibility.",
      },
    ],
  },
  {
    slug: "spss-analysis",
    trSlug: "spss-analizi",
    category: "analiz",
    title: "Quantitative Analysis Consulting with SPSS",
    short: "Methodological consulting on descriptive, comparative and relational analyses with IBM SPSS.",
    description:
      "We offer methodological consulting for quantitative research conducted in IBM SPSS Statistics, from data preparation to reporting. We identify suitable tests together, carry out the analysis steps with you and show how to translate the output into academic language, so that you understand your analysis and can defend it.",
    tools: ["IBM SPSS Statistics", "PROCESS Macro", "Jamovi", "JASP"],
    bullets: [
      "Dataset preparation, coding and missing-data checks",
      "Descriptive statistics, cross-tabulation and chi-square analyses",
      "t-tests, ANOVA and non-parametric tests",
      "Correlation and regression analyses",
      "Mediation and moderation analysis with the PROCESS Macro",
    ],
    examples: [
      "Mediation analysis of the relationship between work stress and burnout",
      "Comparing students' digital literacy levels",
      "Logistic regression of the factors predicting purchase intention",
      "Differences in scale scores by gender and age group",
    ],
    audience: "Thesis students and researchers conducting quantitative research with SPSS",
    isNew: true,
    faqs: [
      {
        q: "I do not have an SPSS licence. Can we still work together?",
        a: "Yes. If you prefer, we can also guide you through the same analyses in Jamovi or JASP, which are free alternatives; we also recommend checking whether your university provides an SPSS licence.",
      },
      {
        q: "Do you support mediation and moderation analyses?",
        a: "Yes. We provide methodological consulting on setting up mediation and moderation models with the PROCESS Macro and on interpreting the bootstrap results.",
      },
    ],
  },
  {
    slug: "maxqda-analysis",
    trSlug: "maxqda-analizi",
    category: "analiz",
    title: "Qualitative Analysis Consulting with MAXQDA",
    short: "Consulting on coding and thematic analysis of interview, focus group and document data.",
    description:
      "We offer methodological consulting so that you can analyse your qualitative data systematically with MAXQDA. From project setup to building the code system, and from theme maps to reliability work, we plan every stage together and run the process with you while teaching the logic of coding.",
    tools: ["MAXQDA", "MAXMaps", "MAXQDA Analytics Pro"],
    bullets: [
      "Project setup, document groups and variable definitions",
      "Building inductive and deductive code systems",
      "Methodological support for thematic and content analysis",
      "Visualisation with the code matrix, code relations and MAXMaps",
      "Inter-coder agreement (reliability) work",
    ],
    examples: [
      "Thematic analysis of semi-structured interviews with teachers",
      "Phenomenological analysis of healthcare workers' professional experiences",
      "Document analysis of institutional strategic plans",
      "A hierarchy of codes, sub-themes and themes in focus group data",
    ],
    audience: "Researchers conducting qualitative research in education, health, the social sciences and business",
    isNew: true,
    faqs: [
      {
        q: "My transcripts are not ready yet. Is support available at this stage too?",
        a: "Yes. We plan transcription rules, anonymisation and a MAXQDA-friendly file format together. The confidentiality of your interview recordings is protected under KVKK, Turkey's personal data protection law.",
      },
      {
        q: "How do we ensure trustworthiness in qualitative analysis?",
        a: "We plan credibility strategies such as inter-coder agreement, expert review, member checking and an audit trail to suit your research design.",
      },
    ],
  },
  {
    slug: "ansys-analysis",
    trSlug: "ansys-analizi",
    category: "analiz",
    title: "ANSYS Analysis Consulting",
    short: "Consulting on structural, thermal, modal and flow analyses with ANSYS Workbench.",
    description:
      "We offer methodological consulting so that you can model your engineering problems numerically in ANSYS Workbench. From geometry preparation to mesh quality, from boundary conditions to convergence checks and to validating results against analytical or experimental data, we design every step together and explain the reasoning behind it.",
    tools: ["ANSYS Workbench", "ANSYS Mechanical", "ANSYS Fluent", "SpaceClaim"],
    bullets: [
      "Static structural, modal and buckling analyses",
      "Steady-state and transient heat transfer analyses",
      "Flow and heat transfer (CFD) analyses with ANSYS Fluent",
      "Mesh independence studies and convergence checks",
      "Validating results against analytical solutions or the literature",
    ],
    examples: [
      "Determining natural frequencies of a composite beam through static and modal analysis",
      "Thermal analysis of a heat sink on an electronic board",
      "Stress analysis of a pressure vessel and safety factor assessment",
      "Flow and heat transfer analysis of a shell-and-tube heat exchanger",
    ],
    audience: "Students and researchers in mechanical, civil, aerospace, automotive and energy engineering",
    isNew: true,
    faqs: [
      {
        q: "Can we work with the ANSYS Student version?",
        a: "Yes. We design the model with the node and element limits of the Student version in mind. For larger models, we recommend using your university's licence.",
      },
      {
        q: "How can I be sure my simulation results are correct?",
        a: "We assess the reliability of the results together through a mesh independence study, convergence criteria and, where possible, comparison with analytical solutions or experimental data from the literature. These steps also strengthen your methods chapter.",
      },
    ],
  },
  {
    slug: "python-data-analysis",
    trSlug: "python-analizi",
    category: "analiz",
    title: "Data Analysis Consulting with Python",
    short: "Consulting on reproducible data analysis with pandas, NumPy, SciPy and statsmodels.",
    description:
      "We offer methodological consulting on data cleaning, transformation, statistical analysis and visualisation in Python. Analyses are built together in annotated Jupyter Notebooks, so you can understand, defend and reproduce every step.",
    tools: ["Python", "pandas", "NumPy", "SciPy", "statsmodels", "Matplotlib", "Jupyter"],
    bullets: [
      "Organising large and messy datasets with pandas",
      "Exploratory data analysis and outlier checks",
      "Hypothesis tests and regression models with SciPy and statsmodels",
      "Publication-quality figures with Matplotlib and Seaborn",
      "Annotated notebooks and a reproducible project structure",
    ],
    examples: [
      "Air quality trend analysis from open municipal data",
      "Filtering and statistical summaries of sensor data",
      "Cleaning survey data in Python and comparative analysis",
      "Reporting indicators that change over time with charts",
    ],
    audience: "Researchers using Python in engineering, the natural sciences, health and the social sciences",
    isNew: true,
    faqs: [
      {
        q: "I do not know Python. Can we still work together?",
        a: "Yes. The code is explained line by line; if you wish, we can work through the basics of Python and pandas together in one-to-one sessions. The goal is for you to understand and defend your analysis.",
      },
      {
        q: "Which environment do we work in?",
        a: "We work in Jupyter Notebook or in Google Colab, which requires no installation, together with reproducible environment information.",
      },
    ],
  },

  // ───────────────────────── LANGUAGE AND EDITING ─────────────────────────
  {
    slug: "academic-editing-and-proofreading",
    trSlug: "akademik-dil-imla-editorlugu",
    category: "dil",
    title: "Academic Editing and Proofreading",
    short: "Language, spelling and flow editing for Turkish and English texts.",
    description:
      "Without changing the meaning of your text, we review it for grammar, spelling, academic style and flow. Our aim is to bring out your own voice more clearly and in line with academic standards.",
    tools: ["Microsoft Word (track changes)", "TDK Turkish Spelling Guide", "APA 7"],
    bullets: [
      "Grammar and spelling editing",
      "Consistency of academic style and terminology",
      "Suggestions on paragraph and chapter flow",
      "Support for Turkish and English texts",
    ],
    examples: [
      "Reviewing a thesis against the TDK (Turkish Language Association) spelling rules",
      "Language check of an English article for submission to an international journal",
      "Revision after a reviewer's request for language editing",
      "Academic style check of a conference abstract",
    ],
    audience: "Anyone with a thesis, article, presentation or report",
    faqs: [
      {
        q: "Will editing change the content of my text?",
        a: "No. We edit language, spelling and style without changing the meaning or the scientific content. All changes are marked so they can be tracked, and you decide which ones to accept.",
      },
      {
        q: "Do I need to acknowledge the editing support I received?",
        a: "If your institution's or the journal's rules require it, we recommend acknowledging the language editing support in the acknowledgements section.",
      },
    ],
  },
  {
    slug: "academic-translation",
    trSlug: "akademik-ceviri",
    category: "dil",
    title: "Academic Translation",
    short: "Turkish–English academic translation.",
    description:
      "We translate your articles, abstracts, thesis chapters and academic correspondence from Turkish into English and from English into Turkish, working with translators who are familiar with the terminology of your field.",
    tools: ["Microsoft Word", "SDL Trados", "memoQ"],
    bullets: [
      "Translation of articles and thesis chapters",
      "Abstract translation",
      "Translation of academic correspondence and presentations",
      "Checking translations for field-specific terminology",
    ],
    examples: [
      "Translating a Turkish article into English for an international journal",
      "English translation of a thesis abstract",
      "Support with the translation–back-translation process for scale items",
      "Translation of a conference presentation and poster",
    ],
    audience: "Researchers involved in international publication and application processes",
    faqs: [
      {
        q: "Which fields do you translate in?",
        a: "We work across a wide range of fields, particularly health, engineering, the social sciences, education and economics, with translators who know the terminology of each field.",
      },
      {
        q: "Is there a check after translation?",
        a: "Yes. Every translation goes through a second check for terminology consistency and academic style.",
      },
    ],
  },
  {
    slug: "reference-and-citation-consulting",
    trSlug: "kaynakca-atif-uyum-danismanligi",
    category: "dil",
    title: "Reference and Citation Consistency Consulting",
    short: "Support with references and citations that follow APA, MLA and institutional templates.",
    description:
      "We provide consulting to ensure that the citations and reference list in your work fully comply with the style your institution requires (APA 7, MLA, Chicago, etc.), and are complete and consistent. Together we check that in-text citations match the reference list exactly, follow the formatting rules and have all required fields entered correctly.",
    tools: ["Zotero", "Mendeley", "EndNote"],
    bullets: [
      "Checking compliance with the citation style your institution requires (APA 7, MLA, Chicago, etc.)",
      "Consistency between in-text citations and the reference list",
      "Support using reference managers (Zotero, Mendeley, etc.)",
      "Completing missing or incorrect reference entries",
    ],
    examples: [
      "An APA 7 consistency check of a comprehensive doctoral thesis",
      "Citation order in a thesis using a numbered citation system",
      "Converting between different citation styles",
      "Setting up a shared reference library with Zotero",
    ],
    audience: "Anyone who wants a final check on their references before submission",
    faqs: [
      {
        q: "Can I automate my reference list?",
        a: "Yes. We help you set up Zotero or Mendeley integration with Word so that in-text citations and the reference list update automatically.",
      },
      {
        q: "Can I have only certain chapters checked?",
        a: "Yes. The scope is set according to your needs; a check can cover a single chapter, an article or the entire thesis.",
      },
    ],
  },
];
