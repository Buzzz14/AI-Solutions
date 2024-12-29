import React from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Calendar,
  FileText,
  MessageSquare,
  Clock,
} from 'lucide-react';
import AnalyticsOverview from '../../components/admin/dashboard/AnalyticsOverview';

const DashboardPage = () => {
  const stats = [
    { label: 'Total Inquiries', value: '156', icon: MessageSquare, color: 'bg-blue-600' },
    { label: 'New Messages', value: '12', icon: Users, color: 'bg-green-500' },
    { label: 'Upcoming Events', value: '8', icon: Calendar, color: 'bg-purple-500' },
    { label: 'Blog Posts', value: '24', icon: FileText, color: 'bg-yellow-500' },
  ];

  const recentActivity = [
    { type: 'inquiry', title: 'New contact inquiry from John Doe', time: '5 minutes ago' },
    { type: 'event', title: 'AI Workshop event created', time: '2 hours ago' },
    { type: 'post', title: 'New blog post published', time: '4 hours ago' },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-center">
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnalyticsOverview />

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-gray-400 mt-1" />
                <div>
                  <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;