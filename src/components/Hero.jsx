import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="relative bg-black text-white">
      <div className="relative max-w-7xl mx-auto px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-8"
            >
              Digital Agency
            </motion.span>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-6xl lg:text-7xl font-bold leading-tight mb-8"
            >
              Create{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
                Impact
              </span>
              <br />
              with Digital
              <br />
              Excellence
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray/80 text-xl leading-relaxed mb-12 max-w-2xl"
            >
              Transform your brand's digital presence with our comprehensive suite of services. From web development to digital marketing, we help businesses thrive in the digital age.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-6"
            >
              <Link
                to="/contact"
                className="inline-flex items-center bg-white hover:bg-accent text-black px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-xl shadow-white/10 hover:shadow-accent/20"
              >
                Start a Project
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 rounded-lg font-medium border border-white/10 hover:border-white/30 transition-all duration-300"
              >
                View Services
              </Link>
            </motion.div>
          </motion.div>          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative aspect-square lg:aspect-auto lg:h-[600px] flex items-center justify-center"
          >            {/* Animated Logo Container with Enhanced Effects */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-96 h-96 flex items-center justify-center relative"
            >
              {/* Glowing ring effect */}
              <motion.div
                className="absolute w-[90%] h-[90%] rounded-full bg-gradient-to-r from-primary/30 via-accent/20 to-secondary/30"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ filter: "blur(20px)" }}
              />

              {/* Main Logo with enhanced animation */}
              <motion.img
                src={require('../assets/final logo.png')}
                alt="SA Solutions Logo"
                className="w-80 h-80 object-contain relative z-10"
                initial={{ scale: 0, opacity: 0, rotateY: 180 }}
                animate={{ 
                  scale: 1,
                  opacity: 1,
                  rotateY: 0,
                  y: [-10, 10, -10],
                }}
                transition={{
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  default: {
                    duration: 1.5,
                    ease: "easeOut"
                  }
                }}
                whileHover={{
                  scale: 1.1,
                  rotateY: 180,
                  transition: { 
                    duration: 0.8,
                    ease: "easeInOut"
                  }
                }}
              />

              {/* Spinning particles effect */}
              {[...Array(3)].map((_, index) => (
                <motion.div
                  key={index}
                  className="absolute w-full h-full"
                  initial={{ rotate: (index * 120) }}
                  animate={{ rotate: [index * 120, index * 120 + 360] }}
                  transition={{
                    duration: 10 + index * 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <motion.div
                    className="w-4 h-4 bg-accent/30 rounded-full absolute"
                    style={{ 
                      top: "10%",
                      left: "50%",
                      filter: "blur(8px)"
                    }}
                    animate={{
                      opacity: [0.5, 1, 0.5],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>      
    </div>
  );
}

export default Hero;
