/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        textBlue: '#332885',
        textGreen: '#35B47E',
        textRed: '#FF5630',
        textYellow: '#FFAB00',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
