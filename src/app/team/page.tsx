import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { TeamBrowser } from "@/components/team/TeamBrowser";
import { site } from "@/data/site";
import {
  currentPhdStudents,
  currentUndergraduateStudents,
  pastStudents,
  principalInvestigator,
} from "@/data/team";

export const metadata: Metadata = {
  title: "Team",
  description: `Meet the researchers and students at ${site.name}.`,
};

export default function TeamPage() {
  return (
    <Container className="pb-20 pt-8 sm:pb-24 sm:pt-10">
      <TeamBrowser
        principalInvestigator={principalInvestigator}
        currentPhdStudents={currentPhdStudents}
        currentUndergraduateStudents={currentUndergraduateStudents}
        alumni={pastStudents}
      />
    </Container>
  );
}
