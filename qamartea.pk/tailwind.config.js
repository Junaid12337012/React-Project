/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#1E3A8A',          // A deeper, more professional blue
        secondaryIvory: '#FDFDFD',       // Slightly off-white for a softer feel
        lavenderMist: '#E0BBE4',         // A subtle lavender for highlights
        neutralSnow: '#F9FAFB',          // A very light gray for backgrounds
        neutralCloud: '#E5E7EB',         // A light gray for borders and lines
        neutralStone: '#9CA3AF',         // A medium gray for text
        accentSunset: '#FF5733',         // A vibrant coral for call-to-action elements
        accentAmber: '#FFC107',          // A warm gold for highlights
        accentMint: '#2ECC71',           // A refreshing green for success messages
      },
      keyframes: {
        rotate360: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        rotate360: 'rotate360 1s linear',
      },
    },
  },
  plugins: [],
};
