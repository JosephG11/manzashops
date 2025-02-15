/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        secondary: '#60b3d1',
        primary: '',
        header: '#121212',
        navbar: '#60b3d1',
      },
      fontFamily: {
        sans: ['Times New Roman', 'serif'],
      },
      screens: {
        xs: '370px',
        lgc: '1210px',
        '2xlc': '1610px',
      },
    },
  },
  plugins: [],
};
