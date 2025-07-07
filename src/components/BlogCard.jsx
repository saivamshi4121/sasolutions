import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiExternalLink } from 'react-icons/fi';

function BlogCard({ post }) {
  const isExternalLink = post.bloggerUrl && post.bloggerUrl.length > 0;
  const cardRef = useRef(null);
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    // Update mouse position CSS variables
    cardRef.current.style.setProperty('--mouse-x', `${x}%`);
    cardRef.current.style.setProperty('--mouse-y', `${y}%`);
    
    // Calculate tilt effect (subtle 3D rotation)
    const rotateY = ((x - 50) / 50) * 5; // Max 5 degrees
    const rotateX = -((y - 50) / 50) * 5; // Max 5 degrees
    
    cardRef.current.style.transform = `
      perspective(1000px) 
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg)
      translateZ(0)
    `;
  };

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="blog-card"
      onMouseMove={handleMouseMove}
    >
      {/* Accent cards for animation */}
      <div className="blog-card__accents">
        <div className="blog-card__accent"></div>
        <div className="blog-card__accent"></div>
        <div className="blog-card__accent"></div>
      </div>

      {/* Background lighting effects */}
      <div className="blog-card__lighting">
        <div className="blog-card__light-blob"></div>
        <div className="blog-card__gradient-overlay"></div>
      </div>

      {/* Main image */}
      <img 
        src={post.coverImage} 
        alt={post.title}
        className="blog-card__image"
      />
      
      {/* Content */}
      <div className="blog-card__content">
        <div className="flex flex-wrap gap-2 mb-3">          {post.tags.map((tag, index) => (
            <span 
              key={index}
              className="blog-card__tag"
            >
              {tag}
            </span>
          ))}
        </div>

        <h2 className="blog-card__title">{post.title}</h2>
        <p className="blog-card__excerpt">{post.excerpt}</p>

        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>
        
        {isExternalLink ? (
          <a
            href={post.bloggerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="blog-card__button"
          >
            <span className="flex items-center justify-center gap-2">
              <FiExternalLink className="w-5 h-5" />
              <span>Read on Blogger</span>
            </span>
          </a>
        ) : (
          <Link
            to={`/blog/${post.slug}`}
            className="blog-card__button"
          >
            Read More
          </Link>
        )}
      </div>
    </motion.article>
  );
}

export default BlogCard;
