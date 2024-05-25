/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0 0px 25px 5px rgba(99, 83, 226, 0.8)",
      },
    },
  },
  plugins: [require("daisyui")],
};
