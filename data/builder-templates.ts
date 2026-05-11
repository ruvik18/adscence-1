export interface ResumeData {
  personalInfo: {
    fullName: string;
    jobTitle: string;
    email: string;
    phone: string;
    location: string;
    website: string;
    photo?: string;
    birthDate?: string;
  };
  summary: string;
  experience: {
    id: string;
    company: string;
    position: string;
    period: string;
    location: string;
    highlights: string[];
  }[];
  education: {
    id: string;
    school: string;
    degree: string;
    period: string;
  }[];
  skills: string[];
}

export const defaultResumeData: Record<string, ResumeData> = {
  "demo-resume-editable": {
    personalInfo: {
      fullName: "Jane Doe",
      jobTitle: "Senior Product Designer",
      email: "jane.doe@example.com",
      phone: "+1 (555) 987-6543",
      location: "New York, NY",
      website: "janedoe.design",
    },
    summary:
      "Award-winning Product Designer with 6+ years of experience leading cross-functional teams to deliver accessible, beautiful, and highly converting user interfaces. Passionate about design systems and user-centric problem solving.",
    experience: [
      {
        id: "d1",
        company: "CreativeTech Solutions",
        position: "Lead Product Designer",
        period: "2021 – Present",
        location: "New York, NY",
        highlights: [
          "Spearheaded the redesign of the core SaaS platform, resulting in a 40% increase in daily active users and a 25% drop in churn.",
          "Established and maintained a comprehensive React-based design system adopted by 3 different engineering squads.",
          "Mentored 4 junior designers, conducting weekly design critiques and 1:1 career development sessions.",
        ],
      },
      {
        id: "d2",
        company: "Startup Inc.",
        position: "UX/UI Designer",
        period: "2018 – 2021",
        location: "Remote",
        highlights: [
          "Conducted user research and usability testing with over 50+ participants to validate product hypotheses.",
          "Designed end-to-end mobile application flows that increased conversion rates by 15%.",
          "Collaborated closely with product managers and engineers in an agile environment to ensure pixel-perfect implementation.",
        ],
      },
    ],
    education: [
      {
        id: "e1",
        school: "Rhode Island School of Design (RISD)",
        degree: "B.F.A. in Industrial Design",
        period: "2014 – 2018",
      },
    ],
    skills: [
      "Figma",
      "Prototyping",
      "User Research",
      "Wireframing",
      "Design Systems",
      "HTML/CSS",
      "Usability Testing",
      "Agile Methodology",
    ],
  },
  "software-engineer-clean": {
    personalInfo: {
      fullName: "Alex Rivera",
      jobTitle: "Senior Software Engineer",
      email: "alex.rivera@example.com",
      phone: "+1 (555) 000-1234",
      location: "San Francisco, CA",
      website: "alexrivera.dev",
    },
    summary:
      "Passionate Software Engineer with 8+ years of experience building scalable web applications. Expert in React, Node.js, and cloud architecture. Proven track record of leading teams and delivering high-impact technical solutions.",
    experience: [
      {
        id: "1",
        company: "TechFlow Systems",
        position: "Senior Software Engineer",
        period: "2020 – Present",
        location: "Remote",
        highlights: [
          "Architected and led the migration of a legacy monolith to a microservices architecture, reducing system latency by 45%.",
          "Implemented a shared UI component library using React and Tailwind, increasing frontend development speed by 30% across 4 teams.",
          "Optimized CI/CD pipelines, reducing deployment time from 25 minutes to under 8 minutes.",
        ],
      },
      {
        id: "2",
        company: "BrightData Inc.",
        position: "Software Engineer",
        period: "2017 – 2020",
        location: "San Jose, CA",
        highlights: [
          "Developed core features for a data analytics platform serving 10k+ enterprise customers.",
          "Improved database query performance by 60% through strategic indexing and query optimization.",
          "Collaborated with product managers to define technical requirements and roadmaps for quarterly releases.",
        ],
      },
    ],
    education: [
      {
        id: "e1",
        school: "Stanford University",
        degree: "B.S. in Computer Science",
        period: "2013 – 2017",
      },
    ],
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Node.js",
      "PostgreSQL",
      "AWS (EC2, S3, Lambda)",
      "Docker",
      "GraphQL",
    ],
  },
};
