import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-between bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden px-12 md:px-28">
  
      {/* Background floating blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-200/30 rounded-full filter blur-3xl animate-blob1"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-200/30 rounded-full filter blur-3xl animate-blob2"></div>

      <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 relative z-10">

        {/* Left Column: Text */}
        <div className="flex-1 text-left animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            Simranjeet Kaur
          </h1>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Full Stack Software Developer
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
            Crafting elegant solutions to complex problems. Passionate about building scalable applications and delivering exceptional user experiences.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all hover:shadow-lg hover:-translate-y-1 flex items-center gap-2"
            >
              View Projects
            </button>
            <a
              href="/Simranjeet_Kaur_Resume.pdf"
              download
              className="px-8 py-3 bg-white text-gray-800 rounded-lg font-medium border-2 border-gray-300 hover:border-blue-600 transition-all hover:shadow-lg hover:-translate-y-1 flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>

          <div className="flex gap-6">
            <a href="https://github.com/simiranjeet" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/simranjeet-kaur-76792b248" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin size={28} />
            </a>  
            <a href="mailto:simran_Mehra08@outlook.com" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Mail size={28} />
            </a>
          </div>
        </div>

        {/* Right Column: Profile Picture */}
        <div className="flex-shrink-0 animate-float relative">
          <img 
            src="/Simra.jpg" 
            alt="Simranjeet Kaur" 
            className="w-64 md:w-80 rounded-full border-4 border-blue-600 shadow-2xl object-cover"
          />
        </div>

      </div>

      {/* Scroll Down Arrow */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-400 hover:text-blue-600 transition-colors"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
}
