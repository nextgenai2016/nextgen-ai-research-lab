export type PublicationType = "Book" | "Chapter" | "Conference" | "Journal";

export type Publication = {
  id: string;
  title: string;
  type: PublicationType;
  year: number;
  authors: string[];
  summary: string;
  links?: {
    paper?: string;
    doi?: string;
    citation?: string;
    code?: string;
    demo?: string;
  };
};

export const publicationTypes: PublicationType[] = ["Book", "Chapter", "Conference", "Journal"];

export const publications: Publication[] = [
  {
    id: "modular-llm-framework-education-2026",
    title:
      "Modular LLM Framework for Personalized Educational Content Generation with Retrieval-Augmented Grounding and Multimodal Outputs",
    type: "Conference",
    year: 2026,
    authors: ["Jayaraman Srinivas", "R. Phan", "G. Campos", "N. Chaudhary", "R. Chataut"],
    summary:
      "Presents a modular LLM framework for personalized educational content generation using retrieval-augmented grounding and multimodal outputs. In Proceedings of the AAAI-26 Artificial Intelligence for Education Workshop (AI4EDU), Springer LNCS. In press.",
    links: {
      paper: "https://drive.google.com/file/d/1sn2bh6HENmMpAu5jil3adevT7VoPDYym/view",
    },
  },
  {
    id: "large-language-models-qualitative-analysis-2026",
    title:
      "Large Language Models in Qualitative Analysis: Comparing Traditional and Researcher-Interpreted Approaches",
    type: "Journal",
    year: 2026,
    authors: ["R. Misra", "R. Dahal", "B. Kirk", "R. Khan", "G. Dogan", "R. Chataut", "P. Gyawali"],
    summary:
      "Compares traditional and researcher-interpreted uses of large language models for qualitative analysis in International Journal of Qualitative Methods.",
    links: {
      doi: "https://doi.org/10.1177/16094069261426100",
    },
  },
  {
    id: "trustworthy-agentic-rag-systems-2026",
    title:
      "Designing Trustworthy Agentic RAG Systems through Modality-Separated Interaction and Error-Aware Memory",
    type: "Conference",
    year: 2026,
    authors: ["A. Sirandass", "J. Rangu", "Y. Usman", "R. Chataut"],
    summary:
      "Explores trustworthy agentic RAG system design through modality-separated interaction and error-aware memory for the TRUST-CUA Workshop at ACM IUI 2026.",
    links: {
      paper: "https://sites.google.com/view/trust-cuaiui26/home%20",
    },
  },
  {
    id: "ai-ml-llm-5g-6g-survey-2025",
    title:
      "AI, ML, and LLM Integration in 5G/6G Networks: A Comprehensive Survey of Architectures, Challenges, and Future Directions",
    type: "Journal",
    year: 2025,
    authors: ["Y. Usman", "H. Oladipupo", "A. D. During", "R. Akl", "R. Chataut"],
    summary:
      "Surveys AI, ML, and LLM integration across 5G and 6G network architectures, challenges, and future research directions in IEEE Access.",
    links: {
      doi: "https://doi.org/10.1109/ACCESS.2025.3608736",
    },
  },
  {
    id: "green-cybersecurity-ai-ml-llms-2025",
    title:
      "Green Cybersecurity: Leveraging AI, ML, and LLMs to Optimize Energy, Threat Detection, and Sustainability Frameworks",
    type: "Journal",
    year: 2025,
    authors: ["Y. Usman", "C. J. Ihejirika", "S. N. Offor", "R. Akl", "R. Chataut"],
    summary:
      "Examines how AI, ML, and LLMs can support energy-efficient cybersecurity, threat detection, and sustainability frameworks in IEEE Access.",
    links: {
      doi: "https://doi.org/10.1109/ACCESS.2025.3602451",
    },
  },
  {
    id: "project-pulse-peer-evaluation-2025",
    title:
      "Project Pulse: Enhancing Peer Evaluation and Team Accountability in Senior Design Projects",
    type: "Conference",
    year: 2025,
    authors: ["B. Wei", "R. Chataut", "L. Deng"],
    summary:
      "Introduces Project Pulse as a peer evaluation and team accountability approach for senior design project courses.",
    links: {
      doi: "https://doi.org/10.18293/seke2025-107",
    },
  },
  {
    id: "autota-virtual-teaching-assistant-2025",
    title: "AutoTA: A Dynamic Intent-Based Virtual Teaching Assistant for Students Using Open Source LLMs",
    type: "Journal",
    year: 2025,
    authors: ["R. Dahal", "G. Murray", "R. Chataut", "M. Hefeida", "A. K. Srivastava", "P. K. Gyawali"],
    summary:
      "Presents AutoTA, an intent-based virtual teaching assistant built with open source LLMs for student support in IEEE Access.",
    links: {
      doi: "https://doi.org/10.1109/ACCESS.2025.3576329",
    },
  },
  {
    id: "deep-reinforcement-learning-beamforming-2025",
    title: "Deep Reinforcement Learning for Adaptive Beamforming in 6G Massive MIMO Systems Using DeepMIMO",
    type: "Conference",
    year: 2025,
    authors: ["Y. Usman", "C. A. Muriuki-Mureithi", "D. Vitashkevich", "R. Akl", "R. Chataut"],
    summary:
      "Applies deep reinforcement learning to adaptive beamforming in 6G massive MIMO systems using DeepMIMO.",
    links: {
      doi: "https://doi.org/10.1109/AIIoT65859.2025.11105337",
    },
  },
  {
    id: "phishproof-ai-driven-phishing-detection-2025",
    title: "PhishProof: AI-Driven Phishing Detection with Optimized Feature Selection for Scalable Security",
    type: "Conference",
    year: 2025,
    authors: ["Y. Usman", "B. Girardi", "R. Akl", "P. K. Gyawali", "R. Chataut"],
    summary:
      "Presents an AI-driven phishing detection system with optimized feature selection for scalable security. Won Best Presentation Award.",
    links: {
      doi: "https://doi.org/10.1109/AIIoT65859.2025.11105302",
    },
  },
  {
    id: "ai-enhanced-channel-estimation-6g-2025",
    title: "AI-Enhanced Deep Neural Network Architecture for Accurate Channel Estimation in 6G Networks",
    type: "Conference",
    year: 2025,
    authors: ["Y. Usman", "D. Vitashkevich", "C. A. Muriuki-Mureithi", "R. Akl", "R. Chataut"],
    summary:
      "Develops an AI-enhanced deep neural network architecture for accurate channel estimation in 6G networks.",
    links: {
      doi: "https://doi.org/10.1109/AIIoT65859.2025.11105312",
    },
  },
  {
    id: "spam-no-more-cross-model-analysis-2024",
    title:
      "Spam No More: A Cross-Model Analysis of Machine Learning Techniques and Large Language Model Efficacies",
    type: "Conference",
    year: 2024,
    authors: ["R. Chataut", "A. Upadhyay", "Y. Usman", "M. Nankya", "P. K. Gyawali"],
    summary:
      "Compares machine learning and large language model approaches for spam detection across models and evaluation settings.",
    links: {
      doi: "https://doi.org/10.1109/CSNet64211.2024.10851763",
    },
  },
  {
    id: "security-privacy-ehealth-ai-ml-2024",
    title: "Security and Privacy in E-Health Systems: A Review of AI and Machine Learning Techniques",
    type: "Journal",
    year: 2024,
    authors: ["M. Nankya", "A. Mugisa", "Y. Usman", "A. Upadhyay", "R. Chataut"],
    summary:
      "Reviews AI and machine learning techniques for improving security and privacy in e-health systems in IEEE Access.",
    links: {
      doi: "https://doi.org/10.1109/ACCESS.2024.3469215",
    },
  },
  {
    id: "enhancing-phishing-detection-ai-dataset-2024",
    title:
      "Enhancing Phishing Detection with AI: A Novel Dataset and Comprehensive Analysis Using Machine Learning and Large Language Models",
    type: "Conference",
    year: 2024,
    authors: ["R. Chataut", "Y. Usman", "C. M. A. Rahman", "S. Gyawali", "P. K. Gyawali"],
    summary:
      "Introduces a phishing detection dataset and evaluates machine learning and LLM-based detection approaches. Won Best Presentation Award.",
    links: {
      doi: "https://doi.org/10.1109/UEMCON62879.2024.10754710",
    },
  },
  {
    id: "llms-cyber-attacks-vehicle-systems-2024",
    title: "The Dark Side of AI: Large Language Models as Tools for Cyber Attacks on Vehicle Systems",
    type: "Conference",
    year: 2024,
    authors: ["Y. Usman", "P. K. Gyawali", "S. Gyawali", "R. Chataut"],
    summary:
      "Analyzes how large language models can be misused for cyber attacks on vehicle systems. Won Best Presentation Award.",
    links: {
      doi: "https://doi.org/10.1109/UEMCON62879.2024.10754676",
    },
  },
  {
    id: "connecticut-data-breaches-2024",
    title: "Unveiling Cyber Threats: A Comprehensive Analysis of Connecticut Data Breaches",
    type: "Conference",
    year: 2024,
    authors: ["R. Chataut", "Y. Usman", "F. Scholl"],
    summary:
      "Provides a comprehensive analysis of Connecticut data breaches and their implications for cyber threat awareness.",
    links: {
      doi: "https://doi.org/10.18260/1-2--45786",
    },
  },
  {
    id: "adaptive-user-scheduling-6g-journal-2024",
    title: "An Adaptive User Scheduling Algorithm for 6G Massive MIMO Systems",
    type: "Journal",
    year: 2024,
    authors: ["R. Chataut", "R. Akl"],
    summary:
      "Presents an adaptive user scheduling algorithm for 6G massive MIMO systems. Invited Journal paper.",
    links: {
      doi: "https://doi.org/10.23919/ICACT60172.2024.10471912",
    },
  },
  {
    id: "ai-phishing-detection-ccwc-2024",
    title: "Can AI Keep You Safe? A Study of Large Language Models for Phishing Detection",
    type: "Conference",
    year: 2024,
    authors: ["R. Chataut", "P. K. Gyawali", "Y. Usman"],
    summary:
      "Studies the effectiveness of large language models for phishing detection and AI-assisted cyber safety.",
    links: {
      doi: "https://doi.org/10.1109/CCWC60891.2024.10427626",
    },
  },
  {
    id: "6g-networks-ai-revolution-2024",
    title:
      "6G Networks and the AI Revolution: Exploring Technologies, Applications, and Emerging Challenges",
    type: "Journal",
    year: 2024,
    authors: ["R. Chataut", "M. Nankya", "R. Akl"],
    summary:
      "Reviews 6G network technologies, AI-enabled applications, and emerging research challenges in Sensors.",
    links: {
      doi: "https://doi.org/10.3390/s24061888",
    },
  },
  {
    id: "securing-industrial-control-systems-2023",
    title:
      "Securing Industrial Control Systems: Components, Cyber Threats, and Machine Learning-Driven Defense Strategies",
    type: "Journal",
    year: 2023,
    authors: ["M. Nankya", "R. Chataut", "R. Akl"],
    summary:
      "Reviews industrial control system components, cyber threats, and machine learning-driven defense strategies. Invited Journal paper.",
    links: {
      doi: "https://doi.org/10.3390/s23218840",
    },
  },
  {
    id: "privacy-computer-ethics-2023",
    title: "Privacy in Computer Ethics: Navigating the Digital Age",
    type: "Journal",
    year: 2023,
    authors: ["M. Zostant", "R. Chataut"],
    summary:
      "Discusses privacy in computer ethics and the challenges of protecting users in the digital age.",
    links: {
      doi: "https://doi.org/10.11591/csit.v4i2.pp183-190",
    },
  },
  {
    id: "iot-applications-future-prospects-2023",
    title:
      "Unleashing the Power of IoT: A Comprehensive Review of IoT Applications and Future Prospects in Healthcare, Agriculture, Smart Homes, Smart Cities, and Industry 4.0",
    type: "Journal",
    year: 2023,
    authors: ["R. Chataut", "A. Phoummalayvane", "R. Akl"],
    summary:
      "Reviews IoT applications and future prospects across healthcare, agriculture, smart homes, smart cities, and Industry 4.0.",
    links: {
      doi: "https://doi.org/10.3390/s23167194",
    },
  },
  {
    id: "adaptive-user-scheduling-6g-conference-2023",
    title: "An Adaptive User Scheduling Algorithm for 6G Massive MIMO Systems",
    type: "Conference",
    year: 2023,
    authors: ["R. Chataut", "R. Akl", "U. K. Dey"],
    summary:
      "Presents an adaptive user scheduling algorithm for 6G massive MIMO systems. Won Best Paper Award.",
    links: {
      doi: "https://doi.org/10.23919/ICACT56868.2023.10079558",
    },
  },
  {
    id: "cv2x-massive-mimo-jacobi-detector-2022",
    title: "Performance Improvement in Cellular V2X (CV2X) by Using Massive MIMO Jacobi Detector",
    type: "Conference",
    year: 2022,
    authors: ["U. K. Dey", "R. Akl", "R. Chataut"],
    summary:
      "Improves cellular V2X performance using a massive MIMO Jacobi detector for vehicular communication.",
    links: {
      doi: "https://doi.org/10.1109/HONET56683.2022.10019065",
    },
  },
  {
    id: "massive-mimo-uplink-signal-detector-2022",
    title: "Massive MIMO Uplink Signal Detector for 5G and Beyond Networks",
    type: "Conference",
    year: 2022,
    authors: ["R. Chataut", "R. Akl", "U. K. Dey"],
    summary:
      "Develops a massive MIMO uplink signal detector for 5G and beyond wireless networks.",
    links: {
      doi: "https://doi.org/10.1109/WMCS55582.2022.9866166",
    },
  },
  {
    id: "vehicular-communication-ldpc-throughput-2022",
    title:
      "Throughput Improvement in Vehicular Communication by Using Low Density Parity Check (LDPC) Code",
    type: "Conference",
    year: 2022,
    authors: ["U. K. Dey", "R. Akl", "R. Chataut"],
    summary:
      "Uses LDPC coding to improve throughput in vehicular communication systems.",
    links: {
      doi: "https://doi.org/10.1109/CCWC54503.2022.9720849",
    },
  },
  {
    id: "cv2x-ldpc-performance-2022",
    title:
      "Performance Improvement in Cellular V2X (CV2X) by Using Low Density Parity Check (LDPC) Code",
    type: "Conference",
    year: 2022,
    authors: ["U. K. Dey", "R. Akl", "R. Chataut"],
    summary:
      "Applies LDPC coding to improve cellular V2X performance in vehicular communication.",
    links: {
      doi: "https://doi.org/10.1109/UEMCON54665.2022.9965719",
    },
  },
  {
    id: "adaptive-mmwave-channel-estimation-tracking-2022",
    title: "Adaptive Millimeter-Wave Channel Estimation and Tracking",
    type: "Conference",
    year: 2022,
    authors: ["M. Robaei", "R. Akl", "R. Chataut", "U. K. Dey"],
    summary:
      "Presents adaptive millimeter-wave channel estimation and tracking methods for advanced communication systems.",
    links: {
      doi: "https://doi.org/10.23919/ICACT53585.2022.9728837",
    },
  },
  {
    id: "fast-convergent-detector-5g-massive-mimo-2021",
    title: "An Efficient and Fast-Convergent Detector for 5G and Beyond Massive MIMO Systems",
    type: "Conference",
    year: 2021,
    authors: ["R. Chataut", "R. Akl", "U. K. Dey"],
    summary:
      "Introduces an efficient fast-convergent detector for 5G and beyond massive MIMO systems.",
    links: {
      doi: "https://doi.org/10.1109/UEMCON53757.2021.9666709",
    },
  },
  {
    id: "ssor-gauss-seidel-detection-hardware-2021",
    title:
      "SSOR Preconditioned Gauss-Seidel Detection and Its Hardware Architecture for 5G and Beyond Massive MIMO Networks",
    type: "Journal",
    year: 2021,
    authors: ["R. Chataut", "R. Akl", "U. K. Dey", "M. Robaei"],
    summary:
      "Presents SSOR preconditioned Gauss-Seidel detection and hardware architecture for massive MIMO networks in Electronics.",
    links: {
      doi: "https://doi.org/10.3390/electronics10050578",
    },
  },
  {
    id: "selective-mimo-vehicular-communication-2021",
    title:
      "Selective MIMO in Vehicular Communication for Reliable Safety Services and High Speed Non-Safety Services",
    type: "Conference",
    year: 2021,
    authors: ["U. K. Dey", "R. Akl", "R. Chataut", "M. Robaei"],
    summary:
      "Studies selective MIMO techniques for reliable safety services and high-speed non-safety services in vehicular communication.",
    links: {
      doi: "https://doi.org/10.1109/UEMCON53757.2021.9666574",
    },
  },
  {
    id: "massive-mimo-overview-5g-beyond-2020",
    title:
      "Massive MIMO Systems for 5G and Beyond Networks: Overview, Recent Trends, Challenges, and Future Research Direction",
    type: "Journal",
    year: 2020,
    authors: ["R. Chataut", "R. Akl"],
    summary:
      "Provides a comprehensive overview of massive MIMO systems for 5G and beyond networks in Sensors.",
    links: {
      doi: "https://doi.org/10.3390/s20102753",
    },
  },
  {
    id: "massive-mimo-systems-for-5g-encyclopedia-2020",
    title: "Massive MIMO Systems for 5G",
    type: "Chapter",
    year: 2020,
    authors: ["R. Chataut", "R. Akl"],
    summary:
      "Encyclopedia entry summarizing massive MIMO systems and their role in 5G wireless networks.",
    links: {},
  },
  {
    id: "low-complexity-iterative-detectors-2020",
    title: "Efficient and Low-Complexity Iterative Detectors for 5G Massive MIMO Systems",
    type: "Conference",
    year: 2020,
    authors: ["R. Chataut", "R. Akl"],
    summary:
      "Presents efficient low-complexity iterative detectors for 5G massive MIMO systems.",
    links: {
      doi: "https://doi.org/10.1109/DCOSS49796.2020.00076",
    },
  },
  {
    id: "fair-scheduling-downlink-5g-massive-mimo-2020",
    title: "An Efficient and Fair Scheduling for Downlink 5G Massive MIMO Systems",
    type: "Conference",
    year: 2020,
    authors: ["R. Chataut", "R. Akl"],
    summary:
      "Develops an efficient and fair scheduling method for downlink 5G massive MIMO systems.",
    links: {
      doi: "https://doi.org/10.1109/WMCS49442.2020.9172382",
    },
  },
  {
    id: "accelerated-gauss-seidel-uplink-detection-2020",
    title:
      "Accelerated and Preconditioned Refinement of Gauss-Seidel Method for Uplink Signal Detection in 5G Massive MIMO Systems",
    type: "Conference",
    year: 2020,
    authors: ["R. Chataut", "R. Akl", "M. Robaei"],
    summary:
      "Improves Gauss-Seidel-based uplink signal detection for 5G massive MIMO systems through acceleration and preconditioning.",
    links: {
      doi: "https://doi.org/10.1109/CCWC47524.2020.9031209",
    },
  },
  {
    id: "spatial-multiplexing-mimo-vehicular-2020",
    title: "High Throughput Vehicular Communication Using Spatial Multiplexing MIMO",
    type: "Conference",
    year: 2020,
    authors: ["U. K. Dey", "R. Akl", "R. Chataut"],
    summary:
      "Uses spatial multiplexing MIMO to support high-throughput vehicular communication.",
    links: {
      doi: "https://doi.org/10.1109/CCWC47524.2020.9031225",
    },
  },
  {
    id: "modified-phy-layer-v2x-5g-nr-2020",
    title: "Modified PHY Layer for High Performance V2X Communication Using 5G NR",
    type: "Conference",
    year: 2020,
    authors: ["U. K. Dey", "R. Akl", "R. Chataut", "M. Robaei"],
    summary:
      "Proposes a modified PHY layer for high-performance V2X communication using 5G NR.",
    links: {
      doi: "https://doi.org/10.1109/UEMCON51285.2020.9298144",
    },
  },
  {
    id: "channel-gain-user-scheduling-2019",
    title: "Channel Gain Based User Scheduling for 5G Massive MIMO Systems",
    type: "Conference",
    year: 2019,
    authors: ["R. Chataut", "R. Akl"],
    summary:
      "Presents channel-gain-based user scheduling for 5G massive MIMO systems.",
    links: {
      doi: "https://doi.org/10.1109/HONET.2019.8908036",
    },
  },
  {
    id: "least-square-regressor-selection-2019",
    title: "Least Square Regressor Selection Based Detection for Uplink 5G Massive MIMO Systems",
    type: "Conference",
    year: 2019,
    authors: ["R. Chataut", "R. Akl", "U. K. Dey"],
    summary:
      "Applies least square regressor selection for uplink detection in 5G massive MIMO systems.",
    links: {
      doi: "https://doi.org/10.1109/WAMICON.2019.8765469",
    },
  },
  {
    id: "huber-fitting-admm-detection-2018",
    title: "Huber Fitting Based ADMM Detection for Uplink 5G Massive MIMO Systems",
    type: "Conference",
    year: 2018,
    authors: ["R. Chataut", "R. Akl"],
    summary:
      "Uses Huber fitting and ADMM for uplink detection in 5G massive MIMO systems.",
    links: {
      doi: "https://doi.org/10.1109/UEMCON.2018.8796735",
    },
  },
  {
    id: "efficient-low-complex-uplink-detection-2018",
    title: "Efficient and Low Complex Uplink Detection for 5G Massive MIMO Systems",
    type: "Conference",
    year: 2018,
    authors: ["R. Chataut", "R. Akl"],
    summary:
      "Presents efficient low-complexity uplink detection for 5G massive MIMO systems.",
    links: {
      doi: "https://doi.org/10.1109/WAMICON.2018.8363885",
    },
  },
  {
    id: "optimal-pilot-reuse-factor-2018",
    title: "Optimal Pilot Reuse Factor Based on User Environment in 5G Massive MIMO",
    type: "Conference",
    year: 2018,
    authors: ["R. Chataut", "R. Akl"],
    summary:
      "Studies optimal pilot reuse factor selection based on user environment in 5G massive MIMO systems.",
    links: {
      doi: "https://doi.org/10.1109/CCWC.2018.8301625",
    },
  },
  {
    id: "deepfake-technology-early-foundations-2025",
    title: "Introduction to Deepfake Technology and Its Early Foundations",
    type: "Chapter",
    year: 2025,
    authors: ["R. Chataut", "A. Upadhyay"],
    summary:
      "Book chapter introducing deepfake technology and its early foundations in Deepfakes and Their Impact on Business.",
    links: {
      doi: "https://doi.org/10.4018/979-8-3693-6890-9.ch001",
    },
  },
];
