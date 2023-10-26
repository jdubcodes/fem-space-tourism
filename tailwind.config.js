/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      dark: '#0B0D17',
      light: '#D0D6F9',
      white: '#FFFFFF',
    },
    fontSize: {
      h1: '9.375rem',
      h2: '6.25rem',
      h3: '3.5rem',
      h4: '2rem',
      sub1: '1.75rem',
      sub2: '0.875rem',
      nav: '1rem',
      base: '1.125rem',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
