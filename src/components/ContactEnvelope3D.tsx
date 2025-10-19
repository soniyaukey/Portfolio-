import { useState } from 'react';
import { Mail } from 'lucide-react';

export const ContactEnvelope3D = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center mb-8">
      <div
        className="relative cursor-pointer group"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {/* Envelope */}
        <div className="relative w-48 h-32 perspective-1000">
          {/* Envelope body */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/40 rounded-lg transition-all duration-500 group-hover:shadow-glow" />
          
          {/* Envelope flap */}
          <div
            className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-br from-primary/30 to-secondary/30 border-2 border-primary/40 origin-top transition-all duration-500 rounded-t-lg"
            style={{
              transform: isOpen ? 'rotateX(-180deg)' : 'rotateX(0deg)',
              transformStyle: 'preserve-3d',
            }}
          />
          
          {/* Mail icon */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
            style={{
              transform: isOpen 
                ? 'translate(-50%, -120%) scale(1.2)' 
                : 'translate(-50%, -50%) scale(1)',
            }}
          >
            <Mail className="w-12 h-12 text-primary animate-glow-pulse" />
          </div>
        </div>

        {/* Floating particles */}
        {isOpen && (
          <div className="absolute -top-8 left-1/2 -translate-x-1/2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-primary rounded-full animate-float"
                style={{
                  left: `${Math.random() * 60 - 30}px`,
                  animationDelay: `${i * 0.2}s`,
                  opacity: 0.6,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
