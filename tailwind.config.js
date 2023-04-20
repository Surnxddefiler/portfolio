/**@type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#090a0f',
        secondary: 'rgb(5,8,22)',
        third: '#1d1836',
        form: 'rgba(0, 0, 0, 0.34)'
      },
      fontSize:{
        '3xl': '3rem',
        '2.5xl': '2.2rem'
      },
      margin:{
        'minus': '-50px'
      },
      width:{
        'large': '40rem',
        'px': '96px'
      }
    },
  },
  plugins: [],
}

