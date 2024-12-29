import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Calendar,
  Image,
  MessageSquare,
  Settings,
  FileText,
  Brain
} from 'lucide-react';

import logo from "../../images/AI-Solutions.png"
import { useAuth } from '../../contexts/AuthContext';
import { LogOut } from 'lucide-react';


const AdminSidebar = () => {
  const location = useLocation();
  const { user, logout } = useAuth();

  const menuItems = [
    { path: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/admin/inquiries', icon: MessageSquare, label: 'Inquiries' },
    { path: '/admin/events', icon: Calendar, label: 'Events' },
    { path: '/admin/blogs', icon: FileText, label: 'Blog Posts' },
    { path: '/admin/gallery', icon: Image, label: 'Gallery' },
    { path: '/admin/services', icon: Brain, label: 'Services' },
    { path: '/admin/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <aside className="w-64 bg-gray-50 min-h-screen">
      <div className="pt-12">
        <Link to="/" className="flex justify-center items-center">
          <img src={logo} className="h-12 w-12" />
        </Link>
      </div>
      <nav className="mt-8">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center space-x-2 px-8 py-2 text-sm font-medium ${location.pathname === item.path
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={logout}
              className="px-8 pt-6 text-gray-600 hover:text-[#004aad]"
            >
              <LogOut className="h-6 w-6" />
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;