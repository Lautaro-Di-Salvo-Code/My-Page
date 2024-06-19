
import { Header } from './Components/HeaderComponent'
import { Main } from "./Components/MainSection"
import { createContext, useState } from 'react'
import {gsap} from "gsap"
import { LanguagePage } from './ObjectData/ObjectData'



export const ContextoGlobal = createContext()

function App() {
  
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
        className="bg-[#9e9d9df5]   backdrop-blur-3xl max-w-maximoAnchosmallwide
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
