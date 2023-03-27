/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {},
    colors: {
     "black": "#152223",
     "green": "#5ada2e",
     "green-secondary": "#B8F36F",
     "paleBlack": "#5A6364",
     "paleWhite": "#F4FFE7",
     "white": "#FFF",
     "paleGreen":"#B8F36F"
    },
    screens: {
      'sm': '340px',
      "sm2":"362px",
      // => @media (min-width: 640px) { ... }

      'md': '780px',
      // => @media (min-width: 768px) { ... }

      'lg': '1110px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1440px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
