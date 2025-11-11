export interface Project {
  id: string;
  title: string;
  category: 'Full Stack Platforms' | 'AI/Machine Learning Applications' | 'Mobile Development Projects';
  role: string;
  problemSolved: string;
  features: string[];
  technologies: string[];
  impact?: string;
  imageUrl: string;
  imageHint: string;
  liveLink?: string;
  githubLink?: string;
  caseStudyLink?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100 for proficiency indicator
  icon?: React.ReactNode;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
  learnings: string;
}
