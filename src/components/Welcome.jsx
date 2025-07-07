import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const stats = [
  { title: "Innovation", value: "20+", unit: "Solutions", icon: "🚀" },
  { title: "Excellence", value: "95%", unit: "Satisfaction", icon: "⭐" },
  { title: "Support", value: "24/7", unit: "Availability", icon: "💪" }
];

function Welcome() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [sparkles, setSparkles] = useState([]);

  const addSparkle = (x, y) => {
    const sparkle = {
      id: Date.now(),
      x,
      y,
      size: Math.random() * 20 + 10
    };
    setSparkles(prev => [...prev, sparkle]);
    setTimeout(() => {
      setSparkles(prev => prev.filter(s => s.id !== sparkle.id));
    }, 1000);
  };

  useEffect(() => {
    // Increased welcome screen duration from 4.5s to 8s
    const timer = setTimeout(() => {
      setShowWelcome(false);
      document.body.style.overflow = 'auto';
    }, 8000);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (Math.random() > 0.85) {
        addSparkle(e.clientX, e.clientY);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {showWelcome && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-dark to-black overflow-hidden"
        >
          {/* Dynamic Background */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute inset-0 opacity-30"
              animate={{
                background: [
                  'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(212, 175, 55, 0.15), transparent 80%)',
                ]
              }}
              transition={{ duration: 0.1 }}
              style={{
                '--mouse-x': `${mousePosition.x}px`,
                '--mouse-y': `${mousePosition.y}px`
              }}
            />
          </div>

          {/* Sparkles */}
          {sparkles.map(sparkle => (
            <motion.div
              key={sparkle.id}
              initial={{ opacity: 1, scale: 0 }}
              animate={{ opacity: 0, scale: 1 }}
              transition={{ duration: 1 }}
              className="absolute w-1 h-1 bg-primary rounded-full pointer-events-none"
              style={{
                left: sparkle.x,
                top: sparkle.y,
                width: sparkle.size,
                height: sparkle.size
              }}
            />
          ))}

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center max-w-7xl mx-auto px-4">
            {/* Logo Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                type: "spring",
                stiffness: 200
              }}
              className="mb-8"
            >
              <img 
                src={require('../assets/final logo.png')} 
                alt="SA Solutions Logo" 
                className="w-32 h-32 object-contain"
              />
            </motion.div>

            {/* Company Name with Gradient Animation */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-wider text-center animate-gradient-text"
            >
              SA SOLUTIONS
            </motion.h2>

            {/* Animated Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl sm:text-2xl text-gray-300 text-center max-w-2xl mx-auto mb-12"
            >
              Experience digital transformation like never before
            </motion.p>

            {/* Interactive Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 1.2 + index * 0.2,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 0 30px rgba(212, 175, 55, 0.2)'
                  }}
                  className="relative overflow-hidden bg-black/30 backdrop-blur-sm rounded-2xl p-6 text-center border border-primary/10 hover:border-primary/30 transition-all duration-300 group"
                >
                  {/* Hover Gradient Effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    style={{
                      background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.3), transparent)'
                    }}
                  />
                  
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-3xl mb-3"
                  >
                    {stat.icon}
                  </motion.div>

                  {/* Stats Content */}
                  <motion.h3
                    className="text-3xl font-bold bg-gradient-to-r from-primary to-white bg-clip-text text-transparent"
                  >
                    {stat.value}
                  </motion.h3>
                  <motion.p className="text-sm text-gray-400 mt-1">
                    {stat.unit}
                  </motion.p>
                  <motion.p className="text-base font-medium text-white/80 mt-2">
                    {stat.title}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Welcome;
