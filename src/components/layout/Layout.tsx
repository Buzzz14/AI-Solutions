import React from 'react';
import { Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../Navbar';
import Footer from './Footer';
import VirtualAssistant from '../contact/VirtualAssistant/VirtualAssistant';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main 
          className="flex-grow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <VirtualAssistant />
    </div>
  );
};

export default Layout;