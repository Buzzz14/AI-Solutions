import React from 'react';
import { motion } from 'framer-motion';
import TeamMember from './TeamMember';
import Charlotte from '../../images/charlotte.jpg'
import James from '../../images/james.jpg'
import Sophie from '../../images/sophie.jpg'
import Oliver from '../../images/oliver.jpg'

const team = [
  {
    name: 'Charlotte Green',
    role: 'CEO & Founder',
    bio: 'With over 15 years in AI and machine learning, Charlotte leads our vision for transforming workplaces through innovative technology.',
    image: Charlotte,
    social: {
      linkedin: '#',
      twitter: '#',
      email: '#',
    },
  },
  {
    name: 'James Whitaker',
    role: 'CTO',
    bio: 'A pioneer in AI development with expertise in creating scalable solutions that drive business transformation.',
    image: James,
    social: {
      linkedin: '#',
      twitter: '#',
      email: '#',
    },
  },
  {
    name: 'Sophie Middleton',
    role: 'Head of AI Research',
    bio: 'Leading our research initiatives in advanced AI applications and ensuring we stay at the forefront of innovation.',
    image: Sophie,
    social: {
      linkedin: '#',
      twitter: '#',
      email: '#',
    },
  },
  {
    name: 'Oliver Bennett',
    role: 'Head of Client Success',
    bio: 'Dedicated to ensuring our clients achieve their digital transformation goals through our AI solutions.',
    image: Oliver,
    social: {
      linkedin: '#',
      twitter: '#',
      email: '#',
    },
  },
];

const TeamSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Leadership Team</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the experts driving innovation and excellence at AI-Solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <TeamMember
              key={member.name}
              {...member}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;