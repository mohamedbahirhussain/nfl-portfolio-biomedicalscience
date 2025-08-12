import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative bg-gradient-to-br from-teal-50 to-blue-50 pt-16"
    >
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url('/images/niflabldtest.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center z-10">
        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            <span className="block">Fathima Nifla Ismail</span>
            <span className="text-teal-600 text-2xl md:text-3xl lg:text-4xl mt-2 block">
              Biomedical Science Professional
            </span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mt-6 max-w-xl mx-auto md:mx-0">
            Passionate about understanding the complexities of human health and disease, 
            eager to contribute to advancements in the biomedical field.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
  <a 
    href="https://drive.google.com/uc?export=download&id=18VKN68ncJ_qgsWArm4vDBEtIQT9RHAl_" 
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-700 transition-colors shadow-lg hover:shadow-xl"
  >
    Download CV
  </a>
</div>

        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img 
              src="/images/Niflaprflpic.jpg" 
              alt="Biomedical Professional" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 hover:text-teal-600 transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;