import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
  {
    title: 'V.ARIA Health – Telehealth Web Platform',
    description:
      'A secure telehealth web platform enabling online consultations, patient management, and automated payment workflows. Implemented strong authentication to meet healthcare security and compliance requirements.',
    technologies: [
      'PHP',
      'Laravel',
      'MySQL',
      'JavaScript',
      'RESTful APIs',
      'Payment Gateway Integration',
      'Multi-Factor Authentication (2FA)'
    ],
    // github: 'https://v-ariahealth.com/', // replace if repo is private
    demo: 'https://v-ariahealth.com/' // optional – add live link if available
  },
  {
    title: 'Restoration Sash & Door – Manufacturing Web Application',
    description:
      'A custom manufacturing management system designed to handle orders, pricing logic, and inventory workflows. Focused on improving database performance and ensuring accurate, real-time quote generation.',
    technologies: [
      'PHP',
      'Laravel',
      'MySQL',
      'JavaScript',
      'Bootstrap',
      'Database Optimization'
    ],
    // github: 'https://test1.sash.shop/login',
    demo: 'https://test1.sash.shop/login'
  },
  {
    title: 'Just Movies – Movie Finder Application',
    description:
      'A movie discovery web application with advanced search and filtering features. Optimized client-server communication to improve API response times and enhance user experience.',
    technologies: [
      'Java',
      'React',
      'RESTful APIs',
      'HTML',
      'CSS'
    ],
    github: 'https://github.com/simiranjeet/justmovies-backend',
    demo: ''
  }
]


  return (
    <section id="projects" className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Featured Projects</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A selection of projects showcasing my expertise in full-stack development
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 group"
            >
              <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center">
                <div className="text-white text-6xl font-bold opacity-20">
                  {project.title.charAt(0)}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-white text-blue-700 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
