/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        secondary: "#10B981",
        accent: "#F59E0B",
        background: "#F3F4F6",
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #4F46E5, 0 0 10px #4F46E5, 0 0 15px #4F46E5' },
          '100%': { boxShadow: '0 0 10px #4F46E5, 0 0 20px #4F46E5, 0 0 30px #4F46E5' },
        },
      },
    },
  },
  plugins: [],
}