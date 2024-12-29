import React from 'react';
import { motion } from 'framer-motion';

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, image, date, author }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-6">
        <div className="text-sm text-gray-500 mb-2">{date} • By {author}</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{excerpt}</p>
        <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
          Read More →
        </button>
      </div>
    </motion.article>
  );
};

export default BlogCard;