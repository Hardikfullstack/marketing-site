/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--text-primary)",
          secondary: "var(--text-secondary)",
        },
        shadow:{
          dark: "var(--background-shadow-primary)"
        },
        background: {
          primary: "#ffffff",
          secondary: "var(--background-secondary)",
          dark: "var(--card-color)",
          footer: "var(--background-footer)",
          score: "var(--background-scor)"
        },
        input: {
          bg: "var(--input-background)",
          text: "var(--input-text)",
          border: "var(--input-border)",
          'default-White': "var(--defalt-white)"
        },
        button: {
          default: "var(--button-default)",
          primary: "var(--button-primary)",
          "primary-hover": "var(--button-primary-hover)",
          secondary: "var(--button-secondary)",
          "secondary-hover": "var(--button-secondary-hover)",
        },
        border: "var(--border-color)",
        card: {
          bg: "var(--card-background)",
        },
      },
    },
  },
  plugins: [],
};
