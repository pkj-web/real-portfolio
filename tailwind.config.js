/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,jsx}",
      "./components/**/*.{js,jsx}",
    ],
    theme: {
      extend: {
        colors: {
          'teal': '#3CAEA3',
          'navy': '#0A192F',
          'coral': '#F06C64',
          'offwhite': '#F7F9FC',
        }
      },
    },
    plugins: [],
  }