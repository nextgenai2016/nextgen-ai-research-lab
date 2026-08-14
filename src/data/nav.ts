export type NavItem = {
  href: string;
  label: string;
  children?: NavItem[];
};

export const mainNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/publications", label: "Publications" },
  { href: "/research", label: "Projects" },
  { href: "/news", label: "News" },
  { href: "/team", label: "Team" },
  { href: "/open-positions", label: "Open Positions" },
];
