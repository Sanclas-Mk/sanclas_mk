/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        marca: ['Viaoda Libre', 'serif'],
        chamativa: ['Playfair Display', 'serif'],
        texticulo: ['Noto Serif KR', 'serif'],
        titulos: ['Prata', 'serif'],
        texto: ['Quicksand', 'sans-serif'],
        textoalt: ['Open Sans', 'sans-serif']

      },
      colors: {
        'larajin': '#f7c59f',
        'roxa': '#B07BAC',
        'azulroxa': '#A682FF',
        'azuzim': '#DDFDFE',
        'rosa': '#FEF2F2',
        'logo': '#F7C59F',
        'menu': '#171615',
        'bg': '#202020',
        'outro': '#EEE5E5',
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translatex(80px)", opacity: "0" },
          "100%": { transform: "translatex(0px)", opacity: "1" },
        },
        animacaoT: {
          "0%": { transform: "translatey(-50px)", opacity: "0" },
          "100%": { transform: "translatey(0px)", opacity: "1" },
        },
        animacaoL: {
          "0%": { transform: "translatex(-50px)", opacity: "0" },
          "100%": { transform: "translatex(0px)", opacity: "1" },
        },
        animacaoR: {
          "0%": { transform: "translatex(50px)", opacity: "0" },
          "100%": { transform: "translatex(0px)", opacity: "1" },
        },
        animacaoB: {
          "0%": { transform: "translatey(50px)", opacity: "0" },
          "100%": { transform: "translatey(0px)", opacity: "1" },
        },

      },
      animation: {
        "slide-down": "slideDown 0.3s linear",
        "animacao-t": "animacaoT 0.5s linear",
        "animacao-l": "animacaoL 0.5s linear",
        "animacao-r": "animacaoR 0.5s linear",
        "animacao-b": "animacaoB 0.5s linear",
      }


    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": { display: "none" },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      };
      addUtilities(newUtilities);
    },
  ],
}

