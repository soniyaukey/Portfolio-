import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'OnDaro – E-commerce Website',
    description: 'Full-stack e-commerce platform with product management, shopping cart, and secure checkout system.',
    tags: ['React', 'Node.js', 'MySQL', 'Express'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    github: '#',
    live: '#',
  },
  {
    id: 2,
    title: 'AI Recipe Finder Web App',
    description: 'Intelligent recipe recommendation system powered by AI that suggests personalized recipes based on available ingredients.',
    tags: ['Flask', 'React', 'Python', 'AI/ML'],
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80',
    github: '#',
    live: '#',
  },
  {
    id: 3,
    title: 'AI Voice Assistant',
    description: 'Advanced voice-controlled AI assistant using speech recognition and natural language processing for hands-free interaction.',
    tags: ['Python', 'Gradio', 'Hugging Face', 'Speech Recognition'],
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&q=80',
    github: '#',
    live: '#',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore my latest work showcasing innovation, creativity, and technical excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group gradient-border overflow-hidden hover:scale-105 hover:rotate-1 transition-all duration-500 animate-scale-in cursor-pointer"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1 glass hover:bg-primary/10"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90"
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
