import './Navbar.css';

import React, { useState } from 'react';

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
        <nav className="bg-secondaryIvory m-1 p-2 shadow-sm transition-all duration-300 ease-in-out">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-black text-2xl font-bold">
                    <Link to="/">
                        <h3 className='transform transition-all duration-300 hover:text-accentSunset hover:scale-105'>logo</h3>
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
                <div id="navbar-menu" className={`w-auto ${isOpen ? 'block' : 'hidden'} flex md:hidden lg:hidden transition-all duration-300 ease-in-out`}>
                    <div className="flex flex-col space-y-2">
                        <ul>
                            <li>
                                <NavLink to='/home' className="block text-black hover:bg-yellow-700 px-3 py-2 rounded transition-all duration-300 ease-in-out">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/about' className="block text-black hover:bg-yellow-700 px-3 py-2 rounded transition-all duration-300 ease-in-out">About</NavLink>
                            </li>
                            <li>
                                <NavLink to='/services' className="block text-black hover:bg-yellow-700 px-3 py-2 rounded transition-all duration-300 ease-in-out">Services</NavLink>
                            </li>
                            <li>
                                <NavLink to='/contact' className="block text-black hover:bg-yellow-700 px-3 py-2 rounded transition-all duration-300 ease-in-out">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Tablet menu */}
                <div className="hidden md:block lg:hidden">
                    <div className="flex space-x-4">
                        <NavLink to='/home' className="transition ease-in-out delay-150 hover:bg-yellow-700 px-3 py-2 rounded text-black">Home</NavLink>
                        <NavLink to='/about' className="transition ease-in-out delay-150 hover:bg-yellow-700 px-3 py-2 rounded text-black">About</NavLink>
                        <NavLink to='/services' className="transition ease-in-out delay-150 hover:bg-yellow-700 px-3 py-2 rounded text-black">Services</NavLink>
                        <NavLink to='/contact' className="transition ease-in-out delay-150 hover:bg-yellow-700 px-3 py-2 rounded text-black">Contact</NavLink>
                    </div>
                </div>
                {/* Desktop menu */}
                <div className="hidden lg:block">
                    <div className="flex space-x-4">
                        <NavLink to='/home' className="bg-primaryBlue px-3 py-2 rounded text-white no-underline transform transition-all duration-300 hover:bg-accentSunset hover:scale-105">Home</NavLink>
                        <NavLink to='/about' className="bg-primaryBlue px-3 py-2 rounded text-white no-underline transform transition-all duration-300 hover:bg-accentSunset hover:scale-105">About</NavLink>
                        <NavLink to='/services' className="bg-primaryBlue px-3 py-2 rounded text-white no-underline transform transition-all duration-300 hover:bg-accentSunset hover:scale-105">Services</NavLink>
                        <NavLink to='/contact' className="bg-primaryBlue px-3 py-2 rounded text-white no-underline transform transition-all duration-300 hover:bg-accentSunset hover:scale-105">Contact</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );  
};

export default Navbar;
