export type NewsItem = {
  id: string;
  date: string;
  year: number;
  category: "Publication" | "Award" | "Talk" | "Media" | "Event" | "Update";
  title: string;
};

export const newsItems: NewsItem[] = [
  {
    id: "news-001",
    date: "April 2026",
    year: 2026,
    category: "Publication",
    title:
      "Paper accepted at ACM IUI 2026 (TRUST-CUAI Workshop), Paphos, Cyprus: “Designing Trustworthy Agentic RAG Systems through Modality-Separated Interaction and Error-Aware Memory”",
  },
  {
    id: "news-002",
    date: "Mar 2025",
    year: 2025,
    category: "Talk",
    title: "Delivered the TCU Faculty Lecture Series talk “Cybersecurity in the Age of AI”",
  },
  {
    id: "news-003",
    date: "Mar 2026",
    year: 2026,
    category: "Publication",
    title:
      "Paper accepted: “Large Language Models in Qualitative Analysis: Comparing Traditional and Researcher-Interpreted Approaches,” International Journal of Qualitative Methods, Vol. 25",
  },
  {
    id: "news-004",
    date: "Apr 2026",
    year: 2026,
    category: "Publication",
    title: "Six Posters Presented by Our Lab at SRS Symposium; Awarded Best Department Poster",
  },
  {
    id: "news-005",
    date: "Feb 2026",
    year: 2026,
    category: "Event",
    title: "Attended Lockheed Ethics in Engineering Case Competition, Bethesda, Maryland",
  },
  {
    id: "news-006",
    date: "Apr 2026",
    year: 2026,
    category: "Award",
    title: "Finalist and Pitch Presenter, TCU Chancellor’s Innovation Prize 2026",
  },
  {
    id: "news-007",
    date: "Jan 2026",
    year: 2026,
    category: "Event",
    title: "Program Chair, AAAI 2026 – AI for Behavioral and Social Data (AIBSD), Singapore",
  },
  {
    id: "news-008",
    date: "Jan 2026",
    year: 2026,
    category: "Publication",
    title:
      "Reseach paper accepted at the AAAI Workshop on AI for Education (AI4EDU), Singapore, 2026",
  },
  {
    id: "news-009",
    date: "Dec 2025",
    year: 2025,
    category: "Event",
    title: "Attented NSF CISE Research Expansion (RE) Aspiring PI Workshop, Miami, FL",
  },
  {
    id: "news-010",
    date: "Dec 2025",
    year: 2025,
    category: "Event",
    title: "Attented Far.AI Alignment Workshop in San, Deigo, CA",
  },
  {
    id: "news-011",
    date: "Sep 2025",
    year: 2025,
    category: "Publication",
    title:
      '"AI, ML, and LLM Integration in 5G/6G Networks: A Comprehensive Survey of Architectures, Challenges, and Future Directions" Accepted at IEEE Access',
  },
  {
    id: "news-012",
    date: "Sep 2025",
    year: 2025,
    category: "Publication",
    title:
      '"Green Cybersecurity: Leveraging AI, ML, and LLMs to Optimize Energy, Threat Detection, and Sustainability Frameworks" Accepted at IEEE Access',
  },
  {
    id: "news-013",
    date: "Aug 2025",
    year: 2025,
    category: "Publication",
    title:
      "Research paper accepted at Thirty Seventh International Conference on Software Engineering and Knowledge Engineering (SEKE 2025)",
  },
  {
    id: "news-014",
    date: "May 2025",
    year: 2025,
    category: "Publication",
    title: "Three research paper accepted at IEEE World AI IoT Congress 2025",
  },
  {
    id: "news-015",
    date: "May 2025",
    year: 2025,
    category: "Talk",
    title:
      "Gave Research Talk at TCU Technology Seminar on AI, ML, and LLM for Next Generation Networks 2025",
  },
  {
    id: "news-016",
    date: "April 2025",
    year: 2025,
    category: "Award",
    title: "Awarded RCAF research Grant, $4500 as PI",
  },
  {
    id: "news-017",
    date: "Jan 2025",
    year: 2025,
    category: "Publication",
    title: "Published a book chapter, Introduction to Deepfake Technology and Its Early Foundations.",
  },
  {
    id: "news-018",
    date: "Jan 2025",
    year: 2025,
    category: "Award",
    title: "Awarded DOF research Grant, $50,000 as PI",
  },
  {
    id: "news-019",
    date: "October 2024",
    year: 2024,
    category: "Publication",
    title:
      'Paper published IEEE Access "Security and Privacy in E-Health Systems: A Review of AI and Machine Learning Techniques"',
  },
  {
    id: "news-020",
    date: "October 2024",
    year: 2024,
    category: "Publication",
    title:
      'Paper accepted at IEEE CSNet, Paris, France "Spam No More: A Cross-Model Analysis of Machine Learning Techniques and Large Language Model Efficacies"',
  },
  {
    id: "news-021",
    date: "October 2024",
    year: 2024,
    category: "Award",
    title: "Won Two Best Presentation Award at IEEE UEMCON 2025, IBM Research Center, NY, USA.",
  },
  {
    id: "news-022",
    date: "October 2024",
    year: 2024,
    category: "Talk",
    title: "Two papers presented at IEEE UEMCON, IBM Research Center, NY, USA.",
  },
  {
    id: "news-023",
    date: "October 2024",
    year: 2024,
    category: "Publication",
    title:
      'Paper published IEEE UEMCON, IBM Research Center, NY, USA. "The Dark Side of AI: Large Language Models as Tools for Cyber Attacks on Vehicle Systems"',
  },
  {
    id: "news-024",
    date: "October 2024",
    year: 2024,
    category: "Publication",
    title:
      'Paper published IEEE UEMCON, IBM Research Center, NY, USA. "Enhancing Phishing Detection with AI: A Novel Dataset and Comprehensive Analysis Using Machine Learning and Large Language Models"',
  },
  {
    id: "news-025",
    date: "September 2024",
    year: 2024,
    category: "Publication",
    title:
      'Paper published IEEE Access "Security and Privacy in E-Health Systems: A Review of AI and Machine Learning Techniques"',
  },
  {
    id: "news-026",
    date: "September 2024",
    year: 2024,
    category: "Award",
    title: "Selected for R2 Strong Proposal Development Program at Texas Christian University",
  },
  {
    id: "news-027",
    date: "June 2024",
    year: 2024,
    category: "Award",
    title: "Won Research Scholar Award, Awarded by Quinnipiac University",
  },
  {
    id: "news-028",
    date: "April 2024",
    year: 2024,
    category: "Publication",
    title:
      'Paper published and presented 2024 ASEE NE Conference, Fairfield, CT "Unveiling Cyber Threats: A Comprehensive Analysis of Connecticut Data Breaches"',
  },
  {
    id: "news-029",
    date: "April 2024",
    year: 2024,
    category: "Publication",
    title:
      'Poster Presented in 2024 ASEE NE Conference, Fairfield, CT, "Enhancing Cybersecurity: Leveraging AI and LLMs for Advanced Phishing"',
  },
  {
    id: "news-030",
    date: "April 2024",
    year: 2024,
    category: "Event",
    title:
      'Led Birds of a Feather session at 2024 CAE Symposium, "Adversarial LLMs and their impact on cybersecurity."',
  },
  {
    id: "news-031",
    date: "April 2024",
    year: 2024,
    category: "Publication",
    title:
      'Poster Presented at 2024 CAE Symposium, "AI and Large Language Models (LLMs) for phishing detection and prevention"',
  },
  {
    id: "news-032",
    date: "March 2024",
    year: 2024,
    category: "Media",
    title: 'Article for Conversation "Undersea cables are the unseen backbone of the global internet"',
  },
  {
    id: "news-033",
    date: "March 2024",
    year: 2024,
    category: "Award",
    title:
      'Awarded NASA Connecticut Space Grant Consortium Grant "Physical Layer Security for 5G and Beyond Networks" $20,000, PI',
  },
  {
    id: "news-034",
    date: "March 2024",
    year: 2024,
    category: "Publication",
    title:
      "Invited Paper Published in IEEE ICACT Transactions on Advanced Communications Technology Journal. Best Paper Award, IEEE ICACT 2023",
  },
  {
    id: "news-035",
    date: "March 2024",
    year: 2024,
    category: "Media",
    title:
      'Article for Conversation "Are private conversations truly private? A cybersecurity expert explains how end-to-end encryption protects you"',
  },
  {
    id: "news-036",
    date: "March 2024",
    year: 2024,
    category: "Publication",
    title: "Paper published: 6G Networks and AI Revolution - Exploring Technologies, Applications, and Emerging Challenges",
  },
  {
    id: "news-037",
    date: "Feb 2024",
    year: 2024,
    category: "Event",
    title: "Jugded and Coached QUxHHC Ransomware Cybercase Competition",
  },
  {
    id: "news-038",
    date: "Feb 2024",
    year: 2024,
    category: "Award",
    title:
      'Awarded NSF Grant "Building Institutional Capacity to Support STEM Scholars Through Pedagogy of Real Talk" $1,000,000, Co-PI',
  },
  {
    id: "news-039",
    date: "Feb 2024",
    year: 2024,
    category: "Talk",
    title: "Invited Talk at CSE PhD Seminar Series, University of Louisville, KY",
  },
  {
    id: "news-040",
    date: "Jan 2024",
    year: 2024,
    category: "Media",
    title:
      'Interview for Heart Media Group "Surge in devices stealing information from debit, credit cards raises concern in CT"',
  },
  {
    id: "news-041",
    date: "Jan 2024",
    year: 2024,
    category: "Award",
    title: "Awarded NEBHE Tech Talent Accelerator (TTA) Grant $40,000, Co-PI",
  },
  {
    id: "news-042",
    date: "Jan 2024",
    year: 2024,
    category: "Talk",
    title: "Chaired a session on Signal Processing at IEEE CCWC 2024, Las Vegas",
  },
  {
    id: "news-043",
    date: "Jan 2024",
    year: 2024,
    category: "Talk",
    title: "Gave research presentation at IEEE CCWC 2024, Las Vegas",
  },
  {
    id: "news-044",
    date: "Dec 2023",
    year: 2023,
    category: "Award",
    title: "Elevated to the grade of IEEE Senior member.",
  },
  {
    id: "news-045",
    date: "Nov 2023",
    year: 2023,
    category: "Talk",
    title: "Gave a talk at S Cubed Seminar on 5G, Beyond 5G, and 6G Networks",
  },
  {
    id: "news-046",
    date: "Nov 2023",
    year: 2023,
    category: "Media",
    title: "Interview for Hartford Business Journal on cybersecurity programs",
  },
  {
    id: "news-047",
    date: "November 2023",
    year: 2023,
    category: "Publication",
    title: "Invited Paper: Securing Industrial Control Systems. Sensors Special Issue, 2023.",
  },
  {
    id: "news-048",
    date: "Oct 2023",
    year: 2023,
    category: "Media",
    title: "Interview for HuffPost on app tracking",
  },
  {
    id: "news-049",
    date: "Sep 2023",
    year: 2023,
    category: "Media",
    title: 'Interview for Yahoo News "Should You Let Apps Track You?"',
  },
  {
    id: "news-050",
    date: "Sep 2023",
    year: 2023,
    category: "Talk",
    title: "Gave Opening Remark at BSides CT 2023",
  },
  {
    id: "news-051",
    date: "Sep 2023",
    year: 2023,
    category: "Media",
    title: "Interview for Fox61 News on cyber attacks",
  },
  {
    id: "news-052",
    date: "Sep 2023",
    year: 2023,
    category: "Media",
    title: "Interview for WKYC 3 Studios News on cyber attacks",
  },
  {
    id: "news-053",
    date: "Sep 2023",
    year: 2023,
    category: "Award",
    title: "Received Outstanding Teacher Award, FSU",
  },
  {
    id: "news-054",
    date: "August 2023",
    year: 2023,
    category: "Publication",
    title: "Paper published: Comprehensive Review of IoT Applications. Sensors Journal, 2023.",
  },
  {
    id: "news-055",
    date: "August 2023",
    year: 2023,
    category: "Publication",
    title:
      "Paper published: Privacy in computer ethics. Computer Science and Information Technologies, 2023.",
  },
  {
    id: "news-056",
    date: "May 2023",
    year: 2023,
    category: "Award",
    title: "Best Paper Award at IEEE ICACT 2023, South Korea",
  },
  {
    id: "news-057",
    date: "May 2023",
    year: 2023,
    category: "Award",
    title: "Received CTL Grant for iOS App Development, $1000, PI",
  },
  {
    id: "news-058",
    date: "March 2023",
    year: 2023,
    category: "Award",
    title: "Received MSCA Professional Development Grant, $1500, PI",
  },
  {
    id: "news-059",
    date: "March 2023",
    year: 2023,
    category: "Event",
    title: "Attended 2023 NSF SaTC Aspiring PI Workshop",
  },
  {
    id: "news-060",
    date: "Feb 2023",
    year: 2023,
    category: "Publication",
    title: "Paper Published at IEEE ICACT 2023, South Korea",
  },
];
