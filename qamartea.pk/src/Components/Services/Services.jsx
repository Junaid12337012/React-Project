// src/components/Services.jsx
import React from 'react';

import {
  FaChartBar,
  FaCogs,
  FaDollarSign,
  FaLightbulb,
  FaTasks,
  FaUsers,
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      title: 'Sales',
      description: 'Last 24 Hours',
      amount: '$3,200',
      icon: <FaChartBar className="text-primaryBlue text-3xl" />,
      color: 'bg-lavenderMist',
    },
    {
      title: 'Users',
      description: 'Last 24 Hours',
      amount: '1,200',
      icon: <FaUsers className="text-accentMint text-3xl" />,
      color: 'bg-neutralSnow',
    },
    {
      title: 'Revenue',
      description: 'Last 24 Hours',
      amount: '$15,000',
      icon: <FaDollarSign className="text-accentAmber text-3xl" />,
      color: 'bg-neutralCloud',
    },
    {
      title: 'Tasks',
      description: 'Pending',
      amount: '12',
      icon: <FaTasks className="text-accentSunset text-3xl" />,
      color: 'bg-neutralSnow',
    },
    {
      title: 'Settings',
      description: 'System Configuration',
      amount: 'Active',
      icon: <FaCogs className="text-primaryBlue text-3xl" />,
      color: 'bg-lavenderMist',
    },
    {
      title: 'Ideas',
      description: 'New Suggestions',
      amount: '45',
      icon: <FaLightbulb className="text-accentMint text-3xl" />,
      color: 'bg-neutralCloud',
    },
  ];

  return (
    <div className="p-4 bg-neutralSnow min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div key={index} className={`shadow-lg rounded-lg p-6 transition duration-300 transform hover:-translate-y-1 hover:shadow-2xl ${service.color}`}>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{service.title}</h2>
                <p className="text-neutralStone">{service.description}</p>
              </div>
              {service.icon}
            </div>
            <p className="text-3xl font-semibold text-gray-800 mt-4">{service.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
