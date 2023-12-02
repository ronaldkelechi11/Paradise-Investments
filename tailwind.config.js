/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(143,52,165)",
      },
      fontFamily: {
        poppins: 'Poppins',
        billabong: 'Billabong'
      },
      backgroundImage: {
        heroPattern: "url('/src/assets/contact_bg.png')",
        heroPattern2: "url('/src/assets/bg1.jpg')",
      }
    },
  },
  plugins: [],
}

