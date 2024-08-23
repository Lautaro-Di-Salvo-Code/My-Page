// import { useRef } from "react"
// import {NavLink} from "react-router-dom"

import { useContext, useEffect } from "react"
import { ContextoGlobal } from "../App"

import data from "../ObjectData/ObjectData copy.json"


export const Nav = () => {

    const { texto, HandleLang } = useContext(ContextoGlobal)
    const navOptions = data.es.navbar
    const clickOptions = () => {

        document.querySelector(".nav-mobile").classList.toggle("active")
    }
    return (

        <>
            <div>
                <nav className=" fixed bg-[#0d0a0ad9] w-full hidden md:block mx-auto z-index-sup    h-[7rem] ">
                    <div className=" flex flex-row flex-wrap h-[7rem] mx-auto items-center justify-around max-w-maximoAnchosmallwide vlg:max-w-maximoAnchoUltrawide">
                        {
                            navOptions.map(e => (
                                <div key={e.id} className=" pt-[1rem] div-nav1">
                                    <a className=" cursor-pointer NavPresentacion   hover:text-[text-[#dddcdc]    md:text-[1.3rem]  vlg:text-[2rem]    mx-4"
                                        href={e.href}>{e.navOption}</a>
                                </div>
                            ))
                        }
                        {/* <div className=" pt-[1.5rem] div-nav4 NavPresentacion">
                            <button onClick={HandleLang} className="botonn cursor-pointer     mx-4  md:text-[1.3rem] ">
                                {texto.botonIdioma}
                            </button>
                        </div> */}
                    </div>
                </nav>
                {/*  barra de navegacion celular */}
                <div id="iniciO" className="nav-mobile   w-full   flex  flex-col  md:justify-center ">
                    <div
                        className="fixed bg-[#fff] top-[0rem] bottom-0 z-index-sup  h-[103dvh] flex justify-center flex-col flex-wrap content-center w-full  mx-auto">
                        {
                            navOptions.map(e => (
                                <div key={e.id}>
                                    <a  onClick={clickOptions} href={e.href} className=" flex justify-center text-[2rem] text-[#000]  mx-4">{e.navOption}</a>
                                </div>
                            ))
                        }
                        {/* <div className="mx-auto bg-[#d9d9d9] my-[2rem]">
                            <button onClick={HandleLang} className=" mx-4 text-[2rem] text-[#000]">
                                {texto.botonIdioma}
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>

        </>

    )

}