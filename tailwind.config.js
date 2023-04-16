/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      small: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
    extend: {
      animation: {
        shake: "shake .4s ease-in-out",
        bgmove: "bgmove 30s linear infinite",
        imagen: "imagen 2s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        float:
          "float 5s ease-in-out infinite 2s, Opacity 1s ease-in-out forwards 2s",
        fadeLeft: "fadeLeft 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        fadeRight: "fadeRight 1.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);",
        fadeBottom:
          "fadeBottom 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 2s forwards",
        intro: "intro 2s ease forwards",
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
        bgmove: {
          "0%, 100%": {
            "background-position": "0% 0%",
          },
          "50%": {
            "background-position": "100% 0%",
          },
        },
        imagen: {
          "0% , 65%": {
            transform: "translateY(20px) scale(1.15)",
            "transform-origin": "50% bottom",
          },
          "90%": {
            transform: "translateY(0) scale(1.25)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translatey(0px)",
            opacity: 1,
          },
          "50%": {
            transform: "translatey(-20px)",
            opacity: 1,
          },
        },
        Opacity: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        fadeLeft: {
          "0%": {
            transform: "translateX(-200px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
        fadeRight: {
          "0%": {
            opacity: 0,
          },
          "50%": {
            transform: "translateX(100px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
        fadeBottom: {
          "0%": {
            transform: "translateY(50px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        intro: {
          "0%": {
            color: "transparent",
            "-webkit-text-stroke": "1px #edf2f4",
            "text-shadow": "none",
          },
          "70%": {
            color: "transparent",
            "-webkit-text-stroke": "1px #edf2f4",
            "text-shadow": "none",
          },
          "100%": {
            color: "#edf2f4",
            "-webkit-text-stroke": "#121212",
            "text-shadow": ["3px 3px 0px #e28868, 6px 6px 0px #121212"],
          },
        },
      },
      dropShadow: {
        title: ["3px 3px 0px #e28868", "6px 6px 0px #121212"],
        subtitle: "6px 5px 0px #121212",
      },
      boxShadow: {
        card: [
          [
            "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px",
            "rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
          ],
        ],
        inset: "inset 0 0 5px white",
      },
      transitionTimingFunction: {
        custom: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
      backgroundImage: {
        clouds: "url(../../public/images/Cloudy.svg)",
        dots: "url(../../public/images/dots.svg)",
      },
    },
  },
  plugins: [],
};
