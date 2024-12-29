import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Globe } from 'lucide-react';

const AboutHero = () => {
  return (
    <div className="relative bg-[#004aad] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            About Us
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
            Based in Sunderland, we're pioneering the future of workplace innovation 
            through cutting-edge artificial intelligence solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              icon: Target,
              title: 'Our Mission',
              description: 'To innovate and deliver the future of digital employee experience through accessible AI technology.',
            },
            {
              icon: Globe,
              title: 'Our Vision',
              description: 'To be the global leader in AI-powered workplace solutions, creating positive impact worldwide.',
            },
            {
              icon: Users,
              title: 'Our Values',
              description: 'Innovation, integrity, and excellence in everything we do to serve our clients better.',
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center px-4"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
                <item.icon className="h-8 w-8 text-blue-100" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
              <p className="text-blue-100">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutHero;