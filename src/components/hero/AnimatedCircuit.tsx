import React from 'react';
import { motion } from 'framer-motion';

const AnimatedCircuit = () => {
  return (
    <div className="absolute inset-0">
      {/* Circuit lines */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`circuit-${i}`}
          className="absolute h-px bg-gradient-to-r from-blue-400/20 via-blue-400/40 to-transparent"
          style={{
            top: `${(i + 1) * 12}%`,
            left: '0',
            width: '40%',
            transform: `rotate(${i % 2 ? 25 : -25}deg)`,
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scaleX: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedCircuit;