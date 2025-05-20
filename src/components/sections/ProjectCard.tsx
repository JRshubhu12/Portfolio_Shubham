import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, BookOpen } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <CardHeader>
        <div className="aspect-video relative w-full overflow-hidden rounded-t-md">
          <Image
            src={project.imageUrl}
            alt={project.title}
            data-ai-hint={project.imageHint}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardTitle className="mt-4 text-xl font-semibold text-primary">{project.title}</CardTitle>
        <Badge variant="secondary" className="mt-1 self-start">{project.category}</Badge>
        <CardDescription className="mt-2 text-sm text-muted-foreground">Role: {project.role}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-3">
        <div>
          <h4 className="font-medium text-foreground">Problem Solved:</h4>
          <p className="text-sm text-muted-foreground">{project.problemSolved}</p>
        </div>
        <div>
          <h4 className="font-medium text-foreground">Key Features:</h4>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            {project.features.slice(0, 3).map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
            {project.features.length > 3 && <li>...and more</li>}
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-foreground">Technologies:</h4>
          <div className="flex flex-wrap gap-1 mt-1">
            {project.technologies.slice(0, 5).map((tech) => (
              <Badge key={tech} variant="outline">{tech}</Badge>
            ))}
            {project.technologies.length > 5 && <Badge variant="outline">...</Badge>}
          </div>
        </div>
        {project.impact && (
          <div>
            <h4 className="font-medium text-foreground">Impact:</h4>
            <p className="text-sm text-muted-foreground">{project.impact}</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 pt-4 border-t">
        {project.liveLink && (
          <Button asChild variant="outline" size="sm">
            <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </Link>
          </Button>
        )}
        {project.githubLink && (
          <Button asChild variant="outline" size="sm">
            <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Link>
          </Button>
        )}
        {project.caseStudyLink && (
          <Button asChild variant="outline" size="sm">
            <Link href={project.caseStudyLink} target="_blank" rel="noopener noreferrer">
              <BookOpen className="mr-2 h-4 w-4" /> Case Study
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
