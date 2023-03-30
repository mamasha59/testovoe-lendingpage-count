/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      inter: ['Inter', 'sans-serif',],
    },
    fontSize: {
      sm: ['12px', '15px'],
      lg:  ['16px', '19px'],
      xlg: ['18px', '22px']
    },
    extend: {
      backgroundImage: {
        'text-gradient': "linear-gradient(92deg, #FCB045 27.14%, #FF3F78 121.36%)",
        'header-ball-gradient': "radial-gradient(64% 64% at 27.25% 26.5%, rgba(255, 208, 208, 0.536) 0%, rgba(212, 93, 93, 0.264) 59.67%, rgba(167, 49, 49, 0.248) 78.59%, rgba(130, 25, 25, 0.248) 100%)",
        'header-ball-purple': "radial-gradient(64% 64% at 27.25% 26.5%, rgba(236, 208, 255, 0.64) 0%, rgba(161, 93, 207, 0.24) 59.67%, rgba(118, 49, 164, 0.208) 78.59%, rgba(86, 24, 128, 0.232) 100%)",
        'noise':  "url('./sources/noise.svg')"
      },
      boxShadow: {
        '3xl': ' 3px 6px 27px -10px rgba(223, 125, 125, 0.25);',
      }
    },
    screens: {
      'lg': {'max': '1300px'},

      'md': {'max': '1023px'},

      'midl' : {'max': '767px'},

      'sl': {'max': '540px'},

      'sm': {'max': '425px'},
    },
  },
  plugins: [],
}
