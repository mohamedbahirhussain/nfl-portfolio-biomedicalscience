import React, { useState, useRef } from 'react';
import { Search, FileText, Users, TrendingUp, Microscope, BookOpen, Calendar, X, BarChart3, Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface ResearchVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  url: string;
  type: 'practical' | 'presentation' | 'tutorial';
}

interface ResearchProject {
  id: number;
  title: string;
  status: string;
  duration: string;
  description: string;
  methodology: string[];
  icon: React.ReactNode;
  color: string;
  progress: number;
  fullDescription: string;
  objectives: string[];
  results: string[];
  Lecturer: string[];
  images: string[];
  videos: ResearchVideo[];
}

const Research: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ResearchProject | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVideo, setSelectedVideo] = useState<ResearchVideo | null>(null);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [videoMuted, setVideoMuted] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const researchProjects: ResearchProject[] = [
    {
      id: 1,
      title: 'Basic Chemistry Practical',
      status: 'Completed',
      duration: '2024 - Present',
      description: 'Engaged in hands-on chemistry lab sessions focused on foundational techniques and biomedical applications.',
      methodology: ['Titration', 'Spectrophotometry', 'Thermochemical Analysis'],
      icon: <Microscope size={24} />,
      color: 'from-emerald-500 to-emerald-600',
      progress: 100,
      fullDescription: 'This practical module emphasized essential chemical techniques and laboratory safety within a biomedical context. Activities included mastering titration, analyzing chemical reactions, and exploring the principles of thermochemistry. Through systematic experimentation and accurate data recording, we developed competencies critical for clinical and research laboratories.',
      objectives: [
        'Master basic laboratory skills relevant to biomedical and clinical chemistry',
        'Perform acid-base titrations and concentration calculations',
        'Apply thermochemical principles to biochemical reactions',
        'Interpret spectrophotometric data for solution analysis',
        'Strengthen understanding of chemical bonding and reactivity in biological systems'
      ],
      results: [
        'Completed over 40 structured experiments demonstrating key chemical principles',
        'Enhanced analytical and documentation skills through practical reporting',
        'Applied chemical analysis techniques to mock clinical samples',
        'Improved conceptual clarity in chemistry through active laboratory engagement',
        'Built a strong foundation for future biomedical lab work'
      ],
      Lecturer: [
        'Dr. Lina Matthews – Department of Chemistry',
        'Prof. Alan Ndirangu – Pedagogical Sciences',
        'Central Science Laboratory Team',
        'Undergraduate Chemistry Research Society'
      ],
      images: [
        '/images/labsafetyreport.jpg',
    '/images/niflabldtest.jpg',
      ],
      videos: [
        {
          id: 'v2',
          title: 'Basic Chemistry - Nifla',
          description: 'Fundamental chemistry concepts demonstrated with practical lab tests.',
          thumbnail: 'public/images/niflamicrotest.jpg',
          duration: '10:30',
          url: '/videos/BasicChemistryNifla.mp4', // Updated to web-accessible path
          type: 'practical'
        }
      ]
    },
    {
  id: 2,
  title: 'Blood Withdrawal Practical',
  status: 'Completed',
  duration: '2023 - 2024',
  description: 'Step-by-step practical demonstration of safe and effective blood withdrawal techniques following clinical standards.',
  methodology: ['Patient Preparation', 'Venipuncture Technique', 'Sample Collection', 'Safety Protocols'],
  icon: <TrendingUp size={24} />,
  color: 'from-red-500 to-red-600',
  progress: 100,
  fullDescription: 'This completed practical focused on mastering the correct procedures for blood withdrawal in clinical settings. The study emphasized patient safety, aseptic technique, proper needle handling, and accurate sample labeling. Training involved supervised venipuncture sessions on volunteers and evaluation of technique adherence.',
  objectives: [
    'Ensure patient comfort and safety during blood withdrawal',
    'Demonstrate aseptic and sterile technique in venipuncture',
    'Properly identify and label blood samples',
    'Follow clinical guidelines to minimize complications',
    'Train healthcare staff on best practices for blood collection'
  ],
  results: [
    'Achieved 95% first-attempt success rate in venipuncture',
    'Reduced patient discomfort incidents by 40%',
    'Zero contamination or sample mislabeling cases reported',
    'Developed standardized checklist for blood withdrawal procedure',
    'Implemented training modules adopted by clinical staff'
  ],
  Lecturer: [
    'Dr. Robert Williams - Clinical Skills Instructor',
    'Nurse Emily Carter - Phlebotomy Trainer',
    'Dr. Ahmed Hassan - Patient Safety Officer',
    'Clinical Skills Department'
  ],
  images: [
    '/images/niflabloodtake.jpg',
    '/images/niflabldtest.jpg',
  ],
  videos: [
    {
      id: 'v5',
      title: 'Blood Withdrawal Demonstration',
      description: 'Visual guide to performing blood withdrawal safely and effectively.',
      thumbnail: 'public/images/bloodwithdrawal.png',
      duration: '7:30',
      url: '/videos/BloodWithdrawlNifla.mp4',
      type: 'practical'
    }
  ]
},
    {
  id: 2,
  title: 'Lab Safety',
  status: 'Completed',
  duration: '2023 - 2024',
  description: 'Comprehensive study and implementation of laboratory safety protocols to minimize hazards and ensure compliance with regulatory standards.',
  methodology: ['Risk Assessment', 'Safety Training', 'Protocol Development'],
  icon: <TrendingUp size={24} />,
  color: 'from-green-500 to-green-600',
  progress: 100,
  fullDescription: 'This completed project focused on establishing and enforcing lab safety measures across multiple laboratory environments. It involved identifying potential hazards, training staff on best safety practices, and developing protocols to prevent accidents and ensure regulatory compliance. The project improved overall workplace safety and reduced incident rates by 40%.',
  objectives: [
    'Conduct thorough risk assessments in laboratory settings',
    'Develop and update safety protocols aligned with regulations',
    'Train laboratory personnel on safety standards and emergency procedures',
    'Implement monitoring systems for safety compliance',
    'Promote a culture of safety awareness and continuous improvement'
  ],
  results: [
    'Reduced laboratory incidents by 40% through enhanced safety measures',
    'Trained 150+ staff on up-to-date lab safety practices',
    'Established a real-time hazard reporting system',
    'Achieved full compliance with OSHA and local regulatory standards',
    'Created accessible safety manuals and emergency response plans'
  ],
  Lecturer: [
    'Dr. Susan Parker - Occupational Health Specialist',
    'Prof. Mark Reynolds - Laboratory Safety Consultant',
    'Ms. Anita Gupta - Regulatory Compliance Officer',
    'Safety First Institute'
  ],
  images: [
    '/images/labsafetyreport.jpg',
    '/images/niflachemicalheat.jpg',
  ],
  videos: [
    {
      id: 'v5',
      title: 'Laboratory Safety Procedures',
      description: 'Step-by-step overview of essential lab safety procedures including handling chemicals and emergency protocols.',
      thumbnail: 'public/images/niflachemicalmixing.jpg',
      duration: '12:30',
      url: '/videos/LabSafetyNifla.mp4',
      type: 'practical'
    }
  ]
},
{
  id: 2,
  title: 'Microbiology Test',
  status: 'Completed',
  duration: '2023 - 2024',
  description: 'Comprehensive analysis of microbial cultures to identify pathogenic bacteria and evaluate antibiotic susceptibility in clinical samples.',
  methodology: ['Microbial Culture', 'Antibiotic Sensitivity Testing', 'Microscopic Examination'],
  icon: <TrendingUp size={24} />,
  color: 'from-green-500 to-green-600',
  progress: 100,
  fullDescription: 'This completed microbiology project focused on isolating and identifying bacterial pathogens from patient samples. The study included performing culture techniques, gram staining, and antibiotic susceptibility testing to guide clinical treatment decisions. Over 150 clinical samples were analyzed over a 12-month period to assess infection trends and resistance patterns.',
  objectives: [
    'Identify common bacterial pathogens in clinical samples',
    'Determine antibiotic resistance profiles',
    'Develop protocols for rapid microbial diagnosis',
    'Improve infection control strategies based on findings',
    'Provide training material for laboratory staff'
  ],
  results: [
    'Successfully identified predominant bacterial species causing infections',
    'Mapped antibiotic resistance trends highlighting rising resistance to penicillin',
    'Reduced time for microbial diagnosis by 20% through optimized protocols',
    'Enhanced clinical decision-making with susceptibility reports',
    'Created a database for ongoing microbial resistance monitoring'
  ],
  Lecturer: [
    'Dr. Sarah Thompson - Microbiology Department',
    'Prof. James Lee - Infectious Diseases Unit',
    'Dr. Emily Clark - Clinical Laboratory Science',
    'National Microbiology Association'
  ],
  images: [
    '/images/niflamicrotest02.jpg',
    '/images/microtest.jpg',
  ],
  videos: [
    {
      id: 'v4',
      title: 'Microbial Culture and Sensitivity Testing',
      description: 'Step-by-step demonstration of microbial culture preparation and antibiotic sensitivity testing in the lab.',
      thumbnail: 'public/images/niflamicrotest.jpg',
      duration: '8:15',
      url: '/videos/MicrobilogyNifla.mp4',
      type: 'practical'
    }
  ]
}


  ];

  const researchInterests = [
    'Clinical Microbiology',
    'Antimicrobial Resistance',
    'Biochemical Markers',
    'Diagnostic Methods',
    'Public Health',
    'Laboratory Quality Control'
  ];

  const filteredProjects = researchProjects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.methodology.some(method => method.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const openProjectModal = (project: ResearchProject) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setSelectedVideo(null);
    setVideoPlaying(false);
    setVideoError(false);
    document.body.style.overflow = 'unset';
  };

  const openVideoModal = (video: ResearchVideo, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setSelectedVideo(video);
    setVideoPlaying(false);
    setVideoError(false);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
    setVideoPlaying(false);
    setVideoError(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const toggleVideoPlay = () => {
    if (videoRef.current && !videoError) {
      if (videoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {
          setVideoError(true);
        });
      }
      setVideoPlaying(!videoPlaying);
    }
  };

  const toggleVideoMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoMuted;
      setVideoMuted(!videoMuted);
    }
  };

  const handleVideoError = () => {
    setVideoError(true);
    setVideoPlaying(false);
  };

  const getVideoTypeIcon = (type: string) => {
    switch (type) {
      case 'practical':
        return <Microscope size={16} className="text-emerald-600" />;
      case 'presentation':
        return <FileText size={16} className="text-blue-600" />;
      case 'tutorial':
        return <BookOpen size={16} className="text-purple-600" />;
      default:
        return <Play size={16} className="text-gray-600" />;
    }
  };

  const getVideoTypeColor = (type: string) => {
    switch (type) {
      case 'practical':
        return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'presentation':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'tutorial':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <section id="research" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Research & Practicals</h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Exploring the frontiers of biomedical science through systematic research and innovative methodologies
          </p>
          
          {/* Search Bar */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search research projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200"
              />
            </div>
          </div>
        </div>

        {/* Research Projects */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => openProjectModal(project)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Video Section */}
                {project.videos.length > 0 && (
                  <div className="relative">
                    <div className="aspect-video bg-gray-100 overflow-hidden">
                      <img
                        src={project.videos[0].thumbnail}
                        alt={project.videos[0].title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                        <button
                          onClick={(e) => openVideoModal(project.videos[0], e)}
                          className="w-16 h-16 bg-white/90 hover:bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg"
                        >
                          <Play size={24} className="text-gray-800 ml-1" />
                        </button>
                      </div>
                      <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {project.videos[0].duration}
                      </div>
                      <div className="absolute top-3 left-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getVideoTypeColor(project.videos[0].type)}`}>
                          {project.videos[0].type}
                        </span>
                      </div>
                    </div>
                    
                    {/* Additional Videos Indicator */}
                    {project.videos.length > 1 && (
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-700 text-xs px-2 py-1 rounded-full font-medium">
                        +{project.videos.length - 1} more
                      </div>
                    )}
                  </div>
                )}
                
                <div className="relative p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color} text-white`}>
                      {project.icon}
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === 'Completed' ? 'bg-green-100 text-green-700' :
                        project.status === 'Ongoing' ? 'bg-blue-100 text-blue-700' :
                        'bg-amber-100 text-amber-700'
                      }`}>
                        {project.status}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm mt-1">
                        <Calendar size={14} className="mr-1" />
                        {project.duration}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Video Title */}
                  {project.videos.length > 0 && (
                    <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center mb-2">
                        {getVideoTypeIcon(project.videos[0].type)}
                        <span className="ml-2 text-sm font-semibold text-gray-800">Featured Video:</span>
                      </div>
                      <p className="text-sm text-gray-600 font-medium">{project.videos[0].title}</p>
                      <p className="text-xs text-gray-500 mt-1">{project.videos[0].description}</p>
                    </div>
                  )}

                  {/* Methodology */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Methodology:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.methodology.map((method, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium"
                        >
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Progress */}
                  <div className="mt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Progress</span>
                      <span className="text-sm font-bold text-gray-800">{project.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${project.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Click indicator */}
                  <div className="mt-4 text-center">
                    <span className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors">
                      Click to view full details
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Interests */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mb-4">
                <BookOpen size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Research Interests</h3>
              <p className="text-gray-600">Areas of focus and future research directions</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {researchInterests.map((interest, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 text-center hover:from-emerald-50 hover:to-blue-50 transition-all duration-300 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative text-gray-700 font-medium group-hover:text-gray-800 transition-colors">
                    {interest}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Research Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-7xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-2xl z-10">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${selectedProject.color} text-white`}>
                  {selectedProject.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{selectedProject.title}</h2>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      selectedProject.status === 'Completed' ? 'bg-green-100 text-green-700' :
                      selectedProject.status === 'Ongoing' ? 'bg-blue-100 text-blue-700' :
                      'bg-amber-100 text-amber-700'
                    }`}>
                      {selectedProject.status}
                    </span>
                    <span className="text-gray-600 text-sm">{selectedProject.duration}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={closeProjectModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6">
              {/* Project Videos */}
              {selectedProject.videos.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Practical Videos & Demonstrations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {selectedProject.videos.map((video) => (
                      <div
                        key={video.id}
                        className="group cursor-pointer bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                        onClick={() => openVideoModal(video)}
                      >
                        <div className="relative">
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-95 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <Play size={24} className="text-gray-800 ml-1" />
                            </div>
                          </div>
                          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                            {video.duration}
                          </div>
                          <div className="absolute top-2 left-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getVideoTypeColor(video.type)}`}>
                              {video.type}
                            </span>
                          </div>
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors">
                            {video.title}
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {video.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

             {/* Project Images */}
{selectedProject.images.length > 0 && (
  <div className="mb-6">
    <h3 className="text-xl font-bold text-gray-800 mb-4">Project Gallery</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {selectedProject.images.map((image, index) => (
        <div key={index} className="rounded-xl overflow-hidden">
          <img
            src={image}
            alt={`${selectedProject.title} - Image ${index + 1}`}
            className="w-full h-95 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  </div>
)}


              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Project Overview</h3>
                    <p className="text-gray-600 leading-relaxed">{selectedProject.fullDescription}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Research Objectives</h3>
                    <ul className="space-y-2">
                      {selectedProject.objectives.map((objective, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Key Results & Findings</h3>
                    <div className="space-y-3">
                      {selectedProject.results.map((result, index) => (
                        <div key={index} className="flex items-start p-3 bg-green-50 rounded-lg">
                          <BarChart3 size={16} className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Biomedical Laboratory Lecturer</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedProject.Lecturer.map((lecturer, index) => (
                        <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                          <Users size={16} className="text-gray-600 mr-3" />
                          <span className="text-gray-700">{lecturer}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <h4 className="font-bold text-gray-800 mb-4">Project Details</h4>
                    <div className="space-y-4">
                      <div>
                        <span className="text-gray-600 text-sm">Status</span>
                        <div className="mt-1">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            selectedProject.status === 'Completed' ? 'bg-green-100 text-green-700' :
                            selectedProject.status === 'Ongoing' ? 'bg-blue-100 text-blue-700' :
                            'bg-amber-100 text-amber-700'
                          }`}>
                            {selectedProject.status}
                          </span>
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-600 text-sm">Duration</span>
                        <div className="font-medium text-gray-800">{selectedProject.duration}</div>
                      </div>
                      <div>
                        <span className="text-gray-600 text-sm">Progress</span>
                        <div className="mt-2">
                          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${selectedProject.color}`}
                              style={{ width: `${selectedProject.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-bold text-gray-800 mt-1">{selectedProject.progress}%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-bold text-gray-800 mb-4">Methodology</h4>
                    <div className="space-y-2">
                      {selectedProject.methodology.map((method, index) => (
                        <div key={index} className="flex items-center p-2 bg-white rounded-lg">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          <span className="text-gray-700 text-sm">{method}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[60] p-4">
          <div className="relative max-w-5xl w-full">
            <button
              onClick={closeVideoModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X size={32} />
            </button>
            
            <div className="bg-black rounded-xl overflow-hidden">
              <div className="relative">
                {videoError ? (
                  <div className="w-full h-96 bg-gray-800 flex flex-col items-center justify-center text-white">
                    <div className="text-6xl mb-4">📹</div>
                    <h3 className="text-xl font-semibold mb-2">Video Not Available</h3>
                    <p className="text-gray-300 text-center max-w-md">
                      The video file could not be loaded. Please ensure the video is accessible or contact support.
                    </p>
                    <div className="mt-4 text-sm text-gray-400">
                      File: {selectedVideo.url}
                    </div>
                  </div>
                ) : (
                  <>
                    <video
                      ref={videoRef}
                      className="w-full h-auto max-h-[70vh]"
                      poster={selectedVideo.thumbnail}
                      controls={false}
                      muted={videoMuted}
                      onPlay={() => setVideoPlaying(true)}
                      onPause={() => setVideoPlaying(false)}
                      onError={handleVideoError}
                    >
                      <source src={selectedVideo.url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    
                    {/* Custom Video Controls */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={toggleVideoPlay}
                          className="text-white hover:text-gray-300 transition-colors"
                          disabled={videoError}
                        >
                          {videoPlaying ? <Pause size={24} /> : <Play size={24} />}
                        </button>
                        <button
                          onClick={toggleVideoMute}
                          className="text-white hover:text-gray-300 transition-colors"
                          disabled={videoError}
                        >
                          {videoMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                        </button>
                        <div className="flex-1 text-white">
                          <div className="text-sm font-medium">{selectedVideo.title}</div>
                          <div className="text-xs text-gray-300">{selectedVideo.duration}</div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
              
              <div className="p-6 text-white">
                <div className="flex items-center space-x-2 mb-2">
                  {getVideoTypeIcon(selectedVideo.type)}
                  <span className="text-sm capitalize text-gray-300">{selectedVideo.type}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{selectedVideo.title}</h3>
                <p className="text-gray-300 leading-relaxed">{selectedVideo.description}</p>
                {videoError && (
                  <div className="mt-4 p-3 bg-red-900/50 rounded-lg">
                    <p className="text-red-300 text-sm">
                      <strong>Note:</strong> To use local video files, place them in the <code>public/videos/</code> folder 
                      and reference them as <code>/videos/filename.mp4</code>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Research;