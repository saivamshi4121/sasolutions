import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';
import WorkCard from '../components/WorkCard';
import '../styles/Works.css';

// Import service images
import socialMediaImg from '../assets/social media .jpg';
import graphicDesignImg from '../assets/graphic designing.jpg';
import contentDesignImg from '../assets/content design.jpg';
import videoEditingImg from '../assets/video editing.jpg';
import webDevImg from '../assets/webdev.jpg';
import digitalMarketingImg from '../assets/digital marketing.jpg';
import cloudServicesImg from '../assets/cloud services.jpg';
import collaborationImg from '../assets/collabration opportunites.jpg';
import guidanceImg from '../assets/growth guidance.jpg';
import thumbnailDesignImg from '../assets/thumbnail design.jpg';

function Works() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with seamless payment integration and intuitive user experience",
      category: "Web Development",
      image: webDevImg,
      features: [
        "Next.js & Tailwind CSS",
        "Stripe Integration",
        "Real-time Analytics"
      ],
      link: "#"
    },
    {
      title: "Social Media Campaign",
      description: "Comprehensive social media strategy and execution that drove 300% increase in engagement",
      category: "Digital Marketing",
      image: socialMediaImg,
      features: [
        "Multi-platform Strategy",
        "Content Calendar",
        "Performance Analytics"
      ],
      link: "#"
    },
    {
      title: "Brand Redesign",
      description: "Complete brand identity refresh for a tech startup that transformed their market presence",
      category: "Branding",
      image: graphicDesignImg,
      features: [
        "Visual Identity",
        "Brand Guidelines",
        "Marketing Collateral"
      ],
      link: "#"
    },
    {
      title: "Content Strategy Campaign",
      description: "Strategic content planning and creation that increased user engagement and brand visibility",
      category: "Content",
      image: contentDesignImg,
      features: [
        "Content Planning",
        "Brand Storytelling",
        "Engagement Metrics"
      ],
      link: "#"
    },
    {
      title: "Video Production Suite",
      description: "Professional video editing and production services for a major YouTube channel",
      category: "Video Production",
      image: videoEditingImg,
      features: [
        "Video Editing",
        "Motion Graphics",
        "Content Optimization"
      ],
      link: "#"
    },
    {
      title: "Digital Marketing Campaign",
      description: "Full-scale digital marketing campaign that achieved 250% ROI for an e-commerce client",
      category: "Marketing",
      image: digitalMarketingImg,
      features: [
        "PPC Campaigns",
        "Social Media Marketing",
        "Analytics & Reporting"
      ],
      link: "#"
    },
    {
      title: "Cloud Migration Project",
      description: "Successfully migrated enterprise infrastructure to cloud, improving scalability and reducing costs",
      category: "Cloud Services",
      image: cloudServicesImg,
      features: [
        "Cloud Architecture",
        "Data Migration",
        "Performance Optimization"
      ],
      link: "#"
    },
    {
      title: "Creator Collaboration Platform",
      description: "Developed and executed a successful creator collaboration program for a lifestyle brand",
      category: "Collaboration",
      image: collaborationImg,
      features: [
        "Partnership Strategy",
        "Content Creation",
        "Campaign Management"
      ],
      link: "#"
    },
    {
      title: "Growth Mentorship Program",
      description: "Comprehensive mentorship program that helped creators achieve significant platform growth",
      category: "Mentorship",
      image: guidanceImg,
      features: [
        "Growth Strategy",
        "Platform Optimization",
        "Performance Analysis"
      ],
      link: "#"
    }
  ];

  const categories = ['all', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  // Create JSON-LD schema for portfolio
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "SA Solutions Portfolio",
    "description": "Explore our portfolio of successful digital marketing and web development projects",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": projects.map((project, index) => ({
        "@type": "CreativeWork",
        "position": index + 1,
        "name": project.title,
        "description": project.description,
        "creator": {
          "@type": "Organization",
          "name": "SA Solutions"
        }
      }))
    }
  };

  return (
    <>
      <SEO 
        title="Our Work - Digital Marketing & Development Portfolio"
        description="Explore our portfolio of successful projects in web development, digital marketing, and brand building. See how we've helped businesses achieve their digital goals."
        keywords="digital marketing portfolio, web development projects, case studies, client work, digital agency portfolio, SA Solutions projects"
        schema={schema}
      />
      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <motion.section 
          className="relative py-20 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent opacity-30" />
          
          {/* Animated background elements */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          </motion.div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-secondary">
                Works
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Explore our portfolio of successful projects and creative solutions
            </motion.p>
          </div>
        </motion.section>

        {/* Category Filters */}
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="category-filters"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className={`category-filter ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="works-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <WorkCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Works;
