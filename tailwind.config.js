/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "hsl(26, 100%, 55%)",
        "p-orange": "hsl(25, 100%, 94%)",
        "v-d-blue": "hsl(220, 13%, 13%)",
        "g-blue": "hsl(220, 14%, 75%)",
        "l-g-blue": "hsl(223, 64%, 98%)",
        black: "hsl(0, 0%, 0%)",
      },
      fontFamily: {
        "kumbh-sans": "Kumbh Sans, sans-serif",
      },
    },
  },
  plugins: [],
};
