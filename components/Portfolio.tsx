import { ExternalLink, Github } from 'lucide-react';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Portfolio() {
  const projects = [
    {
      title: 'Analytics Dashboard',
      description: 'A comprehensive web analytics dashboard with real-time data visualization and reporting features.',
      image: 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHAlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzY5MDUxNDc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'TypeScript', 'Chart.js'],
    },
    {
      title: 'Mobile Banking App',
      description: 'User-friendly mobile banking application with secure transactions and account management.',
      image: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY4OTk4NjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React Native', 'Node.js', 'MongoDB'],
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured online shopping platform with product management, cart, and checkout system.',
      image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2OTA0NzI1MHww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    },
    {
      title: 'Data Visualization Tool',
      description: 'Interactive data visualization tool for analyzing complex datasets with custom charts.',
      image: 'https://images.unsplash.com/photo-1762427354251-f008b64dbc32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGNoYXJ0fGVufDF8fHx8MTc2OTA1MjEzOHww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Python', 'D3.js', 'Flask'],
    },
    {
      title: 'Portfolio Website Builder',
      description: 'Modern website builder with drag-and-drop interface and customizable templates.',
      image: 'https://images.unsplash.com/photo-1676792519027-7c42006d7b4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2OTA2MjEyOXww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Vue.js', 'Tailwind', 'Firebase'],
    },
    {
      title: 'RESTful API Service',
      description: 'Scalable RESTful API with authentication, rate limiting, and comprehensive documentation.',
      image: 'https://images.unsplash.com/photo-1623282033815-40b05d96c903?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGklMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzY5MDc3NTU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Spring Boot', 'JWT', 'Swagger'],
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm uppercase tracking-wider mb-2">Portfolio</p>
          <h2 className="text-4xl sm:text-5xl font-bold">Featured Projects</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden bg-muted">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button className="p-3 bg-white rounded-full hover:scale-110 transition-transform">
                    <ExternalLink className="h-5 w-5 text-primary" />
                  </button>
                  <button className="p-3 bg-white rounded-full hover:scale-110 transition-transform">
                    <Github className="h-5 w-5 text-primary" />
                  </button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-muted text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
