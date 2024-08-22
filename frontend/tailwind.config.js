/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'md': '700px',
      'lg': '1125px',
      'xl': '1400px',
      '2xl': '1600px',
      'xlg': '1800px',
    }
  },
  plugins: [],
}

