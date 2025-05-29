import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const positions = [
  {
    id: 'ca-001',
    title: 'Client Acquisition Specialist',
    department: 'Sales',
    type: 'Full Time',
    description: 'Drive business growth through strategic client acquisition and relationship building.',
    requirements: [
      'Proven experience in B2B sales',
      'Excellent communication skills',
      'Strong negotiation abilities'
    ]
  },
  {
    id: 'crm-001',
    title: 'Client Relationship Manager',
    department: 'Customer Success',
    type: 'Full Time',
    description: 'Manage and nurture client relationships to ensure long-term success and satisfaction.',
    requirements: [
      'Experience in account management',
      'Problem-solving skills',
      'Client communication expertise'
    ]
  },
  {
    id: 'gd-001',
    title: 'Graphic Designer',
    department: 'Creative',
    type: 'Full Time',
    description: 'Create stunning visual designs across various digital platforms and marketing materials.',
    requirements: [
      'Proficiency in Adobe Creative Suite',
      'Strong portfolio of work',
      'Understanding of design principles'
    ]
  },
  {
    id: 'wd-001',
    title: 'Web Developer',
    department: 'Technology',
    type: 'Full Time',
    description: 'Build and maintain modern, responsive websites and web applications.',
    requirements: [
      'Experience with React/Next.js',
      'Strong JavaScript fundamentals',
      'Understanding of UI/UX principles'
    ]
  },
  {
    id: 'cw-001',
    title: 'Content Writer',
    department: 'Content',
    type: 'Full Time',
    description: 'Create engaging blog posts, articles, and marketing content that drives engagement.',
    requirements: [
      'Excellent writing and editing skills',
      'SEO knowledge',
      'Content strategy experience'
    ]
  },
  {
    id: 'ph-001',
    title: 'Photographer',
    department: 'Creative',
    type: 'Full Time',
    description: 'Capture high-quality photographs for various marketing and branding initiatives.',
    requirements: [
      'Professional photography experience',
      'Equipment expertise',
      'Photo editing skills'
    ]
  },
  {
    id: 'dm-001',
    title: 'Digital Marketing Specialist',
    department: 'Marketing',
    type: 'Full Time',
    description: 'Execute digital marketing strategies across multiple channels to drive growth.',
    requirements: [
      'Digital marketing certification',
      'Analytics experience',
      'Campaign management skills'
    ]
  }
];

