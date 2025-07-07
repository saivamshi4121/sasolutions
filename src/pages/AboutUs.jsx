import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function AboutUs() {
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

  const handleMouseMove = (e) => {
    if (Math.random() > 0.85) {
      addSparkle(e.clientX, e.clientY);
    }
  };

  const stats = [
    { number: '20+', label: 'Brand Partners', icon: '🤝' },
    { number: '95%', label: 'Client Satisfaction', icon: '⭐' },
    { number: '10+', label: 'Team Members', icon: '👥' },
    { number: '24/7', label: 'Support Available', icon: '🛟' }
  ];

  const values = [
    { title: 'Innovation', description: 'Pushing boundaries with cutting-edge solutions', icon: '💡' },
    { title: 'Excellence', description: 'Delivering outstanding results consistently', icon: '🎯' },
    { title: 'Integrity', description: 'Building trust through transparent practices', icon: '🤝' },
    { title: 'Growth', description: 'Fostering continuous improvement', icon: '📈' }
  ];

  return (
    <div className="min-h-screen bg-black" onMouseMove={handleMouseMove}>
      {/* Sparkles */}
      {sparkles.map(sparkle => (
        <motion.div
          key={sparkle.id}
          initial={{ opacity: 1, scale: 0 }}
          animate={{ opacity: 0, scale: 1 }}
          transition={{ duration: 1 }}
          style={{
            position: 'fixed',
            top: sparkle.y,
            left: sparkle.x,
            width: sparkle.size,
            height: sparkle.size,
            borderRadius: '50%',
            background: 'radial-gradient(circle at center, #FFD700, transparent)',
            pointerEvents: 'none',
            zIndex: 1000,
          }}
        />
      ))}

      {/* Hero Section with Parallax */}
      <section className="relative h-[90vh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/src/assets/grid.jpg')] opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
            className="absolute inset-0 bg-gradient-radial from-accent/20 via-transparent to-transparent"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-6 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-8"
            >
              Our Story
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-8"
            >
              Transforming Ideas into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
                Digital Reality
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 leading-relaxed mb-12"
            >
              At SA Solutions, we blend creativity with technology to deliver exceptional digital experiences. 
              Our passionate team of experts is dedicated to transforming your vision into impactful digital solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section with Floating Cards */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-dark/40 backdrop-blur-lg border border-accent/10 p-8 rounded-2xl relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <span className="text-4xl mb-4 block">{stat.icon}</span>
                <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.number}
                </h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-dark/40 backdrop-blur-lg p-8 rounded-2xl border border-accent/10 hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Our Vision</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To be the leading creative agency that transforms businesses through cutting-edge digital
                  strategies and creative excellence. We envision a digital landscape where every brand shines.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-dark/40 backdrop-blur-lg p-8 rounded-2xl border border-accent/10 hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Our Mission</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To empower businesses with innovative digital solutions that drive growth and create lasting impact
                  in the digital landscape. We're committed to delivering excellence in every project.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
              Core Values
            </span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-dark/40 backdrop-blur-lg border border-accent/10 p-6 rounded-xl group hover:border-accent/30 transition-all duration-300"
              >
                <span className="text-4xl mb-4 block">{value.icon}</span>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-accent transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center bg-dark/40 backdrop-blur-lg border border-accent/10 p-12 rounded-2xl hover:border-accent/30 transition-all duration-300"
          >
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <motion.div 
                  whileHover={{ x: 4 }}
                  className="flex items-center justify-center space-x-3 text-gray-300"
                >
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Hyderabad, India</span>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 4 }}
                  className="flex items-center justify-center space-x-3 text-gray-300"
                >
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>services.sasolutions@gmail.com</span>
                </motion.div>
              </div>
              <div className="space-y-6">
                <motion.div 
                  whileHover={{ x: 4 }}
                  className="flex items-center justify-center space-x-3 text-gray-300"
                >
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+91 6304105912</span>
                </motion.div>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 border border-accent bg-accent/10 text-accent rounded-xl hover:bg-accent hover:text-black transition-all duration-300 group"
                >
                  Contact Us
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
