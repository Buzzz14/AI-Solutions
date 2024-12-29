import React, { useState } from 'react';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Service } from '../../types/admin';
import { useServices } from '../../hooks/useServices';
import ServiceForm from '../../components/admin/services/ServiceForm';
import toast from 'react-hot-toast';

const ServicesAdminPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const { services, addService, updateService, deleteService } = useServices();

  const handleSubmit = (data: Omit<Service, 'id'>) => {
    const updatedData = {
      ...data,
      icon: data.icon, 
    };
    
    try {
      if (editingService) {
        updateService(editingService.id, updatedData);
        toast.success('Service updated successfully');
      } else {
        addService(updatedData);
        toast.success('Service added successfully');
      }
      setShowForm(false);
      setEditingService(null);
    } catch (error) {
      toast.error('An error occurred');
    }
  };

  const handleEdit = (service: Service) => {
    setEditingService(service);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      try {
        deleteService(id);
        toast.success('Service deleted successfully');
      } catch (error) {
        toast.error('An error occurred');
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Services Management</h1>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          <Plus className="h-5 w-5" />
          Add Service
        </button>
      </div>

      {showForm && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-lg shadow"
        >
          <ServiceForm
            service={editingService || undefined}
            onSubmit={handleSubmit}
            onCancel={() => {
              setShowForm(false);
              setEditingService(null);
            }}
          />
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-6 rounded-lg shadow"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{service.description}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(service)}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
                >
                  <Pencil className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleDelete(service.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-full"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesAdminPage;