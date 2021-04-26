/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const { colors } = require('tailwindcss/defaultTheme')
module.exports = {
  theme: {
    minWidth: {
      0: '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
      100: '10rem',
      200: '20rem',
      500: '50rem',
      600: '60rem',
    },
    extend: {
      strokeWidth: {
        3: '3',
        4: '4',
        5: '5',
      },
      inset: {
        0: 0,
        20: '20rem',
      },
      colors: {
        orange: {
          ...colors.orange,
          100: '#fcf8f7',
          200: '#fef5ec',
          500: '#f99e42',
        },
        blue: {
          ...colors.blue,
          400: '#0797ce',
          600: '#0757ce',
          800: '#08305f',
        },
      },
      inset: {
        0: 0,
        '1/2': '50%',
      },
    },
  },
  variants: {
    flexDirection: ['responsive', 'hover', 'focus'],
    gridTemplateRows: ['responsive', 'hover', 'focus'],
    minHeight: ['responsive', 'hover', 'focus'],
    minWidth: ['responsive', 'hover', 'focus'],
  },
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
