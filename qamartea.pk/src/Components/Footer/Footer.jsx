import React from 'react';

import {
  FaFacebookF,
  FaGlobe,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='flex flex-col pt-3 items-center justify-center mx-4 md:mx-10 gap-6 md:gap-3 lg:gap-6'>
      <div className='w-full flex flex-col items-center'>
        <hr className='w-full mb-4'/>
      </div>
      <div className='flex flex-col lg:flex-row w-full lg:justify-between lg:items-start p-4'>
        <div className='flex justify-center lg:justify-start mb-4 lg:mb-0'>
        <Link>
        <h3 className='transform transition-all duration-300 hover:text-accentSunset hover:scale-105'>TheDEV</h3>
        </Link>
        </div>
        <div className='flex flex-col lg:flex-row lg:justify-between w-full'>
          <div className='mb-4 lg:mb-0 lg:mr-8'>
            <ul>
              <h2 className='font-bold text-lg mb-2 '>Account</h2>
              <li ><a href='#' className='no-underline text-black'>Account</a></li>
              <li><a href='#' className='no-underline text-black'>Order History</a></li>
              <li><a href='#' className='no-underline text-black'>Notification Settings</a></li>
              <li><a href='#' className='no-underline text-black'>Wishlist</a></li>
            </ul>
          </div>
          <div className='hidden lg:block mb-4 lg:mb-0 lg:mr-8'>
            <ul>
              <h2 className='font-bold text-lg mb-2'>Assistance</h2>
              <li><a href='#' className='no-underline text-black'>Support Center</a></li>
              <li><a href='#' className='no-underline text-black'>Wholesaler Information</a></li>
              <li><a href='#' className='no-underline text-black'>Return Policy</a></li>
              <li><a href='#' className='no-underline text-black'>Cancellation Policy</a></li>
              <li><a href='#' className='no-underline text-black'>Replacement Policy</a></li>
              <li><a href='#' className='no-underline text-black'>Accessibility Policy</a></li>
              <li><a href='#' className='no-underline text-black'>Terms & Conditions</a></li>
              <li><a href='#' className='no-underline text-black'>Privacy Policy</a></li>
              <li><a href='#' className='no-underline text-black'>California Notice</a></li>
              <li><a href='#' className='no-underline text-black'>Your Privacy Choices</a></li>
            </ul>
          </div>
          <div className='hidden md:block lg:block mb-4 lg:mb-0 lg:mr-8'>
            <ul>
              <h2 className='font-bold text-lg mb-2'>About Loungefly</h2>
              <li><a href='#' className='no-underline text-black'>About Us</a></li>
              <li><a href='#' className='no-underline text-black'>Hapidot</a></li>
              <li><a href='#' className='no-underline text-black'>Blog</a></li>
              <li><a href='#' className='no-underline text-black'>Career</a></li>
              <li><a href='#' className='no-underline text-black'>Store Locator</a></li>
            </ul>
          </div>
          <div>
            <ul>
              <h2 className='font-bold text-lg mb-2'>Connect with Us</h2>
              <li><a href='#' className='no-underline text-black'>Facebook</a></li>
              <li><a href='#' className='no-underline text-black'>Instagram</a></li>
              <li><a href='#' className='no-underline text-black'>Twitter</a></li>
              <li><a href='#' className='no-underline text-black'>LinkedIn</a></li>
              <li><a href='#' className='no-underline text-black'>TikTok</a></li>
              <li><a href='#' className='no-underline text-black'>Pinterest</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='flex flex-wrap justify-center gap-4 mb-4'>
          <a href="https://facebook.com" className='hover:text-[#1877F2]' aria-label="Facebook">
            <FaFacebookF size={24} />
          </a>
          <a href='https://twitter.com'  className='hover:text-[#1DA1F2]' aria-label="Twitter">
            <FaTwitter size={24} />
          </a>
          <a href='https://instagram.com' className='hover:text-[#F58529]' aria-label="Instagram">
            <FaInstagram size={24}  />
          </a>
          <a href='https://linkedin.com'  className='hover:text-[#0077B5]' aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </a>
          <a href='https://youtube.com'  className='hover:text-[#FF0000]' aria-label="YouTube">
            <FaYoutube size={24} />
          </a>
        </div>
      <hr className='w-full mb-4'/>
      <div className='flex items-center pb-4 justify-center'>
        &copy; {new Date().getFullYear()} JUNAID . All rights reserved. <FaGlobe size={24} /> <span> Pakistan</span>
      </div>
    </div>
  );
}

export default Footer;
