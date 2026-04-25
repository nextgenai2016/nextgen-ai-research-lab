import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { TeamPhoto } from "@/components/team/TeamPhoto";
import { HOME_TEAM_PREVIEW_COUNT } from "@/data/home";
import type { StudentMember } from "@/data/team";

type HomeTeamPreviewProps = {
  members: StudentMember[];
};

export function HomeTeamPreview({ members }: HomeTeamPreviewProps) {
  const preview = members.slice(0, HOME_TEAM_PREVIEW_COUNT);

  return (
    <section className="border-b border-zinc-200 bg-zinc-50">
      <Container className="py-20 sm:py-24 min-[1920px]:py-28 min-[2560px]:py-32">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="home-motion-in font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500 sm:text-xs">
              People
            </p>
            <h2 className="home-motion-in home-motion-delay-1 mt-3 text-3xl font-medium tracking-tight text-zinc-950 sm:text-4xl min-[1920px]:text-5xl">
              Team snapshot
            </h2>
            <p className="home-motion-in home-motion-delay-2 mt-4 max-w-xl text-base leading-relaxed text-zinc-500 sm:text-lg">
              Graduate and undergraduate researchers driving experiments, prototypes, and publications.
            </p>
          </div>
          <Link
            href="/team"
            className="home-motion-in home-motion-delay-2 shrink-0 text-sm font-medium text-sky-700 transition hover:text-sky-800 min-[1920px]:text-base"
          >
            Meet the full team →
          </Link>
        </div>

        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {preview.map((member, index) => (
            <li key={member.id}>
              <article
                className={`home-motion-in flex h-full flex-col items-center rounded-2xl border border-zinc-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:border-zinc-300 hover:shadow-md min-[1920px]:p-8 ${
                  index === 1
                    ? "home-motion-delay-3"
                    : index === 2
                      ? "home-motion-delay-4"
                      : ""
                }`}
              >
                <div className="flex justify-center">
                  <TeamPhoto name={member.name} alt={member.name} imageSrc={member.imageSrc} />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-zinc-950 min-[1920px]:text-xl">
                  {member.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500 line-clamp-4 min-[1920px]:text-base">
                  {member.bio}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
