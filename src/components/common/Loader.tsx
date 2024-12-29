import React from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="relative">
        <motion.div
          className="w-16 h-16 border-4 border-blue-200 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ scale: [0.8, 1, 0.8] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Brain className="w-8 h-8 text-blue-400" />
        </motion.div>
      </div>
    </div>
  );
}

export default Loader;