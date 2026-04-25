export type PrincipalInvestigator = {
  name: string;
  title: string;
  email: string;
  /** Optional path under /public, e.g. /team/robin-chataut.jpg */
  imageSrc?: string;
};

export type StudentMember = {
  id: string;
  name: string;
  bio: string;
  /** Optional path under /public */
  imageSrc?: string;
};

export const principalInvestigator: PrincipalInvestigator = {
  name: "Dr. Robin Chataut",
  title: "Dr. Robin Chataut is an Assistant Professor of Computer Science at Texas Christian University and Director of the TCU NextGen AI Lab, specializing in artificial intelligence, machine learning, cybersecurity, and advanced wireless communication. He earned his Ph.D. from the University of North Texas and focuses his research on AI-driven cybersecurity, adversarial AI, large language models in education, and next-generation wireless systems such as 5G, B5G, and 6G. His work includes secure authentication, malware detection, and improving educational outcomes through AI-powered personalized learning. He has received funding from organizations like the NSF and NASA, actively mentors students, and contributes to the academic community as a Senior Member of IEEE and a reviewer for leading journals and conferences.",
  email: "robin.chataut@tcu.edu",
  imageSrc: "/team/robin-chataut.png",
};

export const currentStudents: StudentMember[] = [
  {
    id: "rahul-shrestha",
    name: "Rahul Shrestha",
    bio: "Pursuing a B.S. in Computer Science at TCU. Rahul's research focuses on adversarial attacks using LLMs and finding impact of AI on undergraduate education.",
    imageSrc: "/team/rahul-shrestha.png",
  },
  {
    id: "gabby-campos",
    name: "Gabby Campos",
    bio: "Pursuing a B.S. in Computer Science at TCU. Gabby is working on generating real world cyberattacks using LLMs and finding defense strategies.",
    imageSrc: "/team/gabby-campos.png",
  },
  {
    id: "jayapradeep-srinivasan",
    name: "JayaPradeep Srinivasan",
    bio: "Pursuing a B.S. in Computer Science at TCU. His research focus is developing AI-powered tutoring tools for students.",
    imageSrc: "/team/jaypradeep.png",
  },
  {
    id: "riley-phan",
    name: "Riley Phan",
    bio: "Pursuing a B.S. in Computer Science at TCU. Riley is working on finding vulnerabilities and bias in public and medical LLMs.",
    imageSrc: "/team/riley-phan.png",
  },
  {
    id: "tam-nguyen",
    name: "Tam Nguyen",
    bio: "Pursuing a B.S. in Computer Science at TCU. Tam's research interests include AI-based phishing detection. She is building a tool to automate phishing detection in browsers.",
  },
];
