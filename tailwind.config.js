/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter'
      },
      backgroundImage: {
        'background-1': "url('./purple-background.jpg')"
      }
    }
  },
  plugins: []
};