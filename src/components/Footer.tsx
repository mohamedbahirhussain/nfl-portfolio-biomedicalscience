import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Fathima Nifla Ismail</h2>
          <p className="text-gray-300">Biomedical Science Professional</p>
        </div>

        <div className="w-16 h-1 bg-teal-500 mx-auto mb-8"></div>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
          <a href="#home" className="hover:text-teal-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-teal-400 transition-colors">About</a>
          <a href="#education" className="hover:text-teal-400 transition-colors">Education</a>
          <a href="#skills" className="hover:text-teal-400 transition-colors">Skills</a>
          <a href="#experience" className="hover:text-teal-400 transition-colors">Experience</a>
          <a href="#research" className="hover:text-teal-400 transition-colors">Research and Practicals</a>
          <a href="#blog" className="hover:text-teal-400 transition-colors">Blog</a>
          <a href="#video-teaching" className="hover:text-teal-400 transition-colors">Teaching</a>
          <a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a>
        </div>

        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Fathima Nifla Ismail. All rights reserved.</p>
          <p className="mt-1">Biomedical Science Professional</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;