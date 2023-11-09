/** @type {import('tailwindcss').Config} */

import { SCREENS } from './public/const/screens';

export const content = [
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
  screens: SCREENS,
  colors: {
    white: "#fff",
    red: "#FF5757",
    'btn-normal': "rgba(255, 255, 255, 0.1)",
    'btn-hover': "rgba(255, 255, 255, 0.2)",
    
  },

  extend: {

  }
};
export const plugins = [];
