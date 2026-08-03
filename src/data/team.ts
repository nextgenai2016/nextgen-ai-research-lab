export type PrincipalInvestigator = {
  name: string;
  title: string;
  affiliation: string;
  department: string;
  email: string;
  phone: string;
  address: string;
  education: string[];
  imageSrc: string;
  tcuProfile: string;
  googleScholar: string;
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
  title: "Assistant Professor of Computer Science and Director of Graduate Studies",
  affiliation: "Texas Christian University",
  department: "Department of Computer Science",
  email: "robin.chataut@tcu.edu",
  phone: "(817)-257-7056",
  address: "2840 West Bowie Street, Fort Worth, TX, USA, 76109",
  education: [
    "Ph.D. in Computer Science and Engineering, University of North Texas, 2020",
    "B.E. in Electronics and Communication Engineering, Tribhuvan University, Pulchowk Campus, 2014",
  ],
  imageSrc: "/team/robin-chataut.png",

  tcuProfile: "https://cse.tcu.edu/faculty-staff/view/robin-chataut",
  googleScholar: "https://scholar.google.com/citations?user=0ixaP0AAAAAJ",
  linkedin: "https://www.linkedin.com/in/robinchataut/",

  bio: `Dr. Robin Chataut is the Founder and Director of the TCU NextGen AI Lab, Assistant Professor, and Director of Graduate Studies in the Department of Computer Science at Texas Christian University (TCU). He earned his Ph.D. in Computer Science and Engineering from the University of North Texas.

His research focuses on developing trustworthy, secure, and human-centered artificial intelligence systems that address real-world challenges. His work spans artificial intelligence, machine learning, cybersecurity, large language models (LLMs), multimodal AI, human-centered computing, healthcare AI, and next-generation wireless communication systems.

At the TCU NextGen AI Lab, Dr. Chataut leads interdisciplinary research at the intersection of AI and cybersecurity, including adversarial AI, AI-powered cyber defense, secure authentication, malware and intrusion detection, privacy-preserving machine learning, AI-assisted education, educational technologies, and intelligent systems for healthcare. His research also explores AI-driven signal processing and physical-layer security for 5G, beyond-5G (B5G), and 6G wireless networks.

His research has been supported by the National Science Foundation (NSF), NASA, the National Institutes of Health (NIH), and other federal and state funding agencies. He has authored numerous peer-reviewed publications in leading AI, cybersecurity, and wireless communications venues and actively mentors undergraduate, master's, and Ph.D. students in cutting-edge research.

Dr. Chataut is a Senior Member of the IEEE and serves as a reviewer, editor, and program committee member for leading international journals and conferences. Through the TCU NextGen AI Lab, he is committed to advancing innovative AI technologies that are secure, trustworthy, and socially responsible while training the next generation of AI researchers and technology leaders.`,
};

export const currentPhdStudents: StudentMember[] = [];

export const currentUndergraduateStudents: StudentMember[] = [
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
    imageSrc: "/team/griffin.jpeg",
  },
  {
    id: "tam-nyugen",
    name: "Tam Nyugen",
    bio: "B.S. in Computer Science, Texas Christian University. Research interests include AI-based phishing detection and tools to automate phishing detection in browsers.",
    imageSrc: "/team/tam.jpeg",
  },
];

export const currentStudents: StudentMember[] = [
  ...currentPhdStudents,
  ...currentUndergraduateStudents,
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
    id: "rahul-shrestha",
    name: "Rahul Shrestha",
    bio: "B.S. in Computer Science, Texas Christian University. Research on adversarial attacks using LLMs and the impact of AI on undergraduate education.",
    imageSrc: "/team/rahul-2026.png",
  },
  {
    id: "nagendra-chaudhary",
    name: "Nagendra Chaudhary",
    bio: "B.S. in Computer Science, Texas Christian University. Research on AI-based intrusion detection tools.",
    imageSrc: "/team/nagendra.jpeg",
  },
  {
    id: "Sujit-Bhandari",
    name: "Sujit Bhandari",
    bio: "B.S. in Computer Science, Texas Christian University. Research on AI-for Healthcare.",
    imageSrc: "/team/sujit.jpeg",
  },
  {
    id: "madhavam-shahi",
    name: "Madhavam Shahi",
    bio: "B.S. in Computer Science, Texas Christian University. Research interests include AI for healthcare and supporting children who have faced trauma.",
    imageSrc: "/team/madhavam.jpeg",
  },
  {
    id: "yusuf-usman",
    name: "Yusuf Usman",
    bio: "M.S. in Cybersecurity, Quinnipiac University. Research on ML/AI techniques for phishing detection, attack and defense strategies, and malware detection.",
    imageSrc: "/team/yusuf.jpeg",
  },
  {
    id: "mary-nankya",
    name: "Mary Nankya",
    bio: "M.S. in Computer Science, Fitchburg State University. Research on ML defense mechanisms, industrial control systems, and threat incidents.",
    imageSrc: "/team/mary.jpeg",
  },
  {
    id: "aadesh-upadhyay",
    name: "Aadesh Upadhyay",
    bio: "M.S. in Computer Science, University of North Texas. Research on Cybersecurity and AI.",
    imageSrc: "/team/aadesh.jpg",
  },
  {
    id: "daniel-j-vitashkevich",
    name: "Daniel J Vitashkevich",
    bio: "B.S. in Computer Science, Quinnipiac University. Research in Next Generation Networks.",
    imageSrc: "/team/Daniel.jpeg",
  },
  {
    id: "muriuki-mureithi-caleb",
    name: "Muriuki-Mureithi Caleb",
    bio: "B.S. in Computer Science, Quinnipiac University. Research in Next Generation Networks.",
    imageSrc: "/team/generic-profile.svg",
  },
  {
    id: "alex-phoummalayvane",
    name: "Alex Phoummalayvane",
    bio: "B.S. in Computer Science, Fitchburg State University. Research in IoT, Smart Cities, and Industry 4.0.",
    imageSrc: "/team/generic-profile.svg",
  },
  {
    id: "maxwell-zostant",
    name: "Maxwell Zostant",
    bio: "B.S. in Computer Information Systems, Fitchburg State University. Research in security, privacy, and ethics.",
    imageSrc: "/team/generic-profile.svg",
  },
];
