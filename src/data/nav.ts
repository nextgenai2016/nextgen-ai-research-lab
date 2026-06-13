export type NavItem = {
  href: string;
  label: string;
};

export const mainNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/team", label: "Research Team" },
  { href: "/news", label: "News" },
  { href: "/research", label: "Research" },
  { href: "/publications", label: "Publications" },
  { href: "/open-positions", label: "Open Positions" },
];
