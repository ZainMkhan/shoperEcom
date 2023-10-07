/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs' : {
        'min': '270px',
        'max': '450px'
      },

      'ipad' : {
      'min' : '450px',
      'max' : '850px'
    }

    }


  },
  plugins: [],
}