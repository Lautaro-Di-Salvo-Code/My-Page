
import { Header } from './Components/HeaderComponent'
import { Main } from "./Components/MainSection"
import { createContext, useEffect, useState } from 'react'
import {gsap} from "gsap"



export const ContextoGlobal = createContext()

function App() {
  
  const timelinE = gsap.timeline()

  useEffect(() => {
   
    
    const infoPresentacion = document.querySelectorAll(".infoPresentacion")
    timelinE.from(infoPresentacion, {opacity: 0 , duration:2.2, ease: 1})
    
    
  }, [])


  const LanguagePage = {
    es: {
     botonIdioma : "English" ,
      navbar : {
          inicio: "Inicio",
          hardskills: "HardSkills",
          sobremi : "Sobre Mi",
          proyectos : "Proyectos",
          contacto: "Contacto"
  
      },
      header : {
          saludo: "Hola!",
          nombre: "Soy",
          profesion: "Desarrollador Frontend",
  
      },
  
  
      hardskills : {
          html: "HTML",
          css : "CSS",
          javascript : "JavaScript",
          sass: "Sass",
          tailwind: "Tailwind",
          react : "React JS",
          figma: "Figma",
          git: "Git"
      },
        sobreMi : {
          titulo: "Sobre Mí",
          tecnologias : "Tecnologias",
          proveniencia : "Soy de Argentina",
          ofrezco :`Ofrezco desarrollo de Landing Page y Aplicaciontexto Web muy atractivas adaptadas para móviltexto y pantalla de textocritorio con integracion a api` ,
          experiencia: "+1 Año de experiencia como Front-End Developer",
          sobremi1: "-Como desarrollador Front-End, convierto ideas en código",
          sobremi2: " -Soy capaz de manejar cualquier obstáculo, desafío o problema",
          oferta1: "-Puedo crear sitios web atractivos, interactivos, útiles y profesionales",
          busquedalaboralmia: `-Busco una oportunidad laboral seria y de largo recorrido para poder crecer juntos, con un equipo que me permita seguir aprendiendo hasta poder ser yo el que ayude a otros`,
          educacion1: "Escuela Secundaria completa",
          educacion2: "Programacion y Desarrollo Web"
      },
  
      proyectos : {
          codigo : "Codigo",
          titulo: "Proyectos",
          turismoespacial : "Turismo Espacial",
          portfolio: "Mi portfolio",
          searchcountry: "Busqueda de Paises",
          pizzeria: "Pizzeria",
          odontologia: "Odontologia",
          
      },
      contacto: {
        titulo: "Contacto ",
        agradecimiento: "Gracias por llegar hasta aquí",   
        enviar: "Enviar",
        placeholdertextarea: "Si deseas agregar algun comentario"
      }
  },
    en:{
      botonIdioma : "Español",
      navbar : {
          inicio: "Start",
          hardskills:"HardSkills",
          sobremi : "About Me",
          proyectos : "Projects",
          contacto: "Contact"
  
      },
      header : {
          saludo: "Hi!",
          nombre: "Im",
          profesion: "Frontend Developer",
          linkedin: "https://www.linkedin.com/in/lautaro-di-salvo-bb2308285/",
          github: "https://github.com/Lautaro-Di-Salvo-Code"
  
      },
      hardskills : {
          html: "HTML",
          css : "CSS",
          javascript : "JavaScript",
          sass: "Sass",
          tailwind: "Tailwind",
          react : "React JS",
          figma: "Figma",
          git: "Git"
      },
      sobreMi : {
        titulo: "About Me",
        tecnologias : "Technologies",
        sobremi1: "As a Front-End Developer, I turn ideas into code",
        ofrezco :`I offer development of very attractive Landing Page and Web Text Application adapted for mobile text and desktop text screen with API integration` ,
          experiencia: "+1 Year of experience as Front-End Developer",
          sobremi2: " -I am able to handle any obstacle, challenge or problem",
          oferta1: "-I can create attractive, interactive, useful and professional websites",
          busquedalaboralmia: `-I am looking for a serious and long-term job opportunity to be able to grow together, with a team that allows me to continue learning until I can be the one who helps others`,
          educacion1: "Complete High School",
          educacion2: "Programming and Web Development"
      },
      proyectos : {
        codigo : "Code",
        titulo: "Projects",
        turismoespacial : "Space Turism",
        portfolio : "My Portfolio",
        searchcountry: "Search a Country",
        pizzeria: "Pizza Shop",
        odontologia: "Odontology"
     },
     contacto: {
      titulo: "Contact ",
      agradecimiento: "Thanks for getting here",   
      enviar: "Submit",
      placeholdertextarea: "If you want to add any comments"
    } 
  }
  }
  
  const initialLanguage = "es"

  const [language, setLanguage] = useState(initialLanguage)
  const [texto, setTexto] = useState(LanguagePage[language])


  const HandleLang = (e) => { 

if(e.target.value === "es"){
  setLanguage("es")
  setTexto(LanguagePage.es)
}else {
  // setLanguage("en")
  setTexto(LanguagePage.en)
  
}

   }
  
const NavBar = () => {

  document.querySelector(".nav-mobile").classList.toggle("active")
}

  return (
    <>
     
    <ContextoGlobal.Provider value={{ HandleLang, texto}}>

       <div className="father-component">

        <Header  />
        <Main />
    {/* boton navegacion de celular */}
        <article 
        className="bg-[#9e9d9df5] infoPresentacion  backdrop-blur-3xl max-w-maximoAnchosmallwide
        md:hidden fixed  mx-auto left-7 right-7 rounded-xl bottom-3 h-[8dvh] z-index-sup  ">
          <div className="nav-button-mob w-full flex flex-wrap justify-around content-center h-[8vh] p-3">
            <img   onClick={NavBar} id="boton-menu" className="w-[4rem] z-40" 
            src="../../assets/icono-monitor-code.png" alt=""></img>
          </div>
        </article>
        
       </div>
        
        </ContextoGlobal.Provider>
    
    </>
  )
}

export default App
