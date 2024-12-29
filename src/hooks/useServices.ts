import { useLocalStorage } from './useLocalStorage';
import { Service } from '../types/admin';

export function useServices() {
  const [services, setServices] = useLocalStorage<Service[]>('admin_services', []);

  const addService = (service: Omit<Service, 'id'>) => {
    const newService = {
      id: crypto.randomUUID(),
      ...service,
    };
    setServices([...services, newService]);
    return newService;
  };

  const updateService = (id: string, service: Partial<Service>) => {
    setServices(services.map(s => s.id === id ? { ...s, ...service } : s));
  };

  const deleteService = (id: string) => {
    setServices(services.filter(s => s.id !== id));
  };

  return {
    services,
    addService,
    updateService,
    deleteService,
  };
}