import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SEO from '../components/SEO';

const services = [
  'Social Media Marketing',
  'Graphic Design & Branding',
  'Content Strategy',
  'Professional Video Editing',
  'Website Development',
  'Digital Marketing',
  'Cloud & Automation',
  'Creator Collaboration',
  'Creator Mentorship',
  'Thumbnail Design',
];

function Home() {
  // Create JSON-LD schema for better search results
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SA Solutions",
    "description": "Leading Digital Marketing & Web Development Agency in Hyderabad",
    "url": "https://yourdomain.com",
    "logo": "https://yourdomain.com/logo512.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 6301874132",
      "contactType": "customer service",
      "email": "helpsasolutions@gmail.com"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hyderabad",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.instagram.com/sasolutions.offical",
      "https://www.linkedin.com/company/sa-solutions-pvt/"
    ]
  };

  return (
    <>
      <SEO
        title="Digital Marketing & Web Development Agency in Hyderabad"
        description="SA Solutions is a leading digital agency providing comprehensive digital marketing, web development, and social media services to transform your business in Hyderabad."
        keywords="digital marketing agency hyderabad, web development company, social media marketing, content creation, SEO services, digital solutions"
        schema={schema}
      />
      <div className="bg-black">
        <Hero />

        {/* Services Carousel Section */}
        <section className="py-16 relative overflow-hidden">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
                Services
              </span>
            </h2>
            <motion.div
              className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-primary via-accent to-secondary"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>

          {/* Animated gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none" />
          <motion.div
            className="absolute inset-0 opacity-30 pointer-events-none"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, var(--accent-color) 0%, transparent 50%)',
              backgroundSize: '100% 100%',
            }}
          />

          <div className="max-w-full overflow-hidden">
            <motion.div
              animate={{
                x: [0, -1920],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="flex whitespace-nowrap"
            >
              {[...services, ...services].map((service, index) => (
                <motion.div
                  key={index}
                  className="mx-8 px-6 py-3 bg-accent/10 rounded-full text-accent border border-accent/20 
                             hover:bg-accent/20 transition-all duration-300 whitespace-nowrap cursor-pointer"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 0 20px rgba(var(--accent-rgb), 0.3)',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.3,
                    delay: index * 0.1,
                  }}
                >
                  <motion.span
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    {service}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Call to Action Section with Interactive Elements */}
        <section className="py-32 relative overflow-hidden">
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 0% 0%, rgba(var(--primary-rgb), 0.2) 0%, transparent 50%)',
                'radial-gradient(circle at 100% 100%, rgba(var(--primary-rgb), 0.2) 0%, transparent 50%)',
                'radial-gradient(circle at 0% 0%, rgba(var(--primary-rgb), 0.2) 0%, transparent 50%)',
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto px-4 text-center relative z-10"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold mb-8"
            >
              Ready to{' '}
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Transform
              </motion.span>{' '}
              Your Business?
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center gap-2 bg-white text-black px-8 py-4 
                           rounded-full font-medium overflow-hidden transition-all duration-300"
                >
                  <motion.span
                    animate={{
                      x: [0, -4, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                  >
                    Get Started Today
                  </motion.span>
                  <motion.svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </motion.svg>
                  <motion.div
                    className="absolute inset-0 bg-accent/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </>
  );
}

export default Home;
