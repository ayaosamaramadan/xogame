/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
          },
      backgroundSize: {
        '300': '300% 300%',
      },
      colors: {
        aliceblue: '#f0f8ff',
        primary: '#FFFFFF',
    
      },
      
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    

    },
  },
  plugins: [
    require("@designbycode/tailwindcss-text-shadow"),
  ],
}