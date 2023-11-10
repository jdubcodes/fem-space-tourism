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
    extend: {
      padding: {
        'home-mobile': '8rem 3rem 8rem',
        'home-tablet': '12.625rem 9.938rem 4.625rem',
        'home-desktop': '25vh 10.45rem',
        'dest-mobile': '6.25rem 3.5rem 4rem',
        'dest-tablet': '10.875rem 6.875rem 2.4375rem 4.375rem',
        'dest-desktop': '25vh 10.45rem 7rem',
        'crew-mobile': '6.25rem 3.5rem 4rem',
        'crew-tablet': '10.875rem 6.875rem 2.4375rem 4.375rem',
        'crew-desktop': '25vh 10.45rem 7rem',
      },
      width: {
        'nav-line': '29.875rem',
      },
      height: {
        'nav-line': '0.0625rem',
      },
      maxWidth: {
        'line-tablet': '28vw',
        'line-desktop': '28.875rem',
        container: '69.125rem',
        screen: '100vw',
      },
      backgroundImage: {
        'crew-desktop': 'url("/crew/background-crew-desktop.jpg")',
        'crew-tablet': 'url("/crew/background-crew-tablet.jpg")',
        'crew-mobile': 'url("/crew/background-crew-mobile.jpg")',
        'dest-desktop':
          'url("/destination/background-destination-desktop.jpg")',
        'dest-tablet': 'url("/destination/background-destination-tablet.jpg")',
        'dest-mobile': 'url("/destination/background-destination-mobile.jpg")',
        'tech-desktop': 'url("/technology/background-technology-desktop.jpg")',
        'tech-tablet': 'url("/technology/background-technology-tablet.jpg")',
        'tech-mobile': 'url("/technology/background-technology-mobile.jpg")',
        'home-desktop': 'url("/home/background-home-desktop.jpg")',
        'home-tablet': 'url("/home/background-home-tablet.jpg")',
        'home-mobile': 'url("/home/background-home-mobile.jpg")',
      },
      screens: {
        '3xl': '1921px',
      },
      fontSize: {
        '1rem': '1rem',
        '1.5rem': '1.5rem',
        '2rem': '2rem',
        '2.5rem': '2.5rem',
        '3rem': '3rem',
        '3.5rem': '3.5rem',
        nav: [
          '1rem',
          {
            letterSpacing: '0.16875rem',
          },
        ],
        'accent1-mobile': [
          '5rem',
          {
            lineHeight: '6.25rem',
          },
        ],
        'accent1-tablet': [
          '9.375rem',
          {
            lineHeight: '9.375rem',
          },
        ],
        'sub-mobile': [
          '1rem',
          {
            letterSpacing: '0.16875rem',
          },
        ],
        'sub-tablet': [
          '1.25rem',
          {
            letterSpacing: '0.21094rem',
          },
        ],
        'sub-desktop': [
          '1.75rem',
          {
            letterSpacing: '0.29531rem',
          },
        ],
        'para-mobile': [
          '0.9375rem',
          {
            lineHeight: '1.5625rem',
          },
        ],
        'para-tablet': [
          '1rem',
          {
            lineHeight: '1.75rem',
          },
        ],
        'para-desktop': [
          '1.125rem',
          {
            lineHeight: '2rem',
          },
        ],
      },
      opacity: {
        line: '0.2515',
        btn: '0.1036',
      },
    },
  },
  plugins: [],
}
