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
  {
    href: "/team",
    label: "People",
    children: [
      { href: "/team#principal-investigator", label: "PI" },
      { href: "/team#current-students", label: "Current Students" },
      { href: "/team#past-students", label: "Past Students" },
      { href: "/open-positions", label: "Open Positions" },
    ],
  },
];
