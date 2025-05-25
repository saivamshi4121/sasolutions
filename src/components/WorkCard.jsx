import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function WorkCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleViewDetails = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div 
      className="work-card group relative rounded-2xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-accent/20 via-primary/20 to-secondary/20 z-0"
        initial={{ opacity: 0 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.7 }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        <motion.div 
          className="absolute top-4 right-4 px-4 py-1.5 rounded-full bg-accent/20 backdrop-blur-md 
                     border border-accent/20 text-sm font-medium z-20"
          initial={{ y: -10, opacity: 0 }}
          animate={{
            y: isHovered ? 0 : -10,
            opacity: isHovered ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
        >
          {project.category}
        </motion.div>
      </div>

      <motion.div 
        className="relative z-10 p-6 backdrop-blur-sm bg-black/50"
        animate={{
          y: isHovered ? 0 : 10,
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.h3 
          className="text-xl font-bold mb-2 bg-gradient-to-r from-white to-white/80 bg-clip-text"
          animate={{ y: isHovered ? 0 : 5 }}
        >
          {project.title}
        </motion.h3>

        <motion.p 
          className="text-gray-300 text-sm mb-4 line-clamp-2"
          animate={{ opacity: isHovered ? 1 : 0.8 }}
        >
          {project.description}
        </motion.p>

        <div className="space-y-2 mb-4">
          {project.features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ 
                opacity: isHovered ? 1 : 0.7,
                x: isHovered ? 0 : -5
              }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent/80" />
              <span className="text-sm text-gray-300">{feature}</span>
            </motion.div>
          ))}
        </div>

        <motion.button
          onClick={handleViewDetails}
          className="w-full group flex items-center justify-center space-x-2 bg-accent/20 hover:bg-accent/30 
                     border border-accent/20 rounded-xl py-3 text-accent transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>View Details</span>
          <motion.svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ x: isHovered ? 4 : 0 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </motion.svg>
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-accent/90 backdrop-blur-md text-dark 
                     px-8 py-4 rounded-2xl border border-accent/20 shadow-2xl z-50 flex items-center space-x-3"
          >
            <span className="text-lg font-semibold">✨ Coming Soon! Check back later</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default WorkCard;
