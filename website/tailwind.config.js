/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          sm: "#47A3FF",
          md: "#6AB2FE",
        },
        tea: {
          base: "#fffaea",
        },
      },
      fontFamily: {
        body: ["Inter", "sans-serif"],
        titles: ["Inter", "serif"],
        accent: ["Michroma", "sans-serif"],
      },
      backgroundImage: {
        "hero-bg": "url('/images/hero-bg.jpg')",
        "why-bg": "url('/images/why-bg.jpg')",
        "backdrop-blue": "url('/images/backdrop-blue.svg')",
      },
      maxWidth: {
        1440: "1440px",
      },
      maxHeight: {
        750: "750px",
      },
      height: {
        450: "450px",
      },
    },
  },
  plugins: [],
};
