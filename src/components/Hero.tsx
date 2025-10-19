import { ArrowDown } from 'lucide-react';
import { Button } from './ui/button';
// import { Scene3D } from './Scene3D';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* <Scene3D /> */}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background -z-10" />
      
      <div className="container mx-auto px-4 text-center z-10 animate-fade-in">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
            Hi, I'm <span className="gradient-text">Soniya Ukey</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Full Stack Developer | AI Enthusiast
          </p>
          
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Building innovative web applications and AI-powered solutions with modern technologies
          </p>
          
          <div className="flex gap-4 justify-center pt-8">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow"
            >
              <a href="#projects">View Projects</a>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="glass hover:bg-primary/10"
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
        
        <a
          href="#projects"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
          aria-label="Scroll to projects"
        >
          <ArrowDown className="text-primary" size={32} />
        </a>
      </div>
    </section>
  );
};
