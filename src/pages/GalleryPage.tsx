import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GalleryImage from '../components/gallery/GalleryImage';
import { useGallery } from '../hooks/useGallery';

const categories = ['All', 'Events', 'Workshops', 'Team', 'Office'];

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { images } = useGallery();

  const filteredImages = selectedCategory === 'All'
    ? images
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="pt-16">
      <div className="bg-[#004aad]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Our Gallery
            </h1>
            <p className="mt-4 text-xl text-blue-100">
              Capturing moments of innovation and collaboration
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center space-x-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? 'bg-[#004aad] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredImages.map((image) => (
            <GalleryImage
              key={image.id}
              src={image.url}
              alt={image.alt}
              category={image.category}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default GalleryPage;