import { Event } from '../types/admin';
import { Inquiry } from '../types/inquiry';

const STORAGE_KEYS = {
  INQUIRIES: 'ai_solutions_inquiries',
  EVENTS: 'ai_solutions_events',
  GALLERY: 'ai_solutions_gallery',
  SERVICES: 'ai_solutions_services',
  ADMIN_PASSWORD: 'ai_solutions_admin_password',
};

// Inquiries
export const saveInquiry = (inquiry: Inquiry): void => {
  const inquiries = getInquiries();
  inquiries.push(inquiry);
  localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(inquiries));
};

export const getInquiries = (): Inquiry[] => {
  const stored = localStorage.getItem(STORAGE_KEYS.INQUIRIES);
  return stored ? JSON.parse(stored) : [];
};

export const updateInquiryStatus = (id: string, status: Inquiry['status']): void => {
  const inquiries = getInquiries();
  const index = inquiries.findIndex(inquiry => inquiry.id === id);
  if (index !== -1) {
    inquiries[index].status = status;
    localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(inquiries));
  }
};

export const deleteInquiry = (id: string): void => {
  const inquiries = getInquiries();
  const filtered = inquiries.filter(inquiry => inquiry.id !== id);
  localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(filtered));
};

// Events
export const saveEvent = (event: Event): void => {
  const events = getEvents();
  events.push(event);
  localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(events));
};

export const getEvents = (): Event[] => {
  const stored = localStorage.getItem(STORAGE_KEYS.EVENTS);
  return stored ? JSON.parse(stored) : [];
};

// Gallery
export const saveGalleryImage = (image: any): void => {
  const images = getGalleryImages();
  images.push(image);
  localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(images));
};

export const getGalleryImages = (): any[] => {
  const stored = localStorage.getItem(STORAGE_KEYS.GALLERY);
  return stored ? JSON.parse(stored) : [];
};

// Services
export const saveService = (service: any): void => {
  const services = getServices();
  services.push(service);
  localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(services));
};

export const getServices = (): any[] => {
  const stored = localStorage.getItem(STORAGE_KEYS.SERVICES);
  return stored ? JSON.parse(stored) : [];
};

// Admin Password
export const changeAdminPassword = (newPassword: string): void => {
  localStorage.setItem(STORAGE_KEYS.ADMIN_PASSWORD, newPassword);
};

export const getAdminPassword = (): string => {
  return localStorage.getItem(STORAGE_KEYS.ADMIN_PASSWORD) || 'admin123';
};