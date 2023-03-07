/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'orange-gradient': 'linear-gradient(to right, #FF6A76, #FFC37B)'
      },
      colors: {
        'orange-light': '#FFC37B',
        'orange-dark': '#FF6A76'
      }
    }
  },
  plugins: []
}
