import { Card, CardContent } from './ui/card';
import { Code, Palette, Rocket, Zap } from 'lucide-react';
import { AboutCard3D } from './AboutCard3D';

const skills = [
  {
    icon: Code,
    title: 'Full-Stack Development',
    description: 'Building scalable applications with React, Node.js, Flask, and modern frameworks',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating beautiful, responsive interfaces with Tailwind CSS and modern design principles',
  },
  {
    icon: Rocket,
    title: 'AI/ML Integration',
    description: 'Implementing intelligent features with AI models, speech recognition, and NLP',
  },
  {
    icon: Zap,
    title: 'Database & APIs',
    description: 'Designing efficient databases with MySQL, MongoDB, and RESTful API architecture',
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Full-stack developer passionate about creating innovative solutions with modern technologies
          </p>
        </div>

        <div className="mb-16 animate-fade-in">
          <AboutCard3D />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-bold gradient-text">My Journey</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate full-stack developer with expertise in building modern web applications
              and AI-powered solutions. My journey combines creative problem-solving with technical
              excellence to deliver innovative digital products.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From e-commerce platforms to AI voice assistants, I thrive on transforming complex ideas
              into elegant, user-friendly applications. I'm constantly exploring cutting-edge technologies
              and best practices to create impactful solutions.
            </p>
          </div>

          <div className="relative animate-scale-in">
            <div className="aspect-square rounded-2xl overflow-hidden gradient-border">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
                alt="Developer workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={skill.title}
              className="gradient-border hover:scale-105 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-xl bg-primary/10 glow">
                    <skill.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{skill.title}</h3>
                  <p className="text-muted-foreground text-sm">{skill.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
