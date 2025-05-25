import React from 'react';
import { motion } from 'framer-motion';

function TeamCard({ member }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="aspect-w-3 aspect-h-4 relative overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="absolute inset-x-0 bottom-0 p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex justify-center space-x-4">
            {member.socials?.map((social, index) => (
              <a
                key={index}
                href={social.link}
                className="bg-white/10 backdrop-blur-sm p-2 rounded-lg hover:bg-accent transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-white text-xl">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-dark mb-1 group-hover:text-primary transition-colors duration-300">
          {member.name}
        </h3>
        <p className="text-gray text-sm mb-4">{member.role}</p>
        <p className="text-gray/80 text-sm line-clamp-2">
          {member.bio}
        </p>
      </div>

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
    </motion.div>
  );
}

export default TeamCard;