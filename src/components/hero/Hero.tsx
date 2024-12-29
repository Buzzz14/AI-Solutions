import React from 'react';
import AnimatedBackground from './AnimatedBackground';
import HeroContent from './HeroContent';
import bgImage from '../../images/bg.jpg';


const Hero = () => {
  return (
    <div className="relative min-h-screen pt-20 overflow-hidden" 
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <AnimatedBackground />
      <div className="relative z-10">
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;

// bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900

