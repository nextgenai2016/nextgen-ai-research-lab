export type PublicationType = "Book" | "Chapter" | "Conference" | "Journal";

export type Publication = {
  id: string;
  title: string;
  type: PublicationType;
  venue: string;
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
    id: "physiologically-validated-synthetic-ecg-generation-2026",
    title:
      "Physiologically Validated Synthetic ECG Generation via LLM-Guided Constraint Enforcement",
    type: "Conference",
    venue: "ICPR 2026 (AIHA)",
    year: 2026,
    authors: ["S. Bhandari", "R. Chataut"],
    summary:
      "In Proceedings of the 4th International Workshop on Artificial Intelligence for Healthcare Applications (AIHA) at International Conference on Pattern Recognition (ICPR), August, 2026.",
    links: {
      paper: "",
    },
  },
  {
    id: "llm-assisted-cyberattacks-break-down-dbsec-2026",
    title:
      "Where LLM-Assisted Cyberattacks Break Down: A Stage-Level Analysis of Workflow Execution Boundaries",
    type: "Conference",
    venue: "DBSec 2026",
    year: 2026,
    authors: ["G. Campos", "T. Nguyen", "C. Pandey", "P. K. Gyawali", "R. Chataut"],
    summary:
      "In Proceedings of the 40th Annual IFIP WG 11.3 Conference on Data and Applications Security and Privacy (DBSec 2026).",
    links: {
      paper: "https://dbsec2026.gmu.edu/program-accepted-papers/",
    },
  },
  {
    id: "modular-llm-framework-education-2026",
    title:
      "Modular LLM Framework for Personalized Educational Content Generation with Retrieval-Augmented Grounding and Multimodal Outputs",
    type: "Conference",
    venue: "AAAI 2026 (AI4EDU)",
    year: 2026,
    authors: ["J. Srinivas", "R. Phan", "G. Campos", "N. Chaudhary", "R. Chataut"],
    summary:
      "In Proceedings of the AAAI Workshop on AI for Education (AI4EDU), Singapore, 2026.",
    links: {
      paper: "https://drive.google.com/file/d/1sn2bh6HENmMpAu5jil3adevT7VoPDYym/view",
    },
  },
  {
    id: "trustworthy-agentic-rag-systems-2026",
    title:
      "Designing Trustworthy Agentic RAG Systems through Modality-Separated Interaction and Error-Aware Memory",
    type: "Conference",
    venue: "ACM IUI 2026 (TRUST-CUAI)",
    year: 2026,
    authors: ["A. Sirandass", "J. Rangu", "Y. Usman", "R. Chataut"],
    summary:
      "In Proceedings of the TRUST-CUAI Workshop at ACM IUI 2026, Paphos, Cyprus, 2026.",
    links: {
      paper: "https://sites.google.com/view/trust-cuaiui26/home%20",
    },
  },
  {
    id: "large-language-models-qualitative-analysis-2026",
    title:
      "Large Language Models in Qualitative Analysis: Comparing Traditional and Researcher-Interpreted Approaches",
    type: "Journal",
    venue: "International Journal of Qualitative Methods",
    year: 2026,
    authors: ["R. Misra", "R. Dahal", "B. Kirk", "R. Khan", "G. Dogan", "R. Chataut", "P. Gyawali"],
    summary: "International Journal of Qualitative Methods, Vol. 25, 2026.",
    links: {
      doi: "https://doi.org/10.1177/16094069261426100",
    },
  },
  {
    id: "ai-ml-llm-5g-6g-survey-2025",
    title:
      "AI, ML, and LLM Integration in 5G/6G Networks: A Comprehensive Survey of Architectures, Challenges, and Future Directions",
    type: "Journal",
    venue: "IEEE Access",
    year: 2025,
    authors: ["Y. Usman", "H. Oladipupo", "A. D. During", "R. Akl", "R. Chataut"],
    summary: "IEEE Access, 2025.",
    links: {
      doi: "https://doi.org/10.1109/ACCESS.2025.3608736",
    },
  },
  {
    id: "green-cybersecurity-ai-ml-llms-2025",
    title:
      "Green Cybersecurity: Leveraging AI, ML, and LLMs to Optimize Energy, Threat Detection, and Sustainability Frameworks",
    type: "Journal",
    venue: "IEEE Access",
    year: 2025,
    authors: ["Y. Usman", "C. J. Ihejirika", "S. N. Offor", "R. Akl", "R. Chataut"],
    summary: "IEEE Access, 2025.",
    links: {
      doi: "https://doi.org/10.1109/ACCESS.2025.3602451",
    },
  },
  {
    id: "project-pulse-peer-evaluation-2025",
    title:
      "Project Pulse: Enhancing Peer Evaluation and Team Accountability in Senior Design Projects",
    type: "Conference",
    venue: "SEKE 2025",
    year: 2025,
    authors: ["B. Wei", "R. Chataut", "L. Deng"],
    summary:
      "In Proceedings of the Thirty-Seventh International Conference on Software Engineering and Knowledge Engineering (SEKE 2025).",
    links: {
      doi: "https://doi.org/10.18293/seke2025-107",
    },
  },
  {
    id: "autota-virtual-teaching-assistant-2025",
    title: "AutoTA: A Dynamic Intent-Based Virtual Teaching Assistant for Students Using Open Source LLMs",
    type: "Journal",
    venue: "IEEE Access",
    year: 2025,
    authors: ["R. Dahal", "G. Murray", "R. Chataut", "M. Hefeida", "A. K. Srivastava", "P. K. Gyawali"],
    summary: "IEEE Access, 2025.",
    links: {
      doi: "https://doi.org/10.1109/ACCESS.2025.3576329",
    },
  },
  {
    id: "deep-reinforcement-learning-beamforming-2025",
    title: "Deep Reinforcement Learning for Adaptive Beamforming in 6G Massive MIMO Systems Using DeepMIMO",
    type: "Conference",
    venue: "IEEE AIIoT 2025",
    year: 2025,
    authors: ["Y. Usman", "C. A. Muriuki-Mureithi", "D. Vitashkevich", "R. Akl", "R. Chataut"],
    summary:
      "In Proceedings of the IEEE World AI IoT Congress (AIIoT 2025), 2025.",
    links: {
      doi: "https://doi.org/10.1109/AIIoT65859.2025.11105337",
    },
  },
  {
    id: "phishproof-ai-driven-phishing-detection-2025",
    title: "PhishProof: AI-Driven Phishing Detection with Optimized Feature Selection for Scalable Security",
    type: "Conference",
    venue: "IEEE AIIoT 2025",
    year: 2025,
    authors: ["Y. Usman", "B. Girardi", "R. Akl", "P. K. Gyawali", "R. Chataut"],
    summary:
      "In Proceedings of the IEEE World AI IoT Congress (AIIoT 2025), 2025.",
    links: {
      doi: "https://doi.org/10.1109/AIIoT65859.2025.11105302",
    },
  },
  {
    id: "ai-enhanced-channel-estimation-6g-2025",
    title: "AI-Enhanced Deep Neural Network Architecture for Accurate Channel Estimation in 6G Networks",
    type: "Conference",
    venue: "IEEE AIIoT 2025",
    year: 2025,
    authors: ["Y. Usman", "D. Vitashkevich", "C. A. Muriuki-Mureithi", "R. Akl", "R. Chataut"],
    summary:
      "In Proceedings of the IEEE World AI IoT Congress (AIIoT 2025), 2025.",
    links: {
      doi: "https://doi.org/10.1109/AIIoT65859.2025.11105312",
    },
  },
  {
    id: "spam-no-more-cross-model-analysis-2024",
    title:
      "Spam No More: A Cross-Model Analysis of Machine Learning Techniques and Large Language Model Efficacies",
    type: "Conference",
    venue: "IEEE CSNet 2024",
    year: 2024,
    authors: ["R. Chataut", "A. Upadhyay", "Y. Usman", "M. Nankya", "P. K. Gyawali"],
    summary:
      "In Proceedings of IEEE Conference on Cyber Security in Networking (CSNet 2024), Paris, France, 2024.",
    links: {
      doi: "https://doi.org/10.1109/CSNet64211.2024.10851763",
    },
  },
  {
    id: "security-privacy-ehealth-ai-ml-2024",
    title: "Security and Privacy in E-Health Systems: A Review of AI and Machine Learning Techniques",
    type: "Journal",
    venue: "IEEE Access",
    year: 2024,
    authors: ["M. Nankya", "A. Mugisa", "Y. Usman", "A. Upadhyay", "R. Chataut"],
    summary: "IEEE Access, 2024.",
    links: {
      doi: "https://doi.org/10.1109/ACCESS.2024.3469215",
    },
  },
  {
    id: "enhancing-phishing-detection-ai-dataset-2024",
    title:
      "Enhancing Phishing Detection with AI: A Novel Dataset and Comprehensive Analysis Using Machine Learning and Large Language Models",
    type: "Conference",
    venue: "IEEE UEMCON 2024",
    year: 2024,
    authors: ["R. Chataut", "Y. Usman", "C. M. A. Rahman", "S. Gyawali", "P. K. Gyawali"],
    summary:
      "In Proceedings of IEEE UEMCON 2024, IBM Research Center, New York, NY, USA, 2024.",
    links: {
      doi: "https://doi.org/10.1109/UEMCON62879.2024.10754710",
    },
  },
  {
    id: "llms-cyber-attacks-vehicle-systems-2024",
    title: "The Dark Side of AI: Large Language Models as Tools for Cyber Attacks on Vehicle Systems",
    type: "Conference",
    venue: "IEEE UEMCON 2024",
    year: 2024,
    authors: ["Y. Usman", "P. K. Gyawali", "S. Gyawali", "R. Chataut"],
    summary:
      "In Proceedings of IEEE UEMCON 2024, IBM Research Center, New York, NY, USA, 2024.",
    links: {
      doi: "https://doi.org/10.1109/UEMCON62879.2024.10754676",
    },
  },
  {
    id: "connecticut-data-breaches-2024",
    title: "Unveiling Cyber Threats: A Comprehensive Analysis of Connecticut Data Breaches",
    type: "Conference",
    venue: "ASEE-NE 2024",
    year: 2024,
    authors: ["R. Chataut", "Y. Usman", "F. Scholl"],
    summary:
      "In Proceedings of the 2024 ASEE Northeast Section Conference, Fairfield, CT, USA, 2024.",
    links: {
      doi: "https://doi.org/10.18260/1-2--45786",
    },
  },
  {
    id: "adaptive-user-scheduling-6g-journal-2024",
    title: "An Adaptive User Scheduling Algorithm for 6G Massive MIMO Systems",
    type: "Journal",
    venue: "ICACT Transactions on Advanced Communications Technology",
    year: 2024,
    authors: ["R. Chataut", "R. Akl"],
    summary: "ICACT Transactions on Advanced Communications Technology, 2024.",
    links: {
      doi: "https://doi.org/10.23919/ICACT60172.2024.10471912",
    },
  },
  {
    id: "ai-phishing-detection-ccwc-2024",
    title: "Can AI Keep You Safe? A Study of Large Language Models for Phishing Detection",
    type: "Conference",
    venue: "IEEE CCWC 2024",
    year: 2024,
    authors: ["R. Chataut", "P. K. Gyawali", "Y. Usman"],
    summary:
      "In Proceedings of the IEEE Computing and Communication Workshop and Conference (CCWC 2024), Las Vegas, NV, USA, 2024.",
    links: {
      doi: "https://doi.org/10.1109/CCWC60891.2024.10427626",
    },
  },
  {
    id: "6g-networks-ai-revolution-2024",
    title:
      "6G Networks and the AI Revolution: Exploring Technologies, Applications, and Emerging Challenges",
    type: "Journal",
    venue: "Sensors",
    year: 2024,
    authors: ["R. Chataut", "M. Nankya", "R. Akl"],
    summary: "Sensors, Vol. 24, No. 6, 2024.",
    links: {
      doi: "https://doi.org/10.3390/s24061888",
    },
  },
  {
    id: "securing-industrial-control-systems-2023",
    title:
      "Securing Industrial Control Systems: Components, Cyber Threats, and Machine Learning-Driven Defense Strategies",
    type: "Journal",
    venue: "Sensors",
    year: 2023,
    authors: ["M. Nankya", "R. Chataut", "R. Akl"],
    summary: "Sensors, Vol. 23, No. 21, 2023.",
    links: {
      doi: "https://doi.org/10.3390/s23218840",
    },
  },
  {
    id: "privacy-computer-ethics-2023",
    title: "Privacy in Computer Ethics: Navigating the Digital Age",
    type: "Journal",
    venue: "Computer Science and Information Technologies",
    year: 2023,
    authors: ["M. Zostant", "R. Chataut"],
    summary: "Computer Science and Information Technologies, Vol. 4, No. 2, 2023.",
    links: {
      doi: "https://doi.org/10.11591/csit.v4i2.pp183-190",
    },
  },
  {
    id: "iot-applications-future-prospects-2023",
    title:
      "Unleashing the Power of IoT: A Comprehensive Review of IoT Applications and Future Prospects in Healthcare, Agriculture, Smart Homes, Smart Cities, and Industry 4.0",
    type: "Journal",
    venue: "Sensors",
    year: 2023,
    authors: ["R. Chataut", "A. Phoummalayvane", "R. Akl"],
    summary: "Sensors, Vol. 23, No. 16, 2023.",
    links: {
      doi: "https://doi.org/10.3390/s23167194",
    },
  },
  {
    id: "adaptive-user-scheduling-6g-conference-2023",
    title: "An Adaptive User Scheduling Algorithm for 6G Massive MIMO Systems",
    type: "Conference",
    venue: "IEEE ICACT 2023",
    year: 2023,
    authors: ["R. Chataut", "R. Akl", "U. K. Dey"],
    summary:
      "In Proceedings of the International Conference on Advanced Communications Technology (ICACT 2023), Pyeongchang, South Korea, 2023.",
    links: {
      doi: "https://doi.org/10.23919/ICACT56868.2023.10079558",
    },
  },
  {
    id: "cv2x-massive-mimo-jacobi-detector-2022",
    title: "Performance Improvement in Cellular V2X (CV2X) by Using Massive MIMO Jacobi Detector",
    type: "Conference",
    venue: "IEEE HONET 2022",
    year: 2022,
    authors: ["U. K. Dey", "R. Akl", "R. Chataut"],
    summary:
      "In Proceedings of IEEE HONET 2022, 2022.",
    links: {
      doi: "https://doi.org/10.1109/HONET56683.2022.10019065",
    },
  },
  {
    id: "massive-mimo-uplink-signal-detector-2022",
    title: "Massive MIMO Uplink Signal Detector for 5G and Beyond Networks",
    type: "Conference",
    venue: "IEEE WMCS 2022",
    year: 2022,
    authors: ["R. Chataut", "R. Akl", "U. K. Dey"],
    summary:
      "In Proceedings of IEEE WMCS 2022, 2022.",
    links: {
      doi: "https://doi.org/10.1109/WMCS55582.2022.9866166",
    },
  },
  {
    id: "vehicular-communication-ldpc-throughput-2022",
    title:
      "Throughput Improvement in Vehicular Communication by Using Low Density Parity Check (LDPC) Code",
    type: "Conference",
    venue: "IEEE CCWC 2022",
    year: 2022,
    authors: ["U. K. Dey", "R. Akl", "R. Chataut"],
    summary:
      "In Proceedings of the IEEE Computing and Communication Workshop and Conference (CCWC 2022), Las Vegas, NV, USA, 2022.",
    links: {
      doi: "https://doi.org/10.1109/CCWC54503.2022.9720849",
    },
  },
  {
    id: "cv2x-ldpc-performance-2022",
    title:
      "Performance Improvement in Cellular V2X (CV2X) by Using Low Density Parity Check (LDPC) Code",
    type: "Conference",
    venue: "IEEE UEMCON 2022",
    year: 2022,
    authors: ["U. K. Dey", "R. Akl", "R. Chataut"],
    summary:
      "In Proceedings of IEEE UEMCON 2022, 2022.",
    links: {
      doi: "https://doi.org/10.1109/UEMCON54665.2022.9965719",
    },
  },
  {
    id: "adaptive-mmwave-channel-estimation-tracking-2022",
    title: "Adaptive Millimeter-Wave Channel Estimation and Tracking",
    type: "Conference",
    venue: "IEEE ICACT 2022",
    year: 2022,
    authors: ["M. Robaei", "R. Akl", "R. Chataut", "U. K. Dey"],
    summary:
      "In Proceedings of the International Conference on Advanced Communications Technology (ICACT 2022), Pyeongchang, South Korea, 2022.",
    links: {
      doi: "https://doi.org/10.23919/ICACT53585.2022.9728837",
    },
  },
  {
    id: "fast-convergent-detector-5g-massive-mimo-2021",
    title: "An Efficient and Fast-Convergent Detector for 5G and Beyond Massive MIMO Systems",
    type: "Conference",
    venue: "IEEE UEMCON 2021",
    year: 2021,
    authors: ["R. Chataut", "R. Akl", "U. K. Dey"],
    summary:
      "In Proceedings of IEEE UEMCON 2021, 2021.",
    links: {
      doi: "https://doi.org/10.1109/UEMCON53757.2021.9666709",
    },
  },
  {
    id: "ssor-gauss-seidel-detection-hardware-2021",
    title:
      "SSOR Preconditioned Gauss-Seidel Detection and Its Hardware Architecture for 5G and Beyond Massive MIMO Networks",
    type: "Journal",
    venue: "Electronics",
    year: 2021,
    authors: ["R. Chataut", "R. Akl", "U. K. Dey", "M. Robaei"],
    summary: "Electronics, Vol. 10, No. 5, 2021.",
    links: {
      doi: "https://doi.org/10.3390/electronics10050578",
    },
  },
  {
    id: "selective-mimo-vehicular-communication-2021",
    title:
      "Selective MIMO in Vehicular Communication for Reliable Safety Services and High Speed Non-Safety Services",
    type: "Conference",
    venue: "IEEE UEMCON 2021",
    year: 2021,
    authors: ["U. K. Dey", "R. Akl", "R. Chataut", "M. Robaei"],
    summary:
      "In Proceedings of IEEE UEMCON 2021, 2021.",
    links: {
      doi: "https://doi.org/10.1109/UEMCON53757.2021.9666574",
    },
  },
  {
    id: "massive-mimo-overview-5g-beyond-2020",
    title:
      "Massive MIMO Systems for 5G and Beyond Networks: Overview, Recent Trends, Challenges, and Future Research Direction",
    type: "Journal",
    venue: "Sensors",
    year: 2020,
    authors: ["R. Chataut", "R. Akl"],
    summary: "Sensors, Vol. 20, No. 10, 2020.",
    links: {
      doi: "https://doi.org/10.3390/s20102753",
    },
  },
  {
    id: "massive-mimo-systems-for-5g-encyclopedia-2020",
    title: "Massive MIMO Systems for 5G",
    type: "Chapter",
    venue: "Encyclopedia",
    year: 2020,
    authors: ["R. Chataut", "R. Akl"],
    summary: "Encyclopedia entry, 2020.",
    links: {},
  },
  {
    id: "low-complexity-iterative-detectors-2020",
    title: "Efficient and Low-Complexity Iterative Detectors for 5G Massive MIMO Systems",
    type: "Conference",
    venue: "IEEE DCOSS 2020",
    year: 2020,
    authors: ["R. Chataut", "R. Akl"],
    summary:
      "In Proceedings of IEEE DCOSS 2020, 2020.",
    links: {
      doi: "https://doi.org/10.1109/DCOSS49796.2020.00076",
    },
  },
  {
    id: "fair-scheduling-downlink-5g-massive-mimo-2020",
    title: "An Efficient and Fair Scheduling for Downlink 5G Massive MIMO Systems",
    type: "Conference",
    venue: "IEEE WMCS 2020",
    year: 2020,
    authors: ["R. Chataut", "R. Akl"],
    summary:
      "In Proceedings of IEEE WMCS 2020, 2020.",
    links: {
      doi: "https://doi.org/10.1109/WMCS49442.2020.9172382",
    },
  },
  {
    id: "accelerated-gauss-seidel-uplink-detection-2020",
    title:
      "Accelerated and Preconditioned Refinement of Gauss-Seidel Method for Uplink Signal Detection in 5G Massive MIMO Systems",
    type: "Conference",
    venue: "IEEE CCWC 2020",
    year: 2020,
    authors: ["R. Chataut", "R. Akl", "M. Robaei"],
    summary:
      "In Proceedings of the IEEE Computing and Communication Workshop and Conference (CCWC 2020), Las Vegas, NV, USA, 2020.",
    links: {
      doi: "https://doi.org/10.1109/CCWC47524.2020.9031209",
    },
  },
  {
    id: "spatial-multiplexing-mimo-vehicular-2020",
    title: "High Throughput Vehicular Communication Using Spatial Multiplexing MIMO",
    type: "Conference",
    venue: "IEEE CCWC 2020",
    year: 2020,
    authors: ["U. K. Dey", "R. Akl", "R. Chataut"],
    summary:
      "In Proceedings of the IEEE Computing and Communication Workshop and Conference (CCWC 2020), Las Vegas, NV, USA, 2020.",
    links: {
      doi: "https://doi.org/10.1109/CCWC47524.2020.9031225",
    },
  },
  {
    id: "modified-phy-layer-v2x-5g-nr-2020",
    title: "Modified PHY Layer for High Performance V2X Communication Using 5G NR",
    type: "Conference",
    venue: "IEEE UEMCON 2020",
    year: 2020,
    authors: ["U. K. Dey", "R. Akl", "R. Chataut", "M. Robaei"],
    summary:
      "In Proceedings of IEEE UEMCON 2020, 2020.",
    links: {
      doi: "https://doi.org/10.1109/UEMCON51285.2020.9298144",
    },
  },
  {
    id: "channel-gain-user-scheduling-2019",
    title: "Channel Gain Based User Scheduling for 5G Massive MIMO Systems",
    type: "Conference",
    venue: "IEEE HONET 2019",
    year: 2019,
    authors: ["R. Chataut", "R. Akl"],
    summary:
      "In Proceedings of IEEE HONET 2019, 2019.",
    links: {
      doi: "https://doi.org/10.1109/HONET.2019.8908036",
    },
  },
  {
    id: "least-square-regressor-selection-2019",
    title: "Least Square Regressor Selection Based Detection for Uplink 5G Massive MIMO Systems",
    type: "Conference",
    venue: "IEEE WAMICON 2019",
    year: 2019,
    authors: ["R. Chataut", "R. Akl", "U. K. Dey"],
    summary:
      "In Proceedings of IEEE WAMICON 2019, 2019.",
    links: {
      doi: "https://doi.org/10.1109/WAMICON.2019.8765469",
    },
  },
  {
    id: "huber-fitting-admm-detection-2018",
    title: "Huber Fitting Based ADMM Detection for Uplink 5G Massive MIMO Systems",
    type: "Conference",
    venue: "IEEE UEMCON 2018",
    year: 2018,
    authors: ["R. Chataut", "R. Akl"],
    summary:
      "In Proceedings of IEEE UEMCON 2018, 2018.",
    links: {
      doi: "https://doi.org/10.1109/UEMCON.2018.8796735",
    },
  },
  {
    id: "efficient-low-complex-uplink-detection-2018",
    title: "Efficient and Low Complex Uplink Detection for 5G Massive MIMO Systems",
    type: "Conference",
    venue: "IEEE WAMICON 2018",
    year: 2018,
    authors: ["R. Chataut", "R. Akl"],
    summary:
      "In Proceedings of IEEE WAMICON 2018, 2018.",
    links: {
      doi: "https://doi.org/10.1109/WAMICON.2018.8363885",
    },
  },
  {
    id: "optimal-pilot-reuse-factor-2018",
    title: "Optimal Pilot Reuse Factor Based on User Environment in 5G Massive MIMO",
    type: "Conference",
    venue: "IEEE CCWC 2018",
    year: 2018,
    authors: ["R. Chataut", "R. Akl"],
    summary:
      "In Proceedings of the IEEE Computing and Communication Workshop and Conference (CCWC 2018), Las Vegas, NV, USA, 2018.",
    links: {
      doi: "https://doi.org/10.1109/CCWC.2018.8301625",
    },
  },
  {
    id: "deepfake-technology-early-foundations-2025",
    title: "Introduction to Deepfake Technology and Its Early Foundations",
    type: "Chapter",
    venue: "Deepfakes and Their Impact on Business",
    year: 2025,
    authors: ["R. Chataut", "A. Upadhyay"],
    summary:
      "In Deepfakes and Their Impact on Business, IGI Global, 2025.",
    links: {
      doi: "https://doi.org/10.4018/979-8-3693-6890-9.ch001",
    },
  },
];
