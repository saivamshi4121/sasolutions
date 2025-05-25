import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Services.css';
import ServicePopup from '../components/ServicePopup';
import Carousel from '../components/ui/carousel';
import SEO from '../components/SEO';

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

const services = [
	{
		title: 'Social Media Marketing',
		category: 'marketing',
		icon: '📱',
		description: 'We develop and execute strategic social media plans that enhance brand visibility, engage target audiences, and drive meaningful growth. Our marketing approach is data-driven and results-oriented.',
		features: [
			'Strategic Planning',
			'Content Calendar Management',
			'Community Engagement',
			'Analytics & Reporting',
			'Platform Optimization'        ],
        image: socialMediaImg,
    },
    {
        title: 'Graphic Design & Branding',
        category: 'design',
		icon: '🎨',
		description: 'Our design team delivers high-quality visual branding solutions that reflect your business identity. From logo creation to full brand kits, we ensure a consistent and professional brand presence.',
		features: [
			'Logo Design',
			'Brand Identity Kits',
			'Visual Style Guides',
			'Marketing Collateral',
			'Brand Strategy'        ],
        image: graphicDesignImg,
    },
    {
        title: 'Content Strategy',
        category: 'content',
		icon: '📝',
		description: 'We specialize in designing impactful visual content and poster strategies aligned with your campaign goals. Each design is tailored to effectively communicate your message and attract audience attention.',
		features: [
			'Content Planning',
			'Visual Design',
			'Posting Schedule',
			'Engagement Strategy',
			'Performance Analysis'        ],
        image: contentDesignImg,
    },
    {
        title: 'Professional Video Editing',
        category: 'video',
		icon: '🎬',
		description: 'We offer end-to-end professional video editing services, delivering high-quality, engaging videos optimized for all platforms. Our team focuses on storytelling, clarity, and brand alignment.',
		features: [
			'Video Editing',
			'Motion Graphics',
			'Color Grading',
			'Sound Design',
			'Platform Optimization'        ],
        image: videoEditingImg,
    },
    {
        title: 'Website Development',
        category: 'web',
		icon: '🌐',
		description: 'Our web solutions combine elegant design with robust functionality. We build responsive, SEO-friendly websites tailored to meet your business objectives and enhance user experience.',
		features: [
			'Custom Web Design',
			'Responsive Development',
			'SEO Optimization',
			'Performance Tuning',
			'Maintenance & Support'        ],
        image: webDevImg,
    },
    {
        title: 'Digital Marketing',
        category: 'ads',
		icon: '📈',
		description: 'We manage comprehensive digital marketing campaigns, including search engine and social media advertising, aimed at maximizing reach, engagement, and return on investment.',
		features: [
			'Ad Campaign Management',
			'Performance Marketing',
			'ROI Optimization',
			'Audience Targeting',
			'Analytics & Reporting'        ],
        image: digitalMarketingImg,
    },
    {
        title: 'Cloud & Automation',
        category: 'cloud',
		icon: '☁️',
		description: 'Our cloud-based solutions and automation tools streamline operations, reduce manual workload, and enhance productivity. We help businesses scale efficiently through technology-driven processes.',
		features: [
			'Cloud Solutions',
			'Process Automation',
			'Workflow Optimization',
			'Integration Services',
			'Tech Support'        ],
        image: cloudServicesImg,
    },
    {
        title: 'Creator Collaboration',
        category: 'collab',
		icon: '🤝',
		description: 'We facilitate strategic collaborations and influencer partnerships to amplify your brand presence. Our network enables impactful connections that drive engagement and credibility.',
		features: [
			'Influencer Networking',
			'Partnership Strategy',
			'Campaign Planning',
			'Performance Tracking',
			'ROI Analysis'        ],
        image: collaborationImg,
    },
    {
        title: 'Creator Mentorship',
        category: 'mentor',
		icon: '🎯',
		description: 'Our mentorship programs are designed to support content creators in scaling their platforms. We offer expert guidance on brand growth, content strategy, and audience development.',
		features: [
			'Growth Strategy',
			'Platform Optimization',
			'Content Planning',
			'Brand Development',
			'Analytics Training'        ],
        image: guidanceImg,
    },
    {
        title: 'Thumbnail Design',
        category: 'thumbnail',
		icon: '🖼️',
		description: 'We create visually striking and professionally crafted thumbnails that significantly improve click-through rates and enhance the visual appeal of your digital content.',
		features: [
			'Custom Design',
			'CTR Optimization',
			'Brand Consistency',
			'A/B Testing',
			'Platform-specific Design'        ],
        image: thumbnailDesignImg,
    }
];

