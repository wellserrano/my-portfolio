/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: 'class',

  theme: {
    extend: {
      transitionProperty: {
        'blur': 'filter'
      },
      animation: {
        'slideDown': 'slideDown 300ms ease-out',
        'slideUp': 'slideUp 300ms ease-out',
        'popOut': 'popOut 300ms ease-out',
        'popIn': 'popIn 300ms ease-out',
        'smallEnhance': 'smallEnhance 300ms ease-out forwards',
        'contentShow': 'contentShow 300ms cubic-bezier(0.16, 1, 0.3, 1)',
        'pill': 'fitPill 300ms ease-out forwards',
      },
      keyframes: {
        slideDown: {
          '0%': {height: 0},
          '100%': {height: 'var(--radix-collapsible-content-height)'},
        },
        slideUp: {
          '0%': {height: 'var(--radix-collapsible-content-height)'},
          '100%': {height: 0},
        },
        popIn: {
          '0%': {background: '#171F26'},
          '100%': {background: '#0C151D'}
        },
        popOut: {
          '0%': {background: '#0C151D'},
          '100%': {background: '#171F26'},
        },
        smallEnhance: {
          '0%': {transform: 'scale(0)'},
          '100%': {transform: 'scale(1)'},
        },
        contentShow: {
          '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(0.80)' },
          '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },
        fitPill: {
          '0%': { width: '0.5rem' },
          '100%': { width: 'fit-content' },
        }
      }
    },
  },
  plugins: [],
}