/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // animation: {
      //   fadeIn: "fadeIn 500ms ease",
      //   fadeOut: "fadeOut 500ms ease",
      //   slideDown: "slideDown 500ms ease",
      //   slideUp: "slideUp 500ms ease",
      // },
      // keyframes: {
      //   fadeIn: {
      //     from: { opacity: 0 },
      //     to: { opacity: 1 },
      //   },
      //   fadeOut: {
      //     from: { opacity: 1 },
      //     to: { opacity: 0 },
      //   },
      //   slideDown: {
      //     from: { transform: "scaleY(0)" },
      //     to: { transform: "scaleY(1)" },
      //   },
      //   slideUp: {
      //     from: { transform: "scaleY(1)" },
      //     to: { transform: "scaleY(0)" },
      //   },
      // },
    },
  },
  plugins: [],
};
