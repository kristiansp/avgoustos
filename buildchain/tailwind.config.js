/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "../templates/**/*.html",
    "../templates/**/*.twig",
    "../templates/**/*.js",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fff',
      black: '#221F20',
      grey: '#F4F5F4',
      'warm-sun': '#F6C45D',
      'blue-sky': '#65D6F1',
      'stone-wall': '#E4D9B2',
      'sea': '#068DB2',
      'red-soil': {
        DEFAULT: '#DE5629',
        200: '#FAEAE2',
        300: '#F5D4C6',
        400: '#ECA88A',
        500: '#DE5629',
      }
    },
    extend: {
      fontFamily: {
        serif: [
          'Noto Serif',
          ...defaultTheme.fontFamily.serif,
        ]
      },
    },
  },
  plugins: [],
}

