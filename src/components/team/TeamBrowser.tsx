"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { ProfileLinks } from "@/components/team/ProfileLinks";
import { TeamPhoto } from "@/components/team/TeamPhoto";
import type { PrincipalInvestigator, TeamMember } from "@/data/team";

type TeamTab = "pi" | "all" | "phd" | "undergraduate" | "alumni";

type TeamBrowserProps = {
  principalInvestigator: PrincipalInvestigator;
  currentPhdStudents: TeamMember[];
  currentUndergraduateStudents: TeamMember[];
  alumni: TeamMember[];
};

const tabs: { id: TeamTab; label: string }[] = [
  { id: "pi", label: "PI" },
  { id: "all", label: "All Students" },
  { id: "phd", label: "Current PhD Students" },
  { id: "undergraduate", label: "Current Undergraduate Students" },
  { id: "alumni", label: "Alumni" },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold tracking-tight text-zinc-950">{children}</h2>
      <div className="mt-3 h-px w-full bg-zinc-200" />
    </div>
  );
}

function EmptyState({ label }: { label: string }) {
  return (
    <div className="rounded-lg border border-dashed border-zinc-300 bg-zinc-50 p-8 text-center">
      <h3 className="text-lg font-semibold text-zinc-950">Coming soon</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600">{label}</p>
    </div>
  );
}

