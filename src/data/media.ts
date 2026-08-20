export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  title: string;
  caption: string;
  date: string;
  href?: string;
  featured?: boolean;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "lockheed-ethics-team-2026",
    src: "/media/ethics-competition-team.jpg",
    alt: "Peter Vo, Robin Chataut, and Amarachi Chiemela at the Lockheed Martin Ethics in Engineering Competition",
    title: "TCU at the Ethics in Engineering Competition",
    caption:
      "Peter Vo, Robin Chataut, and Amarachi Chiemela represented TCU at Lockheed Martin’s global competition in Bethesda, Maryland.",
    date: "February 2026",
    href: "https://cse.tcu.edu/stories/posts/ethics-in-engineering.php",
    featured: true,
  },
  {
    id: "lockheed-ethics-competition-2026",
    src: "/media/ethics-competition-room.jpg",
    alt: "Attendees gathered in a large conference hall for the Lockheed Martin Ethics in Engineering Competition",
    title: "A Global Engineering Ethics Forum",
    caption:
      "University teams gathered to examine difficult decisions at the intersection of artificial intelligence, cybersecurity, and national security.",
    date: "February 2026",
    href: "https://cse.tcu.edu/stories/posts/ethics-in-engineering.php",
  },
  {
    id: "lockheed-ethics-portrait-2026",
    src: "/media/ethics-competition-stage.jpg",
    alt: "Peter Vo, Robin Chataut, and Amarachi Chiemela smiling in front of the competition backdrop",
    title: "Ethical Leadership in the Age of AI",
    caption:
      "The TCU team worked through a rigorous Black Hat simulation involving AI governance, security, and stakeholder priorities.",
    date: "February 2026",
    href: "https://cse.tcu.edu/stories/posts/ethics-in-engineering.php",
  },
  {
    id: "lockheed-ethics-event-2026",
    src: "/media/ethics-competition-event.jpg",
    alt: "Peter Vo and Amarachi Chiemela on the illuminated competition stage",
    title: "Horned Frogs on the National Stage",
    caption:
      "TCU computer science students Peter Vo and Amarachi Chiemela at Lockheed Martin’s corporate headquarters.",
    date: "February 2026",
    href: "https://cse.tcu.edu/stories/posts/ethics-in-engineering.php",
  },
];
