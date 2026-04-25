import Link from "next/link";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { contact } from "@/data/contact";
import { homeHeroCopy } from "@/data/home";
import { site } from "@/data/site";

export function HomeHero() {
  return (
    <section className="border-b border-zinc-200">
      <HeroGeometric
        title1={homeHeroCopy.title1}
        title2={homeHeroCopy.title2}
        description={site.description}
      >
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/research"
            className="inline-flex items-center justify-center rounded-lg bg-sky-700 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-sky-800 min-[1920px]:px-7 min-[1920px]:py-3.5 min-[1920px]:text-base"
          >
            Explore research
          </Link>
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center justify-center rounded-lg border border-zinc-300 bg-white/80 px-6 py-3 text-sm font-medium text-zinc-800 shadow-sm backdrop-blur-sm transition hover:border-zinc-400 hover:bg-zinc-50 min-[1920px]:px-7 min-[1920px]:py-3.5 min-[1920px]:text-base"
          >
            Get in touch
          </a>
        </div>
      </HeroGeometric>
    </section>
  );
}
