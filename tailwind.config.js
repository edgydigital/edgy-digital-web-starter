/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    fontSize: {
      12: '12px',
      14: '14px',
      16: '16px',
      18: '18px',
      20: '20px',
      24: '24px',
      30: '30px',
      36: '36px',
      48: '48px',
      64: '64px'
    },
    spacing: {
      0: '0',
      x: '4px',
      1: '10px',
      2: '18px',
      3: '22px',
      4: '28px',
      5: '35px',
      6: '44px',
      7: '55px',
      8: '69px',
      9: '86px',
      10: '107px',
      11: '134px',
      12: '168px'
    },
    screens: {
      small: '320px',
      phone: '480px',
      tablet: '768px',
      laptop: '976px',
      desktop: '1200px',
      large: '1201px'
    },
    extend: {
      colors: {
        red: '#FF0022',
        black: '#0F0F0F',
        white: '#FFFFFF'
      }
    }
  },
  plugins: []
}
