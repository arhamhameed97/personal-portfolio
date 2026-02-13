export const personalInfo = {
  name: "Arham Hameed",
  title: "Full-Stack Developer | AI/ML Enthusiast | Fintech Innovator",
  location: "San Francisco, CA",
  email: "arham.hameed@uni.minerva.edu",
  phone: "646.777.6394",
  github: "https://github.com/arhamhameed97",
  linkedin: "https://www.linkedin.com/in/arham-hameed/",
};

export const about = {
  bio: "Full-stack developer with a unique blend of technical expertise and business acumen. Graduated from Minerva University with concentrations in AI/ML, Product Development, and Strategic Finance. Currently teaching 100+ students across 8+ programming languages while building production-grade applications serving 1000+ users. Passionate about creating scalable solutions that bridge technology and finance.",
  achievements: [
    { number: "100+", label: "Students Taught" },
    { number: "3000+", label: "Enterprise Clients Supported" },
    { number: "99.9%", label: "Uptime on Production Apps" },
    { number: "8+", label: "Languages & Frameworks" },
  ],
};

export const projects = [
  {
    id: 1,
    title: "PunchIn - Workforce Management Platform",
    description: "Built full-stack SaaS platform with multi-tenant architecture for timesheet tracking, payroll automation, and team collaboration, featuring role-based access control and serving 1,000+ users with 99.9% uptime.",
    longDescription: "Engineered automated payroll engine with allowances/deductions workflows, real-time attendance tracking, and analytics dashboards, implementing SOC 2 compliant security and RESTful API architecture.",
    techStack: ["React", "Node.js", "PostgreSQL", "Next.js", "TypeScript", "Vercel"],
    liveUrl: "https://timesheet-management-one.vercel.app/",
    githubUrl: "https://github.com/arhamhameed97/Timesheet-Management",
    highlights: ["Multi-tenant SaaS", "1000+ users", "99.9% uptime", "SOC 2 compliant"],
    image: "/images/punchin.png",
  },
  {
    id: 2,
    title: "Monte Carlo DCF Valuation Platform",
    description: "Developed probabilistic financial modeling tool using Monte Carlo simulation with 10,000+ iterations to quantify startup valuation risk through enterprise value distribution analysis across multiple scenarios.",
    longDescription: "Built interactive interface for inputting revenue projections, WACC, and growth assumptions, generating dynamic DCF models with probability distributions, percentile outcomes (P10, P50, P90), and sensitivity analysis visualizations.",
    techStack: ["Python", "React", "NumPy", "Pandas", "Plotly", "TypeScript", "Vercel"],
    liveUrl: "https://monte-carlo-sim-dcf-valuation.vercel.app/",
    githubUrl: "https://github.com/arhamhameed97/Monte-Carlo-Sim-DCF-Valuation",
    highlights: ["10,000+ simulations", "Probabilistic modeling", "Real-time visualization"],
    image: "/images/monte-carlo.png",
  },
  {
    id: 3,
    title: "Exam Prep Pro",
    description: "AI-powered exam preparation application that helps students prepare for exams with intelligent practice tests, personalized learning paths, and comprehensive analytics to track progress.",
    longDescription: "Leverages AI to generate customized practice questions, provides instant feedback, and adapts difficulty based on performance. Features include spaced repetition, topic mastery tracking, and detailed performance analytics.",
    techStack: ["Next.js", "TypeScript", "AI/ML", "PostgreSQL", "Tailwind CSS", "Vercel"],
    liveUrl: "https://exam-prep-pro-bice.vercel.app/",
    githubUrl: "https://github.com/arhamhameed97/Exam-Prep-Pro",
    highlights: ["AI-powered", "Personalized learning", "Analytics dashboard"],
    image: "/images/exam-prep.png",
  },
];

export const skills = {
  Languages: ["Python", "JavaScript", "TypeScript", "SQL", "R", "Java", "C#", "HTML/CSS"],
  Frontend: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Redux"],
  Backend: ["Node.js", "Express", "PostgreSQL", "Prisma", "RESTful APIs"],
  Tools: ["Git", "Vercel", "Docker", "Figma", "Jira", "Notion"],
  DataScience: ["NumPy", "Pandas", "Plotly", "Tableau", "Google Analytics"],
  Cloud: ["AWS", "Vercel", "Railway", "Neon"],
};

export const experience = [
  {
    id: 1,
    company: "Code With Us",
    position: "Software Coding Instructor",
    location: "San Francisco, CA",
    period: "May 2021 – Present",
    description: "Leading software education for 100+ students across multiple programming languages and frameworks.",
    achievements: [
      "Architected full-stack curriculum across 8+ languages/frameworks (Python, JavaScript, Java, C#, Unity, React) for 100+ students, teaching OOP, data structures, algorithms, and modern development workflows",
      "Achieved 85%+ retention rate and 25% engagement improvement through personalized learning paths, adaptive difficulty scaling, and gamified progress tracking using custom assessment tools",
    ],
  },
  {
    id: 2,
    company: "Minerva Project",
    position: "Product Team Intern - Technical Team",
    location: "San Francisco, CA",
    period: "Aug 2018 – Apr. 2021",
    description: "Led technical operations for a global educational platform serving 3,000+ enterprise clients.",
    achievements: [
      "Led cross-functional team of 15 engineers across 7 cities, supporting 3,000+ enterprise clients through technical troubleshooting, QA testing, and platform optimization",
      "Owned bug lifecycle for Active Learning Forum: triaged and documented 1,000+ issues, improving stability and reducing critical bug resolution time by 40%",
    ],
  },
  {
    id: 3,
    company: "ClinCapture",
    position: "Product Operations & Analytics",
    location: "San Francisco, CA",
    period: "Mar. 2019 – Sept. 2020",
    description: "Drove data-driven product decisions and competitive intelligence for healthcare technology platform.",
    achievements: [
      "Architected data-driven segmentation system using Python/R on 20-year database, applying clustering algorithms to identify $2M+ revenue opportunities and shape product-market fit strategy",
      "Built competitive intelligence pipeline analyzing 5,000+ B2B prospects through web scraping and NLP, enabling 40% faster sales cycle and informing GTM strategy",
      "Designed Salesforce analytics dashboards tracking 15+ KPIs, uncovering cost optimizations that improved SG&A efficiency by 27%",
    ],
  },
];

export const education = {
  school: "Minerva University",
  degree: "Bachelor of Science in Computer Science & Finance",
  location: "San Francisco, CA",
  period: "Aug. 2017 – May 2021",
  concentrations: ["AI/ML", "Product Development", "Strategic Finance", "Venture Valuation"],
};
