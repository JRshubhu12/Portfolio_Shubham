import { experienceData } from '@/lib/data';
import type { Experience } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Briefcase, CalendarDays, CheckCircle } from 'lucide-react';

const ExperienceCard: React.FC<{ experience: Experience }> = ({ experience }) => (
  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
    <CardHeader>
      <div className="flex items-center justify-between">
        <CardTitle className="text-xl text-primary">{experience.title}</CardTitle>
        <Briefcase className="h-6 w-6 text-accent" />
      </div>
      <CardDescription className="text-md font-medium text-foreground">{experience.company}</CardDescription>
      <div className="flex items-center text-sm text-muted-foreground mt-1">
        <CalendarDays className="h-4 w-4 mr-2" />
        <span>{experience.duration}</span>
      </div>
    </CardHeader>
    <CardContent className="space-y-3">
      <div>
        <h4 className="font-semibold text-foreground mb-1">Key Responsibilities:</h4>
        <ul className="space-y-1">
          {experience.responsibilities.map((resp, index) => (
            <li key={index} className="flex items-start text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 shrink-0" />
              <span>{resp}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-foreground mb-1">Learnings & Contributions:</h4>
        <p className="text-sm text-muted-foreground">{experience.learnings}</p>
      </div>
    </CardContent>
  </Card>
);

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
             <Briefcase className="w-8 h-8" /> Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My internship experiences that shaped my skills and professional growth.
          </p>
        </div>
        <div className="space-y-8">
          {experienceData.map(exp => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
