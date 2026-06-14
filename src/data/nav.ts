export type NavItem = {
  href: string;
  label: string;
  children?: NavItem[];
};

export const mainNav: NavItem[] = [
  { href: "/", label: "Home" },
  {
    href: "/team",
    label: "Research Team",
    children: [
      { href: "/team#principal-investigator", label: "PI" },
      { href: "/team#current-students", label: "Current Students" },
      { href: "/team#past-students", label: "Past Students" },
      { href: "/open-positions", label: "Open Positions" },
    ],
  },
  { href: "/news", label: "News" },
  { href: "/research", label: "Research" },
  { href: "/publications", label: "Publications" },
];
