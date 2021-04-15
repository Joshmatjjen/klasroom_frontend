/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
const { colors } = require('tailwindcss/defaultTheme')
module.exports = {
  theme: {
    extend: {
      colors: {
        orange: {
          ...colors.orange,
          '100': '#fcf8f7',
          '200': '#fef5ec',
          '500': '#f99e42',
        },
        blue: {
          ...colors.blue,
          '400': '#0797ce',
          '600': '#0757ce',
          '800': '#08305f',
        },
      },
    },
  },
  variants: {},
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
