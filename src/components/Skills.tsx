export function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['JavaScript', 'Python', 'Java', 'Php', 'SQL']
    },
    {
      title: 'Frontend Technologies',
      skills: ['React', 'Vue.js', 'HTML5', 'CSS3', 'Tailwind CSS']
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['Node.js', 'Express', 'Laravel', 'Flask', 'Spring Boot', 'FastAPI', 'Codeigniter']
    },
    {
      title: 'Backend & APIs',
      skills: ['RESTful APIs', 'GraphQL', 'Microservices', 'OAuth', 'JWT']
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL','Firebase']
    },
    {
      title: 'Tools & DevOps',
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Terraform', 'Kubernetes']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Skills & Expertise</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A comprehensive toolkit for building modern, scalable applications from frontend to backend
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
