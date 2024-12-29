import React, { useState } from 'react';
import { Plus, Calendar, Pencil, Trash2 } from 'lucide-react';
import EventForm from '../../components/admin/events/EventForm';
import { Event } from '../../types/admin';
import { motion } from 'framer-motion';
import { useLoader } from '../../contexts/LoaderContext';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import toast from 'react-hot-toast';

const EventsAdminPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [events, setEvents] = useLocalStorage<Event[]>('admin_events', []);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const { showLoader, hideLoader } = useLoader();

  const handleSubmit = async (data: Omit<Event, 'id'>) => {
    showLoader();
    try {
      if (editingEvent) {
        const updatedEvent = { ...editingEvent, ...data };
        setEvents(events.map(event => event.id === editingEvent.id ? updatedEvent : event));
        toast.success('Event updated successfully');
      } else {
        const newEvent = {
          id: crypto.randomUUID(),
          ...data,
        };
        setEvents([...events, newEvent]);
        toast.success('Event created successfully');
      }
      setShowForm(false);
      setEditingEvent(null);
    } catch (error) {
      toast.error('An error occurred');
    } finally {
      hideLoader();
    }
  };

  const handleEdit = (event: Event) => {
    setEditingEvent(event);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      showLoader();
      try {
        setEvents(events.filter(event => event.id !== id));
        toast.success('Event deleted successfully');
      } catch (error) {
        toast.error('An error occurred');
      } finally {
        hideLoader();
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Events Management</h1>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          <Plus className="h-5 w-5" />
          Add Event
        </button>
      </div>

      {showForm && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-lg shadow"
        >
          <EventForm event={editingEvent || undefined} onSubmit={handleSubmit} />
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            {event.image && (
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{event.description}</p>
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{new Date(event.date).toLocaleDateString()}</span>
              </div>
              <p className="text-sm text-gray-500">{event.location}</p>
              <div className="mt-4 flex justify-end gap-2">
                <button
                  onClick={() => handleEdit(event)}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
                >
                  <Pencil className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleDelete(event.id)}
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

export default EventsAdminPage;