import './Navbar.css';

import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border rounded-xl m-2 p-2 shadow-lg transition-all duration-300 ease-in-out">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-2xl font-bold">
          <a href="#">Brand</a>
        </div>
        <div className="block md:hidden">
          <button
            onClick={toggleMenu}
            className={`text-black flex flex-col focus:outline-none transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-90' : ''}`}
            aria-expanded={isOpen}
            aria-controls="navbar-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        {/* Mobile menu */}
        <div id="navbar-menu" className={`block ${isOpen ? 'block' : 'hidden'} md:hidden lg:hidden transition-all duration-300 ease-in-out`}>
          <div className="flex flex-col space-y-2">
            <a href="#" className="block text-black hover:bg-yellow-700 px-3 py-2 rounded transition-colors duration-300">Home</a>
            <a href="#" className="block text-black hover:bg-yellow-700 px-3 py-2 rounded transition-colors duration-300">About</a>
            <a href="#" className="block text-black hover:bg-yellow-700 px-3 py-2 rounded transition-colors duration-300">Services</a>
            <a href="#" className="block text-black hover:bg-yellow-700 px-3 py-2 rounded transition-colors duration-300">Contact</a>
          </div>
        </div>
        {/* Tablet menu */}
        <div className="hidden md:block lg:hidden">
          <div className="flex space-x-4">
            <a href="#" className="text-black hover:bg-yellow-700 px-3 py-2 rounded transition-colors duration-300">Home</a>
            <a href="#" className="text-black hover:bg-yellow-700 px-3 py-2 rounded transition-colors duration-300">About</a>
            <a href="#" className="text-black hover:bg-yellow-700 px-3 py-2 rounded transition-colors duration-300">Services</a>
            <a href="#" className="text-black hover:bg-yellow-700 px-3 py-2 rounded transition-colors duration-300">Contact</a>
          </div>
        </div>
        {/* Desktop menu */}
        <div className="hidden lg:block">
          <div className="flex space-x-4">
            <a href="#" className="text-black hover:bg-yellow-700 px-3 py-2 rounded transition-colors duration-300">Home</a>
            <a href="#" className="text-black hover:bg-yellow-700 px-3 py-2 rounded transition-colors duration-300">About</a>
            <a href="#" className="text-black hover:bg-yellow-700 px-3 py-2 rounded transition-colors duration-300">Services</a>
            <a href="#" className="text-black hover:bg-yellow-700 px-3 py-2 rounded transition-colors duration-300">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
