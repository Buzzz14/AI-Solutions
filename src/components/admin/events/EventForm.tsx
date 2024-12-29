import React from 'react';
import { Event } from '../../../types/admin';

interface EventFormProps {
  event?: Event;
  onSubmit: (data: Omit<Event, 'id'>) => void;
}

const EventForm: React.FC<EventFormProps> = ({ event, onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit({
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      date: (formData.get('date') as string),
      location: formData.get('location') as string,
      image: formData.get('image') as string,
      time: formData.get('time') as string,
      isPast: new Date(formData.get('date') as string) < new Date(),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          name="title"
          defaultValue={event?.title}
          required
          className="mt-1 block w-full rounded-md border border-gray-50 p-2 shadow outline-none"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          name="description"
          defaultValue={event?.description}
          required
          rows={4}
          className="mt-1 block w-full rounded-md border border-gray-50 p-2 shadow outline-none"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="datetime-local"
            name="date"
            defaultValue={event?.date}
            required
            className="mt-1 block w-full rounded-md border border-gray-50 p-2 shadow outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            defaultValue={event?.location}
            required
            className="mt-1 block w-full rounded-md border border-gray-50 p-2 shadow outline-none"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Image URL</label>
        <input
          type="url"
          name="image"
          defaultValue={event?.image}
          className="mt-1 block w-full rounded-md border border-gray-50 p-2 shadow outline-none"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        {event ? 'Update Event' : 'Create Event'}
      </button>
    </form>
  );
};

export default EventForm;