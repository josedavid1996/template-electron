const themes = require('./@tailwind/theme.js')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/render/index.html', './src/render/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: { colors: { ...themes } },
    fontFamily: {
      sans: `"Saira", ${defaultTheme.fontFamily.sans.join(',')}`,
      mono: `"IBM Plex Mono", ${defaultTheme.fontFamily.mono.join(',')}`
    }
  },
  plugins: [
    require('./@tailwind/plugins/icons'),
    require('./@tailwind/plugins/titles'),
    require('./@tailwind/plugins/buttons'),
    require('./@tailwind/plugins/paragraphs')
  ]
}