const ServiceCard = React.memo(({ service, index, isHovered, setHovered, onServiceClick }) => {
  const cardRef = useRef(null);
  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef();

  useEffect(() => {
    const animate = () => {
      if (!cardRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      cardRef.current.style.setProperty("--x", `${x}px`);
      cardRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event) => {
    const el = cardRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="service-focus-card group cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={() => setHovered(index)}
        onClick={() => onServiceClick(service)}
        style={{
          transform: isHovered !== null && isHovered !== index 
            ? 'scale(0.98) rotateX(8deg)' 
            : 'scale(1) rotateX(0deg)',
        }}
      >
        <div className="relative h-[380px] w-full overflow-hidden rounded-xl bg-dark/40">
          {/* Geometric Pattern Background */}
          <div className="absolute inset-0">
            <div 
              className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary/5 to-transparent opacity-60"
              style={{
                transform: isHovered === index
                  ? 'translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)'
                  : 'none',
              }}
            />
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative h-full p-6 flex flex-col justify-between">
            {/* Top Content */}
            <div className="space-y-4">
              <motion.div 
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 backdrop-blur-md flex items-center justify-center border border-accent/20 shadow-lg"
                animate={{
                  scale: isHovered === index ? 1.1 : 1,
                  y: isHovered === index ? -3 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-xl filter drop-shadow-lg">{service.icon}</span>
              </motion.div>

              <motion.h3 
                className="text-xl font-bold bg-gradient-to-r from-white via-accent to-primary bg-clip-text text-transparent"
                animate={{
                  y: isHovered === index ? -3 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                {service.title}
              </motion.h3>
              
              <motion.p 
                className="text-gray-300 text-sm line-clamp-3 leading-relaxed"
                animate={{
                  opacity: isHovered === index ? 1 : 0.7
                }}
                transition={{ duration: 0.3 }}
              >
                {service.description}
              </motion.p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <motion.div 
                className="space-y-1.5"
                animate={{
                  y: isHovered === index ? -5 : 0,
                  opacity: isHovered === index ? 1 : 0.7
                }}
                transition={{ duration: 0.3 }}
              >
                {service.features.slice(0, 3).map((feature, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center space-x-2 text-xs text-gray-300 feature-item transition-all duration-300"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    <span>{feature}</span>
                  </div>
                ))}
              </motion.div>

              {/* Know More Button */}
              <motion.button
                className="w-full py-2 rounded-lg bg-gradient-to-r from-accent/20 to-primary/20 border border-accent/20 text-sm text-white/90 hover:text-white transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Know Details
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
});

ServiceCard.displayName = "ServiceCard";

function Services() {
	const [hovered, setHovered] = useState(null);
	const [selectedCategory, setSelectedCategory] = useState('all');
	const [selectedService, setSelectedService] = useState(null);
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [activeView, setActiveView] = useState('carousel');
	
	useEffect(() => {
		// Simulate loading time for smooth transitions
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 800);
		
		return () => clearTimeout(timer);
	}, []);

	const filteredServices = selectedCategory === 'all' 
		? services 
		: services.filter(service => service.category === selectedCategory);

	const carouselSlides = filteredServices.map(service => ({
		title: service.title,
		description: service.description,
		features: service.features,
		image: service.image,
		category: service.category,
		icon: service.icon
	}));

  // Create JSON-LD schema for services
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Service",
        "position": 1,
        "name": "Social Media Marketing",
        "description": "Strategic social media planning and execution for enhanced brand visibility",
        "provider": {
          "@type": "Organization",
          "name": "SA Solutions"
        }
      },
      {
        "@type": "Service",
        "position": 2,
        "name": "Web Development",
        "description": "Custom web development solutions with modern technologies",
        "provider": {
          "@type": "Organization",
          "name": "SA Solutions"
        }
      },
      {
        "@type": "Service",
        "position": 3,
        "name": "Digital Marketing",
        "description": "Comprehensive digital marketing strategies for business growth",
        "provider": {
          "@type": "Organization",
          "name": "SA Solutions"
        }
      }
    ]
  };

	return (
		<>
			<SEO 
				title="Our Services - Digital Marketing & Web Development"
				description="Discover our comprehensive range of digital services including social media marketing, web development, content creation, and digital marketing solutions."
				keywords="digital marketing services, web development services, social media management, content creation, SEO services, digital solutions hyderabad"
				schema={schema}
			/>
			<div className="services-page">
				{/* Background Elements */}
				<div className="absolute inset-0">
					<div className="absolute inset-0 bg-[url('/src/assets/grid.jpg')] opacity-10" />
					<div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
				</div>

				<div className="relative">				{/* View Toggle Button */}
					<motion.div 
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5 }}
						className="fixed bottom-8 right-1/2 translate-x-1/2 z-30"
					>
						<div className="flex items-center gap-2 bg-white/5 backdrop-blur-md p-1.5 rounded-2xl border border-white/10 shadow-lg shadow-black/20">
							<motion.button
								onClick={() => setActiveView('carousel')}
								className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
									activeView === 'carousel'
										? 'bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] text-dark shadow-lg shadow-primary/20'
										: 'text-white/80 hover:text-white hover:bg-white/5'
								}`}
								whileHover={{ scale: 1.02, backgroundPosition: "100% 0" }}
								whileTap={{ scale: 0.98 }}
							>
								<span className="relative z-10">Carousel View</span>
							</motion.button>
							<motion.button
								onClick={() => setActiveView('grid')}
								className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
									activeView === 'grid'
										? 'bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] text-dark shadow-lg shadow-primary/20'
										: 'text-white/80 hover:text-white hover:bg-white/5'
								}`}
								whileHover={{ scale: 1.02, backgroundPosition: "100% 0" }}
								whileTap={{ scale: 0.98 }}
							>
								<span className="relative z-10">Grid View</span>
							</motion.button>
						</div>
					</motion.div>

					<AnimatePresence mode="wait">
						{activeView === 'carousel' ? (							<motion.div
									key="carousel"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									className="min-h-screen flex flex-col items-center justify-start"
								>
									{/* Title Section */}
									<motion.div 
										className="text-center mb-8 pt-10"
										initial={{ y: 20, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										transition={{ duration: 0.8 }}
									>
										<h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary mb-4">
											Our Services
										</h1>
										<motion.div
											className="w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-primary via-accent to-secondary"
											initial={{ scaleX: 0 }}
											animate={{ scaleX: 1 }}
											transition={{ duration: 0.8, delay: 0.3 }}
										/>
									</motion.div>

									{/* 3D Carousel */}
									<div className="flex-1 w-full">
										<Carousel slides={carouselSlides} />
									</div>
							</motion.div>
						) : (
							<motion.div
								key="grid"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
							>
								<div className="max-w-7xl mx-auto px-4 py-12 md:py-20">								<motion.div
										className="relative text-center mb-8 md:mb-16"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 1 }}
									>
										<motion.h1 
											className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary"
											initial={{ y: 20, opacity: 0 }}
											animate={{ y: 0, opacity: 1 }}
											transition={{ duration: 0.8 }}
										>
											Our Services
										</motion.h1>									<motion.div
											className="w-32 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-primary via-accent to-secondary"
											initial={{ scaleX: 0 }}
											animate={{ scaleX: 1 }}
											transition={{ duration: 0.8, delay: 0.3 }}
										/>
										</motion.div>

									{/* Category Filter */}
									<motion.div 
										className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-3 md:gap-4 mb-8 md:mb-12 overflow-x-auto px-1 py-2 md:py-0 mask-edges scrollbar-hide"
										animate={{ 
											opacity: isLoading ? 0 : 1, 
											y: isLoading ? 20 : 0 
										}}
										transition={{ duration: 0.5, delay: 0.2 }}
									>
										<motion.button
											onClick={() => setSelectedCategory('all')}
											className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full backdrop-blur-sm transition-all duration-300 whitespace-nowrap flex-shrink-0
												${selectedCategory === 'all' 
													? 'bg-gradient-to-r from-accent via-primary to-accent bg-[length:200%_100%] text-dark font-semibold shadow-lg shadow-accent/20' 
													: 'bg-black/20 text-white border border-white/10 hover:border-accent/30 hover:bg-black/30'}`}
											whileHover={{ scale: 1.05, backgroundPosition: "100% 0" }}
											whileTap={{ scale: 0.95 }}
										>
											All Services
										</motion.button>
										{['marketing', 'design', 'content', 'video', 'web', 'ads', 'cloud', 'collab', 'mentor', 'thumbnail'].map((category, index) => (
											<motion.button
												key={category}
												onClick={() => setSelectedCategory(category)}
												className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full backdrop-blur-sm transition-all duration-300 whitespace-nowrap flex-shrink-0
													${selectedCategory === category 
														? 'bg-gradient-to-r from-accent via-primary to-accent bg-[length:200%_100%] text-dark font-semibold shadow-lg shadow-accent/20' 
														: 'bg-black/20 text-white border border-white/10 hover:border-accent/30 hover:bg-black/30'}`}
												whileHover={{ scale: 1.05 }}
												whileTap={{ scale: 0.95 }}
												initial={{ opacity: 0, y: 20 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
											>
												{category.charAt(0).toUpperCase() + category.slice(1)}
											</motion.button>
										))}
									</motion.div>

									<motion.div 
										className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
										layout
										initial={false}
									>
										{isLoading ? (
											// Loading Skeleton
											[...Array(8)].map((_, index) => (
												<div 
													key={index}
													className="animate-pulse bg-white/5 rounded-xl h-[380px] backdrop-blur-sm"
												>
													<div className="h-48 bg-white/5 rounded-t-xl" />
													<div className="p-6 space-y-4">
														<div className="h-4 bg-white/5 rounded-full w-2/3" />
														<div className="h-3 bg-white/5 rounded-full w-full" />
														<div className="h-3 bg-white/5 rounded-full w-4/5" />
														<div className="mt-6 h-10 bg-white/5 rounded-lg" />
													</div>
												</div>
											))
										) : (
											filteredServices.map((service, index) => (
												<ServiceCard
													key={service.title}
													service={service}
													index={index}
													isHovered={hovered}
													setHovered={setHovered}
													onServiceClick={(service) => {
														setSelectedService(service);
														setIsPopupOpen(true);
													}}
												/>
											))
										)}
									</motion.div>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
				<ServicePopup 
					service={selectedService}
					isOpen={isPopupOpen}
					onClose={() => {
						setIsPopupOpen(false);
						setSelectedService(null);
					}}
				/>
			</div>
		</>
	);
}

export default Services;
