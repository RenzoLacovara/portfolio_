/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        shake: "shake .4s ease-in-out",
      },
      colors: {
        principal: "#edf2f4",
        principald: "#dfe0e0",
        secundario: "#212121",
        secundariod: "#121212",
        detalled: "#e28868",
        detalle: "#d72638",
      },
      fontFamily: {
        josefin: ["var(--font-josefin)"],
        caveat: ["var(--font-caveat)"],
      },
      keyframes: {
        shake: {
          "70%": {
            transform: "rotate(15deg)",
          },
        },
      },
      dropShadow: {
        title: ["3px 3px 0px #e28868", "6px 6px 0px #121212"],
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
    },
  },
  plugins: [],
};
