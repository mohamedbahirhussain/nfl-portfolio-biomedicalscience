import React from 'react';
import { FlaskRound as Flask, Brain, Award, Microscope, BookOpen, Atom, Beaker, HeartPulse } from 'lucide-react';

const Skills: React.FC = () => {
  const labSkills = [
    {
      icon: <Flask size={24} />,
      title: 'Specimen Collection',
      description: 'Expertise in urine specimen collection and blood sample collection using venepuncture techniques.',
      color: 'from-teal-500 to-teal-700'
    },
    {
      icon: <Microscope size={24} />,
      title: 'Clinical Testing',
      description: 'Skilled in conducting urine full reports, urine culture, microbiological tests, and biochemical tests.',
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: <Atom size={24} />,
      title: 'Microbiological Techniques',
      description: 'Proficient in microbiological stainings and culture techniques.',
      color: 'from-purple-500 to-purple-700'
    },
    {
      icon: <Beaker size={24} />,
      title: 'Chemical Analysis',
      description: 'Experienced in titrations and chromatography methods.',
      color: 'from-emerald-500 to-emerald-700'
    },
    {
      icon: <HeartPulse size={24} />,
      title: 'Instrumentation',
      description: 'Competent in operating laboratory equipment including microscopes, autoclave, spectrophotometers.',
      color: 'from-rose-500 to-rose-700'
    }
  ];

  const academicKnowledge = [
    {
      title: 'Anatomy & Physiology',
      description: 'Comprehensive understanding of human anatomy and physiological functions',
      icon: <BookOpen size={24} />
    },
    {
      title: 'Laboratory Safety',
      description: 'Well-versed in lab safety protocols and standard operating procedures',
      icon: <Flask size={24} />
    },
    {
      title: 'Biochemistry',
      description: 'Strong foundation in basic chemistry, biochemistry, and clinical biochemistry',
      icon: <Atom size={24} />
    },
    {
      title: 'Microbiology',
      description: 'Proficient in general and systemic microbiology',
      icon: <Microscope size={24} />
    }
  ];

  const professionalSkills = [
    { name: 'Project Management', value: 85 },
    { name: 'Public Relations', value: 80 },
    { name: 'Problem Solving', value: 90 },
    { name: 'Teamwork', value: 95 },
    { name: 'Time Management', value: 85 },
    { name: 'Leadership', value: 80 },
    { name: 'Critical Thinking', value: 90 },
    { name: 'Communication', value: 85 }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
        </div>

        {/* Laboratory Skills */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center justify-center">
            <Flask className="mr-3 text-teal-600" />
            Laboratory Skills
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img 
                src="/images/niflamicrotest.jpg"
                alt="Laboratory Work"
                className="w-full h-[900px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <p className="text-white p-6 text-lg font-medium">
                  Hands-on experience in advanced laboratory techniques and procedures
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {labSkills.map((skill, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="relative p-6">
                    <div className="flex items-center mb-2">
                      <div className="p-2 rounded-full bg-gray-100 text-gray-600 group-hover:bg-white/20 group-hover:text-white transition-colors">
                        {skill.icon}
                      </div>
                      <h4 className="ml-3 text-lg font-semibold text-gray-800 group-hover:text-white transition-colors">
                        {skill.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 group-hover:text-white/90 transition-colors">
                      {skill.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Academic Knowledge */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center justify-center">
            <Brain className="mr-3 text-blue-600" />
            Academic Knowledge
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {academicKnowledge.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                    {item.icon}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Skills */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center justify-center">
            <Award className="mr-3 text-teal-600" />
            Professional Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {professionalSkills.map((skill, index) => (
              <div
                key={index}
                className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative z-10">
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 text-teal-600 mb-3 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                      <span className="text-2xl font-bold">{skill.value}%</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800">{skill.name}</h4>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-teal-500 to-teal-600 rounded-full transform origin-left transition-transform duration-1000 ease-out"
                      style={{ width: `${skill.value}%` }}
                    ></div>
                  </div>
                </div>
                <div
                  className="absolute inset-0 bg-gradient-to-br from-teal-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ zIndex: 0 }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;