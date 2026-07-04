
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        background: '#0F1014',
        surface: '#1A1B20',
        accent: '#ff0000',
        textMuted: '#8A8D93',
        border: '#2A2B30',
      },
    },
  },
  plugins: [],
};