import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ProfileLinks } from "@/components/team/ProfileLinks";
import { TeamPhoto } from "@/components/team/TeamPhoto";
import { site } from "@/data/site";
import { currentStudents, pastStudents, principalInvestigator, type TeamMember } from "@/data/team";

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
  const piBioParagraphs = principalInvestigator.bio.split("\n\n");

  return (
    <Container className="pb-20 pt-8 sm:pb-24 sm:pt-10">
      <section id="principal-investigator" className="scroll-mt-24">
        <SectionTitle>Principal Investigator</SectionTitle>
        <article className="flex flex-col gap-8 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm sm:p-8 lg:flex-row lg:items-start lg:gap-10">
          <TeamPhoto
            name={principalInvestigator.name}
            alt={principalInvestigator.name}
            imageSrc={principalInvestigator.imageSrc}
            size="lg"
          />
          <div className="min-w-0 flex-1">
            <h3 className="text-3xl font-semibold tracking-tight text-zinc-950">
              {principalInvestigator.name}
            </h3>

            <p className="mt-3 text-base font-medium leading-relaxed text-zinc-800">
              {principalInvestigator.title}
            </p>

            <p className="mt-1 text-sm text-zinc-600 sm:text-base">
              {principalInvestigator.department}
            </p>

            <p className="text-sm text-zinc-600 sm:text-base">
              {principalInvestigator.affiliation}
            </p>

            <dl className="mt-6 grid gap-4 rounded-lg border border-zinc-100 bg-zinc-50 p-5 text-sm leading-relaxed text-zinc-600 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <dt className="font-semibold text-zinc-950">Education</dt>
                <dd className="mt-1 space-y-1">
                  {principalInvestigator.education.map((degree) => (
                    <p key={degree}>{degree}</p>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-zinc-950">Phone</dt>
                <dd className="mt-1">{principalInvestigator.phone}</dd>
              </div>
              <div>
                <dt className="font-semibold text-zinc-950">Email</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${principalInvestigator.email}`}
                    className="text-sky-700 underline decoration-sky-300 underline-offset-4 transition hover:text-sky-800 hover:decoration-sky-500"
                  >
                    {principalInvestigator.email}
                  </a>
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="font-semibold text-zinc-950">Address</dt>
                <dd className="mt-1">{principalInvestigator.address}</dd>
              </div>
            </dl>

            <div className="mt-7 space-y-5 text-base leading-8 text-zinc-700">
              {piBioParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <ProfileLinks profile={principalInvestigator} className="mt-7" />
          </div>
        </article>
      </section>

      <section id="current-students" className="mt-20 scroll-mt-24">
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

      <section id="past-students" className="mt-20 scroll-mt-24">
        <SectionTitle>Past Students</SectionTitle>
        <MemberList members={pastStudents} />
      </section>
    </Container>
  );
}
