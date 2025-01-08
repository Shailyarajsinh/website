/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007BFF',
        secondary: '#003366',
        accent: '#FFD700',
        greyCustom: '#D9D9D9',
      },
      fontFamily: {
        heading:['Outfit', 'sans-serif'],
        para:['Satoshi', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 60s linear infinite",
      },
    },
  },
  plugins: [],
}

