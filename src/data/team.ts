export type PrincipalInvestigator = {
  name: string;
  title: string;
  affiliation: string;
  department: string;
  email: string;
  imageSrc: string;
  googleScholar: string;
  github: string;
  linkedin: string;
  bio: string;
};

export type TeamMember = {
  id: string;
  name: string;
  bio: string;
  /** Optional path under /public */
  imageSrc?: string;
};

export type StudentMember = TeamMember;

export const principalInvestigator: PrincipalInvestigator = {
  name: "Robin Chataut",
  title: "Assistant Professor and Director of Graduate Studies",
  affiliation: "Texas Christian University",
  department: "Department of Computer Science",
  email: "robin.chataut@tcu.edu",
  imageSrc: "/team/robin-chataut.png",

  googleScholar: "https://scholar.google.com/citations?user=0ixaP0AAAAAJ",
  github: "https://github.com/robinchataut",
  linkedin: "https://www.linkedin.com/in/robinchataut/",

  bio: `Dr. Robin Chataut is an Assistant Professor and Director of Graduate Studies in the Department of Computer Science at Texas Christian University (TCU), where he leads the NextGen AI Research Lab. His research focuses on Artificial Intelligence, Cybersecurity, Large Language Models (LLMs), Trustworthy AI, AI for Healthcare, and Next-Generation Wireless Networks (5G/6G). His work has been published in leading venues including IEEE Access, Sensors, ACM conferences, AAAI workshops, and IFIP DBSec. He is a Senior Member of IEEE and actively collaborates with students and researchers on advancing secure, trustworthy, and human-centered AI systems.`,
};

export const currentStudents: StudentMember[] = [
  {
    id: "jayapradeep-srinivasan",
    name: "JayaPradeep Srinivasan",
    bio: "B.S. in Computer Science, Texas Christian University. Research on developing AI-powered tutoring tools for students.",
    imageSrc: "/team/jaypradeep.png",
  },
  {
    id: "griffin-kuchar",
    name: "Griffin Kuchar",
    bio: "B.S. in Computer Science, Texas Christian University. Research on AI for healthcare in collaboration with the TCU Nursing Department and Children's Hospital.",
  },
];

export const pastStudents: TeamMember[] = [
  {
    id: "gabby-campos",
    name: "Gabby Campos",
    bio: "B.S. in Computer Science, Texas Christian University. Research on generating real world cyberattacks using LLMs and finding defense strategies.",
    imageSrc: "/team/gabby-campos.png",
  },
  {
    id: "riley-phan",
    name: "Riley Phan",
    bio: "B.S. in Computer Science, Texas Christian University. Research on finding vulnerabilities and bias in public and medical LLMs.",
    imageSrc: "/team/riley-phan.png",
  },
  {
    id: "tam-nyugen",
    name: "Tam Nyugen",
    bio: "B.S. in Computer Science, Texas Christian University. Research interests include AI-based phishing detection and tools to automate phishing detection in browsers.",
  },
  {
    id: "rahul-shrestha",
    name: "Rahul Shrestha",
    bio: "B.S. in Computer Science, Texas Christian University. Research on adversarial attacks using LLMs and the impact of AI on undergraduate education.",
    imageSrc: "/team/rahul-shrestha-2026.png",
  },
  {
    id: "nagendra-chaudhary",
    name: "Nagendra Chaudhary",
    bio: "B.S. in Computer Science, Texas Christian University. Research on AI-based intrusion detection tools.",
  },
  {
    id: "madhavam-shahi",
    name: "Madhavam Shahi",
    bio: "B.S. in Computer Science, Texas Christian University. Research interests include AI for healthcare and supporting children who have faced trauma.",
  },
  {
    id: "yusuf-usman",
    name: "Yusuf Usman",
    bio: "M.S. in Cybersecurity, Quinnipiac University. Research on ML/AI techniques for phishing detection, attack and defense strategies, and malware detection.",
  },
  {
    id: "mary-nankya",
    name: "Mary Nankya",
    bio: "M.S. in Computer Science, Fitchburg State University. Research on ML defense mechanisms, industrial control systems, and threat incidents.",
  },
  {
    id: "aadesh-upadhyay",
    name: "Aadesh Upadhyay",
    bio: "M.S. in Computer Science, University of North Texas. Research on Cybersecurity and AI.",
  },
  {
    id: "daniel-j-vitashkevich",
    name: "Daniel J Vitashkevich",
    bio: "B.S. in Computer Science, Quinnipiac University. Research in Next Generation Networks.",
  },
  {
    id: "muriuki-mureithi-caleb",
    name: "Muriuki-Mureithi Caleb",
    bio: "B.S. in Computer Science, Quinnipiac University. Research in Next Generation Networks.",
  },
  {
    id: "alex-phoummalayvane",
    name: "Alex Phoummalayvane",
    bio: "B.S. in Computer Science, Fitchburg State University. Research in IoT, Smart Cities, and Industry 4.0.",
  },
  {
    id: "maxwell-zostant",
    name: "Maxwell Zostant",
    bio: "B.S. in Computer Information Systems, Fitchburg State University. Research in security, privacy, and ethics.",
  },
];
