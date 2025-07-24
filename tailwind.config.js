/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // or depende sa folder structure mo
    "./index.html"          // idagdag kung meron kang HTML file sa root
  ],
  theme: {
    extend: {
      colors: {
        f1red: '#e10600',
        f1black: '#14141E',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        titillium: ['Titillium Web', 'sans-serif'],
      },
    },
  },
  plugins: [],
};