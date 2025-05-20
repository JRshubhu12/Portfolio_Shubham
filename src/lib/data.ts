import type { Project, SkillCategory, Experience } from '@/types';

export const projectsData: Project[] = [
  {
    id: 'raktacure',
    title: 'Raktacure',
    category: 'Full Stack Platforms',
    role: 'Lead Developer',
    problemSolved: 'Streamlined blood donation and recipient matching process.',
    features: ['User registration & profiles', 'Blood donation camp scheduling', 'Urgent blood requests', 'Inventory management'],
    technologies: ['React', 'Node.js', 'Express', 'Firebase', 'Material UI'],
    impact: 'Facilitated faster blood matching for critical patients.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'medical app',
    githubLink: 'https://github.com/shubhamchoudharyjr/raktacure',
  },
  {
    id: 'careerdive',
    title: 'CareerDive',
    category: 'Full Stack Platforms',
    role: 'Full Stack Developer',
    problemSolved: 'Provided a platform for job seekers to find relevant openings and for recruiters to post jobs.',
    features: ['Job search & filtering', 'Resume upload', 'Company profiles', 'Application tracking'],
    technologies: ['React', 'Python', 'Flask', 'PostgreSQL', 'Tailwind CSS'],
    impact: 'Connected numerous job seekers with potential employers.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'web platform',
  },
  {
    id: 'axesflow',
    title: 'Axesflow',
    category: 'Full Stack Platforms',
    role: 'Backend Developer',
    problemSolved: 'Automated business workflows for increased efficiency.',
    features: ['Customizable workflow builder', 'Task management', 'Integration with third-party APIs', 'Reporting dashboard'],
    technologies: ['Node.js', 'Express', 'MongoDB', 'GraphQL', 'React (Admin Panel)'],
    impact: 'Reduced manual effort in repetitive tasks by 40% for client businesses.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'dashboard interface',
  },
  {
    id: 'sentiment-analysis',
    title: 'Sentiment Analysis',
    category: 'AI/Machine Learning Applications',
    role: 'AI Model Integrator',
    problemSolved: 'Analyzed customer feedback to gauge sentiment towards products.',
    features: ['Text preprocessing', 'Sentiment classification (positive, negative, neutral)', 'Visualization of results'],
    technologies: ['Python', 'Flask', 'Scikit-learn', 'NLTK', 'Seaborn', 'Kaggle datasets'],
    impact: 'Provided actionable insights for product improvement based on customer sentiment.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'text analysis',
  },
  {
    id: 'stock-prediction',
    title: 'Stock Prediction',
    category: 'AI/Machine Learning Applications',
    role: 'Machine Learning Engineer',
    problemSolved: 'Predicted stock market trends using historical data.',
    features: ['Time series analysis', 'Feature engineering', 'LSTM model training', 'Prediction visualization'],
    technologies: ['Python', 'TensorFlow', 'Keras', 'Pandas', 'Matplotlib'],
    impact: 'Achieved a promising accuracy in predicting short-term stock movements.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'finance chart',
  },
  {
    id: 'quote-app',
    title: 'Quote App',
    category: 'Mobile Development Projects',
    role: 'Android Developer',
    problemSolved: 'Provided users with daily motivational quotes.',
    features: ['Daily quote notifications', 'Categorized quotes', 'Favorite quotes', 'Share functionality'],
    technologies: ['React Native', 'Firebase (for quotes database)', 'Android Studio'],
    impact: 'Increased user engagement with daily inspirational content.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'mobile ui',
  },
];

export const skillsData: SkillCategory[] = [
  {
    name: 'Languages',
    skills: [
      { name: 'JavaScript', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'Java', level: 75 },
      { name: 'TypeScript', level: 80 },
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
    ],
  },
  {
    name: 'Front-End',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 80 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Redux', level: 75 },
    ],
  },
  {
    name: 'Back-End',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 80 },
      { name: 'Python (Flask)', level: 75 },
      { name: 'REST APIs', level: 90 },
    ],
  },
  {
    name: 'Databases',
    skills: [
      { name: 'Firebase', level: 85 },
      { name: 'MySQL', level: 70 },
      { name: 'PostgreSQL', level: 65 },
      { name: 'MongoDB', level: 75 },
    ],
  },
  {
    name: 'AI/ML',
    skills: [
      { name: 'Scikit-learn', level: 80 },
      { name: 'TensorFlow', level: 70 },
      { name: 'PyTorch', level: 65 },
      { name: 'Seaborn', level: 75 },
      { name: 'Pandas', level: 85 },
      { name: 'Numpy', level: 85 },
    ],
  },
  {
    name: 'Mobile Development',
    skills: [
      { name: 'React Native', level: 80 },
      { name: 'Android Studio (Java/Kotlin)', level: 70 },
      { name: 'Capacitor', level: 60 },
    ],
  },
  {
    name: 'Tools & Other',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 85 },
      { name: 'Docker', level: 60 },
    ],
  },
];

export const experienceData: Experience[] = [
  {
    id: 'cetpa',
    title: 'AI/ML Intern',
    company: 'CETPA Infotech Pvt. Ltd.',
    duration: 'June 2024 – July 2024',
    responsibilities: [
      'Developed and trained machine learning models for data analysis tasks.',
      'Collaborated on projects involving natural language processing and computer vision.',
      'Cleaned, preprocessed, and visualized datasets to extract insights.',
      'Contributed to the deployment pipeline for ML models.',
    ],
    learnings: 'Gained hands-on experience in the end-to-end machine learning project lifecycle, from data collection to model deployment, and enhanced my skills in Python, Scikit-learn, and TensorFlow.',
  },
  {
    id: 'encryptix',
    title: 'Android Development Intern',
    company: 'Encryptix',
    duration: 'July 2024 – August 2024',
    responsibilities: [
      'Developed new features for existing Android applications using Java and Kotlin.',
      'Participated in UI/UX design discussions and implemented responsive layouts.',
      'Debugged and resolved issues in mobile applications to improve performance and stability.',
      'Worked with REST APIs to integrate backend services with mobile frontends.',
    ],
    learnings: 'Strengthened my Android development skills, including UI design, API integration, and performance optimization, while working in an agile development environment.',
  },
];

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];
