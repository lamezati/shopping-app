/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        amazon: {
          blue: {
            light: '#232f3e',
            DEFAULT: '#131921',
          },
          yellow: {
            DEFAULT: '#febd69',
            hover: '#f3a847'
          }
        }
      }
    },
  },
  plugins: [],
};