import Image from "next/image";
import type { ResearchProject } from "@/data/research";

type ProjectCardProps = {
  project: ResearchProject;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const reverse = index % 2 === 1;

  return (
    <article
      className={`flex flex-col gap-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8 lg:flex-row lg:items-center lg:gap-10 lg:p-8 min-[1920px]:gap-14 min-[1920px]:p-10 ${reverse ? "lg:flex-row-reverse" : ""}`}
    >
      <div className="min-w-0 flex-1">
        <h2 className="text-xl font-semibold tracking-tight text-zinc-950 sm:text-2xl min-[1920px]:text-3xl min-[2560px]:text-[2rem]">
          {project.title}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base min-[1920px]:text-lg min-[1920px]:leading-relaxed min-[2560px]:text-xl">
          {project.description}
        </p>
        <h3 className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
          Key areas
        </h3>
        <ul className="mt-4 flex list-none flex-col gap-3 text-sm leading-relaxed text-zinc-700 sm:text-[0.9375rem] min-[1920px]:text-base min-[2560px]:text-lg">
          {project.areas.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sky-500/80" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto flex w-full max-w-[min(100%,16rem)] shrink-0 justify-center sm:max-w-[17rem] lg:max-w-[18rem] min-[1920px]:max-w-[20rem]">
        <ProjectVisual project={project} />
      </div>
    </article>
  );
}

function ProjectVisual({ project }: { project: ResearchProject }) {
  if (project.imageSrc) {
    return (
      <div className="relative aspect-square w-full max-w-full overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100">
        <Image
          src={project.imageSrc}
          alt={project.title}
          fill
          className="object-cover object-center"
          sizes="(min-width: 1920px) 320px, (min-width: 1024px) 288px, min(100vw, 256px)"
        />
      </div>
    );
  }

  return (
    <div
      className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(14,165,233,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(99,102,241,0.06),transparent_45%)]" />
      <span className="relative mx-6 text-center font-mono text-xs uppercase tracking-[0.25em] text-zinc-600">
        {project.title.split(" ").slice(0, 3).join(" ")}
        …
      </span>
    </div>
  );
}