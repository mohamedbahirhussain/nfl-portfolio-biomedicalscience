import React, { useState } from 'react';
import { PenTool, Eye, Heart, MessageCircle, Calendar, ArrowRight, BookOpen, Lightbulb, X, Share2, Bookmark } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishDate: string;
  views: number;
  likes: number;
  comments: number;
  image: string;
  color: string;
  fullContent: string;
  author: string;
  tags: string[];
  relatedImages: string[];
}

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Understanding Antimicrobial Resistance: A Growing Global Concern',
      excerpt: 'Exploring the mechanisms behind antimicrobial resistance and its implications for modern healthcare systems.',
      category: 'Microbiology',
      readTime: '8 min read',
      publishDate: '2024-01-15',
      views: 1250,
      likes: 89,
      comments: 23,
      image: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      color: 'from-blue-500 to-blue-600',
      author: 'Fathima Nifla Ismail',
      tags: ['Antimicrobial Resistance', 'Public Health', 'Microbiology', 'Healthcare'],
      relatedImages: [
        'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ],
      fullContent: `
        <h2>Introduction</h2>
        <p>Antimicrobial resistance (AMR) represents one of the most pressing challenges facing modern healthcare. As bacteria, viruses, fungi, and parasites evolve to resist the drugs designed to kill them, we find ourselves in an increasingly precarious position where once-treatable infections become life-threatening.</p>
        
        <h2>The Science Behind Resistance</h2>
        <p>Antimicrobial resistance occurs through several mechanisms. Bacteria can develop resistance by:</p>
        <ul>
          <li><strong>Enzymatic degradation:</strong> Producing enzymes that break down antibiotics</li>
          <li><strong>Target modification:</strong> Altering the cellular targets that antibiotics bind to</li>
          <li><strong>Efflux pumps:</strong> Actively pumping antibiotics out of the cell</li>
          <li><strong>Reduced permeability:</strong> Changing cell wall structure to prevent antibiotic entry</li>
        </ul>
        
        <h2>Global Impact and Statistics</h2>
        <p>The World Health Organization estimates that antimicrobial resistance could cause 10 million deaths annually by 2050 if left unchecked. Currently, at least 700,000 people die each year due to drug-resistant diseases, including 230,000 people who die from multidrug-resistant tuberculosis.</p>
        
        <h2>Contributing Factors</h2>
        <p>Several factors contribute to the development and spread of antimicrobial resistance:</p>
        <ul>
          <li>Overuse and misuse of antimicrobials in humans and animals</li>
          <li>Poor infection prevention and control in healthcare facilities</li>
          <li>Inadequate sanitation and hygiene</li>
          <li>Lack of new drug development</li>
          <li>International travel and trade facilitating spread</li>
        </ul>
        
        <h2>Laboratory Detection Methods</h2>
        <p>In clinical laboratories, we employ various methods to detect antimicrobial resistance:</p>
        <ul>
          <li><strong>Disk diffusion testing:</strong> The Kirby-Bauer method remains a cornerstone</li>
          <li><strong>Broth microdilution:</strong> Determining minimum inhibitory concentrations</li>
          <li><strong>Automated systems:</strong> VITEK, Phoenix, and similar platforms</li>
          <li><strong>Molecular methods:</strong> PCR-based detection of resistance genes</li>
        </ul>
        
        <h2>Prevention Strategies</h2>
        <p>Combating antimicrobial resistance requires a multi-faceted approach:</p>
        <ul>
          <li>Antimicrobial stewardship programs</li>
          <li>Infection prevention and control measures</li>
          <li>Surveillance and monitoring systems</li>
          <li>Research and development of new antimicrobials</li>
          <li>Public education and awareness campaigns</li>
        </ul>
        
        <h2>The Role of Biomedical Scientists</h2>
        <p>As biomedical scientists, we play a crucial role in the fight against antimicrobial resistance. Our responsibilities include accurate and timely susceptibility testing, participation in surveillance programs, and education of healthcare professionals about appropriate antimicrobial use.</p>
        
        <h2>Future Directions</h2>
        <p>The future of antimicrobial resistance management lies in innovative approaches such as:</p>
        <ul>
          <li>Rapid diagnostic tests for point-of-care decision making</li>
          <li>Artificial intelligence for predicting resistance patterns</li>
          <li>Novel therapeutic approaches including bacteriophage therapy</li>
          <li>Personalized medicine approaches to antimicrobial selection</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Antimicrobial resistance is not just a medical problem—it's a global crisis that requires coordinated action from healthcare professionals, policymakers, and the public. As we continue to advance our understanding of resistance mechanisms and develop new strategies to combat them, the role of biomedical scientists becomes increasingly vital in safeguarding public health.</p>
      `
    },
    {
      id: 2,
      title: 'Laboratory Safety Protocols: Best Practices for Biomedical Students',
      excerpt: 'A comprehensive guide to essential safety measures every biomedical science student should know.',
      category: 'Laboratory Safety',
      readTime: '6 min read',
      publishDate: '2024-01-08',
      views: 980,
      likes: 67,
      comments: 15,
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      color: 'from-emerald-500 to-emerald-600',
      author: 'Fathima Nifla Ismail',
      tags: ['Laboratory Safety', 'Student Guide', 'Best Practices', 'Protocols'],
      relatedImages: [
        'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ],
      fullContent: `
        <h2>Introduction to Laboratory Safety</h2>
        <p>Laboratory safety is the foundation of all scientific work. Whether you're a first-year student or an experienced researcher, understanding and implementing proper safety protocols is essential for protecting yourself, your colleagues, and the integrity of your research.</p>
        
        <h2>Personal Protective Equipment (PPE)</h2>
        <p>The first line of defense in any laboratory setting is appropriate personal protective equipment:</p>
        <ul>
          <li><strong>Lab coats:</strong> Always wear a properly fitted, long-sleeved lab coat</li>
          <li><strong>Safety glasses:</strong> Protect your eyes from chemical splashes and biological hazards</li>
          <li><strong>Gloves:</strong> Choose appropriate gloves for the specific hazards you're working with</li>
          <li><strong>Closed-toe shoes:</strong> Never wear sandals or open-toe shoes in the laboratory</li>
        </ul>
        
        <h2>Chemical Safety</h2>
        <p>Working with chemicals requires careful attention to safety data sheets (SDS) and proper handling procedures:</p>
        <ul>
          <li>Always read and understand SDS before using any chemical</li>
          <li>Use chemicals in well-ventilated areas or fume hoods</li>
          <li>Never mix chemicals unless specifically instructed</li>
          <li>Label all containers clearly and immediately</li>
          <li>Store chemicals according to compatibility guidelines</li>
        </ul>
        
        <h2>Biological Safety</h2>
        <p>When working with biological materials, additional precautions are necessary:</p>
        <ul>
          <li>Follow biosafety level (BSL) guidelines appropriate for your materials</li>
          <li>Use biological safety cabinets when required</li>
          <li>Properly dispose of biological waste in designated containers</li>
          <li>Decontaminate work surfaces before and after use</li>
          <li>Never eat, drink, or apply cosmetics in biological work areas</li>
        </ul>
        
        <h2>Equipment Safety</h2>
        <p>Proper use and maintenance of laboratory equipment is crucial for safety:</p>
        <ul>
          <li>Receive proper training before using any equipment</li>
          <li>Inspect equipment before each use</li>
          <li>Follow manufacturer's instructions and safety guidelines</li>
          <li>Report any malfunctions or damage immediately</li>
          <li>Keep equipment clean and properly maintained</li>
        </ul>
        
        <h2>Emergency Procedures</h2>
        <p>Know what to do in case of an emergency:</p>
        <ul>
          <li>Locate all emergency equipment (eyewash stations, safety showers, fire extinguishers)</li>
          <li>Know evacuation routes and assembly points</li>
          <li>Understand spill cleanup procedures for different types of materials</li>
          <li>Know who to contact in case of accidents or exposures</li>
          <li>Practice emergency procedures regularly</li>
        </ul>
        
        <h2>Waste Management</h2>
        <p>Proper waste disposal is both a safety and environmental responsibility:</p>
        <ul>
          <li>Segregate waste according to type (chemical, biological, sharps, regular)</li>
          <li>Use appropriate containers for each waste type</li>
          <li>Never overfill waste containers</li>
          <li>Follow institutional guidelines for waste disposal</li>
          <li>Minimize waste generation when possible</li>
        </ul>
        
        <h2>Creating a Safety Culture</h2>
        <p>Safety is everyone's responsibility. Help create a positive safety culture by:</p>
        <ul>
          <li>Leading by example in following safety protocols</li>
          <li>Speaking up when you observe unsafe practices</li>
          <li>Participating in safety training and meetings</li>
          <li>Reporting near-misses and incidents</li>
          <li>Continuously learning about new safety practices</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Laboratory safety is not just about following rules—it's about developing a mindset that prioritizes the well-being of everyone in the laboratory. By understanding and implementing these safety protocols, you're not only protecting yourself but also contributing to a safer scientific community.</p>
      `
    },
    {
      id: 3,
      title: 'The Future of Diagnostic Medicine: Emerging Technologies',
      excerpt: 'Examining cutting-edge diagnostic technologies that are revolutionizing patient care and treatment outcomes.',
      category: 'Diagnostics',
      readTime: '10 min read',
      publishDate: '2023-12-22',
      views: 1450,
      likes: 112,
      comments: 34,
      image: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      color: 'from-purple-500 to-purple-600',
      author: 'Fathima Nifla Ismail',
      tags: ['Diagnostics', 'Technology', 'Innovation', 'Healthcare'],
      relatedImages: [
        'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ],
      fullContent: `
        <h2>Introduction</h2>
        <p>The field of diagnostic medicine is experiencing unprecedented transformation. Emerging technologies are not only improving the accuracy and speed of diagnoses but also making healthcare more accessible and personalized than ever before.</p>
        
        <h2>Artificial Intelligence and Machine Learning</h2>
        <p>AI and ML are revolutionizing diagnostic medicine in several ways:</p>
        <ul>
          <li><strong>Image analysis:</strong> AI can detect patterns in medical images that human eyes might miss</li>
          <li><strong>Predictive analytics:</strong> ML algorithms can predict disease progression and treatment outcomes</li>
          <li><strong>Pattern recognition:</strong> AI can identify subtle patterns in large datasets</li>
          <li><strong>Decision support:</strong> AI systems can assist clinicians in making more accurate diagnoses</li>
        </ul>
        
        <h2>Point-of-Care Testing</h2>
        <p>Point-of-care testing is bringing laboratory capabilities directly to the patient:</p>
        <ul>
          <li>Rapid diagnostic tests for infectious diseases</li>
          <li>Portable blood analyzers</li>
          <li>Smartphone-based diagnostic tools</li>
          <li>Wearable health monitoring devices</li>
        </ul>
        
        <h2>Molecular Diagnostics</h2>
        <p>Advances in molecular diagnostics are enabling more precise and personalized medicine:</p>
        <ul>
          <li>Next-generation sequencing (NGS)</li>
          <li>CRISPR-based diagnostic tools</li>
          <li>Digital PCR technologies</li>
          <li>Liquid biopsies for cancer detection</li>
        </ul>
        
        <h2>Nanotechnology in Diagnostics</h2>
        <p>Nanotechnology is opening new possibilities for ultra-sensitive detection:</p>
        <ul>
          <li>Nanoparticle-based biosensors</li>
          <li>Quantum dots for imaging</li>
          <li>Nanoscale drug delivery systems</li>
          <li>Lab-on-a-chip devices</li>
        </ul>
        
        <h2>Telemedicine and Remote Diagnostics</h2>
        <p>The COVID-19 pandemic accelerated the adoption of remote diagnostic technologies:</p>
        <ul>
          <li>Remote patient monitoring systems</li>
          <li>Teleconsultation platforms</li>
          <li>Home-based diagnostic kits</li>
          <li>Cloud-based data analysis</li>
        </ul>
        
        <h2>Challenges and Considerations</h2>
        <p>While these technologies offer tremendous promise, they also present challenges:</p>
        <ul>
          <li>Regulatory approval and validation</li>
          <li>Data privacy and security concerns</li>
          <li>Integration with existing healthcare systems</li>
          <li>Cost and accessibility issues</li>
          <li>Training and education requirements</li>
        </ul>
        
        <h2>The Role of Biomedical Scientists</h2>
        <p>As these technologies evolve, biomedical scientists must adapt and embrace new roles:</p>
        <ul>
          <li>Becoming proficient in new technologies</li>
          <li>Understanding data analytics and interpretation</li>
          <li>Collaborating with technology developers</li>
          <li>Ensuring quality control and validation</li>
          <li>Educating healthcare professionals</li>
        </ul>
        
        <h2>Future Outlook</h2>
        <p>The future of diagnostic medicine will likely feature:</p>
        <ul>
          <li>Fully integrated AI-powered diagnostic systems</li>
          <li>Real-time health monitoring and prediction</li>
          <li>Personalized medicine based on individual genetic profiles</li>
          <li>Seamless integration of diagnostic data across healthcare systems</li>
          <li>Democratization of healthcare through accessible technologies</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>The future of diagnostic medicine is bright, with emerging technologies promising to make healthcare more accurate, accessible, and personalized. As biomedical scientists, we have the opportunity to be at the forefront of this transformation, helping to shape the future of healthcare for generations to come.</p>
      `
    },
    {
      id: 4,
      title: 'Career Pathways in Biomedical Science: Opportunities and Insights',
      excerpt: 'Navigating the diverse career opportunities available to biomedical science graduates.',
      category: 'Career Guidance',
      readTime: '7 min read',
      publishDate: '2023-12-10',
      views: 2100,
      likes: 156,
      comments: 45,
      image: 'https://images.pexels.com/photos/3772511/pexels-photo-3772511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      color: 'from-rose-500 to-rose-600',
      author: 'Fathima Nifla Ismail',
      tags: ['Career Development', 'Biomedical Science', 'Professional Growth', 'Opportunities'],
      relatedImages: [
        'https://images.pexels.com/photos/3772511/pexels-photo-3772511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ],
      fullContent: `
        <h2>Introduction</h2>
        <p>A degree in biomedical science opens doors to a wide array of career opportunities. From traditional laboratory roles to emerging fields in biotechnology and digital health, the possibilities are vast and exciting.</p>
        
        <h2>Traditional Laboratory Careers</h2>
        <p>Many biomedical science graduates find fulfilling careers in traditional laboratory settings:</p>
        <ul>
          <li><strong>Clinical Laboratory Scientist:</strong> Performing diagnostic tests in hospitals and clinics</li>
          <li><strong>Research Laboratory Technician:</strong> Supporting research projects in academic or industrial settings</li>
          <li><strong>Quality Control Analyst:</strong> Ensuring the quality and safety of pharmaceutical products</li>
          <li><strong>Forensic Scientist:</strong> Applying scientific methods to legal investigations</li>
        </ul>
        
        <h2>Healthcare and Clinical Roles</h2>
        <p>Direct patient care and clinical support roles offer meaningful career paths:</p>
        <ul>
          <li>Clinical Research Coordinator</li>
          <li>Medical Laboratory Technologist</li>
          <li>Pathology Assistant</li>
          <li>Clinical Data Manager</li>
          <li>Healthcare Consultant</li>
        </ul>
        
        <h2>Industry and Biotechnology</h2>
        <p>The biotechnology and pharmaceutical industries offer exciting opportunities:</p>
        <ul>
          <li>Product Development Scientist</li>
          <li>Regulatory Affairs Specialist</li>
          <li>Medical Science Liaison</li>
          <li>Bioprocess Engineer</li>
          <li>Clinical Trial Manager</li>
        </ul>
        
        <h2>Academic and Research Careers</h2>
        <p>For those passionate about discovery and education:</p>
        <ul>
          <li>Research Scientist</li>
          <li>University Professor</li>
          <li>Postdoctoral Researcher</li>
          <li>Grant Writer</li>
          <li>Science Communicator</li>
        </ul>
        
        <h2>Emerging Fields</h2>
        <p>New technologies are creating novel career opportunities:</p>
        <ul>
          <li><strong>Bioinformatics:</strong> Analyzing biological data using computational tools</li>
          <li><strong>Digital Health:</strong> Developing health technologies and apps</li>
          <li><strong>Personalized Medicine:</strong> Tailoring treatments to individual patients</li>
          <li><strong>Regenerative Medicine:</strong> Developing therapies using stem cells and tissue engineering</li>
        </ul>
        
        <h2>Entrepreneurship and Innovation</h2>
        <p>Many biomedical scientists are becoming entrepreneurs:</p>
        <ul>
          <li>Starting biotechnology companies</li>
          <li>Developing medical devices</li>
          <li>Creating diagnostic tools</li>
          <li>Consulting for healthcare organizations</li>
        </ul>
        
        <h2>Skills Development</h2>
        <p>To succeed in any career path, focus on developing these key skills:</p>
        <ul>
          <li><strong>Technical skills:</strong> Stay current with laboratory techniques and technologies</li>
          <li><strong>Communication:</strong> Develop strong written and verbal communication skills</li>
          <li><strong>Critical thinking:</strong> Enhance your analytical and problem-solving abilities</li>
          <li><strong>Leadership:</strong> Take on leadership roles in projects and organizations</li>
          <li><strong>Continuous learning:</strong> Stay updated with the latest developments in your field</li>
        </ul>
        
        <h2>Building Your Career</h2>
        <p>Strategies for career advancement:</p>
        <ul>
          <li>Network with professionals in your field</li>
          <li>Seek mentorship from experienced professionals</li>
          <li>Pursue additional certifications and training</li>
          <li>Gain diverse experience through internships and volunteer work</li>
          <li>Consider advanced degrees for specialized roles</li>
        </ul>
        
        <h2>Work-Life Balance</h2>
        <p>Consider these factors when choosing your career path:</p>
        <ul>
          <li>Work schedule and flexibility</li>
          <li>Travel requirements</li>
          <li>Salary expectations and growth potential</li>
          <li>Geographic location preferences</li>
          <li>Personal interests and values alignment</li>
        </ul>
        
        <h2>Future Trends</h2>
        <p>Keep an eye on these trends that will shape future careers:</p>
        <ul>
          <li>Increased automation in laboratories</li>
          <li>Growing importance of data science skills</li>
          <li>Expansion of telemedicine and remote healthcare</li>
          <li>Focus on preventive and personalized medicine</li>
          <li>Integration of AI and machine learning in healthcare</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>The field of biomedical science offers incredible diversity in career opportunities. Whether you're drawn to traditional laboratory work, cutting-edge research, or innovative entrepreneurship, there's a path that can align with your interests and goals. The key is to stay curious, continue learning, and be open to new opportunities as they arise.</p>
      `
    }
  ];

  const writingStats = [
    { label: 'Articles Published', value: '25+', icon: <PenTool size={24} /> },
    { label: 'Total Readers', value: '15K+', icon: <Eye size={24} /> },
    { label: 'Engagement Rate', value: '8.5%', icon: <Heart size={24} /> },
    { label: 'Comments', value: '300+', icon: <MessageCircle size={24} /> }
  ];

  const openBlogModal = (post: BlogPost) => {
    setSelectedPost(post);
    document.body.style.overflow = 'hidden';
  };

  const closeBlogModal = () => {
    setSelectedPost(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Blog & Writing</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Sharing knowledge and insights about biomedical science, laboratory practices, and healthcare innovations
          </p>
        </div>

        {/* Writing Stats */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {writingStats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full mb-3">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Blog Posts */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-800 flex items-center">
              <BookOpen className="mr-3 text-indigo-600" />
              Featured Articles
            </h3>
            <button className="flex items-center text-indigo-600 hover:text-indigo-700 font-medium transition-colors">
              View All Posts
              <ArrowRight size={18} className="ml-2" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post,) => (
              <article
                key={post.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-white text-sm font-medium bg-gradient-to-r ${post.color}`}>
                      {post.category}
                    </span>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-t ${post.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar size={14} className="mr-2" />
                    {new Date(post.publishDate).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-4 text-gray-500 text-sm">
                      <div className="flex items-center">
                        <Eye size={14} className="mr-1" />
                        {post.views}
                      </div>
                      <div className="flex items-center">
                        <Heart size={14} className="mr-1" />
                        {post.likes}
                      </div>
                      <div className="flex items-center">
                        <MessageCircle size={14} className="mr-1" />
                        {post.comments}
                      </div>
                    </div>
                    <button 
                      onClick={() => openBlogModal(post)}
                      className="text-indigo-600 hover:text-indigo-700 font-medium text-sm flex items-center transition-colors"
                    >
                      Read More
                      <ArrowRight size={14} className="ml-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Writing Philosophy */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <Lightbulb className="text-yellow-300 mr-3" size={32} />
                <h3 className="text-2xl font-bold">Writing Philosophy</h3>
              </div>
              <blockquote className="text-center text-lg leading-relaxed italic">
                "Science communication is not just about sharing knowledge—it's about making complex concepts accessible, 
                inspiring curiosity, and building bridges between research and real-world applications. Through my writing, 
                I aim to demystify biomedical science and encourage the next generation of researchers and healthcare professionals."
              </blockquote>
              <div className="text-center mt-6">
                <div className="w-16 h-1 bg-white/30 mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Post Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-2xl">
              <div className="flex items-center space-x-4">
                <span className={`px-3 py-1 rounded-full text-white text-sm font-medium bg-gradient-to-r ${selectedPost.color}`}>
                  {selectedPost.category}
                </span>
                <span className="text-gray-500 text-sm">{selectedPost.readTime}</span>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Share2 size={20} />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Bookmark size={20} />
                </button>
                <button
                  onClick={closeBlogModal}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              {/* Header Image */}
              <div className="mb-6 rounded-xl overflow-hidden">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Article Header */}
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{selectedPost.title}</h1>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar size={16} className="mr-2" />
                      {new Date(selectedPost.publishDate).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <span className="text-gray-600">By {selectedPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-500 text-sm">
                    <div className="flex items-center">
                      <Eye size={16} className="mr-1" />
                      {selectedPost.views}
                    </div>
                    <div className="flex items-center">
                      <Heart size={16} className="mr-1" />
                      {selectedPost.likes}
                    </div>
                    <div className="flex items-center">
                      <MessageCircle size={16} className="mr-1" />
                      {selectedPost.comments}
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedPost.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Article Content */}
              <div 
                className="prose prose-lg max-w-none mb-8"
                dangerouslySetInnerHTML={{ __html: selectedPost.fullContent }}
                style={{
                  lineHeight: '1.7',
                  fontSize: '16px'
                }}
              />

              {/* Related Images */}
              {selectedPost.relatedImages.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Related Images</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {selectedPost.relatedImages.map((image, index) => (
                      <div key={index} className="rounded-lg overflow-hidden">
                        <img
                          src={image}
                          alt={`Related to ${selectedPost.title}`}
                          className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Article Footer */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors">
                      <Heart size={16} />
                      <span>Like ({selectedPost.likes})</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                      <MessageCircle size={16} />
                      <span>Comment ({selectedPost.comments})</span>
                    </button>
                  </div>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                    <Share2 size={16} />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;