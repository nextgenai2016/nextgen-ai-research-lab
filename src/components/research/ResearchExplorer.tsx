"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { ResearchProject } from "@/data/research";

type ResearchExplorerProps = {
  projects: ResearchProject[];
};

const statusColor = {
  green: "bg-emerald-700",
  blue: "bg-sky-800",
};

function ProjectImage({ project }: { project: ResearchProject }) {
  if (!project.imageSrc) {
    return (
      <div className="flex aspect-[16/9] w-full items-center justify-center bg-zinc-100 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-zinc-500">
        Preview
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
      <Image
        src={project.imageSrc}
        alt={project.title}
        fill
        className="object-cover object-center transition duration-500 group-hover:scale-[1.02]"
        sizes="(min-width: 1280px) 480px, (min-width: 768px) 44vw, 100vw"
      />
    </div>
  );
}

function ProjectRow({
  project,
  index,
  onOpen,
}: {
  project: ResearchProject;
  index: number;
  onOpen: (project: ResearchProject) => void;
}) {
  const reverse = index % 2 === 1;
  const badgeClass = index % 3 === 2 ? statusColor.blue : statusColor.green;

  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className="group grid w-full gap-8 border-t border-zinc-200 py-12 text-left transition hover:bg-zinc-50/80 sm:p-8 lg:grid-cols-2 lg:items-center lg:gap-12"
    >
      <div className={reverse ? "lg:order-2" : ""}>
        <ProjectImage project={project} />
      </div>

      <div className={`max-w-md ${reverse ? "lg:order-1" : ""}`}>
        <span
          className={`inline-flex px-2.5 py-1 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white ${badgeClass}`}
        >
          {project.status}
        </span>
        <p className="mt-4 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-sky-800">
          {project.stage}
        </p>
        <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-zinc-950">
          {project.title}
        </h2>
        <p className="mt-2 font-serif text-sm italic text-zinc-500">{project.tagline}</p>
        <p className="mt-5 text-base leading-7 text-zinc-700">{project.description}</p>
        <span className="mt-7 inline-flex font-mono text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-sky-800 transition group-hover:text-sky-950">
          Learn more →
        </span>
      </div>
    </button>
  );
}

function ProjectDrawer({
  project,
  onClose,
}: {
  project: ResearchProject | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[60] transition ${project ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!project}
    >
      <button
        type="button"
        aria-label="Close project details"
        onClick={onClose}
        className={`absolute inset-0 bg-zinc-950/35 backdrop-blur-[2px] transition-opacity ${
          project ? "opacity-100" : "opacity-0"
        }`}
      />

      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-xl overflow-y-auto bg-white shadow-2xl shadow-zinc-950/20 transition-transform duration-300 sm:max-w-2xl ${
          project ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label={project ? `${project.title} details` : "Project details"}
      >
        {project ? (
          <div>
            <div className="flex items-center justify-between border-b border-zinc-200 px-6 py-5 sm:px-8">
              <span className="bg-emerald-700 px-2.5 py-1 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white">
                {project.status}
              </span>
              <button
                type="button"
                onClick={onClose}
                className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-zinc-500 transition hover:text-zinc-950"
              >
                Close
              </button>
            </div>

            <div className="px-6 py-8 sm:px-8">
              <ProjectImage project={project} />

              <p className="mt-8 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-sky-800">
                {project.stage}
              </p>
              <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-zinc-950">
                {project.title}
              </h2>
              <p className="mt-2 font-serif text-base italic text-zinc-500">{project.tagline}</p>

              <section className="mt-8">
                <h3 className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-sky-800">
                  The Problem
                </h3>
                <p className="mt-3 text-base leading-7 text-zinc-800">{project.problem}</p>
              </section>

              <section className="mt-8">
                <h3 className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-sky-800">
                  How It Works
                </h3>
                <ul className="mt-4 space-y-4 text-sm leading-6 text-zinc-700">
                  {project.approach.map((item) => (
                    <li key={item} className="border-l border-zinc-300 pl-4">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mt-8">
                <h3 className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-sky-800">
                  Impact
                </h3>
                <p className="mt-3 text-base leading-7 text-zinc-800">{project.impact}</p>
              </section>

              <section className="mt-8">
                <h3 className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-sky-800">
                  Key Areas
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.areas.map((area) => (
                    <span
                      key={area}
                      className="border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs text-zinc-700"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </div>
        ) : null}
      </aside>
    </div>
  );
}

export function ResearchExplorer({ projects }: ResearchExplorerProps) {
  const [selectedProject, setSelectedProject] = useState<ResearchProject | null>(null);

  return (
    <>
      <div className="mt-16">
        {projects.map((project, index) => (
          <ProjectRow
            key={project.id}
            project={project}
            index={index}
            onOpen={setSelectedProject}
          />
        ))}
      </div>
      <ProjectDrawer project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
