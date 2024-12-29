import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Building2, Globe2 } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '500+',
    label: 'Clients Worldwide',
  },
  {
    icon: Award,
    value: '50+',
    label: 'Industry Awards',
  },
  {
    icon: Building2,
    value: '10+',
    label: 'Global Offices',
  },
  {
    icon: Globe2,
    value: '25+',
    label: 'Countries Served',
  },
];

const CompanyStats = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                <stat.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;