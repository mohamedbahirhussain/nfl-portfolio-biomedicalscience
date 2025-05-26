import React from 'react';
import { Award, Star, Trophy, Medal, Sparkles } from 'lucide-react';

const Achievements: React.FC = () => {
  const certificates = [
    {
      title: 'Diploma in English',
      icon: <Award size={24} />,
      description: 'Advanced proficiency in English language and communication',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Achievement Certificates',
      icon: <Trophy size={24} />,
      description: 'Recognition for outstanding academic performance',
      color: 'from-amber-500 to-amber-600'
    },
    {
      title: 'Appreciation Certificates',
      icon: <Star size={24} />,
      description: 'Acknowledgment of exceptional contributions and dedication',
      color: 'from-rose-500 to-rose-600'
    },
    {
      title: 'Sports & Athletic Certificates',
      icon: <Medal size={24} />,
      description: 'Excellence in sports and athletic competitions',
      color: 'from-emerald-500 to-emerald-600'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-tl from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Achievements</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-4 rounded-full bg-gray-100 text-gray-600 group-hover:bg-white/20 group-hover:text-white transition-colors mb-4">
                      {cert.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-white transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-white/90 transition-colors">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-8 shadow-lg">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="text-blue-600 mr-3" size={28} />
              <h3 className="text-2xl font-bold text-gray-800">Motivational Statement</h3>
            </div>
            <blockquote className="text-center text-gray-700 text-lg italic leading-relaxed">
              "My journey in the biomedical field is driven by a passion for discovery and a commitment to making a positive impact on healthcare. 
              Every challenge is an opportunity to learn and grow, pushing the boundaries of what's possible in medical science."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;