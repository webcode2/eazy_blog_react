/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/***/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
   
    extend: {
      colors: {
        secondary: '#ecc94b',
        error: '#CB191D',
        success: '#28a745',
        warning: '#ffc107',
        info: '#17a2b8',
        
        
        // ...
      },
    },
  },
  plugins: [],
}

