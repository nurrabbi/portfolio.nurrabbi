import { GraduationCap, Award, Microscope, Calendar } from 'lucide-react';
import { Card } from './ui/card';

export function Education() {
  const timelineItems = [
    {
      type: 'education',
      icon: GraduationCap,
      title: 'Bachelor of Science in Computer Science',
      organization: 'University of Technology',
      period: '2020 - 2024',
      description: 'Graduated with honors. Focused on software engineering, algorithms, and machine learning.',
      details: ['GPA: 3.8/4.0', 'Dean\'s List (6 semesters)', 'Member of Computer Science Club'],
    },
    {
      type: 'achievement',
      icon: Award,
      title: 'Best Capstone Project Award',
      organization: 'Computer Science Department',
      period: 'May 2024',
      description: 'Received award for developing an AI-powered code review assistant.',
      details: ['First Place', 'Project showcased at University Tech Expo'],
    },
    {
      type: 'research',
      icon: Microscope,
      title: 'Research Assistant - Machine Learning Lab',
      organization: 'University Research Department',
      period: '2023 - 2024',
      description: 'Conducted research on natural language processing and contributed to published papers.',
      details: ['Co-authored 2 research papers', 'Presented at Student Research Symposium'],
    },
    {
      type: 'achievement',
      icon: Award,
      title: 'Hackathon Winner',
      organization: 'Tech Innovation Challenge',
      period: 'November 2023',
      description: 'Led team to first place by developing a sustainability tracking mobile app.',
      details: ['Team Lead', '$5,000 Prize', 'Mentored by industry professionals'],
    },
    {
      type: 'education',
      icon: GraduationCap,
      title: 'Advanced Web Development Certification',
      organization: 'Online Learning Platform',
      period: '2023',
      description: 'Completed intensive certification program covering modern web technologies.',
      details: ['React', 'Node.js', 'Cloud Deployment'],
    },
  ];

  const getIconColor = (type: string) => {
    switch (type) {
      case 'education':
        return 'bg-blue-500/10 text-blue-500';
      case 'achievement':
        return 'bg-yellow-500/10 text-yellow-500';
      case 'research':
        return 'bg-purple-500/10 text-purple-500';
      default:
        return 'bg-primary/10 text-primary';
    }
  };

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm uppercase tracking-wider mb-2">Journey</p>
          <h2 className="text-4xl sm:text-5xl font-bold">Education & Achievements</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            My academic journey and notable accomplishments
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          {/* Timeline Items */}
          <div className="space-y-8">
            {timelineItems.map((item, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-8 transform -translate-x-1/2 hidden md:block">
                  <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
                </div>

                {/* Content */}
                <div className="md:ml-20">
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col sm:flex-row gap-4">
                      {/* Icon */}
                      <div className={`flex-shrink-0 w-12 h-12 rounded-lg ${getIconColor(item.type)} flex items-center justify-center`}>
                        <item.icon className="h-6 w-6" />
                      </div>

                      {/* Details */}
                      <div className="flex-1 space-y-3">
                        <div>
                          <h3 className="text-lg font-semibold">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.organization}</p>
                        </div>

                        {/* Period */}
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{item.period}</span>
                        </div>

                        {/* Description */}
                        <p className="text-sm leading-relaxed">{item.description}</p>

                        {/* Details List */}
                        {item.details && (
                          <ul className="space-y-1">
                            {item.details.map((detail, detailIndex) => (
                              <li
                                key={detailIndex}
                                className="text-sm text-muted-foreground flex items-center gap-2"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
