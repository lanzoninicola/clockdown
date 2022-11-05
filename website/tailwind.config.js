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
      keyframes: {
        float: {
          "0%": {
            // boxShadow: "0 5px 15px 0px rgba(0,0,0,0.6)",
            transform: "translatey(0px)",
          },
          "50%": {
            // boxShadow: "0 25px 15px 0px rgba(0,0,0,0.2)",
            transform: "translatey(-20px)",
          },
          "100%": {
            // boxShadow: "0 5px 15px 0px rgba(0,0,0,0.6)",
            transform: "translatey(0px)",
          },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
