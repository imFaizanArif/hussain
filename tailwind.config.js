import { warn } from 'console';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
      colors: {
        "primary": "#172b4d",
        "gold": "#c6a36b",
        "grid-purple": {
          "50": '#f3f0ff',
          "100": '#ebe7fe',
          "200": '#dfd8fd',
          "250": '#b8acf6',
          "300": '#9a81d0',
          "400": '#9f8fef',
          "500": '#8270db',
          "600": '#352c63',
        },
      },
      backgroundImage: {
        'hero': "url('/assets/hero.png')",
      }
    },
  },
  plugins: [],
}