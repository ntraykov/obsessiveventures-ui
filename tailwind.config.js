/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*'],
  safelist: [
    'bg-primary',
    'hover:bg-primary-hover',
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#15803d',
        'primary-hover': '#16a34a',
      },
      transitionDuration: {
        default: '300ms',
      },
      maxWidth: {
        '8xl': '96rem',
        '9xl': '112rem',
      },
    },
  },
}
