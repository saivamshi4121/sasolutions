import React, { useState, useId, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ServicePopup from '../ServicePopup';
import '../../styles/Carousel3D.css';

const Slide = ({ slide, onKnowMore }) => {
  if (!slide) return null;

  return (
    <div className="service-card-3d group">
      <span className="absolute top-0 left-0 z-0 h-32 w-32 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#1ec4f2] opacity-75 transition-all duration-500 transform group-hover:scale-[20]"></span>
      
      <div className="card-content">
        <div className="service-icon-wrapper">
          <span className="service-icon group-hover:bg-gradient-to-r group-hover:from-[#e9b033] group-hover:to-[#D4AF37]">
            {slide.icon}
          </span>
        </div>
        <div className="space-y-6">
          <h3 className="service-title group-hover:text-white/95">{slide.title}</h3>
          <p className="service-description group-hover:text-white/90">{slide.description}</p>
        </div>
        <div className="pt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onKnowMore(slide)}
            className="know-more-btn group-hover:text-white font-medium"
          >
            Explore Service →
          </motion.button>
        </div>
      </div>
    </div>
  );
};

const Carousel = ({ slides = [] }) => {
  const [selectedService, setSelectedService] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const validateSlides = () => {
      if (!Array.isArray(slides)) {
        throw new Error('Slides must be an array');
      }
      if (slides.length === 0) {
        throw new Error('No slides provided');
      }
      slides.forEach((slide, index) => {
        if (!slide?.title || !slide?.description) {
          throw new Error(`Invalid slide data at index ${index}`);
        }
      });
    };

    try {
      validateSlides();
      setError(null);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  }, [slides]);

  const handleKnowMore = (service) => {
    if (!service?.title || !service?.description) {
      setError('Invalid service data');
      return;
    }
    setSelectedService(service);
  };

  if (error) {
    return (
      <div className="flex items-center justify-center p-4 text-red-500">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-4">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="carousel-wrapper">
      <AnimatePresence>
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <motion.div
              key={`slide-${index}-${slide.title}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Slide
                slide={slide}
                onKnowMore={handleKnowMore}
              />
            </motion.div>
          ))}
        </div>
      </AnimatePresence>

      {selectedService && (
        <ServicePopup
          service={selectedService}
          isOpen={true}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
};

export default Carousel;
