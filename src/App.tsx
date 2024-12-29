import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { LoaderProvider } from './contexts/LoaderContext';
import { Toaster } from 'react-hot-toast';

// Layouts
import Layout from './components/layout/Layout';
import AdminLayout from './components/admin/AdminLayout';

// Public Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import EventsPage from './pages/EventsPage';

// Admin Pages
import LoginPage from './pages/admin/LoginPage';
import DashboardPage from './pages/admin/DashboardPage';
import InquiriesPage from './pages/admin/InquiriesPage';
import EventsAdminPage from './pages/admin/EventsAdminPage';
import BlogAdminPage from './pages/admin/BlogAdminPage';
import GalleryAdminPage from './pages/admin/GalleryAdminPage';
import ServicesAdminPage from './pages/admin/ServicesAdminPage';
import SettingsPage from './pages/admin/SettingsPage';

function App() {
  return (
    <AuthProvider>
      <LoaderProvider>
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="services" element={<ServicesPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="blog" element={<BlogPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="gallery" element={<GalleryPage />} />
              <Route path="events" element={<EventsPage />} />
            </Route>

            {/* Admin Routes */}
            <Route path="/admin/login" element={<LoginPage />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<DashboardPage />} />
              <Route path="inquiries" element={<InquiriesPage />} />
              <Route path="events" element={<EventsAdminPage />} />
              <Route path="blogs" element={<BlogAdminPage />} />
              <Route path="gallery" element={<GalleryAdminPage />} />
              <Route path="services" element={<ServicesAdminPage />} />
              <Route path="settings" element={<SettingsPage />} />
            </Route>
          </Routes>
          <Toaster position="top-right" />
        </Router>
      </LoaderProvider>
    </AuthProvider>
  );
}

export default App;