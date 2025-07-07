import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

// Get EmailJS credentials from environment variables
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

function ContactForm() {
  const form = useRef();

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    message: '',
    user_service: 'general'
  });

  const [status, setStatus] = useState({
    type: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    { value: 'digital-marketing', label: 'Digital Marketing' },
    { value: 'web-development', label: 'Web Development' },
    { value: 'social-media', label: 'Social Media Management' },
    { value: 'content-creation', label: 'Content Creation' },
    { value: 'general', label: 'General Inquiry' }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };  const handleSubmit = async (e) => {
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
      }    } catch (error) {
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-2xl mx-auto bg-dark/40 backdrop-blur-sm border border-primary/10 rounded-2xl shadow-lg hover:border-primary/30 transition-all duration-300 p-8"
    >      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-dark/60 text-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-300 placeholder-gray/50"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-dark/60 text-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-300 placeholder-gray/50"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="user_phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-dark/60 text-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-300 placeholder-gray/50"
              placeholder="+1 (234) 567-8900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray mb-2" htmlFor="service">
              Service Interest
            </label>
            <select
              id="service"
              name="user_service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-dark/60 text-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-300"
            >
              {services.map(service => (
                <option key={service.value} value={service.value}>
                  {service.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray mb-2" htmlFor="message">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-dark/60 text-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-300 placeholder-gray/50"
            placeholder="Tell us about your project..."
          ></textarea>
        </div>

        <div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
            type="submit"
            className={`w-full py-4 px-6 rounded-xl font-semibold text-dark transition-all duration-300
              ${isSubmitting 
                ? 'bg-gray cursor-not-allowed' 
                : 'bg-gradient-to-r from-accent via-primary to-accent hover:bg-[length:200%_200%] bg-[length:100%_100%]'}`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>
        </div>

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
  );
}

export default ContactForm;