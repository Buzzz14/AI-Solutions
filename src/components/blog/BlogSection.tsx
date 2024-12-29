import React from 'react';
import BlogCard from './BlogCard';

const blogs = [
  {
    title: 'The Future of AI in the Workplace',
    excerpt: 'Discover how artificial intelligence is transforming the modern workplace and improving employee experiences.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
    date: 'March 15, 2024',
    author: 'Sarah Johnson',
  },
  {
    title: 'Implementing AI Solutions Successfully',
    excerpt: 'Key strategies for successfully integrating AI solutions into your business operations.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    date: 'March 10, 2024',
    author: 'Michael Chen',
  },
  {
    title: 'AI Security Best Practices',
    excerpt: 'Essential security considerations when implementing AI solutions in your organization.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    date: 'March 5, 2024',
    author: 'Emily Williams',
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 bg-gray-50" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Latest Insights</h2>
          <p className="mt-4 text-lg text-gray-600">
            Stay updated with the latest trends and insights in AI technology
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.title} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;