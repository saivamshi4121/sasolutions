import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServicePopup = ({ service, isOpen, onClose }) => {
  const popupRef = useRef(null);
  const closeButtonRef = useRef(null);
  const lastActiveElement = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      lastActiveElement.current = document.activeElement;
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
      
      // Focus management
      requestAnimationFrame(() => {
        closeButtonRef.current?.focus();
      });
    } else {
      // Restore focus
      lastActiveElement.current?.focus();
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-40"
            onClick={onClose}
          />
          {/* Popup Content */}
          <motion.div
            ref={popupRef}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 350
            }}
            className="fixed inset-0 flex items-center justify-center p-4 z-50"
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-title"
          >
            <div className="relative w-full max-w-2xl bg-dark/95 backdrop-blur-md rounded-2xl border border-accent/20 overflow-hidden shadow-xl shadow-black/50">
              {/* Gradient Orbs with enhanced animation */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
              />
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
              />

              {/* Content */}
              <div className="relative max-h-[calc(100vh-2rem)] overflow-y-auto">
                <div className="p-6 md:p-8 space-y-6">
                  {/* Header */}
                  <motion.div 
                    className="flex items-start justify-between"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <h2 
                      id="service-title"
                      className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-accent to-white bg-clip-text text-transparent"
                    >
                      {service.title}
                    </h2>
                    <button
                      ref={closeButtonRef}
                      onClick={onClose}
                      className="p-2 text-gray hover:text-white transition-colors"
                      aria-label="Close dialog"
                    >
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </motion.div>

                  {/* Main Content */}
                  <motion.div 
                    className="space-y-6"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    {/* Image */}
                    <div className="relative h-48 md:h-64 rounded-xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20" />
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white">Key Features</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-2 text-gray-300"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4">
                      <Link
                        to="/contact"
                        className="w-full py-3 px-6 bg-gradient-to-r from-primary to-accent text-dark font-semibold rounded-xl hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
                        aria-label={`Get started with ${service.title}`}
                      >
                        Get Started
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ServicePopup;
