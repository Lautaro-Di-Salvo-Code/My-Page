import { ContextoGlobal } from "../App"
import { Nav } from "./Nav"
import { useContext, useEffect } from "react"
import {gsap} from "gsap"





export const Header = () => {
  
  const timelinE = gsap.timeline()

  useEffect(() => {
   
    const nombreSeleccionado = document.querySelectorAll(".Presentacion")
    const infoPresentacion = document.querySelectorAll(".infoPresentacion")
    timelinE.from(nombreSeleccionado, {opacity: 0 , duration:2.2, y: "3rem"  })
    .from(infoPresentacion, {opacity: 0 , duration:2.2, ease: 1})
    
    
  }, [])



  const {texto } = useContext( ContextoGlobal )



  return (
    <header id="inicio" className="bg-yoCodeando fondo-espera  bg-no-repeat bg-center relative top-[-2rem] bg-cover h-[104dvh] ">
      <Nav />
      <div
        className="absolute z-index-menor  top-[6rem] flex justify-center flex-wrap content-center flex-col m-auto w-full   h-[81dvh]">

        <div className=" flex justify-center">
            <h5 className=" Presentacion text-[1.8rem] md:text-[3rem] vlg:text-[3.7rem] ">{texto.header.saludo}</h5>

        </div>
        <div className="flex justify-center ">
            <h1 className=" Presentacion  text-[9vw] md:text-[3rem]  vlg:text-[3.7rem]  " name="Lautaro Di Salvo">{texto.header.nombre} <b>Lautaro Di Salvo</b>
            </h1>

        </div>
        <div>
            <h2 className="es  infoPresentacion  flex flex-row flex-wrap content-center justify-center text-[8vw] md:text-[3rem]  vlg:text-[3.7rem]">
                <b className="flex flex-wrap content-center  ">
                  <img className=" h-[1rem]  md:h-[2.5rem] lg:h-[3rem]"
                        src="../../assets/pico-abre.svg" name="Front-End Developer" alt=""/>
                        </b>

                {texto.header.profesion}

                <b className="flex flex-wrap content-center"><img className=" h-[1rem]  md:h-[2.5rem] lg:h-[3rem]"
                        src="../../assets/pico-cierre.svg" alt=""/></b>
            </h2>


        </div>

        <section className=" flex flex-row justify-center">
            <div className=" mx-4 md:hover:scale-105 rounded-full infoPresentacion ">

                <a target="_blank" href="https://github.com/Lautaro-Di-Salvo-Code?tab=repositories"><img
                        className="h-9 w-9 md:h-11 md:w-auto" src="../../assets/github (1).svg" alt=""/></a>
            </div>
            <div className="mx-4 md:hover:scale-105 infoPresentacion">

                <a target="_blank" href="https://www.linkedin.com/in/lautaro-di-salvo-bb2308285/"><img
                        className="h-9 w-9 md:h-11 md:w-auto" src="../../assets/linkedin.svg" alt=""/></a>
            </div>
        </section>
        <section className=" flex flex-row justify-center mt-5 infoPresentacion">

            <a href="../../src/assets/CurriculimDev2024.pdf" target="_blank"
                className=" flex flex-wrap justify-center content-center rounded-[2rem]    bg-[#040405a5] w-[4rem] h-[2rem]  text-[1.6rem] md:w-[6rem] md:h-[3rem] lg:h-[3.4rem]  font-family-mochi transition-all 1s  md:hover:scale-105">CV
                </a>
        </section>

    </div>
    </header>
    
    
  )
}
