/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter',
        'display': 'Swansea'
      },
      backgroundImage: {
        'background-1': "url('./wavy-abstract-bg.jpg')"
      }
    }
  },
  plugins: []
};