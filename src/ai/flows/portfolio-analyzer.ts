'use server';
/**
 * @fileOverview Portfolio analyzer AI agent.
 *
 * - analyzePortfolio - A function that handles the portfolio analysis process.
 * - AnalyzePortfolioInput - The input type for the analyzePortfolio function.
 * - AnalyzePortfolioOutput - The return type for the analyzePortfolio function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzePortfolioInputSchema = z.object({
  portfolioContent: z
    .string()
    .describe('The content of the portfolio to be analyzed.'),
});
export type AnalyzePortfolioInput = z.infer<typeof AnalyzePortfolioInputSchema>;

const AnalyzePortfolioOutputSchema = z.object({
  suggestions: z
    .string()
    .describe(
      'AI-driven suggestions for improving the portfolio content based on industry best practices and emerging trends.'
    ),
});
export type AnalyzePortfolioOutput = z.infer<typeof AnalyzePortfolioOutputSchema>;

export async function analyzePortfolio(input: AnalyzePortfolioInput): Promise<AnalyzePortfolioOutput> {
  return analyzePortfolioFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzePortfolioPrompt',
  input: {schema: AnalyzePortfolioInputSchema},
  output: {schema: AnalyzePortfolioOutputSchema},
  prompt: `You are a portfolio optimization expert. Analyze the following portfolio content and provide suggestions for improvements based on industry best practices and emerging trends.\n\nPortfolio Content: {{{portfolioContent}}}`,
});

const analyzePortfolioFlow = ai.defineFlow(
  {
    name: 'analyzePortfolioFlow',
    inputSchema: AnalyzePortfolioInputSchema,
    outputSchema: AnalyzePortfolioOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