function Careers() {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const departments = ['All', ...new Set(positions.map(pos => pos.department))];

  // Parallax and scroll effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Particle animation setup
  useEffect(() => {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const particles = [];
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = 'rgba(var(--primary-rgb), 0.2)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animate);
    };
  }, []);

  const filteredPositions = positions.filter(pos => {
    const matchesDepartment = selectedDepartment === 'All' || pos.department === selectedDepartment;
    const matchesSearch = pos.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         pos.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         pos.department.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

  return (
    <>
      <SEO
        title="Join Our Team | SA Solutions"
        description="Be part of our innovative team at SA Solutions. Explore exciting career opportunities and help shape the future of digital experiences."
        keywords="careers, jobs, sa solutions careers, digital agency jobs, tech jobs hyderabad"
      />
      <div className="relative min-h-screen overflow-hidden bg-[#030014]" ref={containerRef}>
        <canvas id="particle-canvas" className="absolute inset-0 pointer-events-none" />

        <div className="relative w-full min-h-screen perspective-1000">
          <motion.div
            style={{ y: backgroundY }}
            className="relative pt-32 pb-20 px-4 transform-style-3d"
          >
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                animate={{
                  background: [
                    'radial-gradient(600px circle at 0% 0%, rgba(var(--primary-rgb), 0.15), transparent 40%)',
                    'radial-gradient(600px circle at 100% 100%, rgba(var(--accent-rgb), 0.15), transparent 40%)',
                    'radial-gradient(600px circle at 0% 100%, rgba(var(--primary-rgb), 0.15), transparent 40%)',
                    'radial-gradient(600px circle at 100% 0%, rgba(var(--accent-rgb), 0.15), transparent 40%)',
                  ]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0"
              />
              <div 
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(var(--primary-rgb), 0.1), transparent 40%)`
                }}
              />
            </div>

            <div className="max-w-7xl mx-auto relative">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-center relative"
              >
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotateZ: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl" />
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-2xl transform rotate-45" />
                </motion.div>

                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="relative"
                >
                  <h1 className="text-7xl md:text-8xl font-bold mb-6 tracking-tight">
                    <span className="relative inline-block">
                      <span className="relative z-10 bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent">
                        Shape Tomorrow
                      </span>
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl"
                        animate={{
                          opacity: [0.5, 1, 0.5],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </span>
                  </h1>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
                  >
                    Join a team of visionaries and innovators who are redefining the future of digital experiences.
                  </motion.p>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="max-w-2xl mx-auto relative group"
                >
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 0 rgba(var(--primary-rgb), 0.3)",
                        "0 0 20px rgba(var(--primary-rgb), 0.5)",
                        "0 0 0 rgba(var(--primary-rgb), 0.3)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt blur"
                  />
                  <div className="relative flex items-center bg-dark/80 backdrop-blur-xl rounded-2xl">
                    <input
                      type="text"
                      placeholder="Discover your next opportunity..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-8 py-6 bg-transparent text-lg text-white placeholder-gray-400 focus:outline-none"
                    />
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="absolute right-6 p-2 text-primary hover:text-accent transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="flex flex-wrap justify-center gap-4 mt-12"
                >
                  {departments.map((dept, index) => (
                    <motion.button
                      key={dept}
                      onClick={() => setSelectedDepartment(dept)}
                      className={`relative px-8 py-4 rounded-xl text-sm font-medium transition-all duration-500 overflow-hidden ${
                        selectedDepartment === dept
                          ? 'text-dark'
                          : 'text-gray-400 hover:text-white'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary to-accent"
                        initial={{ x: '-100%' }}
                        animate={{
                          x: selectedDepartment === dept ? '0%' : '-100%'
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="relative z-10">{dept}</span>
                    </motion.button>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <div className="max-w-7xl mx-auto px-4 pb-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedDepartment + searchQuery}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredPositions.map((position, index) => (
                  <motion.div
                    key={position.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative"
                  >
                    <motion.div
                      className="relative bg-dark/40 backdrop-blur-xl p-8 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-500 group-hover:transform group-hover:scale-[1.02]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10">
                        <div className="flex flex-col gap-4">
                          <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                            {position.title}
                          </h3>
                          <div className="flex flex-wrap gap-3">
                            <span className="px-4 py-1.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
                              {position.department}
                            </span>
                            <span className="px-4 py-1.5 text-xs font-medium bg-accent/10 text-accent rounded-full">
                              {position.type}
                            </span>
                          </div>
                          <p className="text-gray-400 leading-relaxed">
                            {position.description}
                          </p>
                          <div className="mt-4">
                            <motion.a
                              href="https://forms.gle/wqxTN5QuTdUAKmpq5"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center w-full px-8 py-4 bg-gradient-to-r from-primary to-accent text-dark font-semibold rounded-xl transition-all duration-500 transform perspective-1000"
                              whileHover={{
                                scale: 1.02,
                                rotateX: 10,
                                boxShadow: "0 20px 30px rgba(var(--primary-rgb), 0.3)"
                              }}
                              whileTap={{ scale: 0.98 }}
                            >
                              Apply Now
                            </motion.a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredPositions.length === 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-32"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="inline-block p-8 bg-dark/40 backdrop-blur-xl rounded-2xl border border-primary/10 mb-8"
                >
                  <svg className="w-20 h-20 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </motion.div>
                <h3 className="text-3xl font-bold text-white mb-4">No Positions Found</h3>
                <p className="text-gray-400 text-lg">Try adjusting your search or filter criteria</p>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative mt-32 overflow-hidden"
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 bg-gradient-conic from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-3xl"
              />
              <div className="relative bg-dark/60 backdrop-blur-xl p-16 rounded-3xl border border-primary/10">
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl md:text-5xl font-bold text-white mb-6"
                >
                  Don't see the right position?
                </motion.h3>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto"
                >
                  We're always looking for exceptional talent to join our team. Share your resume, and let's explore future opportunities together.
                </motion.p>
                <motion.a
                  href="https://forms.gle/wqxTN5QuTdUAKmpq5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-12 py-6 bg-gradient-to-r from-primary to-accent text-dark font-semibold rounded-xl transition-all duration-500 transform perspective-1000"
                  whileHover={{
                    scale: 1.05,
                    rotateX: 10,
                    boxShadow: "0 30px 40px rgba(var(--primary-rgb), 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-lg">Submit Your Resume</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Careers; 