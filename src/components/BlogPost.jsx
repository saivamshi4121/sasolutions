import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { FiCalendar, FiClock, FiTag, FiArrowLeft } from 'react-icons/fi';
import { blogPosts } from '../data/blogPosts';

function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);
  const navigate = useNavigate();

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Post not found</h2>
          <p className="text-gray-400 mb-6">The blog post you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary/20 text-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
          >
            <FiArrowLeft />
            <span>Back to Blog</span>
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto"
    >
      {/* Header */}
      <header className="mb-8">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          {post.title}
        </motion.h1>

        {/* Meta information */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <FiCalendar className="text-primary" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <FiClock className="text-primary" />
            <span>{post.readTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <FiTag className="text-primary" />
            <div className="flex gap-2">
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative aspect-video mb-12 rounded-2xl overflow-hidden"
      >
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="prose prose-lg prose-invert prose-primary max-w-none"
      >
        <div className="text-gray-300 leading-relaxed whitespace-pre-line">
          {post.content}
        </div>
      </motion.div>

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-12 pt-8 border-t border-primary/10"
      >
        <button
          onClick={() => navigate('/blog')}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary/20 text-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
        >
          <FiArrowLeft />
          <span>Back to Blog</span>
        </button>
      </motion.div>
    </motion.article>
  );
};

export default BlogPost;
