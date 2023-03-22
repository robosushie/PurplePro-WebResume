/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      black: '#000000',
      white: '#ffffff',
      'sd-black': '#181616',
      'sd-white': '#f2f2f2',
      'sd-yellow': '#ffdb86',
      'sd-purple': '#a78fff',
      'sd-background': '#061327',
      'sd-background-dark': '#141822',
      transparent: '#00000000'
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    },
    extend: {}
  },
  plugins: []
};
