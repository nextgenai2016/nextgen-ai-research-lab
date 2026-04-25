import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProjectCard } from "@/components/research/ProjectCard";
import { site } from "@/data/site";
import { researchPageIntro, researchProjects } from "@/data/research";

export const metadata: Metadata = {
  title: "Research",
  description: `Current research projects at ${site.name}. ${researchPageIntro.summary.slice(0, 140)}…`,
};

export default function ResearchPage() {
  return (
    <Container className="py-20 sm:py-24 min-[1920px]:py-28">
      <PageHeader title={researchPageIntro.title} description={researchPageIntro.summary} />
      <p className="mt-8 text-sm text-zinc-500 min-[1920px]:text-base">
        For papers and citations, see{" "}
        <Link
          href="/publications"
          className="text-sky-700 underline decoration-sky-300 underline-offset-4 transition hover:text-sky-800 hover:decoration-sky-500"
        >
          Publications
        </Link>
        .
      </p>

      <div className="mt-16 flex flex-col gap-12 min-[1920px]:gap-16 min-[2560px]:gap-20">
        {researchProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </Container>
  );
}
