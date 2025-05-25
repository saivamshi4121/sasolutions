import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import SEO from '../components/SEO';

// Get EmailJS credentials from environment variables
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

function ContactUs() {
  // Create JSON-LD schema for the contact page
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact SA Solutions",
    "description": "Get in touch with SA Solutions for digital marketing and web development services",
    "mainEntity": {
      "@type": "Organization",
      "name": "SA Solutions",
      "telephone": "+91-6304105912",
      "email": "helpsasolutions@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hyderabad",
        "addressCountry": "IN"
      }
    }
  };

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    message: '',
    user_service: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({
    type: '',
    message: ''
  });

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    const fieldName = e.target.name === 'name' ? 'user_name' :
                     e.target.name === 'email' ? 'user_email' :
                     e.target.name === 'phone' ? 'user_phone' :
                     e.target.name;
    setFormData({ ...formData, [fieldName]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formData
      );

      if (result.text === 'OK') {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.'
        });
        setFormData({
          user_name: '',
          user_email: '',
          user_phone: '',
          message: '',
          user_service: 'general'
        });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with SA Solutions. We'd love to discuss how we can help transform your digital presence with our marketing and development expertise."
        keywords="contact sa solutions, digital agency contact, marketing agency contact hyderabad, web development contact"
        schema={schema}
      />
      <div className="min-h-screen bg-gradient-to-br from-dark via-dark/95 to-dark py-24 px-4 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-[500px] h-[500px] top-0 -left-48 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute w-[500px] h-[500px] bottom-0 -right-48 bg-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute inset-0 bg-[url('/src/assets/grid.jpg')] opacity-20 mix-blend-overlay" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4 px-6 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent"
            >
              Let's Connect
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? We'd love to discuss how we can help bring your ideas to life.
            </p>
          </motion.div>        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Information Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-dark/40 backdrop-blur-md p-8 rounded-2xl text-white relative overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Contact Information</h2>
                <div className="space-y-8">
                  <motion.div 
                    className="flex items-center space-x-4"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="bg-accent/10 p-4 rounded-xl">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <p className="text-lg font-semibold text-white">+91 6304105912</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-center space-x-4"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="bg-primary/10 p-4 rounded-xl">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-lg font-semibold text-white">helpsasolutions@gmail.com</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-center space-x-4"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="bg-secondary/10 p-4 rounded-xl">
                      <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-lg font-semibold text-white">Hyderabad, India</p>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-12 pt-8 border-t border-primary/10">
                  <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Connect With Us</h3>
                  <div className="flex space-x-4">
                    {[
                      { 
                        icon: FaInstagram, 
                        href: 'https://www.instagram.com/sasolutions.offical?igsh=NW55djB2NXB1MHNl', 
                        label: 'Instagram' 
                      },
                      { 
                        icon: FaLinkedinIn, 
                        href: 'https://www.linkedin.com/company/sa-solutions-pvt/', 
                        label: 'LinkedIn' 
                      }
                    ].map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-dark/40 p-4 rounded-xl hover:bg-accent/10 hover:text-accent transition-all duration-300 group"
                        whileHover={{ y: -4 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <span className="sr-only">{social.label}</span>
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-dark/40 backdrop-blur-md p-8 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-300"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.user_name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-dark/60 text-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-300"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.user_email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-dark/60 text-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-300"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-400">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.user_phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-dark/60 text-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-dark/60 text-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-300"
                    required
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  type="submit"
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-dark transition-all duration-300
                    ${isSubmitting 
                      ? 'bg-gray-500 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-accent via-primary to-accent bg-[length:200%_200%] hover:bg-right'}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>

                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl ${
                      status.type === 'success' 
                        ? 'bg-green-500/10 text-green-500 border border-green-500/20' 
                        : 'bg-red-500/10 text-red-500 border border-red-500/20'
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
