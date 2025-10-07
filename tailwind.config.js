/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // ⚡ active le dark mode basé sur la classe
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}", // Vite scanne tous tes fichiers React
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  