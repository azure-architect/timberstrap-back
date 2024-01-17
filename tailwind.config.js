

const plugin = require('tailwindcss/plugin')
// require dotenv
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    // Existing paths
    // './**/*.{php,twig,html,css}',
    './scripts/index.html',
    './css-output/bundle.css',
    // Paths for template-livecanvas-*
    // './template-livecanvas-blocks/**/*.{php,twig,html,css}',
    // './template-livecanvas-sections/**/*.{php,twig,html,css}',
    // './template-livecanvas-partials/**/*.{php,twig,html,css}',
    // './template-livecanvas-dynamic-templates/**/*.{php,twig,html,css}',
    // './template-livecanvas-snippets/**/*.{php,twig,html,css}',
  ],
  safelist: process.env.GENERATE_AUTOCOMPLETE
      ? [{ pattern: /./ }]
      : [], 
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.slate,
        red: colors.red,
        yellow: colors.amber,
        blue: colors.blue,
        teal: colors.teal,
        orange: colors.orange,
        purple: colors.violet,
        pink: colors.pink,
        neutral: colors.gray,
        success: colors.green,
        warning: colors.amber,
        error: colors.red,
        info: colors.blue,
      },
	fontFamily: {
      body: [
        'Montserrat',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
      sans: [
        'Montserrat',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
    },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite-typography'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('flowbite/plugin'),
	plugin(function({ addVariant }) {
      addVariant('htmx-settling', ['&.htmx-settling', '.htmx-settling &'])
      addVariant('htmx-request',  ['&.htmx-request',  '.htmx-request &'])
      addVariant('htmx-swapping', ['&.htmx-swapping', '.htmx-swapping &'])
      addVariant('htmx-added',    ['&.htmx-added',    '.htmx-added &'])
    })
  ],
  corePlugins: {
    preflight: true,
  },
}
