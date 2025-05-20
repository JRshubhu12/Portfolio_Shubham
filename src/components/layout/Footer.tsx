import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-card text-card-foreground py-8 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Shubham Choudhary. All rights reserved.
        </p>
        <p className="text-xs mt-1 text-muted-foreground">
          Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
