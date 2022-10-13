/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.jsx', './*.html'],
  theme: {
    extend: {
      colors: {
        'mobile-menu': '#D5E4FF',
        'graylight': '#94A2B3',
        'sweywhite': '#CCEDFF',
      },
      screens: {
        'xsm': {'min-width': '1px'},
        'med': {'min-width': '600px'},
        'mdnine': {'min-width': '900px'},
        'xl': {'min-width': '1440px'},
        'xml': {'min-width': '1500px'},
        'xxl': {'min-width': '1600px'},
      },
      backgroundImage: {
        'gradientDesktop': "url('/src/assets/images/gradientDesktop.png')",
        'gradientLoginMobile': "url('/src/assets/images/gradientMobile.png')",
      },
      dropShadow: {
        'background-card': '0px 4px 2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
