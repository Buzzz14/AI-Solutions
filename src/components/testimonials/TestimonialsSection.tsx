import React from 'react';
import TestimonialCard from './TestimonialCard';

import David from "../../images/david.jpg"
import Michael from "../../images/michael.jpg"
import Sarah from "../../images/sarah.jpg"

const testimonials = [
  {
    name: 'David Wisseman',
    role: 'Owner',
    company: 'Warner Farm',
    image: David,
    rating: 4.8,
    testimonial: 'Turbo Farm has completely transformed the way we approach agriculture. With its AI-driven insights and automation, we’ve seen a significant boost in crop yields while reducing resource usage. The real-time monitoring system is a game-changer, allowing us to address issues before they become problems. Not only has it made our operations more efficient, but it’s also helped us embrace sustainable farming practices. Turbo Farm is truly the future of agriculture!',
  },
  {
    name: 'Michael Reed',
    role: 'Supply Chain Manager',
    company: 'Vaux Brewery',
    image: Michael,
    rating: 4.2,
    testimonial: 'Log AI has revolutionized our inventory management system. The AI-driven optimization has helped us maintain perfect stock levels, reducing both overstock and stockouts. The real-time tracking and predictive analytics have made our supply chain more efficient, and we’re now able to make data-driven decisions that save both time and money. The seamless integration with our existing systems was a huge plus. Log AI is a must-have for any business looking to streamline inventory operations and stay ahead of the competition!',
  },
  {
    name: 'Sarah Lampard',
    role: 'Independent Investor',
    company: '',
    image: Sarah,
    rating: 4.9,
    testimonial: 'As an investor, Stockk has completely changed the way I approach trading. The AI-powered insights and real-time market analysis have given me a huge advantage in making informed decisions. The automated trading feature has helped me execute trades at the right moments, even when I’m not able to monitor the market. Whether you’re a beginner or an experienced trader, Stockk simplifies the process while maximizing potential returns. It\'s an essential tool in my investment strategy!',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Customer Success Stories
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            See what our clients say about their experience with AI-Solutions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;