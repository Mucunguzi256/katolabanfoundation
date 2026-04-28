/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#1E3A8A',
          dark: '#172554',
          light: '#3B82F6',
        },
        secondary: {
          DEFAULT: '#3B8B5E',
          dark: '#2D6A4F',
          light: '#52B788',
        },
      },
    },
  },
  plugins: [],
}