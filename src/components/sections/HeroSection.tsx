'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Download, Github } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-20 md:py-28"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight animate-in fade-in slide-in-from-top-12 duration-700 ease-out">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-text-gradient">
            Shubham Choudhary
          </span>
          <span className="block text-3xl md:text-5xl lg:text-6xl text-foreground mt-3">
            Full Stack Developer
          </span>
        </h1>
        <style jsx global>{`
          @keyframes text-gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-text-gradient {
            background-size: 200% 200%;
            animation: text-gradient 5s ease infinite;
          }
        `}</style>
        <p className="text-xl md:text-2xl text-accent font-semibold mb-8 animate-in fade-in slide-in-from-top-16 duration-700 delay-200 ease-out">
          Building Intelligent Web & Mobile Solutions.
        </p>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-in fade-in slide-in-from-top-20 duration-700 delay-300 ease-out">
          Passionate about crafting elegant and efficient applications that solve real-world problems and drive innovation.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 animate-in fade-in slide-in-from-top-24 duration-700 delay-400 ease-out">
          <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
            <Link href="#projects">
              View My Work <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
            <a
              href="/images/shubham%20choudhary.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              View CV <Download className="ml-2 h-5 w-5" />
            </a>

          </Button>
          <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
            <Link href="https://github.com/JRshubhu12" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" /> GitHub
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg" className="shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
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
