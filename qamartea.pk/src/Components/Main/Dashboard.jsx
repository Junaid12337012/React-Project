// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://source.unsplash.com/random/1920x1080')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto px-4 h-full flex items-center justify-center">
        <div className="text-center text-neutralSnow animate-fadeInUp">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fadeIn text-primaryBlue">Welcome to Our Amazing Website</h1>
          <p className="mt-4 text-lg md:text-2xl animate-fadeInDelay text-neutralStone">We create stunning digital experiences that will take your breath away</p>
          <button className="mt-8 px-8 py-3 bg-accentSunset hover:bg-accentAmber text-white font-semibold rounded-lg animate-bounce">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
