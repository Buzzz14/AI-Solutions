import React, { useState } from 'react';
import { motion } from 'framer-motion';
import EventCard from '../components/events/EventCard';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Event } from '../types/admin';

const EventsPage = () => {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all');
  const [events] = useLocalStorage<Event[]>('admin_events', []);

  const filteredEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    const isPast = eventDate < new Date();
    
    if (filter === 'upcoming') return !isPast;
    if (filter === 'past') return isPast;
    return true;
  });

  return (
    <div className="pt-16">
      <div className="bg-[#004aad]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Events
            </h1>
            <p className="mt-4 text-xl text-blue-100">
              Join us at our upcoming events or explore our past gatherings
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full ${
              filter === 'all'
                ? 'bg-[#004aad] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            All Events
          </button>
          <button
            onClick={() => setFilter('upcoming')}
            className={`px-4 py-2 rounded-full ${
              filter === 'upcoming'
                ? 'bg-[#004aad] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Upcoming Events
          </button>
          <button
            onClick={() => setFilter('past')}
            className={`px-4 py-2 rounded-full ${
              filter === 'past'
                ? 'bg-[#004aad] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Past Events
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              {...event}
              time={new Date(event.date).toLocaleTimeString()}
              isPast={new Date(event.date) < new Date()}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;