import React from 'react';
import { BookOpen, Award } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      id: 1,
      years: '2024 - Present',
      degree: 'Bachelor of Biomedical Science',
      institution: 'Kaatsu International University',
      description: 'Currently pursuing a comprehensive program covering biological sciences, laboratory techniques, and research methodologies.',
      icon: <BookOpen size={24} />
    },
    {
      id: 2,
      years: '2022',
      degree: 'Advanced Level - Bio Stream',
      institution: 'BT/Bc Alighar National School',
      description: 'Completed A-Levels with the following results: Biology (C), Physics (S), Chemistry (C).',
      icon: <Award size={24} />
    },
    {
      id: 3,
      years: '2018',
      degree: 'Ordinary Level',
      institution: 'BT/BC Al Ashar Girls National School',
      description: 'Completed O-Levels with 3A, 4B, and 2C grades, establishing a strong academic foundation.',
      icon: <BookOpen size={24} />
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Education</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-teal-200"></div>

            {/* Timeline Items */}
            {educationData.map((item, index) => (
              <div 
                key={item.id} 
                className={`flex flex-col md:flex-row mb-12 md:mb-16 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="md:w-1/2 md:pr-8 md:pl-8">
                  <div 
                    className={`bg-white p-6 rounded-lg shadow-lg border-l-4 ${
                      index % 2 === 0 ? 'border-blue-500' : 'border-teal-500'
                    } transform transition-transform hover:scale-105 hover:shadow-xl`}
                  >
                    <div className="flex items-center mb-4">
                      <div className={`p-2 rounded-full mr-3 ${
                        index % 2 === 0 ? 'bg-blue-100 text-blue-600' : 'bg-teal-100 text-teal-600'
                      }`}>
                        {item.icon}
                      </div>
                      <div>
                        <span className="block text-sm font-semibold text-gray-500">{item.years}</span>
                        <h3 className="text-xl font-bold text-gray-800">{item.degree}</h3>
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">{item.institution}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>

                {/* Timeline Circle Marker */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-teal-500 border-4 border-white" style={{ top: `calc(${index * 100/(educationData.length-1)}% - 3px)` }}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;