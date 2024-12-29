import React from 'react';
import { Bot, Code, Cpu, Database, LineChart, Shield } from 'lucide-react';
import ServicesList from './ServicesList';
import { useServices } from '../../hooks/useServices';

const ServicesSection = () => {
  const { services } = useServices();
  
  const defaultServices = [
    {
      id: 'default-1',
      icon: Bot,
      title: 'AI Virtual Assistant',
      description: 'Smart chatbot solutions for 24/7 customer support and employee assistance.',
    },
    {
      id: 'default-2',
      icon: Code,
      title: 'Rapid Prototyping',
      description: 'Quick development and testing of AI-powered software solutions.',
    },
    {
      id: 'default-3',
      icon: Cpu,
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for process automation and decision making.',
    },
  ];

  const displayServices = services.length > 0 ? services : defaultServices;

  return (
    <section className="pb-20 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServicesList services={displayServices} />
      </div>
    </section>
  );
};

export default ServicesSection;