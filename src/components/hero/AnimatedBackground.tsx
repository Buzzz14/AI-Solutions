import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Neural network grid */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-blue-400/0 via-blue-400/20 to-blue-400/0"
            style={{
              top: `${(i + 1) * 5}%`,
              left: '-20%',
              right: '-20%',
              transform: `rotate(${i % 2 ? 1 : -1}deg)`,
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              translateX: ['-20px', '20px', '-20px'],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Floating particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
          style={{
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
            x: [
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
            ],
            y: [
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
            ],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Glowing orbs */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle, rgba(96, 165, 250, 0.15) 0%, rgba(96, 165, 250, 0) 70%)`,
            width: '40rem',
            height: '40rem',
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
        />
      ))}

      {/* Circuit paths */}
      <div className="absolute inset-0">
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

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 via-transparent to-transparent" />
    </div>
  );
};

export default AnimatedBackground;