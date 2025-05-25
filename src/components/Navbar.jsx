import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, ServicesIcon, AboutIcon, ContactIcon } from './icons';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { to: "/", icon: HomeIcon, label: "Home" },
    { to: "/services", icon: ServicesIcon, label: "Services" },
    { to: "/works", icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ), label: "Works" },
    { to: "/blog", icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    ), label: "Blog" },
    { to: "/about", icon: AboutIcon, label: "About" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled ? 'bg-dark/95 backdrop-blur-lg shadow-lg shadow-primary/5' : 'bg-dark/80 backdrop-blur-md'
    } border-b border-primary/10`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center hover:opacity-80 transition-all duration-300 transform hover:scale-105"
            >
              <img 
                src={require('../assets/navbar logo.png')} 
                alt="SA Solutions Logo"
                className="h-10 w-auto animate-logo"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-1">
            <div className="bg-white/5 backdrop-blur-sm rounded-full p-1.5 border border-white/10">
              {navItems.map((item) => {
                const isActive = location.pathname === item.to || 
                               (item.to !== "/" && location.pathname.startsWith(item.to));
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`group relative inline-flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                      isActive 
                        ? 'bg-primary/20 text-primary shadow-primary/20' 
                        : 'text-gray hover:bg-primary/10 hover:text-primary hover:shadow-primary/10'
                    }`}
                  >
                    <div className="transition-transform duration-300 group-hover:scale-110">
                      <item.icon />
                    </div>
                    <span className="absolute -bottom-10 scale-0 rounded-lg bg-dark/95 backdrop-blur-sm px-3 py-1.5 text-xs text-gray transition-all group-hover:scale-100 border border-primary/10 shadow-xl">
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>
            <Link 
              to="/contact" 
              className="ml-6 flex items-center gap-2 bg-accent hover:bg-secondary text-dark px-6 py-2.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/20 group"
            >
              <span className="transition-transform duration-300 group-hover:scale-110">
                <ContactIcon />
              </span>
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                Contact Us
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-2 hover:bg-primary/10 transition-colors duration-200"
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex flex-col justify-center items-center w-6 h-6 space-y-1.5 cursor-pointer">
                <motion.span
                  animate={{
                    rotate: isOpen ? 45 : 0,
                    y: isOpen ? 8 : 0,
                  }}
                  className="w-6 h-0.5 bg-primary rounded-full origin-center transition-all duration-300"
                />
                <motion.span
                  animate={{
                    opacity: isOpen ? 0 : 1,
                    x: isOpen ? -20 : 0,
                  }}
                  className="w-6 h-0.5 bg-primary rounded-full transition-all duration-300"
                />
                <motion.span
                  animate={{
                    rotate: isOpen ? -45 : 0,
                    y: isOpen ? -8 : 0,
                  }}
                  className="w-6 h-0.5 bg-primary rounded-full origin-center transition-all duration-300"
                />
              </div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden fixed inset-x-0 top-16 bg-dark/95 backdrop-blur-lg border-b border-primary/10"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-7xl mx-auto px-4 py-4 space-y-2"
            >
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.to || 
                               (item.to !== "/" && location.pathname.startsWith(item.to));
                return (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.to}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                        isActive 
                          ? 'bg-primary/20 text-primary' 
                          : 'text-gray hover:bg-primary/10 hover:text-primary'
                      }`}
                    >
                      <item.icon />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="pt-2"
              >
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 bg-accent hover:bg-secondary text-dark px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  <ContactIcon />
                  <span>Contact Us</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;