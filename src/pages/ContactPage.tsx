import React from 'react';
import { motion } from 'framer-motion';
import ContactSection from '../components/contact/ContactSection';

const ContactPage = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="pt-16 bg-[#004aad]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white sm:text-5xl">
                Contact Us
              </h1>
              <p className="mt-4 text-xl text-blue-100">
                Get in touch with our team to discuss how we can help transform your business
              </p>
            </div>
          </div>
        </div>
        <ContactSection />
      </motion.div>
    </div>
  );
};

export default ContactPage;
