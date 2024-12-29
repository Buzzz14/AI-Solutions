import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  {
    year: '2018',
    title: 'Company Founded',
    description: 'AI-Solutions was established with a vision to transform workplace experiences through AI.',
  },
  {
    year: '2019',
    title: 'First Major Client',
    description: 'Secured our first enterprise client and launched our flagship AI assistant platform.',
  },
  {
    year: '2020',
    title: 'Global Expansion',
    description: 'Opened offices in multiple countries and grew our team to over 100 employees.',
  },
  {
    year: '2021',
    title: 'Innovation Award',
    description: 'Received industry recognition for our innovative AI solutions and impact.',
  },
  {
    year: '2022',
    title: 'Research Center',
    description: 'Established our AI Research Center focusing on next-generation workplace solutions.',
  },
  {
    year: '2023',
    title: 'Strategic Partnerships',
    description: 'Formed key partnerships with leading technology providers and research institutions.',
  },
];

const Timeline = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Journey</h2>
          <p className="mt-4 text-lg text-gray-600">
            Milestones that have shaped our growth and success
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row-reverse' : ''
                }`}>
                  <div className="flex-1" />
                  <div className="flex-1 flex justify-center">
                    <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow" />
                  </div>
                  <div className={`flex-1 ${
                    index % 2 === 0 ? 'text-right pr-8' : 'pl-8'
                  }`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <span className="text-blue-600 font-bold">{milestone.year}</span>
                      <h3 className="text-lg font-semibold text-gray-900 mt-1">
                        {milestone.title}
                      </h3>
                      <p className="mt-2 text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;