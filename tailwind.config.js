/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "img-home": "url('/src/assets/background-2.png')",
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("tailwind-scrollbar")
  ],
};
