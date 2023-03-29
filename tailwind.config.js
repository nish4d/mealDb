/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#97cbfc",

          secondary: "#0f7f96",

          accent: "#86e8d4",

          neutral: "#1F1A29",

          "base-100": "#213945",

          info: "#7CACF4",

          success: "#1A845F",

          warning: "#EFA52E",

          error: "#F0758E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
