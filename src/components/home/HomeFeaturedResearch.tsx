import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { HOME_FEATURED_RESEARCH_COUNT } from "@/data/home";
import type { ResearchProject } from "@/data/research";

type HomeFeaturedResearchProps = {
  projects: ResearchProject[];
};

export function HomeFeaturedResearch({ projects }: HomeFeaturedResearchProps) {
  const featured = projects.slice(0, HOME_FEATURED_RESEARCH_COUNT);

  return (
    <section className="border-b border-zinc-200 bg-white">
      <Container className="py-20 sm:py-24 min-[1920px]:py-28 min-[2560px]:py-32">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="home-motion-in font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500 sm:text-xs">
              Research
            </p>
            <h2 className="home-motion-in home-motion-delay-1 mt-3 text-3xl font-medium tracking-tight text-zinc-950 sm:text-4xl min-[1920px]:text-5xl">
              Featured projects
            </h2>
            <p className="home-motion-in home-motion-delay-2 mt-4 max-w-xl text-base leading-relaxed text-zinc-500 sm:text-lg">
              A snapshot of active directions - cybersecurity, education, wireless systems, and more.
            </p>
          </div>
          <Link
            href="/research"
            className="home-motion-in home-motion-delay-2 shrink-0 text-sm font-medium text-sky-700 transition hover:text-sky-800 min-[1920px]:text-base"
          >
            View all research →
          </Link>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {featured.map((project, index) => (
            <li key={project.id}>
              <article
              className={`home-motion-in group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition duration-300 hover:border-zinc-300 hover:shadow-md ${
                  index === 1
                    ? "home-motion-delay-3"
                    : index === 2
                      ? "home-motion-delay-4"
                      : ""
                }`}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100">
                  {project.imageSrc ? (
                    <Image
                      src={project.imageSrc}
                      alt={project.title}
                      fill
                      className="object-cover object-center transition duration-500 group-hover:scale-[1.02]"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  ) : (
                    <div
                      className="flex h-full items-center justify-center bg-zinc-100 font-mono text-xs text-zinc-500"
                      aria-hidden
                    >
                      Preview
                    </div>
                  )}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6 min-[1920px]:p-7">
                  <h3 className="text-lg font-semibold leading-snug tracking-tight text-zinc-950 min-[1920px]:text-xl">
                    <Link
                      href="/research"
                      className="transition hover:text-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500/50"
                    >
                      {project.title}
                    </Link>
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-500 line-clamp-3 min-[1920px]:text-base">
                    {project.description}
                  </p>
                  <p className="mt-4 font-mono text-[10px] uppercase tracking-wider text-zinc-600">
                    {project.areas[0]}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
