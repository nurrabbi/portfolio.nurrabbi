import { Progress } from './ui/progress';

export function Skills() {
  const skillCategories = [
    {
      category: 'Programming & Backend',
      skills: [
        { name: 'C', level: 75 },
        { name: 'C++', level: 80 },
        { name: 'Java', level: 85 },
        { name: 'Python', level: 88 },
        { name: 'Spring Boot', level: 90, highlighted: true },
      ],
    },
    {
      category: 'Web Development',
      skills: [
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'JavaScript', level: 88 },
        { name: 'PHP', level: 75 },
        { name: 'MySQL', level: 85 },
      ],
    },
    {
      category: 'UI/UX & Tools',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Framer', level: 70 },
        { name: 'Canva', level: 80 },
        { name: 'Adobe Illustrator', level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm uppercase tracking-wider mb-2">Skills</p>
          <h2 className="text-4xl sm:text-5xl font-bold">Technical Expertise</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="space-y-6">
              {/* Category Header */}
              <div className="pb-4 border-b border-border">
                <h3 className="text-xl font-semibold">{category.category}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`space-y-2 ${
                      skill.highlighted
                        ? 'p-4 rounded-lg bg-primary/5 border border-primary/20'
                        : ''
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-medium ${skill.highlighted ? 'text-primary' : ''}`}>
                        {skill.name}
                      </span>
                      <span className={`text-sm ${skill.highlighted ? 'text-primary font-semibold' : 'text-muted-foreground'}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <Progress
                      value={skill.level}
                      className={`h-2 ${skill.highlighted ? 'bg-primary/20' : ''}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Badge Section */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-4">Also familiar with:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['React', 'TypeScript', 'Node.js', 'Git', 'Docker', 'MongoDB', 'TensorFlow', 'Tailwind CSS'].map(
              (tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-muted text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
