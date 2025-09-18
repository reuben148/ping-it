import React from 'react';

function StatsCards() {
  const stats = [
    {
      title: 'Total Contracts',
      value: '8',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Active',
      value: '6',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Paused',
      value: '2',
      bgColor: 'bg-yellow-50',
    },
    {
      title: 'Notifications Today',
      value: '24',
      bgColor: 'bg-purple-50',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            </div>
            <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
              <div className="w-6 h-6 bg-gray-400 rounded"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;