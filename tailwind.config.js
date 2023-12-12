/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html, js, ts, vue}", 
    "./src/**/*"
  ],
  theme: {
    extend: {
      colors: {
        "off-white": "#f5f5f5"
      }
    },
    fontFamily: {
      'kanit': ['Kanit'],
    },
  },
  plugins: [],
}
