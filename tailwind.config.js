/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scale: {
        '65': '0.65'
      },
      animation: {
        typing: "typing 2s steps(28) infinite forwards alternate-reverse, blink 0.2s infinite",
      },
      keyframes: {
        typing: {
          from: { width: "28ch" },
          to: { width: "0" }
        },
        blink: {
          from: { "border-right-color": "transparent" },
          to: { "border-right-color": "black" },
        },
      },
    },
  },
  plugins: [],
}

