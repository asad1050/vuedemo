/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '1.7rem',
      },
      padding: {
        '27': '6.7rem'
      },
      fontFamily: {
        'open-sans':            ["Open Sans"],
        'open-sans-italic':     ["Open Sans Italic"],
        'open-sans-700':        ["Open Sans 700"],
        'open-sans-italic-700': ["Open Sans 700 Italic"],
        'open-sans-600':        ["Open Sans 600"],
        'league-gothic':        ["League Gothic"],
        'ailerons':             ["Ailerons"],
      },
    },
  },
  plugins: [],
}
