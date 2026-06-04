import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ResearchExplorer } from "@/components/research/ResearchExplorer";
import { site } from "@/data/site";
import { researchPageIntro, researchProjects } from "@/data/research";

export const metadata: Metadata = {
  title: "Research",
  description: `Current research projects at ${site.name}. ${researchPageIntro.summary.slice(0, 140)}…`,
};

export default function ResearchPage() {
  return (
    <Container className="pb-20 pt-16 sm:pb-24 sm:pt-24 min-[1920px]:pb-28 min-[1920px]:pt-32">
      <div className="mx-auto max-w-5xl min-[1920px]:max-w-6xl">
        <header className="max-w-2xl">
          <div className="flex items-center gap-4">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-sky-800">
              Research
            </p>
            <div className="h-px w-12 bg-sky-800/60" />
          </div>
          <h1 className="mt-5 font-serif text-5xl font-semibold tracking-tight text-zinc-950 sm:text-6xl">
            {researchPageIntro.title}
          </h1>
          <p className="mt-5 text-base leading-7 text-zinc-700">{researchPageIntro.summary}</p>
        </header>

        <ResearchExplorer projects={researchProjects} />
      </div>
    </Container>
  );
}
