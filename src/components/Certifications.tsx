import { Award } from 'lucide-react';

export function Certifications() {
  const certifications = [
    {
      name: 'AWS Cloud Practitioner',
      organization: 'Amazon Web Services (AWS)',
      year: '2025'
    }
    // {
    //   name: 'Professional Cloud Developer',
    //   organization: 'Google Cloud',
    //   year: '2023'
    // }
  ];

  return (
    <section id="certifications" className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Certifications</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Professional certifications demonstrating expertise and commitment to continuous learning
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 group"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <Award className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">{cert.organization}</p>
                  <p className="text-xs text-blue-600 font-medium">{cert.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
