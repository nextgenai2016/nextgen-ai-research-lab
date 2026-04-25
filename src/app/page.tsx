import {
  HomeCTA,
  HomeFeaturedResearch,
  HomeHero,
  HomeTeamPreview,
  HomeWhatWeDo,
} from "@/components/home";
import { currentStudents } from "@/data/team";
import { researchProjects } from "@/data/research";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeWhatWeDo />
      <HomeFeaturedResearch projects={researchProjects} />
      <HomeTeamPreview members={currentStudents} />
      <HomeCTA />
    </>
  );
}
