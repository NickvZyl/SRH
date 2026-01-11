/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'gold-ochre': '#CBA85C',
        'soft-gold': '#EDBD56',
        'deep-red': '#C2322F',
        'burgundy': '#801B1F',
        'warm-stone': '#DBD5CA',
      },
      fontFamily: {
        'lounge': ['Lounge', 'Georgia', 'serif'],
        'montserrat': ['Montserrat', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
      },
      spacing: {
        'xs': '8px',
        'sm': '16px',
        'md': '24px',
        'lg': '48px',
        'xl': '80px',
        'xxl': '120px',
      },
      transitionDuration: {
        'fast': '200ms',
        'normal': '300ms',
        'slow': '600ms',
      },
    },
  },
  plugins: [],
}
