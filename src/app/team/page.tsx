import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { TeamPhoto } from "@/components/team/TeamPhoto";
import { site } from "@/data/site";
import { currentStudents, principalInvestigator } from "@/data/team";

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
            <h3 className="text-lg font-semibold text-zinc-950">{principalInvestigator.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">{principalInvestigator.title}</p>
            <a
              href={`mailto:${principalInvestigator.email}`}
              className="mt-3 inline-block text-sm text-sky-700 underline decoration-sky-300 underline-offset-4 transition hover:text-sky-800 hover:decoration-sky-500"
            >
              {principalInvestigator.email}
            </a>
          </div>
        </article>
      </section>

      <section className="mt-20">
        <SectionTitle>Current Students</SectionTitle>
        <ul className="flex flex-col gap-6">
          {currentStudents.map((member) => (
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
      </section>
    </Container>
  );
}
