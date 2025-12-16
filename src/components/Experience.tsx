import { Briefcase, GraduationCap } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'Zestgeek Solutions',
      duration: 'April 2022 - March 2024',
      responsibilities: [
        'Developed and maintained full-stack web applications using Java, PHP (Laravel), MySQL, and JavaScript',
        'Built and enhanced RESTful APIs to support application features and third-party integrations',
        'Optimized database queries and frontend performance, improving page load times by up to 30%',
        'Collaborated with cross-functional teams in an Agile environment to deliver reliable production features',
        'Implemented secure workflows and payment integrations, reducing manual processing effort by 35%',
        'Assisted in debugging, issue resolution, and ongoing application support'
      ]
    },

    {
      title: 'Software Developer',
      company: 'Progressive Infotech Pvt. Ltd.',
      duration: 'May 2019 - March 2022',
      responsibilities: [
        'Developed and maintained backend features using PHP (Laravel) and MySQL for business web applications',
        'Improved API processing and backend efficiency, contributing to 20–25% faster release cycles',
        'Automated recurring tasks using CRON jobs and Laravel Scheduler, reducing manual effort by approximately 50%',
        'Assisted in frontend integration using HTML, CSS, JavaScript, and Bootstrap to enhance application usability',
        'Debugged production issues and supported ongoing system maintenance to improve application stability and uptime',
        'Collaborated with cross-functional teams to deliver features and ensure smooth deployments'
      ]
    }

  ];

  const education = [
     {
      degree: 'Full Stack Software Development - Diploma',
      institution: 'Lambton College, Ottawa, Canada',
      year: '2025',
      details: 'Focused on full-stack web development, backend systems, databases, and cloud fundamentals'
    },

    {
      degree: 'Master of Computer Applications',
      institution: 'Chandigarh Group of Colleges',
      year: '2019',
      details: 'Focus on Software Engineering and Distributed Systems'
    },
    {
      degree: 'Bachelor of Computer Applications',
      institution: 'Chandigarh Group of Colleges',
      year: '2017',
      details: 'Minor in Mathematics, GPA: 3.8/4.0'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Experience & Education</h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Briefcase className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Work Experience</h3>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-blue-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">{exp.title}</h4>
                    <div className="text-blue-600 font-medium mb-2">{exp.company}</div>
                    <div className="text-sm text-gray-500 mb-4">{exp.duration}</div>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="text-gray-600 text-sm flex items-start">
                          <span className="text-blue-600 mr-2">▹</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-blue-600 p-2 rounded-lg">
                <GraduationCap className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Education</h3>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-blue-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">{edu.degree}</h4>
                    <div className="text-blue-600 font-medium mb-2">{edu.institution}</div>
                    <div className="text-sm text-gray-500 mb-3">{edu.year}</div>
                    <p className="text-gray-600 text-sm">{edu.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
