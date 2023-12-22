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
    screens: {
      xs: '376px', // mobile design
      sm: '640px',
      md: '768px', // tablet design
      tab: '912px',
      lg: '1024px',
      xl: '1280px',
      pc: '1440px', // desktop design
    },
    extend: {
      padding: {
        'nav-mobile': '4rem 3.5rem 0rem',
        'nav-tablet': '1.875rem',
        'nav-lg': '4rem 9rem 0rem',
        'nav-desktop': '4rem 10.45rem 0rem',
        'home-short': '8rem 3rem 2rem',
        'home-mobile': '8rem 3rem 8rem',
        'home-tablet': '12.625rem 9.938rem 4.625rem',
        'home-desktop': '25vh 10.45rem',
        'dest-mobile': '6.25rem 3.5rem 0rem',
        'dest-tablet': '10.875rem 6.875rem 2.4375rem 4.375rem',
        'dest-lg': '10.875rem 9rem 2.4375rem 4.375rem',
        'dest-desktop': '25vh 10.45rem 7rem',
        'crew-small': '6.25rem 3rem 1rem',
        'crew-mobile': '6.25rem 3rem 5rem',
        'crew-tablet': '10.875rem 2.5rem 0rem',
        'crew-desktop': '25vh 10.45rem 0rem',
        'tech-mobile': '6.25rem 0 0',
        'tech-tablet': '10.875rem 2.5rem 0',
      },
      width: {
        'nav-line': '29.875rem',
        'crew-img-mobile': '11.07019rem',
        'crew-tablet': '26.625rem',
        calc: '50vw',
      },
      height: {
        'nav-line': '0.0625rem',
        'crew-img-mobile': '13.875rem',
        'crew-img-tablet': '33.375rem',
        calc: 'calc(100vh - 65vh)',
      },
      maxWidth: {
        'line-tablet': '32vw',
        'line-desktop': '28.875rem',
        container: '70.3rem',
        screen: '100vw',
        'crew-mobile': '11.07019rem',
      },
      maxHeight: {
        'crew-mobile': '13.875rem',
      },
      gridTemplateRows: {
        'crew-mobile': '24px 300px',
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
        'accent2-mobile': '3.5rem',
        'accent2-tablet': '5rem',
        'accent2-desktop': '6.25rem',
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
        'sub2-mobile': [
          '0.875rem',
          {
            letterSpacing: '0.14763rem',
          },
        ],
        'sub2-tablet': [
          '1rem',
          {
            letterSpacing: '0.16875rem',
          },
        ],
        'nums-mobile': '1.75rem',
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
        'nav2-mobile': [
          '0.856rem',
          {
            letterSpacing: '0.14763rem',
          },
        ],
        'nav2-tablet': [
          '1rem',
          {
            letterSpacing: '0.16875rem',
          },
        ],
        'nums-desktop': [
          '2rem',
          {
            letterSpacing: '0.125rem',
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
