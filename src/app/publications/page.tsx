import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PublicationsExplorer } from "@/components/PublicationsExplorer";
import { publications } from "@/data/publications";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Publications",
  description: `Books, chapters, conference papers, and journal articles from ${site.name}.`,
};

export default function PublicationsPage() {
  return (
    <Container className="pb-20 pt-8 sm:pb-24 sm:pt-10 min-[1920px]:pb-28 min-[1920px]:pt-12">
      <PublicationsExplorer publications={publications} />
    </Container>
  );
}
