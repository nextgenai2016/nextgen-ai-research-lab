import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { contact } from "@/data/contact";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Open Positions",
  description: `Ph.D., undergraduate research, and collaboration opportunities at ${site.name}.`,
};

const researchAreas = [
  "Artificial Intelligence & Machine Learning",
  "Large Language Models & Generative AI",
  "AI for Cybersecurity",
  "Trustworthy, Explainable & Responsible AI",
  "Multimodal AI & Intelligent Agents",
  "AI for Healthcare",
  "AI for Education",
  "AI for Next-Generation Wireless Systems",
];

const qualifications = [
  "A strong academic background in Computer Science, Computer Engineering, Electrical Engineering, Mathematics, Data Science, or a related discipline.",
  "Strong programming skills in Python, C/C++, Java, or similar languages.",
  "Knowledge of artificial intelligence, machine learning, or data science.",
  "Experience with PyTorch, TensorFlow, Hugging Face, or related tools is a plus.",
  "Excellent analytical, problem-solving, and communication skills.",
  "A strong motivation to conduct original research and contribute to the scientific community.",
];

const phdMaterials = [
  "Curriculum Vitae (CV)",
  "Academic transcripts (unofficial copies are acceptable)",
  "A brief statement of research interests",
  "Optional: publications, GitHub profile, portfolio, or other supporting materials",
];

const undergraduateOpportunities = [
  "Contribute to peer-reviewed publications",
  "Present research at regional and international conferences",
  "Develop open-source software and research prototypes",
  "Gain valuable experience for graduate school or research careers",
];

const undergraduateMaterials = [
  "Resume or CV",
  "Unofficial transcript",
  "A brief statement describing your research interests and career goals",
  "Optional: GitHub profile or portfolio",
];

function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-6 text-zinc-700 sm:text-base">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-700" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function EmailButton({ subject, label }: { subject: string; label: string }) {
  return (
    <a
      href={`mailto:${contact.email}?subject=${encodeURIComponent(subject)}`}
      className="inline-flex items-center justify-center rounded-full bg-sky-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900"
    >
      {label}
      <span aria-hidden="true" className="ml-2">
        →
      </span>
    </a>
  );
}

