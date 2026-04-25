import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import {
  aboutApproach,
  aboutIntro,
  aboutMission,
  aboutVision,
  aboutWhatWeAre,
  aboutWhatWeDo,
} from "@/data/about";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn what ${site.name} is, what we do, and how we approach mission-driven AI research.`,
};

function AboutHeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(14,165,233,0.08),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_100%_40%,rgba(99,102,241,0.05),transparent)]" />
      <div className="absolute -left-1/4 top-1/3 h-[min(70vw,36rem)] w-[min(70vw,36rem)] rounded-full bg-sky-100/70 blur-[90px] home-glow-animate" />
      <div
        className="absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(212,212,216,0.55) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,212,216,0.55) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 75% 55% at 50% 25%, black 15%, transparent 65%)",
        }}
      />
    </div>
  );
}

type StorySectionProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
  className?: string;
  mutedBg?: boolean;
};

function StorySection({
  eyebrow,
  title,
  children,
  className = "",
  mutedBg = false,
}: StorySectionProps) {
  return (
    <section
      className={`border-b border-zinc-200 ${mutedBg ? "bg-zinc-50" : "bg-white"} ${className}`}
    >
      <Container className="py-20 sm:py-24 min-[1920px]:py-28 min-[2560px]:py-32">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 min-[1920px]:gap-16">
          <header className="lg:col-span-4 lg:pt-1">
            <p className="home-motion-in font-mono text-[11px] uppercase tracking-[0.25em] text-sky-700 sm:text-xs">
              {eyebrow}
            </p>
            <h2 className="home-motion-in home-motion-delay-1 mt-3 text-2xl font-medium tracking-tight text-zinc-950 sm:text-3xl min-[1920px]:text-4xl">
              {title}
            </h2>
          </header>
          <div className="home-motion-in home-motion-delay-2 lg:col-span-8">{children}</div>
        </div>
      </Container>
    </section>
  );
}

export default function AboutPage() {
  return (
    <article>
      <section className="relative overflow-hidden border-b border-zinc-200 bg-white">
        <AboutHeroBackground />
        <Container className="relative py-20 sm:py-28 min-[1920px]:py-36 min-[2560px]:py-40">
          <div className="max-w-3xl min-[1920px]:max-w-4xl">
            <p className="home-motion-in font-mono text-xs tracking-[0.2em] text-sky-700 sm:text-sm min-[1920px]:text-base">
              {aboutIntro.eyebrow}
            </p>
            <h1 className="home-motion-in home-motion-delay-1 mt-5 text-4xl font-medium tracking-tight text-zinc-950 sm:text-5xl sm:leading-[1.08] min-[1920px]:text-6xl min-[2560px]:text-7xl min-[2560px]:leading-[1.05]">
              {aboutIntro.title}
            </h1>
            <p className="home-motion-in home-motion-delay-2 mt-8 text-lg leading-relaxed text-zinc-600 sm:text-xl min-[1920px]:text-2xl min-[1920px]:leading-relaxed">
              {aboutIntro.lead}
            </p>
          </div>
        </Container>
      </section>

      <StorySection eyebrow={aboutWhatWeAre.eyebrow} title={aboutWhatWeAre.title}>
        <div className="space-y-6 text-base leading-relaxed text-zinc-600 sm:text-lg min-[1920px]:text-xl min-[1920px]:leading-relaxed">
          {aboutWhatWeAre.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </StorySection>

      <StorySection
        eyebrow={aboutWhatWeDo.eyebrow}
        title={aboutWhatWeDo.title}
        mutedBg
      >
        <div className="space-y-6 text-base leading-relaxed text-zinc-600 sm:text-lg min-[1920px]:text-xl min-[1920px]:leading-relaxed">
          {aboutWhatWeDo.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </StorySection>

      <section className="border-b border-zinc-200 bg-white">
        <Container className="py-20 sm:py-24 min-[1920px]:py-28 min-[2560px]:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-10 min-[1920px]:gap-14">
            <div className="home-motion-in flex flex-col rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm min-[1920px]:p-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-sky-700">
                {aboutMission.eyebrow}
              </p>
              <h2 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950 sm:text-2xl min-[1920px]:text-3xl">
                {aboutMission.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-zinc-600 sm:text-lg min-[1920px]:text-xl min-[1920px]:leading-relaxed">
                {aboutMission.body}
              </p>
            </div>
            <div className="home-motion-in home-motion-delay-2 flex flex-col rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm min-[1920px]:p-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-indigo-700">
                {aboutVision.eyebrow}
              </p>
              <h2 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950 sm:text-2xl min-[1920px]:text-3xl">
                {aboutVision.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-zinc-600 sm:text-lg min-[1920px]:text-xl min-[1920px]:leading-relaxed">
                {aboutVision.body}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-200 bg-zinc-50">
        <Container className="py-20 sm:py-24 min-[1920px]:py-28 min-[2560px]:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <p className="home-motion-in font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500 sm:text-xs">
              {aboutApproach.eyebrow}
            </p>
            <h2 className="home-motion-in home-motion-delay-1 mt-3 text-3xl font-medium tracking-tight text-zinc-950 sm:text-4xl min-[1920px]:text-5xl">
              {aboutApproach.title}
            </h2>
          </div>

          <ul className="mt-16 grid gap-8 sm:gap-10 lg:grid-cols-3 lg:gap-8 min-[1920px]:mt-20">
            {aboutApproach.pillars.map((pillar, i) => (
              <li
                key={pillar.title}
                className={`home-motion-in rounded-2xl border border-zinc-200 bg-white p-8 text-left shadow-sm transition duration-300 hover:border-zinc-300 hover:shadow-md min-[1920px]:p-10 ${
                  i === 1 ? "home-motion-delay-3" : i === 2 ? "home-motion-delay-4" : ""
                }`}
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-zinc-950 min-[1920px]:text-xl">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500 min-[1920px]:text-base min-[1920px]:leading-relaxed">
                  {pillar.body}
                </p>
              </li>
            ))}
          </ul>

          <p className="home-motion-in home-motion-delay-5 mt-16 text-center text-sm text-zinc-600 min-[1920px]:mt-20 min-[1920px]:text-base">
            Want the full picture of active work?{" "}
            <Link
              href="/research"
              className="font-medium text-sky-700 underline decoration-sky-300 underline-offset-4 transition hover:text-sky-800 hover:decoration-sky-500"
            >
              Explore our research
            </Link>
            {" · "}
            <Link
              href="/team"
              className="font-medium text-sky-700 underline decoration-sky-300 underline-offset-4 transition hover:text-sky-800 hover:decoration-sky-500"
            >
              Meet the team
            </Link>
          </p>
        </Container>
      </section>
    </article>
  );
}
