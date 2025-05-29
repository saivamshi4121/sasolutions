import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import BlogCard from '../components/BlogCard';
import BlogPost from '../components/BlogPost';
import { blogPosts } from '../data/blogPosts';
import '../styles/Blog.css';

// BlogList component
function BlogList() {
  const [selectedTag, setSelectedTag] = useState('all');
  
  const allTags = ['all', ...new Set(blogPosts.flatMap(post => post.tags))];
  const filteredPosts = selectedTag === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.tags.includes(selectedTag));

  return (
    <div className="space-y-12">
      {/* Tag filters */}      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-bold mb-8 text-center"
      >
        Our{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
          Blog
        </span>
      </motion.h1>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-wrap gap-3"
      >
        {allTags.map((tag, index) => (
          <motion.button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className={`px-4 py-2 rounded-full transition-all duration-300
              ${selectedTag === tag
                ? 'bg-gradient-to-r from-accent via-primary to-accent bg-[length:200%_100%] text-dark font-semibold'
                : 'bg-dark/40 text-gray-300 hover:border-accent/30 hover:text-accent border border-white/10'
              }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tag}
          </motion.button>
        ))}
      </motion.div>      {/* Blog grid */}      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {filteredPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <BlogCard post={post} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Main Blog component
function Blog() {
  return (
    <div className="min-h-screen bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/src/assets/grid.jpg')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <Routes>
          <Route index element={
            <>
              {/* Header for blog list */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-4xl mx-auto mb-16"
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block px-6 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-8"
                >
                  Our Blog
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-5xl md:text-7xl font-bold mb-8"
                >
                  Latest{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
                    Insights
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl text-gray-300 leading-relaxed"
                >
                  Explore our latest thoughts, ideas, and insights about the digital world
                </motion.p>
              </motion.div>
              <BlogList />
            </>
          } />
          <Route path=":slug" element={<BlogPost />} />
        </Routes>
      </div>
    </div>
  );
}

export default Blog;
