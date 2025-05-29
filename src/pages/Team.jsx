import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import SEO from '../components/SEO';

// Import images
import sanathImage from '../assets/Sanath Kumar Arutla.jpg';
import anurithImage from '../assets/Anurith Sallagonda.png';
import nikhilImage from '../assets/nikhil.jpg';
import vamshiImage from '../assets/vamshi.jpg';
import joshithaImage from '../assets/joshitha.jpg';
import sumaniImage from '../assets/sumani.jpg';
import gayathriImage from '../assets/gayathri.jpg';

const teamMembers = [
  // Row 1 (2 cards) - Leadership
  {
    id: 1,
    name: 'Sanath Kumar Arutla',
    role: 'Founder',
    image: sanathImage,
    row: 1,
    linkedin: 'https://www.linkedin.com/in/sanath-kumar-arutla/'
  },
  {
    id: 2,
    name: 'Anurith Sallagonda',
    role: 'COO',
    image: anurithImage,
    row: 1,
    linkedin: 'https://www.linkedin.com/in/anurith-sallagonda/'
  },
  // Row 2 (3 cards)
  {
    id: 3,
    name: 'Peteti Nikhil Sai',
    role: 'Client Acquisition',
    image: nikhilImage,
    row: 2,
    linkedin: 'https://www.linkedin.com/in/nikhil-sai-peteti-o292328/'
  },
  {
    id: 4,
    name: 'Palamuri Saivamshi',
    role: 'Web Developer',
    image: vamshiImage,
    row: 2,
    linkedin: 'https://www.linkedin.com/in/sai-vamshi-328035282/'
  },
  {
    id: 5,
    name: 'Yalaga Joshitha',
    role: 'Graphic Designer',
    image: joshithaImage,
    row: 2,
    linkedin: 'https://www.linkedin.com/in/yalaga-joshitha-25b264280/'
  },
  // Row 3 (2 cards)
  {
    id: 6,
    name: 'Bollipogu Sumani',
    role: 'Graphic Designer',
    image: sumaniImage,
    row: 3,
    linkedin: 'https://www.linkedin.com/in/sumani-bollipogu-32b362338/'
  },
  {
    id: 7,
    name: 'Goni Gayathri',
    role: 'Client Acquisition',
    image: gayathriImage,
    row: 3,
    linkedin: 'https://www.linkedin.com/in/sumani-bollipogu-32b362338/'
  }
];

function Team() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredMember, setHoveredMember] = useState(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Group members by row
  const row1Members = teamMembers.filter(member => member.row === 1);
  const row2Members = teamMembers.filter(member => member.row === 2);
  const row3Members = teamMembers.filter(member => member.row === 3);

  return (
    <>
      <SEO
        title="Our Team | SA Solutions"
        description="Meet our talented team of professionals who make innovation happen."
        keywords="team, professionals, sa solutions team, experts, leadership"
      />
      <div className="relative min-h-screen overflow-hidden bg-[#030014]" ref={containerRef}>
        {/* Dynamic Background */}
        <div className="absolute inset-0">
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

        {/* Content */}
        <div className="relative pt-24 pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-center relative mb-16"
            >
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-bold mb-4"
              >
                <span className="bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent">
                  Meet Our Team
                </span>
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-gray-400 max-w-2xl mx-auto"
              >
                A collective of passionate individuals driving innovation and excellence
              </motion.p>
            </motion.div>

            {/* Team Grid */}
            <div className="space-y-16">
              {/* Row 1 - 2 cards centered */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-2 gap-8 max-w-2xl mx-auto"
              >
                {row1Members.map((member) => (
                  <TeamMemberCard key={member.id} member={member} setHoveredMember={setHoveredMember} />
                ))}
              </motion.div>

              {/* Row 2 - 3 cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid grid-cols-3 gap-8 max-w-4xl mx-auto"
              >
                {row2Members.map((member) => (
                  <TeamMemberCard key={member.id} member={member} setHoveredMember={setHoveredMember} />
                ))}
              </motion.div>

              {/* Row 3 - 2 cards centered */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-2 gap-8 max-w-2xl mx-auto"
              >
                {row3Members.map((member) => (
                  <TeamMemberCard key={member.id} member={member} setHoveredMember={setHoveredMember} />
                ))}
              </motion.div>
            </div>

            {/* Join the Team CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative mt-24 overflow-hidden"
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
                  Join Our Team
                </motion.h3>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto"
                >
                  We're always looking for talented individuals to join our innovative team. Explore our current opportunities.
                </motion.p>
                <motion.a
                  href="/careers"
                  className="inline-flex items-center justify-center px-12 py-6 bg-gradient-to-r from-primary to-accent text-dark font-semibold rounded-xl transition-all duration-500 transform perspective-1000"
                  whileHover={{
                    scale: 1.05,
                    rotateX: 10,
                    boxShadow: "0 30px 40px rgba(var(--primary-rgb), 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-lg">View Open Positions</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

// LinkedIn Icon Component
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

// Team Member Card Component
const TeamMemberCard = ({ member, setHoveredMember }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.open(member.linkedin, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      key={member.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="group relative cursor-pointer"
      onClick={handleClick}
      onMouseEnter={() => {
        setHoveredMember(member.id);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setHoveredMember(null);
        setIsHovered(false);
      }}
    >
      <motion.div
        className="relative aspect-square w-48 mx-auto overflow-hidden rounded-full bg-dark/40 backdrop-blur-xl border border-primary/10 transition-all duration-500"
        animate={{
          scale: isHovered ? 1.05 : 1,
          rotateY: isHovered ? 10 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20
        }}
      >
        {/* Member Image */}
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-center"
        />

        {/* Background Effects */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1.2 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Bubble Effect Background */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at center, rgba(var(--primary-rgb), 0.2) 0%, transparent 70%)`
          }}
          animate={{
            scale: isHovered ? [1, 1.2, 1.1] : 1,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            times: [0, 0.5, 1]
          }}
        />

        {/* Hover Overlay with LinkedIn Icon */}
        <motion.div
          className="absolute inset-0 bg-dark/60 backdrop-blur-sm flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: isHovered ? 1 : 0.8,
              opacity: isHovered ? 1 : 0
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <div className="inline-flex items-center justify-center w-10 h-10 bg-[#0077b5] text-white rounded-full hover:bg-[#0077b5]/80 transition-colors">
              <LinkedInIcon />
            </div>
            <span className="text-white text-sm">View Profile</span>
          </motion.div>
        </motion.div>

        {/* Animated Border Effect */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            border: '2px solid transparent',
            background: 'linear-gradient(45deg, var(--primary), var(--accent)) border-box',
            WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'destination-out',
            maskComposite: 'exclude',
          }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? [1, 1.02, 1] : 1,
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </motion.div>

      {/* Name and Role Below Circle */}
      <div className="mt-4 text-center">
        <motion.h3
          className="text-lg font-bold text-white"
          layout
        >
          {member.name}
        </motion.h3>
        <motion.div
          className="mt-1"
          layout
        >
          <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
            {member.role}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Team; 