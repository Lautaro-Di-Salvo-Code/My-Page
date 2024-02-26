/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "yoCodeando": "url('/src/assets/fondoback-optimizado (1).webp')"
      }
    },
    maxWidth:{
      "maximoAnchosmallwide": "1000px",
      "maximoAnchoNormal": "900px",
      "maximoAnchoUltrawide": "1200px",
      "maxw-img": "10rem"
    },
    maxHeight:{
      "maximoAlto-img": "197px"

    },
    fontSize:{
      "tamaño-letra-titulosDeSecciones": "2rem"
    },
    textColor:{
      "titles-section-color":"#000",
    },
   backgroundColor:{
    "body-bgcolor":"#fff",
    // B5D2CB
    "box-sections-bgcolor": "#d9d9d9",
    "color-botonesproyectos": "#000",
    "hovercolor-botonesproyectos":"#474545",
   },
    screens:{
      // super small
      "ssm": "300px",
      // very small
      "vsm": "400px",
      // small
      "sm": "600px",
      // medium
      "md": "800px",
      // largue
      "lg": "1200px",
      // very largue
      "vlg": "1400px",
      // super largue
      "slg": "1600px",
    }
  },
}

