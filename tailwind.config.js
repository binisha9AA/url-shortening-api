/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      screens: {
        '2xl': '1400px',
        mxs: '480px',
        xs: '320px',
      },
      spacing: {
        4.5: '18px',
      },

      colors: {
        primary: {
          cyan_btn: 'hsl(180, 66%, 49%)',
          dark_violet: 'hsl(257, 27%, 26%)',
        },
        secondary: {
          red: 'hsl(0, 87%, 67%)',
        },
        neutral: {
          gray_text: 'hsl(0, 0%, 75%)',
          grayish_violet: 'hsl(257, 7%, 63%)',
          very_dark_blue: ' hsl(255, 11%, 22%)',
          very_dark_violet: 'hsl(260, 8%, 14%)',
        },
      },
    },
  },
  plugins: [],
};
