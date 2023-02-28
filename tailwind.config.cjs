/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
        }
      }
    },
  },
  plugins: [],
}