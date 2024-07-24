/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryPeach: '#FFE9D0',
        primaryYellow: '#FFFED3',
        secondaryBlue: '#BBE9FF',
        secondaryLavender: '#B1AFFF',
        neutralWhite: '#FFFFFF',
        neutralLightGrey: '#F8F9FA',
        neutralGrey: '#D1D5DB',
        accentCoral: '#FFA07A',
        accentGold: '#FFD700',
        accentGreen: '#98FB98',
      },
    },
  },
  plugins: [],
}

