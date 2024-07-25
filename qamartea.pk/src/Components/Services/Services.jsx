import React from 'react';

import {
  FaChartBar,
  FaDollarSign,
  FaTasks,
  FaUsers,
} from 'react-icons/fa';

const Services = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow-lg rounded-lg p-6 transition duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Sales</h2>
              <p className="text-gray-600">Last 24 Hours</p>
            </div>
            <FaChartBar className="text-blue-500 text-3xl" />
          </div>
          <p className="text-3xl font-semibold text-gray-800 mt-4">$3,200</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 transition duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Users</h2>
              <p className="text-gray-600">Last 24 Hours</p>
            </div>
            <FaUsers className="text-green-500 text-3xl" />
          </div>
          <p className="text-3xl font-semibold text-gray-800 mt-4">1,200</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 transition duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Revenue</h2>
              <p className="text-gray-600">Last 24 Hours</p>
            </div>
            <FaDollarSign className="text-yellow-500 text-3xl" />
          </div>
          <p className="text-3xl font-semibold text-gray-800 mt-4">$15,000</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 transition duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Tasks</h2>
              <p className="text-gray-600">Pending</p>
            </div>
            <FaTasks className="text-red-500 text-3xl" />
          </div>
          <p className="text-3xl font-semibold text-gray-800 mt-4">12</p>
        </div>
        {/* Add more cards as needed */}
      </div>
    </div>
  );
};

export default Services;
