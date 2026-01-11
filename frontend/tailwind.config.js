/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'whistle-black': '#0a0a0a',
        'whistle-red': '#ff0000',
        'whistle-blue': '#0055ff',
        'whistle-orange': '#ff8800',
      },
      fontFamily: {
        'mono': ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
