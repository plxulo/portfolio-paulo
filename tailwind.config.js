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
        'background-1': "url('/assets/mata-com-rio.jpg')",
        'background-2': "url('/assets/purple-background.jpg')",
        'background-3': "url('/assets/wavy-abstract-bg.jpg')"
      }
    }
  },
  plugins: []
};