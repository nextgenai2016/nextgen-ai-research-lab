export type ResearchProject = {
  id: string;
  title: string;
  description: string;
  areas: string[];
  /** Optional image under /public, e.g. /research/cybersecurity.jpg */
  imageSrc?: string;
};

export const researchPageIntro = {
  title: "Current Research Projects",
  summary:
    "Our research lab addresses key challenges in modern technology spanning cybersecurity, education, healthcare, and next-generation wireless networks. We investigate how artificial intelligence (AI), machine learning (ML), and large language models (LLMs) can enhance security, improve educational outcomes, and enable efficient, secure communication systems for 5G, B5G, and 6G networks.",
} as const;

export const researchProjects: ResearchProject[] = [
  {
    id: "cybersecurity",
    title: "AI and ML for Cybersecurity Offense and Defense",
    imageSrc: "/research/Cybersecurity-AI.png",
    description:
      "Our work leverages AI, ML, and LLMs to address evolving cybersecurity challenges across both offensive and defensive domains.",
    areas: [
      "ML- and LLM-based phishing email and URL detection",
      "AI-driven malware detection, intrusion detection, and threat monitoring",
      "Network traffic analysis for early anomaly and cyberattack detection",
      "Green cybersecurity for energy-efficient and sustainable security systems",
      "LLM-powered adaptive defense strategies against adversarial and prompt-injection attacks",
      "AI-assisted security frameworks for cost-effective small business protection",
      "Detection of social engineering, smishing, and deepfake-based attacks",
    ],
  },
  {
    id: "education",
    title: "AI for Education",
    imageSrc: "/research/ai-education.png",
    description:
      "We explore how AI and LLMs can transform teaching and learning through scalable, personalized, and ethical educational technologies.",
    areas: [
      "AI-powered Teaching Assistants for large-scale classroom support",
      "Personalized LLM-based tutoring systems",
      "Impact of AI on student engagement and critical thinking",
      "Adaptive learning platforms for diverse learning styles",
      "Ethical and responsible AI use in education",
    ],
  },
  {
    id: "healthcare",
    title: "AI in Healthcare",
    imageSrc: "/research/ai-healthcare.png",
    description:
      "Our healthcare-focused research applies AI and LLMs to improve patient outcomes, equity, and decision support.",
    areas: [
      "Bias and robustness analysis of LLMs for health-related queries",
      "LLM-based supportive tools for trauma-informed pediatric care",
      "AI-enhanced Pediatric Early Warning Score (PEWS) prediction",
      "Adaptive AI-driven diet and nutrition management tools",
    ],
  },
  {
    id: "5g-6g",
    title: "Key Enabling Technologies for 5G, B5G, and 6G Networks",
    imageSrc: "/research/5g-b5g.png",
    description:
      "We investigate enabling technologies that improve performance, reliability, security, and energy efficiency in next-generation wireless networks.",
    areas: [
      "AI, ML, and quantum communication for future networks",
      "Signal detection, channel estimation, and user scheduling for B5G/6G",
      "Ultra-massive MIMO, mmWave, and terahertz communications",
    ],
  },
  {
    id: "massive-mimo",
    title: "Massive MIMO and mmWave Systems",
    imageSrc: "/research/mimo.png",
    description:
      "Our massive MIMO research focuses on algorithmic, architectural, and ML-driven solutions for next-generation wireless systems.",
    areas: [
      "Low-complexity detection, precoding, and channel estimation algorithms",
      "V2V (Vehicle-to-Vehicle) and V2I (Vehicle-to-Infrastructure) communication using massive MIMO",
      "ML-based channel modeling for enhanced physical-layer security",
    ],
  },
];
