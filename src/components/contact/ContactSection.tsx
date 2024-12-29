import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Get in Touch</h3>
            <div className="space-y-8">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-[#004aad] mt-1" />
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Location</h4>
                  <p className="text-gray-600">Sunderland, United Kingdom</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-[#004aad] mt-1" />
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Phone</h4>
                  <p className="text-gray-600">+44 (0) 123 456 7890</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-[#004aad] mt-1" />
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Email</h4>
                  <p className="text-gray-600">info@ai-solutions.com</p>
                </div>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d73421.23736840821!2d-1.4060823999999998!3d54.89566129999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487e612d8af0739f%3A0x749d6e7d017f03c3!2sSunderland%2C%20UK!5e0!3m2!1sen!2snp!4v1735177632248!5m2!1sen!2snp"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;