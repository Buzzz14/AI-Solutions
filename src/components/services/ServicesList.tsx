import React from 'react';
import ServiceCard from './ServiceCard';
import { Service } from '../../types/admin';

import { Bot, Code, Cpu, Database, LineChart, Shield } from 'lucide-react';

const iconMapping: Record<string, React.ComponentType> = {
  bot: Bot,
  code: Code,
  cpu: Cpu,
  database: Database,
  lineChart: LineChart,
  shield: Shield,
};

interface ServicesListProps {
  services: Service[];
}

const ServicesList: React.FC<ServicesListProps> = ({ services }) => {
  return (
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => {
        const Icon = iconMapping[service.icon] || Bot;
        return (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            icon={Icon}
          />
        );
      })}
    </div>
  );
};

export default ServicesList;