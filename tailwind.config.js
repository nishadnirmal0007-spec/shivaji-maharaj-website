/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        saffron: { 50: '#fff8f0', 100: '#ffecd0', 200: '#ffd494', 300: '#ffb84d', 400: '#ff9a1a', 500: '#f07800', 600: '#d45f00', 700: '#a84700', 800: '#7a3300', 900: '#4d2000' },
        gold: { 300: '#fce680', 400: '#ffd700', 500: '#f0c000', 600: '#d4a800' },
      },
      fontFamily: {
        display: ['"Cinzel Decorative"', 'Georgia', 'serif'],
        body: ['"Crimson Text"', 'Georgia', 'serif'],
        sans: ['"Mukta"', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-15px)' } },
        'pulse-glow': { '0%,100%': { boxShadow: '0 0 20px rgba(255,152,0,0.3)' }, '50%': { boxShadow: '0 0 40px rgba(255,152,0,0.7)' } },
      },
    },
  },
  plugins: [],
}
