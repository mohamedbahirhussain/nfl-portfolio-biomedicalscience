import React from 'react';
import { Microscope, GraduationCap, HeartPulse, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            I am Fathima Nifla, currently pursuing a BSc (Hons) in Biomedical Science. 
            My studies have equipped me with a strong foundation in biological sciences, 
            laboratory techniques, and research methodologies. I am passionate about understanding 
            the complexities of human health and disease, and I am eager to apply my knowledge 
            in real-world settings to contribute to advancements in the biomedical field. 
            I am committed to continuous learning and am enthusiastic about gaining hands-on 
            experience through internships and research opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <div className="bg-gray-50 rounded-lg p-6 text-center transition-transform hover:transform hover:scale-105 shadow-md hover:shadow-lg">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 text-teal-600 rounded-full mb-4">
              <Microscope size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Laboratory Skills</h3>
            <p className="text-gray-600">
              Proficient in various laboratory techniques including specimen collection, clinical testing, and microbiological procedures.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 text-center transition-transform hover:transform hover:scale-105 shadow-md hover:shadow-lg">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
              <GraduationCap size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Academic Excellence</h3>
            <p className="text-gray-600">
              Strong foundation in biomedical sciences with focus on anatomy, physiology, biochemistry, and microbiology.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 text-center transition-transform hover:transform hover:scale-105 shadow-md hover:shadow-lg">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 text-teal-600 rounded-full mb-4">
              <HeartPulse size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Health Passion</h3>
            <p className="text-gray-600">
              Dedicated to improving human health through research, innovation, and application of biomedical knowledge.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 text-center transition-transform hover:transform hover:scale-105 shadow-md hover:shadow-lg">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
              <BookOpen size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Continuous Learning</h3>
            <p className="text-gray-600">
              Committed to lifelong learning and staying updated with the latest advancements in biomedical sciences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;