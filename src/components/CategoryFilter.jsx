import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'web', label: 'Web Services' },
    { id: 'app', label: 'Applications' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'cloud', label: 'Cloud & Hosting' },
    { id: 'security', label: 'Cybersecurity' },
    { id: 'consulting', label: 'IT Consulting' },
    { id: 'enterprise', label: 'Enterprise' }
];

function CategoryFilter({ selectedCategory, setSelectedCategory }) {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleKeyDown = (e) => {
            const buttons = Array.from(container.querySelectorAll('button'));
            const currentIndex = buttons.findIndex(button => button === document.activeElement);

            switch (e.key) {
                case 'ArrowRight':
                case 'ArrowDown':
                    e.preventDefault();
                    const nextIndex = (currentIndex + 1) % buttons.length;
                    buttons[nextIndex].focus();
                    break;
                case 'ArrowLeft':
                case 'ArrowUp':
                    e.preventDefault();
                    const prevIndex = currentIndex <= 0 ? buttons.length - 1 : currentIndex - 1;
                    buttons[prevIndex].focus();
                    break;
                default:
                    break;
            }
        };

        container.addEventListener('keydown', handleKeyDown);
        return () => container.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <motion.div 
            ref={containerRef}
            className="category-filter"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            role="tablist"
            aria-label="Service categories"
        >
            {categories.map((category, index) => (
                <motion.button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`category-button ${
                        selectedCategory === category.id ? 'active' : ''
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.3,
                        delay: index * 0.1
                    }}
                    role="tab"
                    aria-selected={selectedCategory === category.id}
                    aria-controls={`${category.id}-panel`}
                    tabIndex={selectedCategory === category.id ? 0 : -1}
                >
                    {category.label}
                </motion.button>
            ))}
        </motion.div>
    );
}

export default CategoryFilter;
