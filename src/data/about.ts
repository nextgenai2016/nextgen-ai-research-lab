import { site } from "@/data/site";

/**
 * About page narrative. Placeholder copy aligned with the lab’s focus areas;
 * edit to match your institution’s voice and facts.
 */
export const aboutIntro = {
  eyebrow: "About the lab",
  title: "Science, systems, and people -together",
  lead:
    "We are an interdisciplinary research group at the intersection of artificial intelligence, cybersecurity, wireless systems, and human centered applications. Our work is driven by curiosity, rigor, and a responsibility to the communities our research touches.",
} as const;

export const aboutWhatWeAre = {
  eyebrow: "What we are",
  title: "A home for next-generation AI research",
  paragraphs: [
    `${site.name} brings together faculty, students, and collaborators who want to push machine learning beyond demos - into settings where reliability, security, and real-world constraints matter.`,
    "We sit within a broader university ecosystem: we teach, mentor, publish, and build prototypes that can inform both theory and practice. The lab is a place where questions are welcome and where progress is measured by insight as much as by benchmarks.",
  ],
} as const;

export const aboutWhatWeDo = {
  eyebrow: "What we do",
  title: "From foundations to impact",
  paragraphs: [
    "We run projects across AI for cybersecurity, education, healthcare, and next-generation wireless networks - including massive MIMO, 5G/B5G/6G, and enabling technologies for secure, efficient communication.",
    "That means designing algorithms, running experiments, analyzing failure modes, and - when it helps - sharing code and methods so others can reproduce and extend our work.",
  ],
} as const;

export const aboutMission = {
  eyebrow: "Mission",
  title: "Trustworthy AI through rigorous inquiry",
  body:
    "Advance understanding of intelligent systems by combining solid empirical methods with clear thinking about risk, equity, and deployment - so that AI can support people without amplifying harm or opacity.",
} as const;

export const aboutVision = {
  eyebrow: "Vision",
  title: "Research that travels beyond the lab",
  body:
    "A future where AI systems are auditable, adaptable, and aligned with institutional and societal values - where students leave the lab prepared to lead in industry, academia, and public service with both technical skill and ethical judgment.",
} as const;

export const aboutApproach = {
  eyebrow: "How we work",
  title: "Our approach to research",
  pillars: [
    {
      title: "Rigor first",
      body:
        "We prioritize reproducible setups, careful baselines, and honest reporting—especially when results are messy or inconclusive.",
    },
    {
      title: "Open collaboration",
      body:
        "We work with partners across campus and beyond, and we value transparency in methods, limitations, and authorship.",
    },
    {
      title: "Mentorship as research",
      body:
        "Training researchers is part of our mission: clear feedback, shared ownership of ideas, and room for students to grow their own questions.",
    },
  ],
} as const;
