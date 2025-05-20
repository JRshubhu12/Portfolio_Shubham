'use client';

import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Sparkles, AlertTriangle } from 'lucide-react';
import { analyzePortfolio, type AnalyzePortfolioInput, type AnalyzePortfolioOutput } from '@/ai/flows/portfolio-analyzer';
import { useToast } from "@/hooks/use-toast";

const PortfolioAnalyzerSection = () => {
  const [portfolioContent, setPortfolioContent] = useState('');
  const [analysisResult, setAnalysisResult] = useState<AnalyzePortfolioOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!portfolioContent.trim()) {
      toast({
        title: "Input Required",
        description: "Please enter some portfolio content to analyze.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setError(null);
    setAnalysisResult(null);

    try {
      const input: AnalyzePortfolioInput = { portfolioContent };
      const result = await analyzePortfolio(input);
      setAnalysisResult(result);
      toast({
        title: "Analysis Complete",
        description: "Portfolio suggestions generated successfully.",
      });
    } catch (err) {
      console.error("Error analyzing portfolio:", err);
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred.";
      setError(errorMessage);
      toast({
        title: "Analysis Failed",
        description: `Could not analyze portfolio: ${errorMessage}`,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="analyzer" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/><path d="M2 14h2"/><path d="M12 2v2"/><path d="M20 14h2"/><path d="m20 7-1.5-1.5"/><path d="m4 7 1.5-1.5"/></svg> {/* Brain icon */}
            AI Portfolio Analyzer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get AI-driven suggestions to enhance your portfolio content. Paste your portfolio text below.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto shadow-xl">
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle>Analyze Your Portfolio</CardTitle>
              <CardDescription>
                Enter your current portfolio text (e.g., about section, project descriptions) to get AI-powered improvement tips.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Paste your portfolio content here..."
                value={portfolioContent}
                onChange={(e) => setPortfolioContent(e.target.value)}
                rows={10}
                className="resize-none"
                disabled={isLoading}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isLoading} className="w-full sm:w-auto">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Get Suggestions
                  </>
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>

        {error && (
          <Card className="max-w-3xl mx-auto mt-8 border-destructive bg-destructive/10 shadow-lg">
            <CardHeader>
              <CardTitle className="text-destructive flex items-center">
                <AlertTriangle className="mr-2 h-5 w-5" />
                Analysis Error
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-destructive-foreground">{error}</p>
            </CardContent>
          </Card>
        )}

        {analysisResult && (
          <Card className="max-w-3xl mx-auto mt-8 shadow-xl">
            <CardHeader>
              <CardTitle className="text-primary flex items-center">
                <Sparkles className="mr-2 h-5 w-5 text-accent" />
                AI Suggestions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap">
                <p>{analysisResult.suggestions}</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default PortfolioAnalyzerSection;
