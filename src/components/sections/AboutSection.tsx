import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const keyStrengths = [
    'Advanced problem-solving capabilities',
    'High adaptability to new technologies and environments',
    'Strong analytical approach from data analysis experiences',
    'Cross-platform development proficiency',
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A glimpse into my professional journey and what drives me.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-2 flex justify-center">
            <Image
              src="/images/profile.jpg"
              alt="Shubham Choudhary"
              data-ai-hint="professional portrait"
              width={300}
              height={300}
              className="rounded-full shadow-2xl border-4 border-primary object-cover"
              priority
            />
          </div>
          <div className="md:col-span-3">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Professional Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-foreground">
                <p>
                  I am a dedicated Full Stack Developer with a strong foundation in AI/Machine Learning and Android Development. My experience spans across various platforms, enabling me to build comprehensive and impactful solutions. I am committed to leveraging technology to solve complex challenges and deliver high-quality software.
                </p>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Key Strengths:</h3>
                  <ul className="space-y-2">
                    {keyStrengths.map((strength, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-accent mr-2 mt-1 shrink-0" />
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">My Passion:</h3>
                  <p>
                    I am passionate about solving intricate problems with technology and exploring the practical applications of Artificial Intelligence to create smarter, more efficient systems. Continuous learning and innovation are at the core of my professional philosophy.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;