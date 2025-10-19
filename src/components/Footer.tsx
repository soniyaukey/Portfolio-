import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-2">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using React, Three.js & Tailwind CSS
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Full Stack Developer Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
