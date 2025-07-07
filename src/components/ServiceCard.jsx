import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function ServiceCard({ service }) {
  return (
    <motion.div 
      className="service-focus-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="card-inner">
        <div className="card-content">
          {/* Icon */}
          <motion.div 
            className="icon-wrapper"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="service-icon">
              <span>{service.icon}</span>
            </div>
          </motion.div>
          
          {/* Title */}
          <h3 className="card-title">
            {service.title}
          </h3>
          
          {/* Description */}
          <p className="card-description">
            {service.description}
          </p>

          {/* Features */}
          <ul className="feature-list">
            {service.features.slice(0, 3).map((feature, idx) => (
              <motion.li
                key={idx}
                className="feature-item"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                {feature}
              </motion.li>
            ))}
          </ul>

          {/* Action Button */}
          <Link
            to="/contact"
            className="card-button"
          >
            <span>Learn More</span>
            <motion.svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </motion.svg>
          </Link>
        </div>
      </div>

      {/* Visual Effects */}
      <div className="accent-orb" />
      <div className="card-blur-bg" />
    </motion.div>
  );
}

export default ServiceCard;