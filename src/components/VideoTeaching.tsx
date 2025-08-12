import React, { useState } from 'react';
import { Play, Users, Clock, Star, BookOpen, Video, Award, TrendingUp, X, CheckCircle } from 'lucide-react';

interface VideoSeries {
  id: number;
  title: string;
  description: string;
  episodes: number;
  totalDuration: string;
  students: number;
  rating: number;
  thumbnail: string;
  category: string;
  level: string;
  color: string;
  videoUrl: string;
  fullDescription: string;
  instructor: string;
  syllabus: string[];
  requirements: string[];
  whatYouLearn: string[];
}

const VideoTeaching: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoSeries | null>(null);

  const videoSeries: VideoSeries[] = [
    {
      id: 1,
      title: 'Laboratory Techniques Masterclass',
      description: 'Comprehensive video series covering essential laboratory techniques for biomedical science students.',
      episodes: 12,
      totalDuration: '6 hours',
      students: 2500,
      rating: 4.8,
      thumbnail: 'https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Laboratory Skills',
      level: 'Beginner to Intermediate',
      color: 'from-emerald-500 to-emerald-600',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      fullDescription: 'This comprehensive masterclass is designed to provide biomedical science students with hands-on experience in essential laboratory techniques. Through detailed demonstrations and step-by-step instructions, students will master the fundamental skills required for professional laboratory work. The course covers everything from basic safety protocols to advanced analytical techniques, ensuring students are well-prepared for their careers in biomedical sciences.',
      instructor: 'Fathima Nifla Ismail',
      syllabus: [
        'Laboratory Safety and Protocols',
        'Specimen Collection Techniques',
        'Microscopy and Imaging',
        'Sterilization Methods',
        'Quality Control Procedures',
        'Data Recording and Analysis',
        'Equipment Maintenance',
        'Troubleshooting Common Issues',
        'Advanced Analytical Techniques',
        'Professional Laboratory Practices',
        'Regulatory Compliance',
        'Career Development in Laboratory Sciences'
      ],
      requirements: [
        'Basic understanding of biology and chemistry',
        'Access to laboratory equipment (recommended)',
        'Notebook for taking notes',
        'Commitment to complete all modules'
      ],
      whatYouLearn: [
        'Master essential laboratory techniques',
        'Understand safety protocols and procedures',
        'Develop professional laboratory skills',
        'Learn quality control and assurance methods',
        'Gain confidence in equipment operation',
        'Prepare for laboratory career opportunities'
      ]
    },
    {
      id: 2,
      title: 'Microbiology Fundamentals',
      description: 'In-depth exploration of microbiological principles, techniques, and clinical applications.',
      episodes: 15,
      totalDuration: '8 hours',
      students: 1800,
      rating: 4.9,
      thumbnail: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Microbiology',
      level: 'Intermediate',
      color: 'from-blue-500 to-blue-600',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      fullDescription: 'Dive deep into the fascinating world of microbiology with this comprehensive course. Students will explore the diversity of microorganisms, their roles in health and disease, and the techniques used to study them. This course combines theoretical knowledge with practical applications, making it perfect for students pursuing careers in clinical microbiology, research, or public health.',
      instructor: 'Fathima Nifla Ismail',
      syllabus: [
        'Introduction to Microbiology',
        'Bacterial Structure and Function',
        'Viral Biology and Pathogenesis',
        'Fungal Infections and Diagnostics',
        'Parasitology Essentials',
        'Staining Techniques and Microscopy',
        'Culture Methods and Media',
        'Antimicrobial Susceptibility Testing',
        'Clinical Specimen Processing',
        'Infection Control Principles',
        'Emerging Infectious Diseases',
        'Laboratory Quality Assurance',
        'Molecular Diagnostic Methods',
        'Public Health Microbiology',
        'Career Opportunities in Microbiology'
      ],
      requirements: [
        'Completed basic biology course',
        'Understanding of cell biology',
        'Access to microscope (recommended)',
        'Laboratory notebook'
      ],
      whatYouLearn: [
        'Understand microbial diversity and classification',
        'Master microbiological techniques',
        'Learn diagnostic methods for infectious diseases',
        'Develop skills in antimicrobial testing',
        'Understand infection control principles',
        'Prepare for clinical microbiology careers'
      ]
    },
    {
      id: 3,
      title: 'Clinical Biochemistry Explained',
      description: 'Understanding biochemical markers, diagnostic tests, and their clinical significance.',
      episodes: 10,
      totalDuration: '5 hours',
      students: 1200,
      rating: 4.7,
      thumbnail: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Biochemistry',
      level: 'Advanced',
      color: 'from-purple-500 to-purple-600',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      fullDescription: 'This advanced course focuses on the clinical applications of biochemistry in healthcare. Students will learn to interpret biochemical test results, understand disease markers, and appreciate the role of clinical biochemistry in patient care. The course is designed for students who want to specialize in clinical laboratory sciences or pursue careers in healthcare diagnostics.',
      instructor: 'Fathima Nifla Ismail',
      syllabus: [
        'Introduction to Clinical Biochemistry',
        'Carbohydrate Metabolism and Diabetes',
        'Lipid Metabolism and Cardiovascular Disease',
        'Protein Metabolism and Liver Function',
        'Kidney Function Tests',
        'Cardiac Biomarkers',
        'Thyroid Function Assessment',
        'Tumor Markers and Cancer Diagnostics',
        'Electrolyte and Acid-Base Balance',
        'Quality Control in Clinical Biochemistry'
      ],
      requirements: [
        'Strong background in biochemistry',
        'Understanding of human physiology',
        'Basic statistics knowledge',
        'Clinical laboratory experience (preferred)'
      ],
      whatYouLearn: [
        'Interpret clinical biochemistry results',
        'Understand disease-specific biomarkers',
        'Learn quality control procedures',
        'Develop diagnostic reasoning skills',
        'Understand reference ranges and variations',
        'Prepare for clinical biochemistry specialization'
      ]
    },
    {
      id: 4,
      title: 'Career Guidance in Biomedical Science',
      description: 'Practical advice and insights for students pursuing careers in biomedical sciences.',
      episodes: 8,
      totalDuration: '4 hours',
      students: 3200,
      rating: 4.9,
      thumbnail: 'https://images.pexels.com/photos/3772511/pexels-photo-3772511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Career Development',
      level: 'All Levels',
      color: 'from-rose-500 to-rose-600',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      fullDescription: 'Navigate your career path in biomedical sciences with confidence. This comprehensive guide covers everything from choosing specializations to landing your dream job. Whether you\'re a student just starting out or a professional looking to advance, this course provides practical strategies and insider insights to help you succeed in the competitive field of biomedical sciences.',
      instructor: 'Fathima Nifla Ismail',
      syllabus: [
        'Overview of Biomedical Science Careers',
        'Choosing Your Specialization',
        'Building a Strong Academic Foundation',
        'Gaining Practical Experience',
        'Networking in the Scientific Community',
        'Resume and CV Writing for Scientists',
        'Interview Preparation and Techniques',
        'Continuing Education and Professional Development'
      ],
      requirements: [
        'Interest in biomedical sciences',
        'Basic understanding of the field',
        'Commitment to career development',
        'Openness to learning and growth'
      ],
      whatYouLearn: [
        'Explore diverse career opportunities',
        'Develop a strategic career plan',
        'Build professional networks',
        'Create compelling applications',
        'Master interview techniques',
        'Plan for lifelong learning and growth'
      ]
    }
  ];

  const teachingStats = [
    { label: 'Total Students', value: '8.7K+', icon: <Users size={24} />, color: 'text-blue-600' },
    { label: 'Video Hours', value: '23+', icon: <Clock size={24} />, color: 'text-emerald-600' },
    { label: 'Average Rating', value: '4.8', icon: <Star size={24} />, color: 'text-yellow-600' },
    { label: 'Course Series', value: '4', icon: <BookOpen size={24} />, color: 'text-purple-600' }
  ];

  const upcomingSeries = [
    {
      title: 'Advanced Diagnostic Techniques',
      description: 'Exploring cutting-edge diagnostic methods and technologies',
      launchDate: 'March 2024',
      episodes: 14
    },
    {
      title: 'Research Methodology in Biomedical Sciences',
      description: 'Complete guide to conducting biomedical research',
      launchDate: 'April 2024',
      episodes: 16
    }
  ];

  const openVideoModal = (video: VideoSeries) => {
    setSelectedVideo(video);
    document.body.style.overflow = 'hidden';
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="video-teaching" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Video Teaching</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Empowering students through comprehensive video tutorials and educational content in biomedical sciences
          </p>
        </div>

        {/* Teaching Stats */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teachingStats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-3 ${stat.color}`}>
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Series */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="flex items-center mb-8">
            <Video className="mr-3 text-blue-600" size={28} />
            <h3 className="text-2xl font-bold text-gray-800">Featured Video Series</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {videoSeries.map((series) => (
              <div
                key={series.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={series.thumbnail}
                    alt={series.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${series.color} flex items-center justify-center text-white cursor-pointer transform scale-90 group-hover:scale-100 transition-transform duration-300`}>
                      <Play size={24} fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-white text-sm font-medium bg-gradient-to-r ${series.color}`}>
                      {series.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
                    {series.episodes} Episodes
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-gray-500">{series.level}</span>
                    <div className="flex items-center text-yellow-500">
                      <Star size={16} fill="currentColor" />
                      <span className="ml-1 text-sm font-medium text-gray-700">{series.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {series.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {series.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-4 text-gray-500 text-sm">
                      <div className="flex items-center">
                        <Users size={14} className="mr-1" />
                        {series.students.toLocaleString()}
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {series.totalDuration}
                      </div>
                    </div>
                    <button 
                      onClick={() => openVideoModal(series)}
                      className={`px-4 py-2 rounded-lg text-white font-medium bg-gradient-to-r ${series.color} hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                    >
                      Watch Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Series */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex items-center mb-8">
            <TrendingUp className="mr-3 text-indigo-600" size={28} />
            <h3 className="text-2xl font-bold text-gray-800">Upcoming Series</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingSeries.map((series, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100 hover:border-indigo-200 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-lg font-bold text-gray-800">{series.title}</h4>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                    Coming Soon
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{series.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Launch: {series.launchDate}</span>
                  <span>{series.episodes} Episodes</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Teaching Philosophy */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <Award className="text-yellow-300 mr-3" size={32} />
                <h3 className="text-2xl font-bold">Teaching Philosophy</h3>
              </div>
              <blockquote className="text-center text-lg leading-relaxed italic">
                "Education is the foundation of progress in science. Through video teaching, I strive to make complex 
                biomedical concepts accessible and engaging, fostering a new generation of skilled professionals who 
                will advance healthcare and improve lives. Every student deserves quality education, regardless of 
                their geographical location or circumstances."
              </blockquote>
              <div className="text-center mt-6">
                <div className="w-16 h-1 bg-white/30 mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between rounded-t-2xl">
              <h2 className="text-2xl font-bold text-gray-800">{selectedVideo.title}</h2>
              <button
                onClick={closeVideoModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6">
              {/* Video Player */}
              <div className="aspect-video mb-6 rounded-xl overflow-hidden">
                <iframe
                  src={selectedVideo.videoUrl}
                  title={selectedVideo.title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`px-3 py-1 rounded-full text-white text-sm font-medium bg-gradient-to-r ${selectedVideo.color}`}>
                      {selectedVideo.category}
                    </span>
                    <span className="text-gray-600">{selectedVideo.level}</span>
                    <div className="flex items-center text-yellow-500">
                      <Star size={16} fill="currentColor" />
                      <span className="ml-1 text-gray-700">{selectedVideo.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-4">About This Course</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{selectedVideo.fullDescription}</p>

                  <h3 className="text-xl font-bold text-gray-800 mb-4">What You'll Learn</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {selectedVideo.whatYouLearn.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-4">Course Syllabus</h3>
                  <div className="space-y-2">
                    {selectedVideo.syllabus.map((item, index) => (
                      <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium mr-3">
                          {index + 1}
                        </span>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <h4 className="font-bold text-gray-800 mb-4">Course Details</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Instructor</span>
                        <span className="font-medium">{selectedVideo.instructor}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Episodes</span>
                        <span className="font-medium">{selectedVideo.episodes}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Duration</span>
                        <span className="font-medium">{selectedVideo.totalDuration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Students</span>
                        <span className="font-medium">{selectedVideo.students.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Level</span>
                        <span className="font-medium">{selectedVideo.level}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-bold text-gray-800 mb-4">Requirements</h4>
                    <ul className="space-y-2">
                      {selectedVideo.requirements.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoTeaching;