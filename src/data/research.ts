export type ResearchProject = {
  id: string;
  title: string;
  description: string;
  areas: string[];
  status: string;
  stage: string;
  tagline: string;
  problem: string;
  approach: string[];
  impact: string;
  /** Optional image under /public, e.g. /research/cybersecurity.jpg */
  imageSrc?: string;
};

export const researchPageIntro = {
  title: "Active Projects",
  summary:
    "We build, test, and measure AI systems across cybersecurity, education, healthcare, and next-generation networks.",
} as const;

export const researchProjects: ResearchProject[] = [
  {
    id: "cybersecurity",
    title: "AI and ML for Cybersecurity Offense and Defense",
    imageSrc: "/research/Cybersecurity-AI.png",
    description:
      "Our work leverages AI, ML, and LLMs to address evolving cybersecurity challenges across both offensive and defensive domains.",
    status: "Research · v1.1",
    stage: "Detection · defense · adversarial AI",
    tagline: "Building adaptive defenses against modern AI-enabled threats.",
    problem:
      "Cyber attacks are becoming faster, more automated, and harder to distinguish from legitimate behavior as attackers adopt generative AI and large language models.",
    approach: [
      "Train ML and LLM pipelines for phishing email, malicious URL, malware, and intrusion detection.",
      "Evaluate systems against adversarial prompts, prompt injection, social engineering, and deepfake-style attacks.",
      "Study green cybersecurity methods that reduce energy cost while preserving detection performance.",
    ],
    impact:
      "The goal is practical, affordable security tooling for universities, small businesses, and network operators facing AI-accelerated threats.",
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
    status: "Research · v1.1",
    stage: "Tutoring · learning analytics · classroom AI",
    tagline: "Helping students learn with systems that support, not replace, thinking.",
    problem:
      "Students need timely feedback and individualized support, but AI tools can also weaken critical thinking when they simply provide answers.",
    approach: [
      "Design AI-powered teaching assistants and tutoring systems for scalable classroom support.",
      "Measure how AI affects student engagement, reflection, and critical thinking.",
      "Build adaptive learning tools grounded in responsible and ethical AI practices.",
    ],
    impact:
      "The work aims to improve learning outcomes while keeping students actively engaged in reasoning, reflection, and problem solving.",
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
    status: "Research · v1.1",
    stage: "Healthcare · bias · decision support",
    tagline: "Applying AI carefully where trust, equity, and safety matter.",
    problem:
      "Healthcare AI systems can offer useful support, but they must be evaluated for bias, robustness, safety, and fit with real clinical workflows.",
    approach: [
      "Analyze LLM behavior on health-related questions for bias, reliability, and safety gaps.",
      "Prototype supportive tools for trauma-informed pediatric care and nutrition planning.",
      "Explore prediction tools such as Pediatric Early Warning Score support for clinical decision making.",
    ],
    impact:
      "The goal is to support clinicians, patients, and families with AI tools that are useful, equitable, and appropriately constrained.",
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
    status: "Research · v1.1",
    stage: "5G · B5G · 6G · quantum communication",
    tagline: "Designing intelligent communication systems for future networks.",
    problem:
      "Future networks need higher capacity, lower latency, stronger security, and better energy efficiency under increasingly complex wireless conditions.",
    approach: [
      "Study AI, ML, and quantum communication methods for next-generation network design.",
      "Develop algorithms for signal detection, channel estimation, and user scheduling.",
      "Evaluate ultra-massive MIMO, mmWave, and terahertz communication architectures.",
    ],
    impact:
      "This research supports more reliable, secure, and efficient wireless systems for 5G, B5G, and 6G deployments.",
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
    status: "Research · v1.1",
    stage: "Massive MIMO · mmWave · physical-layer security",
    tagline: "Improving wireless performance through lower-complexity signal processing.",
    problem:
      "Massive MIMO and mmWave systems can dramatically increase capacity, but practical deployments face complexity, channel modeling, and security challenges.",
    approach: [
      "Design low-complexity detection, precoding, and channel estimation algorithms.",
      "Study V2V and V2I communication using massive MIMO methods.",
      "Use ML-based channel modeling to strengthen physical-layer security.",
    ],
    impact:
      "The work helps make advanced wireless architectures more practical for real networks, vehicles, and secure communication systems.",
    areas: [
      "Low-complexity detection, precoding, and channel estimation algorithms",
      "V2V (Vehicle-to-Vehicle) and V2I (Vehicle-to-Infrastructure) communication using massive MIMO",
      "ML-based channel modeling for enhanced physical-layer security",
    ],
  },
];
