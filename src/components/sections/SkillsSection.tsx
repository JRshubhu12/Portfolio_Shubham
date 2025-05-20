import { skillsData } from '@/lib/data';
import type { SkillCategory as SkillCategoryType, Skill } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress'; // Using ShadCN Progress
import { Code2 } from 'lucide-react';

const SkillItem: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="mb-3">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-foreground">{skill.name}</span>
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
