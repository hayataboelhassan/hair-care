/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wavy: {
          '0%, 100%': { borderRadius: '60% 40% 50% 70% / 60% 40% 70% 50%' },
          '50%': { borderRadius: '50% 60% 40% 80% / 70% 50% 80% 40%' },
        },
      },
      animation: {
        wavy: 'wavy 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
