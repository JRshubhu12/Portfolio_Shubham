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
      {/* Animated space background container */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div className="planet planet-1"></div>
        <div className="planet planet-2"></div>
        <div className="planet planet-3"></div>
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

          @keyframes move-twink-back {
              from {background-position:0 0;}
              to {background-position:-10000px 5000px;}
          }

          #stars, #stars2, #stars3 {
              position:absolute;
              top:0;
              left:0;
              right:0;
              bottom:0;
              width:100%;
              height:100%;
              display:block;
          }

          #stars {
              background: transparent url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><defs><pattern id="p" width="300" height="300" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="hsl(var(--primary)/0.4)"/><circle cx="100" cy="150" r="1" fill="hsl(var(--primary)/0.4)"/><circle cx="250" cy="200" r="2" fill="hsl(var(--accent)/0.5)"/><circle cx="150" cy="280" r="1" fill="hsl(var(--primary)/0.4)"/></pattern></defs><rect width="100%" height="100%" fill="url(%23p)"/></svg>') 0 0 / 300px 300px;
              z-index: 1;
              animation: move-twink-back 200s linear infinite;
          }

          #stars2 {
              background: transparent url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><defs><pattern id="p" width="500" height="500" patternUnits="userSpaceOnUse"><circle cx="80" cy="120" r="2" fill="hsl(var(--primary)/0.5)"/><circle cx="300" cy="300" r="1" fill="hsl(var(--accent)/0.6)"/><circle cx="450" cy="100" r="1" fill="hsl(var(--primary)/0.5)"/><circle cx="200" cy="450" r="2" fill="hsl(var(--accent)/0.6)"/></pattern></defs><rect width="100%" height="100%" fill="url(%23p)"/></svg>') 0 0 / 500px 500px;
              z-index: 2;
              animation: move-twink-back 150s linear infinite;
          }

          #stars3 {
              background: transparent url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><defs><pattern id="p" width="800" height="800" patternUnits="userSpaceOnUse"><circle cx="200" cy="100" r="3" fill="hsl(var(--primary)/0.6)"/><circle cx="500" cy="600" r="2" fill="hsl(var(--accent)/0.7)"/><circle cx="750" cy="300" r="1" fill="hsl(var(--primary)/0.6)"/></pattern></defs><rect width="100%" height="100%" fill="url(%23p)"/></svg>') 0 0 / 800px 800px;
              z-index: 3;
              animation: move-twink-back 100s linear infinite;
          }

          @keyframes float {
              0% {
                  transform: translateY(0px) translateX(0px) rotate(0deg);
              }
              50% {
                  transform: translateY(-20px) translateX(20px) rotate(10deg);
              }
              100% {
                  transform: translateY(0px) translateX(0px) rotate(0deg);
              }
          }

          .planet {
              position: absolute;
              border-radius: 50%;
              animation: float 10s ease-in-out infinite;
              box-shadow: 0 0 20px 5px hsl(var(--primary) / 0.1), inset 0 0 15px hsl(var(--background) / 0.5);
              z-index: 4;
          }

          .planet-1 {
              width: 80px;
              height: 80px;
              top: 15%;
              left: 10%;
              background-color: hsl(var(--accent) / 0.2);
              animation-duration: 12s;
          }

          .planet-2 {
              width: 40px;
              height: 40px;
              top: 70%;
              right: 20%;
              background-color: hsl(var(--primary) / 0.3);
              animation-duration: 8s;
              animation-delay: -3s;
          }

          .planet-3 {
              width: 120px;
              height: 120px;
              top: 60%;
              left: 15%;
              background-color: hsl(var(--secondary) / 0.4);
              animation-duration: 15s;
              animation-delay: -6s;
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
              href="/images/Shubham_Choudhary.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              View Resume<Download className="ml-2 h-5 w-5" />
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