function PrincipalInvestigatorPanel({ profile }: { profile: PrincipalInvestigator }) {
  const bioParagraphs = profile.bio.split("\n\n");

  return (
    <section id="principal-investigator" className="scroll-mt-24">
      <SectionTitle>Principal Investigator</SectionTitle>
      <article className="flex flex-col gap-8 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm sm:p-8 lg:flex-row lg:items-start lg:gap-10">
        <TeamPhoto name={profile.name} alt={profile.name} imageSrc={profile.imageSrc} size="lg" />
        <div className="min-w-0 flex-1">
          <h3 className="text-3xl font-semibold tracking-tight text-zinc-950">{profile.name}</h3>

          <p className="mt-3 text-base font-medium leading-relaxed text-zinc-800">
            {profile.title}
          </p>

          <p className="mt-1 text-sm text-zinc-600 sm:text-base">{profile.department}</p>

          <p className="text-sm text-zinc-600 sm:text-base">{profile.affiliation}</p>

          <dl className="mt-6 grid gap-4 rounded-lg border border-zinc-100 bg-zinc-50 p-5 text-sm leading-relaxed text-zinc-600 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <dt className="font-semibold text-zinc-950">Education</dt>
              <dd className="mt-1 space-y-1">
                {profile.education.map((degree) => (
                  <p key={degree}>{degree}</p>
                ))}
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-zinc-950">Phone</dt>
              <dd className="mt-1">{profile.phone}</dd>
            </div>
            <div>
              <dt className="font-semibold text-zinc-950">Email</dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${profile.email}`}
                  className="text-sky-700 underline decoration-sky-300 underline-offset-4 transition hover:text-sky-800 hover:decoration-sky-500"
                >
                  {profile.email}
                </a>
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="font-semibold text-zinc-950">Address</dt>
              <dd className="mt-1">{profile.address}</dd>
            </div>
          </dl>

          <div className="mt-7 space-y-5 text-base leading-8 text-zinc-700">
            {bioParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ProfileLinks profile={profile} className="mt-7" />
        </div>
      </article>
    </section>
  );
}

function StudentGrid({
  members,
  onSelect,
}: {
  members: TeamMember[];
  onSelect: (member: TeamMember) => void;
}) {
  if (members.length === 0) {
    return <EmptyState label="Student profiles will be added here soon." />;
  }

  return (
    <ul className="grid gap-6 md:grid-cols-2">
      {members.map((member) => (
        <li key={member.id}>
          <button
            type="button"
            onClick={() => onSelect(member)}
            className="flex h-full w-full flex-col gap-5 rounded-lg border border-zinc-200 bg-white p-6 text-left shadow-sm transition hover:border-sky-300 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-700 sm:flex-row sm:items-start"
          >
            <TeamPhoto name={member.name} alt={member.name} imageSrc={member.imageSrc} />
            <div className="min-w-0 flex-1">
              <h3 className="text-lg font-semibold text-zinc-950">{member.name}</h3>
              <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-zinc-600">
                {member.bio}
              </p>
            </div>
          </button>
        </li>
      ))}
    </ul>
  );
}

function StudentModal({
  member,
  onClose,
}: {
  member: TeamMember | null;
  onClose: () => void;
}) {
  if (!member) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/45 px-4 py-6">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="student-profile-title"
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white p-6 shadow-2xl sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[0.63rem] font-semibold uppercase tracking-[0.24em] text-sky-800">
              Student Work
            </p>
            <h2
              id="student-profile-title"
              className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950"
            >
              {member.name}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close student profile"
            title="Close"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-300 text-zinc-600 transition hover:border-sky-300 hover:text-sky-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-700"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start">
          <TeamPhoto name={member.name} alt={member.name} imageSrc={member.imageSrc} />
          <div className="min-w-0 flex-1">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
              Research Contribution
            </h3>
            <p className="mt-3 text-base leading-8 text-zinc-700">{member.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function getTabContent({
  activeTab,
  currentPhdStudents,
  currentUndergraduateStudents,
  alumni,
}: {
  activeTab: TeamTab;
  currentPhdStudents: TeamMember[];
  currentUndergraduateStudents: TeamMember[];
  alumni: TeamMember[];
}) {
  const allStudents = [...currentPhdStudents, ...currentUndergraduateStudents, ...alumni];

  switch (activeTab) {
    case "all":
      return {
        title: "All Students",
        members: allStudents,
        emptyLabel: "Student profiles will be added here soon.",
      };
    case "phd":
      return {
        title: "Current PhD Students",
        members: currentPhdStudents,
        emptyLabel: "Current PhD student profiles will be added here soon.",
      };
    case "undergraduate":
      return {
        title: "Current Undergraduate Students",
        members: currentUndergraduateStudents,
        emptyLabel: "Current undergraduate student profiles will be added here soon.",
      };
    case "alumni":
      return {
        title: "Alumni",
        members: alumni,
        emptyLabel: "Alumni profiles will be added here soon.",
      };
    default:
      return {
        title: "All Students",
        members: allStudents,
        emptyLabel: "Student profiles will be added here soon.",
      };
  }
}

export function TeamBrowser({
  principalInvestigator,
  currentPhdStudents,
  currentUndergraduateStudents,
  alumni,
}: TeamBrowserProps) {
  const [activeTab, setActiveTab] = useState<TeamTab>("pi");
  const [selectedStudent, setSelectedStudent] = useState<TeamMember | null>(null);
  const studentContent = getTabContent({
    activeTab,
    currentPhdStudents,
    currentUndergraduateStudents,
    alumni,
  });

  useEffect(() => {
    const setTabFromHash = () => {
      if (window.location.hash === "#current-students") {
        setActiveTab("all");
      }

      if (window.location.hash === "#past-students") {
        setActiveTab("alumni");
      }

      if (window.location.hash === "#principal-investigator") {
        setActiveTab("pi");
      }
    };

    setTabFromHash();
    window.addEventListener("hashchange", setTabFromHash);

    return () => window.removeEventListener("hashchange", setTabFromHash);
  }, []);

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2 border-b border-zinc-200 pb-5">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-700 ${
                isActive
                  ? "border-sky-800 bg-sky-800 text-white"
                  : "border-zinc-200 bg-white text-zinc-700 hover:border-sky-300 hover:text-sky-800"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {activeTab === "pi" ? (
        <PrincipalInvestigatorPanel profile={principalInvestigator} />
      ) : (
        <section className="scroll-mt-24">
          <SectionTitle>{studentContent.title}</SectionTitle>
          {studentContent.members.length > 0 ? (
            <StudentGrid members={studentContent.members} onSelect={setSelectedStudent} />
          ) : (
            <EmptyState label={studentContent.emptyLabel} />
          )}
        </section>
      )}

      <StudentModal member={selectedStudent} onClose={() => setSelectedStudent(null)} />
    </>
  );
}
