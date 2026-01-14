/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand - modernized, lighter gold
        'gold-primary': '#D4AF5C',
        'gold-light': '#E8C97A',
        'gold-muted': '#C9A855',

        // Legacy gold aliases
        'gold-ochre': '#D4AF5C',
        'soft-gold': '#E8C97A',

        // Authority colors - softened
        'coral': '#D85A5A',
        'coral-light': '#E88888',
        'rose': '#A04050',
        'rose-light': '#C06070',

        // Legacy red aliases
        'deep-red': '#D85A5A',
        'burgundy': '#A04050',

        // Neutrals - contemporary
        'black': '#1A1A2E',
        'charcoal': '#2D2D44',
        'slate': '#5A5A72',
        'silver': '#8E8E9F',
        'mist': '#ECEEF2',
        'cloud': '#F5F6F8',
        'snow': '#FAFBFC',

        // Warm neutrals
        'warm-stone': '#E8E4DD',
        'warm-cream': '#F8F6F3',

        // Tints for backgrounds
        'gold-3': 'color-mix(in srgb, #D4AF5C 3%, white)',
        'gold-5': 'color-mix(in srgb, #D4AF5C 5%, white)',
        'gold-8': 'color-mix(in srgb, #D4AF5C 8%, white)',
        'gold-12': 'color-mix(in srgb, #D4AF5C 12%, white)',
        'gold-15': 'color-mix(in srgb, #D4AF5C 15%, white)',
        'gold-20': 'color-mix(in srgb, #D4AF5C 20%, white)',

        'coral-3': 'color-mix(in srgb, #D85A5A 3%, white)',
        'coral-5': 'color-mix(in srgb, #D85A5A 5%, white)',
        'coral-8': 'color-mix(in srgb, #D85A5A 8%, white)',

        'rose-3': 'color-mix(in srgb, #A04050 3%, white)',
        'rose-5': 'color-mix(in srgb, #A04050 5%, white)',
        'rose-8': 'color-mix(in srgb, #A04050 8%, white)',
      },
      fontFamily: {
        'lounge': ['Lounge', 'Georgia', 'serif'],
        'montserrat': ['Montserrat', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
      },
      spacing: {
        '2xs': '4px',
        'xs': '8px',
        'sm': '16px',
        'md': '24px',
        'lg': '48px',
        'xl': '80px',
        'xxl': '120px',
        '2xl': '120px',
        '3xl': '160px',
      },
      transitionDuration: {
        'fast': '200ms',
        'normal': '300ms',
        'slow': '500ms',
        'slower': '800ms',
      },
      borderRadius: {
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '32px',
      },
      boxShadow: {
        'xs': '0 1px 2px rgba(26, 26, 46, 0.04)',
        'sm': '0 2px 8px rgba(26, 26, 46, 0.06)',
        'md': '0 4px 16px rgba(26, 26, 46, 0.08)',
        'lg': '0 8px 32px rgba(26, 26, 46, 0.10)',
        'xl': '0 16px 48px rgba(26, 26, 46, 0.12)',
        'gold': '0 8px 32px rgba(212, 175, 92, 0.15)',
        'gold-hover': '0 12px 40px rgba(212, 175, 92, 0.25)',
      },
    },
  },
  plugins: [],
}
