/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        'rem-xs': '0.75rem',
        'rem-sm': '0.875rem',
        'rem-smm': '0.925rem',
        'rem-base': '1rem',
        'rem-lg': '1.125rem',
        'rem-xl': '1.25rem',
        'rem-2xl': '1.5rem',
        'rem-2.5xl': '1.6rem',
        'rem-3xl': '1.875rem',
        'rem-4xl': '2.25rem',
        'rem-5xl': '3rem',
        'rem-6xl': '4rem',
      },
    },
  },
  plugins: [],
}
