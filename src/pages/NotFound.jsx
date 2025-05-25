import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <section className="page_404 py-20 font-['Arvo']">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="four_zero_four_bg h-[400px] bg-center bg-no-repeat"
              style={{
                backgroundImage: "url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)"
              }}
            >
              <motion.h1
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-8xl pt-20"
              >
                404
              </motion.h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="-mt-12"
            >
              <h3 className="text-5xl mb-4">Look like you're lost</h3>
              <p className="text-lg text-gray-600 mb-8">
                The page you are looking for is not available!
              </p>
              <Link
                to="/"
                className="inline-block px-8 py-4 bg-gradient-to-r from-gold to-gold/80 text-dark font-bold rounded-xl
                  transition-all duration-300 hover:from-gold/90 hover:to-gold/70 hover:shadow-lg hover:shadow-gold/30"
              >
                Go to Home
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NotFound;
