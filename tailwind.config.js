/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        opa: {
          "0%": { opacity: "0.5" },
          "100%": { opacity: "1" },
        },
        bganimation: {
          "10% ": { background: "#150026" },//dark purple
          "  40%": { background: "#040026" }, //dark blue
          "60%": { background: "#230026" }, //dark purple
          "  80%": { background: "#26001d" }, //dark red
          "100%": { background: "#00000 " }, //black
        },
      },
      backgroundImage: {},
      backgroundSize: {
        300: "300% 300%",
      },
      colors: {
        aliceblue: "#f0f8ff",
        primary: "#FFFFFF",
        secondary: "#150026",
      },

        screens: {
          '2sm': '572px',//618x801 75%
        'sm': '656px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',

      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-3': {
          textShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-red-500': {
          textShadow: '0 1px 3px rgba(255, 0, 0, 0.5)',
        },
        '.text-shadow-blue-500': {
          textShadow: '0 1px 3px rgba(0, 0, 255, 0.5)',
        },
      });
    },
  ],
};
