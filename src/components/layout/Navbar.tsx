'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Briefcase, Lightbulb, Code, UserCircle, Send, BarChartBig } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navLinks } from '@/lib/data';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.href.substring(1)));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getIcon = (href: string) => {
    if (href === '#home') return <Briefcase className="w-5 h-5" />;
    if (href === '#about') return <UserCircle className="w-5 h-5" />;
    if (href === '#projects') return <Lightbulb className="w-5 h-5" />;
    if (href === '#skills') return <Code className="w-5 h-5" />;
    if (href === '#experience') return <BarChartBig className="w-5 h-5" />;
    if (href === '#contact') return <Send className="w-5 h-5" />;
    return null;
  };
  
  const NavLinkItems = ({ mobile = false }: { mobile?: boolean }) => (
    navLinks.map((link) => (
      <li key={link.href}>
        <Link
          href={link.href}
          onClick={() => mobile && setIsOpen(false)}
          className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out
            ${activeSection === link.href.substring(1)
              ? 'bg-primary text-primary-foreground shadow-md scale-105'
              : 'text-foreground hover:bg-accent/80 hover:text-accent-foreground hover:scale-105'
            }
            ${mobile ? 'w-full text-base' : ''}
          `}
        >
          {getIcon(link.href)}
          {link.label}
        </Link>
      </li>
    ))
  );


  return (
    <nav 
      className={`sticky top-0 z-50 transition-all duration-300 ease-in-out 
      ${isScrolled ? 'bg-card/90 backdrop-blur-lg shadow-xl' : 'bg-card/70 backdrop-blur-md shadow-md'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="#home" className="text-2xl font-bold text-primary transition-transform hover:scale-105">
              Shubham Choudhary
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="ml-10 flex items-baseline space-x-1 lg:space-x-2">
              <NavLinkItems />
            </ul>
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-foreground hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-card shadow-2xl p-4 rounded-b-lg border-t border-border">
          <ul className="space-y-3">
            <NavLinkItems mobile={true} />
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
