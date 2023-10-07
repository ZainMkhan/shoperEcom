/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs' : {'max': '376px'},
      'xr' : {'max' : '414px'}
    }
  },
  plugins: [],
}