import { GraduationCap, Code, Brain } from 'lucide-react';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Fresh Graduate',
      description: 'Recent Computer Science graduate ready to make an impact',
    },
    {
      icon: Code,
      title: 'CS Background',
      description: 'Strong foundation in algorithms, data structures, and software engineering',
    },
    {
      icon: Brain,
      title: 'Software & ML',
      description: 'Passionate about web development and machine learning applications',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm uppercase tracking-wider mb-2">About Me</p>
          <h2 className="text-4xl sm:text-5xl font-bold">Get to Know Me</h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Profile Image */}
          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1752859951149-7d3fc700a7ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGRldmVsb3BlcnxlbnwxfHx8fDE3NjkwODcwNzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Professional Summary</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate software engineer with a fresh perspective and eagerness to learn. 
                My journey in computer science has equipped me with a strong foundation in programming, 
                problem-solving, and collaborative development.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in full-stack web development with a keen interest in machine learning 
                applications. I'm committed to writing clean, maintainable code and building solutions 
                that make a real difference.
              </p>
            </div>

            {/* Highlight Boxes */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {highlights.map((item, index) => (
                <Card key={index} className="p-4 space-y-2 hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-sm">{item.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
