/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        typing: "typing 2s steps(10) infinite forwards alternate-reverse",
      },
      keyframes: {
        typing: {
          from: { width: "10ch" },
          to: { width: "0" }
        },
      },
    },
  },
  plugins: [],
}

