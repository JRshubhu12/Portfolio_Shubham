import type { Metadata } from 'next';
import { Inter as FontSans, Roboto_Mono as FontMono } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster";

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Portfolio Pro | Shubham Choudhary',
  description: 'Shubham Choudhary - Full Stack Developer Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(fontSans.variable, fontMono.variable)}>
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
