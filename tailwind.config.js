/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      small: '29rem',
      sm: '40rem',
      smx: '45rem',
      md: '48rem',
      lg: '64rem',
      xl: '80rem',
      xxl: '96rem',
    },
    extend: {
      fontSize: {
        'fluid-1': 'clamp(1.89rem, calc(1.48rem + 2.03vw), 2.93rem)',
        'fluid-2': 'clamp(3.27rem, calc(2.31rem + 4.79vw), 5.72rem)',
      },
      spacing: {
        'fluid-1': 'clamp(1.31rem, calc(0.65rem + 3.29vw), 3.00rem)',
        'fluid-2': 'clamp(1.31rem, calc(0.07rem + 6.22vw), 4.50rem)',
      },
      animation: {
        shake: 'shake .4s ease-in-out',
        bgmove: 'bgmove 30s linear infinite',
        imagen:
          'imagen 1.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) 2s forwards',
        float: 'float 4s ease-in-out infinite',
        fadeLeft:
          'fadeLeft 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 1.5s forwards',
        fadeLeft2:
          'fadeLeft 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
        fadeRight:
          'fadeRight 2.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) .7s forwards ;',
        fadeRight2:
          'fadeRight 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards ;',
        fadeLeftFast: 'fadeLeft 1s ease-in-out .5s forwards',
        fadeBottom:
          'fadeBottom 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 3s forwards',
        intro: 'intro 4.5s ease forwards',
        opacity: 'Opacity 1s ease-in-out forwards 4s',
        opacityFast: 'Opacity 1s ease-in-out forwards 1s',
        scroll: 'scroll 40s linear infinite',
        orbit: 'orbit linear 40s infinite',
        orbitReverse: 'orbit linear 40s infinite reverse',
        zoom: 'zoom ease-in-out .3s',
      },
      colors: {
        principal: '#edf2f4',
        principald: '#dfe0e0',
        secundario: '#212121',
        secundariod: '#121212',
        detalled: '#e28868',
        detalle: '#d72638',
        bgmodal: 'rgba(0, 0, 0, 0.9)',
      },
      fontFamily: {
        josefin: ['var(--font-josefin)'],
        caveat: ['var(--font-caveat)'],
      },
      keyframes: {
        shake: {
          '70%': {
            transform: 'rotate(15deg)',
          },
        },
        bgmove: {
          '0%, 100%': {
            'background-position': '0% 0%',
          },
          '50%': {
            'background-position': '100% 0%',
          },
        },
        imagen: {
          '0%, 50%': {
            transform: 'translateY(20px) scale(1.15)',
            'transform-origin': '50% bottom',
            left: '0',
          },
          '80%': {
            transform: 'translateY(0) scale(1.25)',
            left: '2rem',
            top: '-8.3rem',
          },
        },
        float: {
          '50%': {
            transform: 'translatey(-20px)',
          },
        },
        Opacity: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
        fadeLeft: {
          '0%': {
            transform: 'translateX(-200px)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 1,
          },
        },
        fadeRight: {
          '0%': {
            opacity: 0,
          },
          '50%': {
            transform: 'translateX(100px)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 1,
          },
        },
        fadeBottom: {
          '0%': {
            transform: 'translateY(50px)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1,
          },
        },
        intro: {
          '0%': {
            color: 'transparent',
            '-webkit-text-stroke': '1px #edf2f4',
            'text-shadow': 'none',
          },
          '85%': {
            color: 'transparent',
            '-webkit-text-stroke': '1px #edf2f4',
            'text-shadow': 'none',
          },
          '100%': {
            color: '#edf2f4',
            '-webkit-text-stroke': '#121212',
            'text-shadow': ['3px 3px 0px #e28868, 6px 6px 0px #121212'],
          },
        },
        scroll: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(calc(-318px * 9))',
          },
        },
        orbit: {
          to: {
            transform:
              'rotateZ(calc((360deg / var(--circle-item-count)) * (var(--circle-item-index) + var(--circle-item-count)))) translateY(calc(var(--orbit-radius) * -1)) rotateZ(calc((360deg / var(--circle-item-count)) * (var(--circle-item-index) + var(--circle-item-count)) * -1))',
          },
        },
        zoom: {
          from: {
            transform: 'scale(0.4)',
          },
          to: {
            transform: 'scale(1)',
          },
        },
      },
      dropShadow: {
        title: ['3px 3px 0px #e28868', '6px 6px 0px #121212'],
        subtitle: '6px 5px 0px #121212',
        subtitleLight: '6px 5px 0px #E54D26',
      },
      boxShadow: {
        card: [
          [
            'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px',
            'rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
          ],
        ],
        inset: 'inset 0 0 5px white',
      },
      transitionTimingFunction: {
        custom: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      backgroundImage: {
        clouds: 'url(../../public/Images/Cloudy.svg)',
        dots: 'url(../../public/Images/dots.svg)',
        waves: 'url(../../public/Images/wave.svg)',
        waveup: 'url(../../public/Images/wave1.svg)',
        wavedown: 'url(../../public/Images/wave2.svg)',
        peak: 'url(../../public/Images/peak.svg)',
      },
    },
  },
  plugins: [require('@kamona/tailwindcss-perspective')],
}
