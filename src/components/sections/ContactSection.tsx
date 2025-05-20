'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Github, Linkedin, Mail, Send, ExternalLink } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    toast({
      title: "Message Sent (Simulated)",
      description: "Thank you for your message! I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    {
      name: 'Email',
      href: 'mailto:shubhamchoudharyjr@gmail.com',
      icon: <Mail className="h-5 w-5" />,
      text: 'shubhamchoudharyjr@gmail.com'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/shubhamchoudharyjr/',
      icon: <Linkedin className="h-5 w-5" />,
      text: 'linkedin.com/in/shubhamchoudharyjr'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/shubhamchoudharyjr',
      icon: <Github className="h-5 w-5" />,
      text: 'github.com/shubhamchoudharyjr'
    },
    {
      name: 'Remote OK',
      href: 'https://remoteok.com/@shubhamchoudharyjr',
      icon: <ExternalLink className="h-5 w-5" />,
      text: 'remoteok.com/@shubhamchoudharyjr'
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
            <Send className="w-8 h-8" /> Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
              <CardDescription>Fill out the form below, and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" type="text" placeholder="Your Name" value={formData.name} onChange={handleChange} required disabled={isSubmitting} />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" value={formData.email} onChange={handleChange} required disabled={isSubmitting} />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message..." value={formData.message} onChange={handleChange} rows={5} required disabled={isSubmitting} />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Send className="mr-2 h-4 w-4 animate-pulse" /> Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
             <Card className="shadow-xl">
                <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                    <CardDescription>Find me on these platforms or send an email directly.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                {socialLinks.map(link => (
                    <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 rounded-md hover:bg-accent/10 transition-colors group"
                    >
                    <span className="text-accent group-hover:text-primary transition-colors">{link.icon}</span>
                    <span className="ml-3 text-foreground group-hover:text-primary transition-colors text-sm">{link.text}</span>
                    </a>
                ))}
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
