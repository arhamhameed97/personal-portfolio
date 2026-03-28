export const personalInfo = {
  name: "Arham Hameed",
  title: "Software Developer & Financial Analyst",
  location: "San Francisco, CA",
  email: "arham.hameed@uni.minerva.edu",
  phone: "646.777.6394",
  github: "https://github.com/arhamhameed97",
  linkedin: "https://www.linkedin.com/in/arham-hameed/",
};

export const about = {
  bio: [
    "I operate at the intersection of technology and finance — building production-grade software while analyzing complex financial data across global markets.",
    "From teaching 100+ students across 8+ programming languages to reconciling 100,000+ financial records and surfacing $2M+ in revenue opportunities, I bring a rare combination of engineering precision and financial acumen.",
    "My work spans full-stack development, financial modeling, data analytics, and technical education — always driven by the belief that the best solutions emerge where analytical rigor meets creative engineering.",
  ],
  achievements: [
    { number: "100+", label: "Students Taught", suffix: "" },
    { number: "$2M+", label: "Revenue Identified", suffix: "" },
    { number: "100K+", label: "Records Analyzed", suffix: "" },
    { number: "85%+", label: "Student Retention", suffix: "" },
  ],
};

export const projects = [
  {
    id: 1,
    title: "PunchIn",
    subtitle: "Workforce Management Platform",
    description:
      "Full-stack SaaS platform with multi-tenant architecture for timesheet tracking, payroll automation, and team collaboration, featuring role-based access control.",
    longDescription:
      "Engineered automated payroll engine with allowances/deductions workflows, real-time attendance tracking, and analytics dashboards, implementing SOC 2 compliant security and RESTful API architecture.",
    techStack: ["React", "Node.js", "PostgreSQL", "Next.js", "TypeScript", "Vercel"],
    liveUrl: "https://timesheet-management-one.vercel.app/",
    githubUrl: "https://github.com/arhamhameed97/Timesheet-Management",
    highlights: ["1,000+ users", "99.9% uptime", "SOC 2 compliant", "Multi-tenant SaaS"],
    image: "/images/punchin.png",
  },
  {
    id: 2,
    title: "Monte Carlo DCF",
    subtitle: "Valuation Platform",
    description:
      "Probabilistic financial modeling tool using Monte Carlo simulation with 10,000+ iterations to quantify startup valuation risk through enterprise value distribution analysis.",
    longDescription:
      "Built interactive interface for inputting revenue projections, WACC, and growth assumptions, generating dynamic DCF models with probability distributions, percentile outcomes (P10, P50, P90), and sensitivity analysis visualizations.",
    techStack: ["Python", "React", "NumPy", "Pandas", "Plotly", "Vercel"],
    liveUrl: "https://monte-carlo-sim-dcf-valuation.vercel.app/",
    githubUrl: "https://github.com/arhamhameed97/Monte-Carlo-Sim-DCF-Valuation",
    highlights: ["10,000+ simulations", "P10/P50/P90 outputs", "Real-time visualization"],
    image: "/images/monte-carlo.png",
  },
  {
    id: 3,
    title: "Exam Prep Pro",
    subtitle: "AI-Powered Learning",
    description:
      "AI-powered exam preparation application that helps students prepare with intelligent practice tests, personalized learning paths, and comprehensive analytics.",
    longDescription:
      "Leverages AI to generate customized practice questions, provides instant feedback, and adapts difficulty based on performance. Features spaced repetition, topic mastery tracking, and detailed performance analytics.",
    techStack: ["Next.js", "TypeScript", "AI/ML", "PostgreSQL", "Tailwind CSS", "Vercel"],
    liveUrl: "https://exam-prep-pro-bice.vercel.app/",
    githubUrl: "https://github.com/arhamhameed97/Exam-Prep-Pro",
    highlights: ["AI-powered", "Personalized learning", "Analytics dashboard"],
    image: "/images/exam-prep.png",
  },
];

export const skills = {
  "Languages & Frameworks": [
    "Python", "JavaScript", "TypeScript", "SQL", "R", "Java", "C#",
    "HTML/CSS", "React", "Next.js", "Node.js", "Express", "Prisma",
  ],
  "Finance & Analytics": [
    "Financial Modeling", "DCF Valuation", "Cash Flow Forecasting",
    "Variance Analysis", "IFRS", "Budget Management", "KPI Design",
    "ROI Analysis", "Audit Support", "Reconciliation",
  ],
  "Data & Visualization": [
    "NumPy", "Pandas", "Plotly", "Tableau", "Power BI",
    "Salesforce", "Google Analytics", "Excel (Advanced)",
  ],
  "Tools & Platforms": [
    "Git", "Docker", "Figma", "Jira", "Notion",
    "Vercel", "AWS", "Railway", "PostgreSQL", "RESTful APIs",
  ],
};

