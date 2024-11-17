/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: false,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        karla: ["Karla", "sans-serif"],
        cambay: ["Cambay", "sans-serif"],
      },
      colors: {
        "custom-black": "#120E0E",
        "custom-white": "#DEDEDE",
        "custom-gray": "#787878",
        "custom-orange": "#FE9B19",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark"]
  }
};
