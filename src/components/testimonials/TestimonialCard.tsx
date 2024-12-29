import React from 'react';
import { motion } from 'framer-motion';
import { Rating } from '@mui/material';

interface TestimonialCardProps {
  name: string;
  role?: string;
  company: string;
  image: string;
  rating: number;
  testimonial: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  company,
  image,
  rating,
  testimonial,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg border shadow-xl p-6"
    >
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="font-semibold text-gray-900">{name}</h3>
          {role && (
            <p className="text-sm text-gray-600">
              {role} {company && `at ${company}`}
            </p>
          )}
          {!role && company && <p className="text-sm text-gray-600">{company}</p>}
        </div>
      </div>
      <div className="flex items-center mb-4">
        <Rating
          name="half-rating-read"
          defaultValue={rating}
          precision={0.1}
          readOnly
          className="text-[#fec104]"
        />
      </div>
      <p className="text-gray-600 italic">"{testimonial}"</p>
    </motion.div>
  );
};

export default TestimonialCard;