import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { TeamPhoto } from "@/components/team/TeamPhoto";
import { site } from "@/data/site";
import { currentStudents, pastStudents, principalInvestigator, type TeamMember } from "@/data/team";
import { FaFilePdf, FaGlobe, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

export const metadata: Metadata = {
  title: "Team",
  description: `Meet the researchers and students at ${site.name}.`,
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold tracking-tight text-zinc-950">{children}</h2>
      <div className="mt-3 h-px w-full bg-zinc-200" />
    </div>
  );
}

function MemberList({ members }: { members: TeamMember[] }) {
  return (
    <ul className="flex flex-col gap-6">
      {members.map((member) => (
        <li key={member.id}>
          <article className="flex flex-col gap-6 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm sm:flex-row sm:items-start sm:gap-8">
            <TeamPhoto name={member.name} alt={member.name} imageSrc={member.imageSrc} />
            <div className="min-w-0 flex-1">
              <h3 className="text-lg font-semibold text-zinc-950">{member.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">{member.bio}</p>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}

export default function TeamPage() {
  return (
    <Container className="pb-20 pt-8 sm:pb-24 sm:pt-10">
      <section>
        <SectionTitle>Principal Investigator</SectionTitle>
        <article className="flex flex-col gap-6 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm sm:flex-row sm:items-start sm:gap-8">
          <TeamPhoto
            name={principalInvestigator.name}
            alt={principalInvestigator.name}
            imageSrc={principalInvestigator.imageSrc}
            size="lg"
          />
          <div className="min-w-0 flex-1">
            <h3 className="text-2xl font-semibold text-zinc-950">
              {principalInvestigator.name}
            </h3>

            <p className="mt-2 text-sm font-medium leading-relaxed text-zinc-700">
              {principalInvestigator.title}
            </p>

            <p className="mt-1 text-sm text-zinc-600">
              {principalInvestigator.department}
            </p>

            <p className="text-sm text-zinc-600">
              {principalInvestigator.affiliation}
            </p>

            <a
              href={`mailto:${principalInvestigator.email}`}
              className="mt-3 inline-block text-sm text-sky-700 underline decoration-sky-300 underline-offset-4 transition hover:text-sky-800 hover:decoration-sky-500"
            >
              {principalInvestigator.email}
            </a>

            <p className="mt-4 text-sm leading-7 text-zinc-600">
              {principalInvestigator.bio}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href="/contents/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CV"
                title="Curriculum Vitae"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-600 transition hover:border-violet-500 hover:text-violet-700"
              >
                <FaFilePdf />
              </a>

              <a
                href={principalInvestigator.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Website"
                title="Personal Website"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-600 transition hover:border-violet-500 hover:text-violet-700"
              >
                <FaGlobe />
              </a>

              <a
                href={principalInvestigator.googleScholar}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Scholar"
                title="Google Scholar"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-600 transition hover:border-violet-500 hover:text-violet-700"
              >
                <SiGooglescholar />
              </a>

              <a
                href={principalInvestigator.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-600 transition hover:border-violet-500 hover:text-violet-700"
              >
                <FaGithub />
              </a>

              <a
                href={principalInvestigator.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-600 transition hover:border-violet-500 hover:text-violet-700"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </article>
      </section>

      <section className="mt-20">
        <SectionTitle>Current Students</SectionTitle>
        {currentStudents.length > 0 ? (
          <MemberList members={currentStudents} />
        ) : (
          <div className="rounded-lg border border-dashed border-zinc-300 bg-zinc-50 p-8 text-center">
            <h3 className="text-lg font-semibold text-zinc-950">Coming soon</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              Current student profiles will be added here soon.
            </p>
          </div>
        )}
      </section>

      <section className="mt-20">
        <SectionTitle>Past Students</SectionTitle>
        <MemberList members={pastStudents} />
      </section>
    </Container>
  );
}
