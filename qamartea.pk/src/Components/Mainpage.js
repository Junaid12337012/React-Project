// src/MainPage.js
import React from 'react';

const MainPage = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div className="bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: 'url("path-to-your-hero-image.jpg")' }}>
        <div className="text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold">Master Coach</h1>
          <p className="mt-4 text-sm md:text-base">After just one coaching session, you'll have an outlook of your life completely renewed and full of new possibilities.</p>
          <button className="mt-8 px-6 py-3 bg-green-500 text-white rounded">Schedule Now</button>
        </div>
      </div>

      {/* About Us Section */}
      <div className="py-16 px-4 md:px-8 bg-gray-100 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">About Us</h2>
        <p className="text-sm md:text-base">We are a renowned institute for providing qualified, certified, and experienced coaches in various fields. With us, you can be assured to get the certified and highly experienced coaches to help you navigate your personal and professional life.</p>
        <button className="mt-8 px-6 py-3 bg-green-500 text-white rounded">Learn More</button>
      </div>

      {/* Specializing In Section */}
      <div className="py-16 px-4 md:px-8 bg-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">We Specializing In</h2>
        <div className="flex flex-wrap justify-around">
          <div className="flex flex-col items-center mb-8 md:mb-0 md:w-1/3">
            <img src="path-to-icon-1.jpg" alt="Crisis Intervention" className="w-16 h-16 mb-4"/>
            <p className="text-sm md:text-base">Crisis Intervention</p>
          </div>
          <div className="flex flex-col items-center mb-8 md:mb-0 md:w-1/3">
            <img src="path-to-icon-2.jpg" alt="Addiction" className="w-16 h-16 mb-4"/>
            <p className="text-sm md:text-base">Addiction</p>
          </div>
          <div className="flex flex-col items-center md:w-1/3">
            <img src="path-to-icon-3.jpg" alt="Other Mental Health" className="w-16 h-16 mb-4"/>
            <p className="text-sm md:text-base">Other Mental Health</p>
          </div>
        </div>
      </div>

      {/* Our Services Section */}
      <div className="py-16 px-4 md:px-8 bg-gray-100 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white rounded shadow-md">
            <h3 className="text-lg md:text-xl font-bold mb-2">Master Life Coaching</h3>
            <p className="text-sm md:text-base">Life coaching to help you reach your personal goals.</p>
          </div>
          <div className="p-8 bg-white rounded shadow-md">
            <h3 className="text-lg md:text-xl font-bold mb-2">Psychometric Profiles</h3>
            <p className="text-sm md:text-base">Psychometric profiling to understand your personality.</p>
          </div>
          <div className="p-8 bg-white rounded shadow-md">
            <h3 className="text-lg md:text-xl font-bold mb-2">Relationship Coaching</h3>
            <p className="text-sm md:text-base">Coaching to help you build stronger relationships.</p>
          </div>
          <div className="p-8 bg-white rounded shadow-md">
            <h3 className="text-lg md:text-xl font-bold mb-2">Addiction Intervention & Recovery</h3>
            <p className="text-sm md:text-base">Helping you through addiction recovery.</p>
          </div>
          <div className="p-8 bg-white rounded shadow-md">
            <h3 className="text-lg md:text-xl font-bold mb-2">Career Coaching</h3>
            <p className="text-sm md:text-base">Guidance to help you advance your career.</p>
          </div>
          <div className="p-8 bg-white rounded shadow-md">
            <h3 className="text-lg md:text-xl font-bold mb-2">Resolving Conflict</h3>
            <p className="text-sm md:text-base">Helping you resolve conflicts effectively.</p>
          </div>
        </div>
      </div>

      {/* Corporate Clients Section */}
      <div className="py-16 px-4 md:px-8 bg-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Corporate Clients</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-gray-100 rounded shadow-md">
            <img src="path-to-client-1.jpg" alt="Client 1" className="w-full h-32 object-cover mb-4"/>
            <h3 className="text-lg md:text-xl font-bold mb-2">Employer Selection</h3>
            <p className="text-sm md:text-base">Helping employers select the right candidates.</p>
          </div>
          <div className="p-8 bg-gray-100 rounded shadow-md">
            <img src="path-to-client-2.jpg" alt="Client 2" className="w-full h-32 object-cover mb-4"/>
            <h3 className="text-lg md:text-xl font-bold mb-2">Training & Supporting</h3>
            <p className="text-sm md:text-base">Providing training and support to employees.</p>
          </div>
          <div className="p-8 bg-gray-100 rounded shadow-md">
            <img src="path-to-client-3.jpg" alt="Client 3" className="w-full h-32 object-cover mb-4"/>
            <h3 className="text-lg md:text-xl font-bold mb-2">Conflict Resolution</h3>
            <p className="text-sm md:text-base">Helping resolve conflicts in the workplace.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
