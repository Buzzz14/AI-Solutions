import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, CircuitBoard } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroContent = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10"
      >

        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
          <span className="block">Transform Your Business</span>
          <span className="block bg-gradient-to-r from-[#004aad] via-[#89d1e1] to-[#fec104] text-transparent bg-clip-text">
            with AI-Powered Solutions
          </span>
        </h1>

        <p className="mt-3 max-w-md mx-auto text-xl text-blue-100 sm:text-2xl md:mt-5 md:max-w-3xl">
          Empowering digital employee experiences through innovative AI technology.
          Discover how we can revolutionize your workplace efficiency.
        </p>
        <div className="mt-10 flex justify-center gap-x-6">
          <Link
            to="/contact"
            className="rounded-full bg-[#fec104] px-8 py-4 text-lg font-semibold text-gray-800 shadow-lg hover:bg-[#f8b600] transition-colors duration-300"
          >
            Get Started
          </Link>
          <Link
            to="/about"
            className="rounded-full bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-white hover:bg-white/20 transition-colors duration-300"
          >
            Learn More
          </Link>
        </div>
      </motion.div>

      <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
        {[
          {
            icon: Brain,
            title: 'AI-Powered Assistant',
            description: 'Intelligent virtual assistance for immediate support',
            color: 'from-blue-600 to-blue-400',
          },
          {
            icon: CircuitBoard,
            title: 'Smart Solutions',
            description: 'Innovative approaches to workplace challenges',
            color: 'from-purple-600 to-purple-400',
          },
          {
            icon: Sparkles,
            title: 'Rapid Prototyping',
            description: 'Quick development and deployment of solutions',
            color: 'from-pink-600 to-pink-400',
          },
        ].map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
            className="relative bg-white/5 backdrop-blur-lg rounded-xl p-8 hover:bg-white/10 transition-colors duration-300"
          >
            <div className="absolute -top-4 left-4">
              <div className={`p-3 rounded-lg bg-gradient-to-r ${feature.color}`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white">{feature.title}</h3>
            <p className="mt-2 text-blue-100">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HeroContent;