import React from 'react';
import { Briefcase, Calendar, Building2, GraduationCap } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      title: 'Assistant Teacher',
      company: 'BT/Bc Alighar National School',
      period: '2022',
      description: 'Assisted in teaching biology and science subjects to high school students. Prepared lesson materials, conducted laboratory demonstrations, and provided support during practical sessions.',
      icon: <GraduationCap size={24} />,
      color: 'from-teal-500 to-teal-600'
    },
    // {
    //   id: 2,
    //   title: 'Laboratory Intern',
    //   company: 'Medical Research Institute',
    //   period: '2023 (6 months)',
    //   description: 'Gained practical experience in a professional laboratory setting. Assisted in specimen collection, basic clinical testing, and laboratory maintenance procedures.',
    //   icon: <Briefcase size={24} />,
    //   color: 'from-blue-500 to-blue-600'
    // }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-500 to-blue-500 rounded-full"></div>

            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } mb-16`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-teal-500"></div>

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group">
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center mb-4">
                        <div className={`p-3 rounded-full bg-gradient-to-br ${exp.color} text-white`}>
                          {exp.icon}
                        </div>
                        <div className="ml-4">
                          <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                          <div className="flex items-center text-gray-600 mt-1">
                            <Building2 size={16} className="mr-2" />
                            <span>{exp.company}</span>
                          </div>
                        </div>
                        <div className="ml-auto flex items-center text-teal-600">
                          <Calendar size={16} className="mr-2" />
                          <span className="font-medium">{exp.period}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                      
                      <div className="mt-4 flex flex-wrap gap-2">
                        {['Laboratory', 'Teaching', 'Research'].map((tag, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;