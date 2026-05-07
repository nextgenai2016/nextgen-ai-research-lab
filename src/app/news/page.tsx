import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { newsItems, type NewsItem } from "@/data/news";
import { site } from "@/data/site";

const categoryStyles: Record<NewsItem["category"], string> = {
  Publication: "bg-sky-700 text-white",
  Award: "bg-amber-600 text-white",
  Talk: "bg-violet-700 text-white",
  Media: "bg-rose-700 text-white",
  Event: "bg-emerald-700 text-white",
  Update: "bg-zinc-700 text-white",
};

const categoryLabels: Record<NewsItem["category"], string> = {
  Publication: "Paper",
  Award: "Award",
  Talk: "Talk",
  Media: "Media",
  Event: "Event",
  Update: "Update",
};

export const metadata: Metadata = {
  title: "News",
  description: `Recent news, publications, awards, talks, and media updates from ${site.name}.`,
};

function NewsListItem({ item }: { item: NewsItem }) {
  return (
    <article className="grid gap-4 border-t border-zinc-200 py-7 sm:grid-cols-[7rem_1fr] sm:gap-10 min-[1920px]:py-9">
      <time className="font-mono text-xs tracking-wide text-zinc-500">{item.date}</time>
      <div>
        <span
          className={`inline-flex px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] ${categoryStyles[item.category]}`}
        >
          {categoryLabels[item.category]}
        </span>
        <h2 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-zinc-950 min-[1920px]:text-xl">
          {item.title}
        </h2>
      </div>
    </article>
  );
}

export default function NewsPage() {
  return (
    <Container className="pb-20 pt-20 sm:pb-24 sm:pt-28 min-[1920px]:pb-28 min-[1920px]:pt-32">
      <div className="mx-auto max-w-4xl">
        <header className="mb-14 sm:mb-16">
          <div className="flex items-center gap-4">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-sky-800">News</p>
            <div className="h-px w-12 bg-sky-800/60" />
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl min-[1920px]:text-6xl">
            Latest from the Lab
          </h1>
        </header>

        <div>
          {newsItems.map((item) => (
            <NewsListItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </Container>
  );
}
