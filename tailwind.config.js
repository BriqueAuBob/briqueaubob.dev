const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'blue': {
        500: '#0085FF',
        700: '#0C579D',
      },
      'white': colors.white,
      'gray': colors.gray
    },
    fontFamily: {
      'sans': ['Open Sans', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['Open Sans'],
    },
    extend: {
      zIndex: {
        '-10': '-10',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
