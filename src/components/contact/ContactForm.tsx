import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { saveInquiry } from '../../utils/storage';
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    company: '',
    jobTitle: '',
    jobDetails: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const inquiry = {
      id: uuidv4(),
      ...formData,
      status: 'new' as const,
      createdAt: new Date().toISOString(),
    };

    saveInquiry(inquiry);
    toast.success('Message sent successfully!');
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      country: '',
      company: '',
      jobTitle: '',
      jobDetails: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow-lg p-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-50 p-2 shadow outline-none"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email *
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-50 p-2 shadow outline-none"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-50 p-2 shadow outline-none"
          />
        </div>

        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">
            Country *
          </label>
          <input
            type="text"
            name="country"
            id="country"
            required
            value={formData.country}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-50 p-2 shadow outline-none"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">
            Company
          </label>
          <input
            type="text"
            name="company"
            id="company"
            value={formData.company}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-50 p-2 shadow outline-none"
          />
        </div>

        <div>
          <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">
            Job Title *
          </label>
          <input
            type="text"
            name="jobTitle"
            id="jobTitle"
            required
            value={formData.jobTitle}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-50 p-2 shadow outline-none"
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="jobDetails" className="block text-sm font-medium text-gray-700">
            Job Details
          </label>
          <textarea
            name="jobDetails"
            id="jobDetails"
            rows={2}
            value={formData.jobDetails}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-50 p-2 shadow outline-none"
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message *
          </label>
          <textarea
            name="message"
            id="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-50 p-2 shadow outline-none"
          />
        </div>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#004aad] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Send className="h-5 w-5 mr-2" />
          Send Message
        </button>
      </div>
    </motion.form>
  );
};

export default ContactForm;