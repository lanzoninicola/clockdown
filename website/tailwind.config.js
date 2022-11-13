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
        accent: {
          base: "#73F8BA",
          500: "#3DF59F",
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
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        pulse: {
          "0%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.1)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        fadeIn: "fadeIn 1s ease-in-out",
        pulse: "pulse 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
