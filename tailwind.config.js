/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6B5B95",   // Roxo principal
        secondary: "#8C7AA9", // Roxo claro
        accent: "#F0A500",    // Amarelo / destaque
        dark: "#333333",      // Texto escuro
        light: "#F5F5F5",     // Fundo claro
      },
    },
  },
  plugins: [],
}