export default function OpenPositionsPage() {
  return (
    <Container className="pb-20 pt-10 sm:pb-28 sm:pt-16 min-[1920px]:pt-24">
      <div className="mx-auto max-w-6xl">
        <header className="relative overflow-hidden rounded-[2rem] bg-sky-950 px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-sky-300/15"
          />
          <div
            aria-hidden="true"
            className="absolute -right-10 -top-10 h-52 w-52 rounded-full border border-sky-300/15"
          />
          <div className="relative max-w-3xl">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-sky-300">
              Join the lab
            </p>
            <h1 className="mt-5 font-serif text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              Open Positions
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-sky-50/85 sm:text-lg">
              Thank you for your interest in the TCU NextGen AI Lab. We are always looking for
              talented, motivated, and curious students who are passionate about advancing
              artificial intelligence and developing technologies that make a positive societal
              impact.
            </p>
          </div>
        </header>

        <section className="py-14 sm:py-20" aria-labelledby="research-areas-title">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <div>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-sky-800">
                What we explore
              </p>
              <h2
                id="research-areas-title"
                className="mt-4 font-serif text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl"
              >
                Research with real-world impact
              </h2>
              <p className="mt-4 text-base leading-7 text-zinc-600">
                Our work connects foundational AI research with urgent challenges in security,
                health, education, and communication systems.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {researchAreas.map((area, index) => (
                <div
                  key={area}
                  className="flex min-h-20 items-center gap-4 rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4"
                >
                  <span className="font-mono text-xs text-sky-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium leading-5 text-zinc-800">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="space-y-6">
          <section
            id="phd-students"
            className="scroll-mt-24 rounded-[2rem] border border-zinc-200 bg-white p-6 sm:p-10 lg:p-12"
          >
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <div>
                <p className="font-mono text-xs text-sky-700">01 / Ph.D.</p>
                <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
                  Prospective Ph.D. Students
                </h2>
                <p className="mt-5 text-base leading-7 text-zinc-700">
                  We welcome applications from highly motivated students interested in pursuing a
                  <strong className="font-semibold text-zinc-950">
                    {" "}Ph.D. in Computer Science at Texas Christian University
                  </strong>
                  .
                </p>
                <p className="mt-4 text-sm leading-6 text-zinc-600">
                  Previous research experience, publications, or industry research experience are
                  beneficial, but not required.
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-950">
                    Preferred qualifications
                  </h3>
                  <div className="mt-5">
                    <CheckList items={qualifications} />
                  </div>
                </div>
                <div className="rounded-2xl bg-sky-50 p-6 sm:p-8">
                  <h3 className="text-xl font-semibold text-zinc-950">How to apply</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-700 sm:text-base">
                    Apply through the TCU Ph.D. in Computer Science admissions process. If your
                    interests align with the lab, email us with:
                  </p>
                  <div className="mt-5">
                    <CheckList items={phdMaterials} />
                  </div>
                  <p className="mt-5 text-sm text-zinc-600">
                    Subject: <strong>Prospective Ph.D. Student – Your Name</strong>
                  </p>
                  <div className="mt-6">
                    <EmailButton
                      subject="Prospective Ph.D. Student – Your Name"
                      label="Email your application"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="undergraduate-research"
            className="scroll-mt-24 rounded-[2rem] bg-zinc-950 p-6 text-white sm:p-10 lg:p-12"
          >
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <div>
                <p className="font-mono text-xs text-sky-400">02 / Undergraduate</p>
                <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
                  Undergraduate Research Opportunities
                </h2>
                <p className="mt-5 text-base leading-7 text-zinc-300">
                  Motivated undergraduate students can gain hands-on experience while working
                  closely with faculty and Ph.D. students on cutting-edge projects.
                </p>
                <p className="mt-4 text-sm leading-6 text-zinc-400">
                  Prior research experience is not required. We value curiosity, initiative,
                  creativity, strong programming skills, and a willingness to learn.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-sky-300">
                    What you can do
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {undergraduateOpportunities.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-6 text-zinc-300">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-sky-300">
                    What to send
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {undergraduateMaterials.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-6 text-zinc-300">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:${contact.email}?subject=${encodeURIComponent("Undergraduate Research Inquiry – Your Name")}`}
                    className="mt-6 inline-flex items-center text-sm font-semibold text-sky-300 transition hover:text-white"
                  >
                    Contact the lab <span className="ml-2" aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section
            id="visiting-collaborators"
            className="scroll-mt-24 rounded-[2rem] border border-zinc-200 bg-zinc-50 p-6 sm:p-10 lg:p-12"
          >
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-16">
              <div className="max-w-3xl">
                <p className="font-mono text-xs text-sky-700">03 / Collaborate</p>
                <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
                  Visiting Students & Research Collaborators
                </h2>
                <p className="mt-5 text-base leading-7 text-zinc-700">
                  We welcome inquiries from visiting Ph.D. students, undergraduate researchers,
                  faculty collaborators, and visiting scholars whose interests align with the TCU
                  NextGen AI Lab. Please include your CV and a brief description of your research
                  background and proposed collaboration.
                </p>
              </div>
              <div className="lg:text-right">
                <EmailButton subject="Research Collaboration Inquiry" label="Start a conversation" />
                <p className="mt-3 text-sm text-zinc-500">{contact.email}</p>
              </div>
            </div>
          </section>
        </div>

        <footer className="mx-auto max-w-3xl py-12 text-center sm:py-16">
          <p className="text-sm leading-6 text-zinc-500">
            We receive many inquiries throughout the year. While we carefully review every
            application, we may only be able to respond to applicants whose interests and
            backgrounds closely align with current research opportunities.
          </p>
        </footer>
      </div>
    </Container>
  );
}
