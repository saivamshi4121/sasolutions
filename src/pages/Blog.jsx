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
      {/* Tag filters */}
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
                ? 'bg-primary text-white'
                : 'bg-dark/40 text-gray-400 hover:bg-primary/20 hover:text-primary'
              }`}
          >
            {tag}
          </motion.button>
        ))}
      </motion.div>      {/* Blog grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
        {filteredPosts.map((post, index) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

// Main Blog component
function Blog() {
  return (
    <div className="blog-page">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Routes>
          <Route index element={
            <>
              {/* Header for blog list */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
              >
                <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary mb-4">
                  Blog & Insights
                </h1>
                <motion.div
                  className="w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-primary via-accent to-secondary"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
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
