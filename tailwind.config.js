const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Graphik', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
    },
    extend: {
      colors: {
        "primary": "#290DD3",
        'dark': '#080420',
        'blue': {
          500: '#0085FF',
          700: '#0C579D',
        },
        'white': colors.white,
        'gray': colors.gray
      },
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
