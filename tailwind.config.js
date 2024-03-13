/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#3f6eecf2",
          DEFAULT: "#3f6eec",
          dark: "#c70000",
        },
        black: {
          DEFAULT: "#393a44",
          light:"#393A44"
        },
        secondary: {
          DEFAULT: "#eeeeee",
          light:"#f8f8f8",
          dark:"#909198"
        },
      },
      backgroundImage: {
        "gradient-radial": "../../",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
