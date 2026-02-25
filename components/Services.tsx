import { Code, Server, Palette, Database } from 'lucide-react';
import { Card } from './ui/card';

export function Services() {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Building responsive and dynamic websites using modern frameworks and best practices.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Creating robust server-side applications with RESTful APIs and microservices architecture.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Designing intuitive and visually appealing user interfaces with attention to user experience.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Designing and optimizing database schemas for efficient data storage and retrieval.',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm uppercase tracking-wider mb-2">Services</p>
          <h2 className="text-4xl sm:text-5xl font-bold">What I Offer</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            My expertise spans across various areas of software development
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 space-y-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Icon with gradient background */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-0.5 group-hover:scale-110 transition-transform`}>
                <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
