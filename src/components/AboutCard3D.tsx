import { useState } from 'react';
import { Card, CardContent } from './ui/card';

export const AboutCard3D = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const techStack = [
    { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Flask', 'Python'] },
    { category: 'Database', items: ['MySQL', 'MongoDB', 'PostgreSQL'] },
    { category: 'AI/ML', items: ['Hugging Face', 'Gradio', 'Speech Recognition', 'NLP'] },
    { category: 'Tools', items: ['Git', 'Docker', 'VS Code', 'Postman'] },
  ];

  return (
    <div
      className="perspective-1000 w-full max-w-4xl mx-auto"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Card
        className="gradient-border glass transition-all duration-300 ease-out"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        <CardContent className="p-8">
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4 gradient-text">Tech Stack & Expertise</h3>
              <p className="text-muted-foreground">
                Passionate full-stack developer with expertise in building modern web applications,
                AI-powered solutions, and immersive user experiences. Specialized in creating
                scalable, efficient, and innovative digital products.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {techStack.map((section, idx) => (
                <div
                  key={section.category}
                  className="space-y-2 p-4 rounded-lg bg-card/50 hover:bg-card/80 transition-all"
                  style={{
                    transform: `translateZ(${20 + idx * 5}px)`,
                    animationDelay: `${idx * 0.1}s`,
                  }}
                >
                  <h4 className="font-semibold text-primary text-lg">{section.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {section.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
