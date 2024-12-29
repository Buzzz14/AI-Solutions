import React from 'react';
import { motion } from 'framer-motion';
import BlogCard from '../components/blog/BlogCard';
import { useBlogPosts } from '../hooks/useBlogPosts';

const BlogPage = () => {
  const { posts } = useBlogPosts();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="pt-16 bg-[#004aad]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Blog & Insights
            </h1>
            <p className="mt-4 text-xl text-blue-100">
              Latest updates and insights from AI-Solutions
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
export default BlogPage;