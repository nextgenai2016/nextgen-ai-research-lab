export type ContactInfo = {
  email: string;
  /** Shown in the footer when set (e.g. office line). */
  phone?: string;
  address: readonly string[];
  social: readonly { label: string; href: string }[];
};

export const contact: ContactInfo = {
  email: "ailabs@tcu.edu",

  address: [
    "College of Science and Engineering",
    "2840 West Bowie Street",
    "Fort Worth, Texas, 76109",
  ],
  social: [
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com" },
  ],
};
