import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ProfileLinks } from "@/components/team/ProfileLinks";
import { TeamPhoto } from "@/components/team/TeamPhoto";
import { newsItems, type NewsItem } from "@/data/news";
import { principalInvestigator } from "@/data/team";

const latestNews = newsItems.slice(0, 4);
const labDirectorBioParagraphs = principalInvestigator.bio.split("\n\n");

const categoryLabels: Record<NewsItem["category"], string> = {
  Publication: "Paper",
  Award: "Award",
  Talk: "Talk",
  Media: "Media",
  Event: "Event",
  Update: "Update",
};

const sections = [
  {
    eyebrow: "Who We Are",
    body:
      "NextGen AI Research Lab at Texas Christian University studies trustworthy artificial intelligence, cybersecurity, and intelligent systems that can support real people in high-stakes settings.",
  },
  {
    eyebrow: "What We Do",
    body:
      "We design and evaluate AI systems for education, healthcare, security, and next-generation networks, combining rigorous experimentation with practical deployment goals.",
  },
  {
    eyebrow: "Why It Matters",
    body:
      "As AI becomes more capable, our work focuses on systems that improve human performance, expose risk, and make emerging technologies more useful, reliable, and accountable.",
  },
  {
    eyebrow: "Live & Emerging",
    body:
      "Current projects explore agentic RAG, AI-powered tutoring tools, phishing detection, adversarial LLMs, medical AI, and 5G/6G network intelligence.",
  },
];

function NewsPreview({ item }: { item: NewsItem }) {
  return (
    <article className="border-b border-zinc-200 py-5 last:border-b-0">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 shrink-0 bg-sky-700 px-2 py-1 font-mono text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-white">
          {categoryLabels[item.category]}
        </span>
        <div className="min-w-0">
          <h2 className="text-sm font-semibold leading-snug tracking-tight text-zinc-950">
            {item.title}
          </h2>
          <p className="mt-1 font-mono text-[0.65rem] tracking-wide text-zinc-500">
            {item.date}
          </p>
        </div>
      </div>
    </article>
  );
}

function LabDirector() {
  return (
    <section className="mx-auto mt-16 max-w-5xl border-y border-zinc-200 py-10 min-[1920px]:max-w-6xl">
      <p className="font-mono text-[0.63rem] font-semibold uppercase tracking-[0.28em] text-sky-800">
        Lab Director
      </p>

      <div className="mt-6 grid gap-8 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-12">
        <TeamPhoto
          name={principalInvestigator.name}
          alt={principalInvestigator.name}
          imageSrc={principalInvestigator.imageSrc}
          size="md"
        />

        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
            {principalInvestigator.name}
          </h2>
          <p className="mt-2 text-base font-medium leading-relaxed text-zinc-800">
            {principalInvestigator.title}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-zinc-600">
            {principalInvestigator.department}
          </p>
          <p className="text-sm leading-relaxed text-zinc-600">
            {principalInvestigator.affiliation}, Fort Worth, TX, USA
          </p>

          <dl className="mt-5 grid gap-3 text-sm leading-relaxed text-zinc-600">
            <div>
              <dt className="font-semibold text-zinc-950">Office</dt>
              <dd className="mt-1">{principalInvestigator.address}</dd>
            </div>
            <div>
              <dt className="font-semibold text-zinc-950">Email</dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${principalInvestigator.email}`}
                  className="text-sky-700 underline decoration-sky-300 underline-offset-4 transition hover:text-sky-800 hover:decoration-sky-500"
                >
                  {principalInvestigator.email}
                </a>
              </dd>
            </div>
          </dl>

          <div className="mt-5 space-y-5 text-[0.98rem] leading-7 text-zinc-800">
            {labDirectorBioParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ProfileLinks profile={principalInvestigator} className="mt-6" />
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <Container className="pb-20 pt-8 sm:pb-24 sm:pt-12 lg:pt-14 min-[1920px]:pb-28 min-[1920px]:pt-16">
      <div className="mx-auto grid max-w-5xl gap-16 lg:grid-cols-[minmax(0,1fr)_21rem] lg:gap-20 min-[1920px]:max-w-6xl min-[1920px]:grid-cols-[minmax(0,1fr)_24rem]">
        <main>
          <h1 className="font-serif text-5xl font-semibold tracking-tight text-sky-900 sm:text-6xl min-[1920px]:text-7xl">
            NextGen AI Research Lab
          </h1>

          <p className="mt-8 max-w-3xl border-l-4 border-sky-800 pl-5 text-lg leading-8 text-zinc-800">
            Welcome to the NextGen AI Research Lab. We work to advance trustworthy AI, large
            language models, cybersecurity, healthcare AI, education, and next-generation
            intelligent systems.
          </p>

          <div className="mt-10 space-y-8">
            {sections.map((section) => (
              <section key={section.eyebrow}>
                <p className="font-mono text-[0.63rem] font-semibold uppercase tracking-[0.28em] text-sky-800">
                  {section.eyebrow}
                </p>
                <p className="mt-2 max-w-2xl text-[0.98rem] leading-7 text-zinc-800 min-[1920px]:text-lg min-[1920px]:leading-8">
                  {section.body}
                </p>
              </section>
            ))}
          </div>

        </main>

        <aside className="lg:pt-7">
          <div className="flex items-center gap-4">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-sky-800">
              Latest News
            </p>
            <div className="h-px flex-1 bg-sky-800/50" />
          </div>

          <div className="mt-5 border-y border-zinc-200">
            {latestNews.map((item) => (
              <NewsPreview key={item.id} item={item} />
            ))}
          </div>

          <Link
            href="/news"
            className="mt-6 inline-flex font-mono text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-sky-800 transition hover:text-sky-950"
          >
            All news →
          </Link>
        </aside>
      </div>

      <LabDirector />
    </Container>
  );
}
