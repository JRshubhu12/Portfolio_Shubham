'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Download, Github } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-20 md:py-28 overflow-hidden"
    >
      {/* Animated background lines container */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
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

          @keyframes drift {
            0% {
              transform: translate(var(--start-x), var(--start-y)) rotate(var(--angle));
              opacity: 0;
            }
            20% {
              opacity: 0.7;
            }
            80% {
              opacity: 0.7;
            }
            100% {
              transform: translate(var(--end-x), var(--end-y)) rotate(var(--angle));
              opacity: 0;
            }
          }

          .line {
            position: absolute;
            background-color: hsl(var(--primary) / 0.1);
            border-radius: 9999px;
            --angle: 45deg;
            animation: drift linear infinite;
          }

          .line:nth-child(1) {
            width: 150px;
            height: 2px;
            --start-x: -20vw;
            --start-y: 10vh;
            --end-x: 120vw;
            --end-y: 40vh;
            animation-duration: 15s;
            animation-delay: -2s;
          }
          .line:nth-child(2) {
            width: 200px;
            height: 3px;
            --start-x: -30vw;
            --start-y: 80vh;
            --end-x: 130vw;
            --end-y: 20vh;
            animation-duration: 20s;
            animation-delay: -5s;
            --angle: -35deg;
          }
          .line:nth-child(3) {
            width: 100px;
            height: 1px;
            --start-x: 120vw;
            --start-y: 90vh;
            --end-x: -20vw;
            --end-y: 30vh;
            animation-duration: 25s;
            animation-delay: -10s;
          }
          .line:nth-child(4) {
            width: 250px;
            height: 2px;
            --start-x: 50vw;
            --start-y: 110vh;
            --end-x: 30vw;
            --end-y: -10vh;
            animation-duration: 18s;
            animation-delay: -1s;
             --angle: 60deg;
          }
           .line:nth-child(5) {
            width: 180px;
            height: 2px;
            --start-x: -10vw;
            --start-y: 50vh;
            --end-x: 110vw;
            --end-y: 60vh;
            animation-duration: 22s;
            animation-delay: -12s;
             --angle: -20deg;
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
