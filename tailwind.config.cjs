/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        roboto: ['Roboto Serif', 'serif']
      },
    },
    colors: {
      primaryDark: '#1A1A1A',
      primaryWhite: '#F8F8F8',
      primaryCoral: '#F17874'
    },
    fontSize: {
      textXS: '12px',
      textSM: '16px',
      textBASE: '',
      textLG: '',
      textXL: '',
      text2xl: ''
    },

  },
  plugins: [],
}
