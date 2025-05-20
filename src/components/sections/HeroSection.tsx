import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Download, Github } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-background py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
          <span className="block text-primary">Shubham Choudhary</span>
          <span className="block text-4xl md:text-6xl text-foreground mt-2">Full Stack Developer</span>
        </h1>
        <p className="text-xl md:text-2xl text-accent font-semibold mb-6">
          Building Intelligent Web & Mobile Solutions.
        </p>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          Passionate about crafting elegant and efficient applications that solve real-world problems and drive innovation.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
            <Link href="#projects">
              View My Work <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
            <Link href="/ShubhamChoudhary_CV.pdf" target="_blank" rel="noopener noreferrer" download>
              Download CV <Download className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
            <Link href="https://github.com/shubhamchoudharyjr" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" /> GitHub
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
            <Link href="#contact">
              Contact Me
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
