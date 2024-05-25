/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0 0px 15px 1px rgba(99, 83, 226, 1)",
      },
    },
  },
  plugins: [require("daisyui")],
};
