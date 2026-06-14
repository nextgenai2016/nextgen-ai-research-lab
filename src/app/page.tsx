import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { contact } from "@/data/contact";
import { newsItems, type NewsItem } from "@/data/news";

const latestNews = newsItems.slice(0, 4);

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

export default function HomePage() {
  return (
    <Container className="pb-20 pt-8 sm:pb-24 sm:pt-12 lg:pt-14 min-[1920px]:pb-28 min-[1920px]:pt-16">
      <div className="mx-auto grid max-w-5xl gap-16 lg:grid-cols-[minmax(0,1fr)_21rem] lg:gap-20 min-[1920px]:max-w-6xl min-[1920px]:grid-cols-[minmax(0,1fr)_24rem]">
        <main>
          <div className="mb-10 flex flex-col gap-5 border-b border-zinc-200 pb-8 sm:flex-row sm:items-center">
            <Image
              src="/android-chrome-512x512.png"
              alt="NextGen AI Research Lab logo"
              width={112}
              height={112}
              priority
              className="h-24 w-24 shrink-0 object-contain sm:h-28 sm:w-28"
            />
            <div>
              <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-sky-800">
                Welcome
              </p>
              <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-700">
                Welcome to the NextGen AI Research Lab, where students and researchers advance
                trustworthy AI, large language models, cybersecurity, healthcare AI, and
                next-generation intelligent systems.
              </p>
            </div>
          </div>

          <p className="font-mono text-[0.65rem] uppercase tracking-[0.34em] text-sky-800">
            Texas Christian University · NextGen AI
          </p>

          <h1 className="mt-5 font-serif text-5xl font-semibold tracking-tight text-sky-900 sm:text-6xl min-[1920px]:text-7xl">
            NextGen AI Research Lab
          </h1>

          <p className="mt-2 font-serif text-base italic text-zinc-500">
            Advancing trustworthy AI through rigorous research.
          </p>

          <blockquote className="mt-8 border-l-4 border-sky-800 pl-5 font-serif text-xl italic leading-relaxed text-zinc-950">
            AI should make people more capable, not less.
          </blockquote>

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

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/research"
              className="inline-flex items-center justify-center bg-sky-800 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-sky-900"
            >
              Our Research
            </Link>
            <Link
              href="/publications"
              className="inline-flex items-center justify-center border border-zinc-300 bg-white px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-800 transition hover:border-zinc-500"
            >
              Publications
            </Link>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center justify-center border border-zinc-300 bg-white px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-800 transition hover:border-zinc-500"
            >
              Collaborate
            </a>
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
    </Container>
  );
}