export const experience = [
  {
    id: 1,
    company: "Coverbox Insure Limited",
    position: "Financial & Data Analyst",
    location: "Peterborough, United Kingdom",
    period: "2022 – 2025",
    description:
      "Led financial data analysis and reporting for a UK-based insurtech, managing large-scale data validation and executive-level financial intelligence.",
    achievements: [
      "Validated and reconciled financial data across multiple sources for 100,000+ records; tracked key metrics and flagged discrepancies for resolution",
      "Built Tableau dashboards tracking segment profitability, acquisition costs, and telematics KPIs; delivered executive-ready narratives for underwriting strategy",
      "Applied IFRS-aligned reporting standards to financial data validation and management reporting workflows",
      "Monitored forecast accuracy, identified variance drivers, and recommended corrective actions to maintain alignment with financial targets",
    ],
  },
  {
    id: 2,
    company: "Code With Us",
    position: "Software Coding Instructor",
    location: "San Francisco, CA",
    period: "2021 – Present",
    description:
      "Leading software education for 100+ students across multiple programming languages and frameworks.",
    achievements: [
      "Architected full-stack curriculum across 8+ languages/frameworks (Python, JavaScript, Java, C#, Unity, React) teaching OOP, data structures, algorithms, and modern development workflows",
      "Achieved 85%+ retention rate and 25% engagement improvement through personalized learning paths, adaptive difficulty scaling, and gamified progress tracking",
    ],
  },
  {
    id: 3,
    company: "ClinCapture",
    position: "Product Operations & Analytics",
    location: "San Francisco, CA",
    period: "2019 – 2022",
    description:
      "Drove data-driven product decisions and competitive intelligence for a healthcare technology platform.",
    achievements: [
      "Architected data-driven segmentation system using Python/R on 20-year database, applying clustering algorithms to identify $2M+ revenue opportunities",
      "Built competitive intelligence pipeline analyzing 5,000+ B2B prospects through web scraping and NLP, enabling 40% faster sales cycle",
      "Designed Salesforce analytics dashboards tracking 15+ KPIs, uncovering cost optimizations that improved SG&A efficiency by 27%",
    ],
  },
  {
    id: 4,
    company: "Minerva Project",
    position: "Product & Finance Intern",
    location: "San Francisco, CA",
    period: "2018 – 2021",
    description:
      "Supported product operations and financial workflows for a global educational platform.",
    achievements: [
      "Led cross-functional team of 15 across 7 cities, supporting 3,000+ enterprise clients through technical troubleshooting, QA testing, and platform optimization",
      "Owned bug lifecycle for Active Learning Forum: triaged and documented 1,000+ issues, reducing critical resolution time by 40%",
    ],
  },
];

export const education = {
  school: "Minerva University",
  degree: "Bachelor of Science in Computer Science & Finance",
  location: "San Francisco, CA",
  period: "Aug. 2017 – May 2021",
  concentrations: [
    "AI/ML",
    "Strategic Finance",
    "Venture Valuation",
    "Financial Modeling & Simulation",
  ],
  coursework: [
    "Corporate Finance",
    "Financial Modeling",
    "Investment Analysis",
    "Econometrics",
    "Data Structures & Algorithms",
  ],
};

export const services = [
  {
    title: "Full-Stack Development",
    description:
      "Building scalable web applications with modern technologies — from React and Next.js frontends to Node.js backends with PostgreSQL and cloud deployment.",
    features: [
      "Responsive web applications",
      "RESTful API architecture",
      "Database design & optimization",
      "Cloud deployment & DevOps",
      "SOC 2 compliant security",
    ],
  },
  {
    title: "Financial Analysis & Modeling",
    description:
      "Translating complex financial data into actionable insights — DCF valuation, cash flow forecasting, variance analysis, and executive-ready dashboards.",
    features: [
      "DCF & Monte Carlo valuation",
      "Cash flow forecasting",
      "Financial reporting & IFRS",
      "KPI tracking & dashboards",
      "Budget & variance analysis",
    ],
  },
  {
    title: "Technical Education",
    description:
      "Designing curricula and mentoring teams across programming languages, financial modeling, and data analytics with proven retention outcomes.",
    features: [
      "Curriculum architecture",
      "Multi-language instruction",
      "Adaptive learning design",
      "Code review & mentoring",
      "Team upskilling programs",
    ],
  },
];
