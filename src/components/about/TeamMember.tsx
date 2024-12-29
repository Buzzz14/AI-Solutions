import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin: string;
    twitter: string;
    email: string;
  };
  delay?: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  bio,
  image,
  social,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative group">
        <img
          className="w-full h-64 object-cover"
          src={image}
          alt={name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <p className="text-blue-600 mb-4">{role}</p>
        <p className="text-gray-600 text-sm mb-4">{bio}</p>
        <div className="flex space-x-4">
          <a
            href={social.linkedin}
            className="text-gray-400 hover:text-blue-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={social.twitter}
            className="text-gray-400 hover:text-blue-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${social.email}`}
            className="text-gray-400 hover:text-blue-600 transition-colors"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMember;