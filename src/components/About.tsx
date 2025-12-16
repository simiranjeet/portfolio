import { Code2, Zap, Users } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
         <div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I’m a Full Stack Software Developer with over 3 years of professional experience building reliable and scalable web applications. I specialize in developing backend-driven solutions using PHP (Laravel), Java, and SQL, with a strong focus on clean code and maintainable architectures.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            My experience spans both frontend and backend development, working with JavaScript, React, HTML, CSS, and RESTful APIs to deliver user-friendly and efficient applications. I have also worked with cloud and DevOps tools such as Docker, AWS, and Terraform to support modern deployment workflows.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            I enjoy solving real-world problems, learning new technologies, and continuously improving my skills. Outside of coding, I focus on enhancing my technical knowledge, building personal projects, and exploring best practices in software development.
          </p>
        </div>


          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Code2 className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">3+ Years Experience</h3>
                  <p className="text-gray-600">
                    Building production-ready web applications across multiple technologies
                  </p>
                </div>

              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Zap className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Modern Tech Stack</h3>
                  <p className="text-gray-600">
                    PHP (Laravel), JavaScript, React, Vue.js, MySQL, RESTful APIs
                  </p>
                </div>

              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaborative Mindset</h3>
                  <p className="text-gray-600">Strong communicator with cross-functional teams</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
