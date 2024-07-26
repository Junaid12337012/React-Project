import React, { useState } from 'react';

import {
  AnimatePresence,
  motion,
} from 'framer-motion';
import {
  Link,
  NavLink,
} from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" m-1 p-2 shadow-md transition-all duration-300 ease-in-out">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold flex items-center space-x-2">
          <Link to="">
            <div className='transform transition-all duration-300 hover:text-accentSunset hover:scale-105 flex items-center'>
              <svg className="w-8 h-8 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
              </svg>
              <h3>TheDEV</h3>
            </div>
          </Link>
        </div>
        <div className="block md:hidden">
          <button
            onClick={toggleMenu}
            className={`text-black flex flex-col focus:outline-none transition-transform duration-500 ease-in-out ${isOpen ? 'rotate-180' : ''}`}
            aria-expanded={isOpen}
            aria-controls="navbar-menu"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        {/* Mobile menu */}
        <div id="navbar-menu" className={`w-auto ${isOpen ? `block` : 'hidden'} flex md:hidden lg:hidden transition-all duration-300 ease-in-out`}>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3 }}
                className="w-auto flex md:hidden lg:hidden transition-all duration-300 ease-in-out"
              >
                <div className="flex flex-col space-y-2">
                  <ul>
                    <li>
                      <NavLink to='/' className="block bg-primaryBlue px-3 py-2 rounded text-white no-underline transform transition-all duration-300 hover:bg-accentSunset hover:scale-105 shadow-md">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to='/services' className="block bg-primaryBlue px-3 py-2 rounded text-white no-underline transform transition-all duration-300 hover:bg-accentSunset hover:scale-105 shadow-md">Services</NavLink>
                    </li>
                    <li>
                      <NavLink to='/about' className="block bg-primaryBlue px-3 py-2 rounded text-white no-underline transform transition-all duration-300 hover:bg-accentSunset hover:scale-105 shadow-md">About</NavLink>
                    </li>
                    <li>
                      <NavLink to='/contact' className="block bg-primaryBlue px-3 py-2 rounded text-white no-underline transform transition-all duration-300 hover:bg-accentSunset hover:scale-105 shadow-md">Contact</NavLink>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* Tablet menu */}
        <div className="hidden md:block lg:hidden">
          <div className="flex space-x-4">
            <NavLink to='' className="bg-primaryBlue px-3 py-2 rounded text-white no-underline transform transition-all duration-300 hover:bg-accentSunset hover:scale-105 shadow-md">Home</NavLink>
            <NavLink to='/services' className="bg-primaryBlue px-3 py-2 rounded text-white no-underline transform transition-all duration-300 hover:bg-accentSunset hover:scale-105 shadow-md">Services</NavLink>
            <NavLink to='/about' className="bg-primaryBlue px-3 py-2 rounded text-white no-underline transform transition-all duration-300 hover:bg-accentSunset hover:scale-105 shadow-md">About</NavLink>
            <NavLink to='/contact' className="bg-primaryBlue px-3 py-2 rounded text-white no-underline transform transition-all duration-300 hover:bg-accentSunset hover:scale-105 shadow-md">Contact</NavLink>
          </div>
        </div>
        {/* Desktop menu */}
        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          <NavLink to='' className="bg-primaryBlue px-3 py-2 rounded text-white no-underline transform transition-all duration-300 hover:bg-accentSunset hover:scale-105 shadow-md">Home</NavLink>
          <NavLink to='/services' className="bg-primaryBlue px-3 py-2 rounded text-white no-underline transform transition-all duration-300 hover:bg-accentSunset hover:scale-105 shadow-md">Services</NavLink>
          <NavLink to='About' className="bg-primaryBlue px-3 py-2 rounded text-white no-underline transform transition-all duration-300 hover:bg-accentSunset hover:scale-105 shadow-md">About</NavLink>
          <NavLink to='Contact' className="bg-primaryBlue px-3 py-2 rounded text-white no-underline transform transition-all duration-300 hover:bg-accentSunset hover:scale-105 shadow-md">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
