import React from 'react';
import { Service } from '../../../types/admin';

interface ServiceFormProps {
  service?: Service;
  onSubmit: (data: Omit<Service, 'id'>) => void;
  onCancel: () => void;
}

const ServiceForm: React.FC<ServiceFormProps> = ({ service, onSubmit, onCancel }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit({
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      icon: formData.get('icon') as string,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          name="title"
          defaultValue={service?.title}
          required
          className="mt-1 block w-full rounded-md border border-gray-50 p-2 shadow outline-none"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          name="description"
          defaultValue={service?.description}
          required
          rows={4}
          className="mt-1 block w-full rounded-md border border-gray-50 p-2 shadow outline-none"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Icon</label>
        <select
          name="icon"
          defaultValue={service?.icon}
          required
          className="mt-1 block w-full rounded-md border border-gray-50 p-2 shadow outline-none"
        >
          <option value="brain">Brain</option>
          <option value="code">Code</option>
          <option value="database">Database</option>
          <option value="cpu">CPU</option>
          <option value="shield">Shield</option>
        </select>
      </div>
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          {service ? 'Update Service' : 'Add Service'}
        </button>
      </div>
    </form>
  );
};

export default ServiceForm;