/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-beige': '#F7F6F2', // Main background
        'brand-dark-text': '#3A3A3A', // Main text
        'brand-brown': '#4F433A', // Darker elements, some text
        'brand-gold': '#D1A054', // Primary accent (buttons)
        'brand-green': '#7BA23F', // Secondary accent (buttons, highlights)
        'brand-light-green-bg': '#EAF2E3', // Background for process steps, etc.
        'brand-dark-green-bg': '#6A8D35', // Active process step, button hover
        'brand-light-gray': '#E9E9E9', // Borders, inactive elements
        'brand-footer-bg': '#3A3530', // Footer background
        'brand-gray-border': '#D1D5DB', // Input borders
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'montserrat': ['"Montserrat"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://www.aceitesreydonjaime.com/rs/bg_home_03.jpg')",
      },
      maxWidth: {
        '8xl': '90rem',
      }
    },
  },
  plugins: [],
}