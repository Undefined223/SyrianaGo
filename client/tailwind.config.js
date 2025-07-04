// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Tennyson BC"', 'serif'],
        secondary: ['"Times New Roman Custom"', 'serif'],
      },
    },
  },
  plugins: [],
}
