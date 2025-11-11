
import type { SkillCategory as SkillCategoryType, Skill } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress'; // Using ShadCN Progress
import { Code2, Code, Globe, PenTool, Layers, MoveUp, Wind, GanttChart, Pyramid, Server, Database, Cpu, Sparkles, Smartphone, Phone, GitBranch, Monitor, Briefcase } from 'lucide-react';

const skillsData: SkillCategoryType[] = [
  {
    name: 'Languages',
    skills: [
      { name: 'JavaScript', level: 90, icon: <Code /> },
      { name: 'Python', level: 85, icon: <Code /> },
      { name: 'TypeScript', level: 80, icon: <Code /> },
      { name: 'HTML', level: 95, icon: <Globe /> },
      { name: 'CSS', level: 90, icon: <PenTool /> },
      { name: 'MERN Stack', level: 85, icon: <Layers /> },
    ],
  },
  {
    name: 'Front-End',
    skills: [
      { name: 'React', level: 90, icon: <Layers /> },
      { name: 'Next.js', level: 80, icon: <MoveUp /> },
      { name: 'Tailwind CSS', level: 85, icon: <Wind /> },
      { name: 'Redux', level: 75, icon: <GanttChart /> },
    ],
  },
  {
    name: 'Back-End',
    skills: [
      { name: 'Node.js', level: 85, icon: <Pyramid /> },
      { name: 'Express.js', level: 80, icon: <Server /> },
      { name: 'Python (Flask)', level: 75, icon: <Code /> },
      { name: 'REST APIs', level: 90, icon: <Server /> },
    ],
  },
  {
    name: 'Databases',
    skills: [
      { name: 'Firebase', level: 85, icon: <Database /> },
      { name: 'MySQL', level: 70, icon: <Database /> },
      { name: 'PostgreSQL', level: 65, icon: <Database /> },
      { name: 'MongoDB', level: 75, icon: <Database /> },
    ],
  },
  {
    name: 'AI/ML',
    skills: [
      { name: 'Scikit-learn', level: 80, icon: <Cpu /> },
      { name: 'TensorFlow', level: 70, icon: <Cpu /> },
      { name: 'PyTorch', level: 65, icon: <Cpu /> },
      { name: 'Seaborn', level: 75, icon: <GanttChart /> },
      { name: 'Pandas', level: 85, icon: <Code /> },
      { name: 'Numpy', level: 85, icon: <Code /> },
      { name: 'Genkit', level: 70, icon: <Sparkles /> },
    ],
  },
  {
    name: 'Mobile Development',
    skills: [
      { name: 'React Native', level: 80, icon: <Layers /> },
      { name: 'Flutter', level: 70, icon: <Smartphone /> },
      { name: 'Capacitor', level: 60, icon: <Phone /> },
    ],
  },
  {
    name: 'Tools & Other',
    skills: [
      { name: 'Git & GitHub', level: 90, icon: <GitBranch /> },
      { name: 'VS Code', level: 95, icon: <Monitor /> },
      { name: 'Postman', level: 85, icon: <Server /> },
      { name: 'Docker', level: 60, icon: <Briefcase /> },
    ],
  },
];

const SkillItem: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-1">
      <div className="flex items-center gap-2">
        <span className="text-accent">{skill.icon}</span>
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
      </div>
      <span className="text-xs text-muted-foreground">{skill.level}%</span>
    </div>
    <Progress value={skill.level} aria-label={`${skill.name} proficiency ${skill.level}%`} className="h-2" />
  </div>
);

const SkillCategory: React.FC<{ category: SkillCategoryType }> = ({ category }) => (
  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
    <CardHeader>
      <CardTitle className="text-xl text-primary">{category.name}</CardTitle>
    </CardHeader>
    <CardContent>
      {category.skills.map(skill => (
        <SkillItem key={skill.name} skill={skill} />
      ))}
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
            <Code2 className="w-8 h-8" /> Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across various domains.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map(category => (
            <SkillCategory key={category.name} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
