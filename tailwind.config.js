/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15rem",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          light: "#00976A",
          dark: "#4EBE86",
        },
        backgrounds: {
          light: {
            end: "#eeeeee",
            start: "#8AE8CC",
          },
          dark: {
            end: "#000517",
            start: "#021B0F",
          },
        },
        secondary: {
          light: "rgb(0,0,0,5%)",
          dark: "rgb(255,255,255,10%)",
        },
        redish: "#F44336",
        borders: "rgb(161,161,161,50%)",
        "wrapper-light": "rgb (0,0,0,5%)",
        "wrapper-dark": "rgb (255,255,255,10%)",
        texts: {
          light: "rgb(37, 37, 37, 80%)",
          dark: "rgb(255, 255, 255, 80%)",
        },
      },
      fontFamily: {
        inter: ["inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
