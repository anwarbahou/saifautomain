import React from 'react';
import { Car, Users, Calendar, DollarSign } from 'lucide-react';

const stats = [
  {
    title: 'Total Cars',
    value: '24',
    icon: Car,
    color: 'bg-blue-500',
  },
  {
    title: 'Active Bookings',
    value: '12',
    icon: Calendar,
    color: 'bg-green-500',
  },
  {
    title: 'Total Customers',
    value: '156',
    icon: Users,
    color: 'bg-purple-500',
  },
  {
    title: 'Revenue',
    value: '$12,450',
    icon: DollarSign,
    color: 'bg-yellow-500',
  },
];

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{stat.title}</p>
                <p className="text-2xl font-semibold mt-1">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-full`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Bookings</h2>
          <div className="space-y-4">
            {/* Add recent bookings list here */}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Popular Cars</h2>
          <div className="space-y-4">
            {/* Add popular cars list here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 