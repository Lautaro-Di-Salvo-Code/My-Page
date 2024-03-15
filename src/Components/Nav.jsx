// import { useRef } from "react"
// import {NavLink} from "react-router-dom"

import { useContext, useEffect } from "react"
import { ContextoGlobal } from "../App"
import {gsap} from "gsap"




export const Nav = () => {

    const {texto,HandleLang } = useContext( ContextoGlobal )

    useEffect(() => {
      
       const nombreSeleccionado = document.querySelectorAll(".NavPresentacion")
       gsap.from(nombreSeleccionado, {opacity: 0 , duration: 1, y: "2rem" , stagger: 0.2})
     }, [])



const clickOptions = () => { 

    document.querySelector(".nav-mobile").classList.toggle("active")

 }




return (

<>
<div>
{/*  barra de navegacion escritorio */}

        <nav className=" fixed bg-[#0d0a0ad9] w-full hidden md:block mx-auto z-index-sup    h-[7rem] ">

            <div
                className=" flex flex-row flex-wrap h-[7rem] mx-auto items-center justify-around max-w-maximoAnchosmallwide vlg:max-w-maximoAnchoUltrawide">
                <div className="hover:scale-105   pt-[1rem] div-nav1">

                    <a className=" cursor-pointer NavPresentacion nav-link1  hover:text-[text-[#dddcdc]    md:text-[1.3rem]  vlg:text-[2rem]    mx-4"
                        href="index.html#inicio">{texto.navbar.inicio}</a>
                </div>

                <div className="hover:scale-105 pt-[1rem] div-nav2">
                    <a className=" cursor-pointer NavPresentacion nav-link2  hover:text-[text-[#dddcdc]  mx-4  md:text-[1.3rem] vlg:text-[2rem] "
                        href="index.html#sobremi">{texto.navbar.sobremi}</a>

                </div>
                <div className="hover:scale-105 pt-[1rem] div-nav3">
                    <a className=" cursor-pointer NavPresentacion nav-link3  hover:text-[text-[#dddcdc]  mx-4  md:text-[1.3rem] vlg:text-[2rem] "
                        href="index.html#proyectos">{texto.navbar.proyectos}</a>

                </div>
                <div className="hover:scale-105 pt-[1rem] div-nav4">

                    <a className="cursor-pointer NavPresentacion nav-link4   hover:text-[text-[#dddcdc]  mx-4  md:text-[1.3rem] vlg:text-[2rem]  "
                        href="index.html#contacto">{texto.navbar.contacto}</a>
                </div>
                <div className=" pt-[1rem] div-nav4 NavPresentacion">
                    <button onClick={HandleLang} className="cursor-pointer  nav-link4 md:hover:scale-105 md:hover:bg-[#3f3e3e]  mx-4  md:text-[1.3rem] vlg:text-[2rem]">
                    {texto.botonIdioma}
                    </button>
                </div>
                {/* <form className="pt-[1.4rem] ">
                
                <select className="bg-[#d9d9d9]" name="language" onChange={HandleLang}>
                    <option className="cursor-pointer NavPresentacion nav-link4   hover:text-[text-[#dddcdc]  mx-4  md:text-[1.3rem] vlg:text-[2rem] text-[#000]" value="1">Spanish</option>
                    <option className="cursor-pointer NavPresentacion nav-link4   hover:text-[text-[#dddcdc]  mx-4  md:text-[1.3rem] vlg:text-[2rem] text-[#000]" value="2">English</option>
                </select>    
                </form> */}
            </div>
        </nav>
   
{/*  barra de navegacion celular */}
    <div   id="iniciO" className="nav-mobile   w-full   flex  flex-col  md:justify-center ">
        <div
            className="fixed bg-[#fff] top-[0rem] bottom-0 z-index-sup  h-[103dvh] flex justify-center flex-col flex-wrap content-center w-full  mx-auto">
            <div className="">
             <a onClick={clickOptions} href="index.html#inicio"  className=" flex justify-center text-[2rem] text-[#000]  mx-4">{texto.navbar.inicio}</a>
                

            </div>

            <div className="mx-auto">
            

                <a onClick={clickOptions} className=" text-[2rem] mx-4 text-[#000] " href="index.html#sobremi" >{texto.navbar.sobremi}</a>
            
            </div>
            <div className="mx-auto">
                <a onClick={clickOptions} className=" text-[2rem] mx-4 text-[#000]" href="index.html#proyectos">{texto.navbar.proyectos}</a>

            </div>
            <div className="mx-auto">

                <a onClick={clickOptions} className=" text-[2rem] mx-4  text-[#000]" href="index.html#contacto">{texto.navbar.contacto}</a>
            </div>
            <div className="mx-auto bg-[#d9d9d9] my-[2rem]">
            <button onClick={HandleLang} className=" mx-4 text-[2rem] text-[#000]">
                    {texto.botonIdioma}
                    </button>
            </div>
        </div>
         
       
    </div>
</div>

</>

)

}