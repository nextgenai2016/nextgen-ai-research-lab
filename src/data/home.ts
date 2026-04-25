/**
 * Homepage copy and structure. Placeholder content for narrative sections;
 * research and team previews are wired from research/team data in page components.
 */

/** Two-line hero headline for the geometric landing hero (`HeroGeometric`). */
export const homeHeroCopy = {
  title1: "Advancing trustworthy AI",
  title2: "through rigorous research",
} as const;

export const homeWhatWeDo = {
  eyebrow: "Focus areas",
  title: "What we do",
  description:
    "We combine theory, systems, and human - centered design to build AI that is reliable, interpretable, and aligned with real-world constraints.",
  pillars: [
    {
      title: "Foundational research",
      body:
        "We develop methods at the intersection of machine learning, security, and communication systems—from robust models to next-generation wireless.",
    },
    {
      title: "Open collaboration",
      body:
        "We work with academic partners, industry, and students through shared tooling, reproducible experiments, and transparent reporting.",
    },
    {
      title: "Impact-driven projects",
      body:
        "Our projects target education, healthcare, and infrastructure—places where careful AI deployment can improve outcomes at scale.",
    },
  ],
} as const;

export const homeCta = {
  title: "Build the next generation of AI with us",
  description:
    "We welcome collaborators, visiting researchers, and motivated students. Reach out to discuss projects, partnerships, or lab opportunities.",
  primaryLabel: "View research",
  secondaryLabel: "Email the lab",
} as const;

/** Number of research cards and team members to show on the home preview. */
export const HOME_FEATURED_RESEARCH_COUNT = 3;
export const HOME_TEAM_PREVIEW_COUNT = 3;
