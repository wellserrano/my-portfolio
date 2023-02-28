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
      },
      keyframes: {
        slideDown: {
          '0%': {height: 0},
          '100%': {height: 'var(--radix-collapsible-content-height)'},
        },
        slideUp: {
          '0%': {height: 'var(--radix-collapsible-content-height)'},
          '100%': {height: 0},
        }
      }
    },
  },
  plugins: [],
}