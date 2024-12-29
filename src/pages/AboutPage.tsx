import React from 'react';
import { motion } from 'framer-motion';
import AboutHero from '../components/about/AboutHero';
import CompanyStats from '../components/about/CompanyStats';
import TeamSection from '../components/about/TeamSection';
import Timeline from '../components/about/Timeline';

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AboutHero />
      {/* <CompanyStats /> */}
      <TeamSection />
      {/* <Timeline /> */}
    </motion.div>
  );
};

export default AboutPage;