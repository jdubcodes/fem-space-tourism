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
      maxWidth: {
        container: '69.125rem',
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
      padding: {
        'main-mobile': '8rem 3rem 7rem',
        'main-tablet': '12.625rem 9.938rem 7.625rem',
        'main-desktop': '25vh 10.45rem',
        'dest-mobile': '6.25rem 3.5rem 4rem',
        'dest-tablet': '10.875rem 6.875rem 2.4375rem 4.375rem',
        'dest-desktop': '25vh 10.45rem 7rem',
      },
      opacity: {
        btn: '0.1036',
      },
    },
  },
  plugins: [],
}
