/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        roboto: ['Roboto Serif', 'serif'],
        shadows: ['Shadows Into Light Two', 'cursive'],
      },
      colors: {
        primaryDark: '#191919',
        primaryWhite: '#F8F8F8',
        primaryCoral: '#F17874',
      },
      fontSize: {
        textXS: '12px',
        textSM: '16px',
        textBASE: '20px',
        textLG: '30px',
        textXL: '55px',
        text2xl: '75px',
        text3xl: '92px',
      },
      screens: {
        xxs: '400px',
        xs: '450px',
        smd: '880px',
      },
    },
  },
  plugins: [],
}
