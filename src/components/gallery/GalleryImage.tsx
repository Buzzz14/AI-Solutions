import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface GalleryImageProps {
  src: string;
  alt: string;
  category: string;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt, category }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden rounded-lg cursor-pointer group"
        onClick={() => setIsOpen(true)}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-sm font-medium">{category}</p>
            <p className="text-xs opacity-80">{alt}</p>
          </div>
        </div>
      </motion.div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <div className="relative max-w-4xl max-h-[90vh]">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={src}
              alt={alt}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <div className="mt-4 text-white">
              <p className="text-lg font-medium">{category}</p>
              <p className="text-sm opacity-80">{alt}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryImage;