import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const analyticsData = [
  { date: 'Mon', visitors: 2400, interactions: 1800 },
  { date: 'Tue', visitors: 3200, interactions: 2400 },
  { date: 'Wed', visitors: 2800, interactions: 2100 },
  { date: 'Thu', visitors: 3600, interactions: 2800 },
  { date: 'Fri', visitors: 4000, interactions: 3200 },
  { date: 'Sat', visitors: 3400, interactions: 2600 },
  { date: 'Sun', visitors: 3800, interactions: 3000 },
];

const AnalyticsOverview = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Analytics Overview</h2>
        <select className="text-sm border-gray-300 rounded-md">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 3 months</option>
        </select>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-blue-600 mb-1">Total Visitors</p>
          <p className="text-2xl font-bold text-blue-900">23,200</p>
          <p className="text-xs text-blue-600">↑ 12% from last week</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-sm text-green-600 mb-1">Avg. Session Duration</p>
          <p className="text-2xl font-bold text-green-900">4m 32s</p>
          <p className="text-xs text-green-600">↑ 8% from last week</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <p className="text-sm text-purple-600 mb-1">Conversion Rate</p>
          <p className="text-2xl font-bold text-purple-900">3.2%</p>
          <p className="text-xs text-purple-600">↑ 2% from last week</p>
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={analyticsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="visitors" stroke="#3B82F6" strokeWidth={2} />
            <Line type="monotone" dataKey="interactions" stroke="#10B981" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnalyticsOverview;