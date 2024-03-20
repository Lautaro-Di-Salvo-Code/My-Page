import { useContext } from "react"
import { ContextoGlobal } from "../../App"

export const Projects = () => {

    const {texto } = useContext( ContextoGlobal )

  return (
    <>
    
    <div className=" flex justify-center w-full ">
        <h2 id="proyectos"
            className=" lg:pt-[5rem] pt-[2rem]  font-bold tracking-[5px]  text-[2rem]
            md:text-[3rem]  text-titles-section-color">
           {texto.proyectos.titulo}</h2>
    </div>

    <section className=" bg-box-sections-bgcolor shadow-tech-desk  h-[128rem] md:h-[81rem] rounded-[2.4rem] mx-5  mt-[1rem] mb-[13rem] md:mx-auto max-w-maximoAnchosmallwide">
        <article className="  relative top-[3rem]  ">
            <div className="mx-auto w-full   absolute top-0  index2">

                <article className=" gap-7 p-5 text-center ">

                    <section className=" ">


                        {/* <!-- proyecto espacio --> */}
                        <article className="mx-auto md:grid md:grid-cols-3 py-[1rem]   border-projects">
                            <div className="active md:col-span-2 ">
                                <a target="_blank" href="https://search-country-web.netlify.app/#/All">

                                <img className="md:hover:scale-110 md:cursor-pointer transition duration-75 ease-linear  w-auto mx-auto  max-h-maximoAlto-img " src="../../assets/SearchCountry.png" alt="proyecto busqueda paises"/>
                                </a>

                            </div>
                            <section>

                                <div className="">
                                    <p className="text-[2rem] text-[#000] font-bold">{texto.proyectos.searchcountry}</p>
                                </div>
                                <div className=" ">

                                <div className=" gap-2 grid  grid-cols-2  max-w-maximoAnchosmallwide  mx-auto"> 
                                        <div className="flex justify-center flex-col ">
                                            <div className="flex justify-center">

                                            </div>
                                            <div className=" bg-[#3d8af6]">
                                                <p className="text-center   text-[1.2rem]">React Js</p>

                                            </div>
                                        </div>
                                        <div className="flex justify-center flex-col ">
                                            <div className="flex justify-center">

                                            </div>
                                            <div className="pastilla-tailwind bg-[#3fe1f6]">
                                                <p className="text-center text-[#000] text-[1.2rem]">Tailwind</p>

                                            </div>
                                        </div>
                                        

                                    </div>



                                </div>
                                <div className=" m-4 flex justify-evenly gap-1 ">

                                    <a target="_blank" href="https://search-country-web.netlify.app/#/All"
                                        className=" py-[.5rem] px-[1rem] rounded-xl bg-color-botonesproyectos md:hover:bg-hovercolor-botonesproyectos md:hover:scale-110 md:cursor-pointer transition duration-75 ease-linear  box-shadow-tech-desk">WEB</a>

                                    <a target="_blank"
                                        href="https://github.com/Lautaro-Di-Salvo-Code/search-country"
                                        className="bg-color-botonesproyectos md:hover:bg-hovercolor-botonesproyectos rounded-xl py-[.5rem] px-[1rem] md:hover:scale-110 md:cursor-pointer transition duration-75 ease-linear box-shadow-tech-desk  ">{texto.proyectos.codigo}</a>
                                </div>
                            </section>
                        </article>
                       
                        {/* <!-- portfolio --> */}
                        <article className="mx-auto ancho-proyectos md:grid md:grid-cols-3 py-[1rem]   border-projects">
                            <div className="active  md:col-span-2">
                                <img className="md:hover:scale-110 md:cursor-pointer transition duration-75 ease-linear w-auto mx-auto max-h-maximoAlto-img" src="../../assets/imagen-portfolio-proyecto.png"
                                    alt=""/>

                            </div>
                            <section className="">
                                <div className="projects-text-color">
                                    <p className="text-[2rem] text-[#000] font-bold">{texto.proyectos.portfolio} </p>
                                </div>
                                <div className=" info-projects">


                                    <div className=" gap-2 grid  grid-cols-2  max-w-maximoAnchosmallwide  mx-auto"> 
                                        <div className="flex justify-center flex-col ">
                                            <div className="flex justify-center">

                                            </div>
                                            <div className=" bg-[#3d8af6]">
                                                <p className="text-center   text-[1.2rem]">React Js</p>

                                            </div>
                                        </div>
                                        <div className="flex justify-center flex-col ">
                                            <div className="flex justify-center">

                                            </div>
                                            <div className="pastilla-tailwind bg-[#3fe1f6]">
                                                <p className="text-center text-[#000] text-[1.2rem]">Tailwind</p>

                                            </div>
                                        </div>
                                        

                                    </div>



                                </div>
                                <div className=" m-4 flex justify-evenly gap-1">
                                
                                   

                                    <a target="_blank" href="https://github.com/Lautaro-Di-Salvo-Code/My-Page"
                                        className=" py-[.5rem] rounded-xl px-[1rem] bg-color-botonesproyectos md:hover:bg-hovercolor-botonesproyectos md:cursor-pointer md:hover:scale-110  transition duration-75 ease-linear  box-shadow-tech-desk">{texto.proyectos.codigo}</a>
                                </div>
                            </section>
                        </article>
                        <article className="mx-auto md:grid md:grid-cols-3 py-[1rem]  border-projects">
                            <div className="active md:col-span-2">
                                <a target="_blank" href="https://turismo-espacial-practica-front.netlify.app/">

                                <img className="md:hover:scale-110 md:cursor-pointer transition duration-75 ease-linear  w-auto mx-auto  max-h-maximoAlto-img " src="../../assets/space.png" alt=""/>
                                </a>

                            </div>
                            <section>

                                <div className="">
                                    <p className="text-[2rem] text-[#000] font-bold">{texto.proyectos.turismoespacial}</p>
                                </div>
                                <div className=" ">

                                    <div className="grid grid-cols-3   gap-2 max-w-maximoAnchosmallwide  mx-auto">
                                        <div className="flex justify-center flex-col ">

                                            <div className="  bg-[#f42e2e]">
                                                <p className=" text-center text-[1.2rem]">HTML</p>

                                            </div>
                                        </div>
                                        <div className="flex justify-center flex-col ">

                                            <div className=" bg-[#4352dc]">
                                                <p className="text-center  text-[1.2rem]">CSS</p>

                                            </div>
                                        </div>
                                        <div className="flex justify-center flex-col ">
                                            <div className="flex justify-center">

                                            </div>
                                            <div className=" bg-[#fff93f]">
                                                <p className="text-center  text-[#000] text-[1.2rem]">JavaScript</p>

                                            </div>
                                        </div>
                                    </div>



                                </div>
                                <div className=" m-4 flex justify-evenly gap-1 ">

                                    <a target="_blank" href="https://turismo-espacial-practica-front.netlify.app/"
                                        className=" py-[.5rem] px-[1rem] rounded-xl bg-color-botonesproyectos md:hover:bg-hovercolor-botonesproyectos md:hover:scale-110 md:cursor-pointer transition duration-75 ease-linear  box-shadow-tech-desk">WEB</a>

                                    <a target="_blank"
                                        href="https://github.com/Lautaro-Di-Salvo-Code/proyecto-turismo-espacial"
                                        className="bg-color-botonesproyectos md:hover:bg-hovercolor-botonesproyectos rounded-xl py-[.5rem] px-[1rem] md:hover:scale-110 md:cursor-pointer transition duration-75 ease-linear box-shadow-tech-desk  ">{texto.proyectos.codigo}</a>
                                </div>
                            </section>
                        </article>
                        {/* <!-- pizzeria --> */}
                        <article className="mx-auto md:grid md:grid-cols-3 py-[1rem] border-projects">

                            <div className="active md:col-span-2">
                                <a href="https://lautarodisalvosmco.wixsite.com/prueba1smc" target="_blank">

                                <img className="md:hover:scale-110 md:cursor-pointer transition duration-75 ease-linearh-auto w-[18rem] md:w-[22rem] mx-auto " src="../../assets/frame crocante.png"
                                    alt=""/>
                                    </a>
    
                            </div>
                            <section>
                                
                                <div className="projects-text-color">
                                    <p className="text-[2rem] text-[#000] font-bold">{texto.proyectos.pizzeria} </p>
                                </div>
                                <div className="flex justify-center max-w-maximoAnchosmallwide py-4 mx-auto flex-col ">
                                    <div className="flex justify-center ">

                                        <img className=" transition duration-75 ease-linear h-[4rem] " src="../../assets/wix.svg" alt=""/>
                                        
                                    </div>
                                </div>
                                <div className=" m-4 flex justify-center gap-1">
        
                                    <a target="_blank" href="https://lautarodisalvosmco.wixsite.com/prueba1smc"
                                        className="py-[.5rem] px-[1rem] rounded-xl  bg-color-botonesproyectos md:hover:bg-hovercolor-botonesproyectos  md:hover:scale-110 md:cursor-pointer transition duration-75 ease-linear box-shadow-tech-desk ">
                                        WEB
                                    </a>
        
                                    
                                </div>
                            </section>
                        </article>

                        {/* <!-- odontologia --> */}
                        <article className="mx-auto md:grid md:grid-cols-3  py-[1rem] ">

                            <div className="active  md:col-span-2">
                                <a target="_blank" href="https://lautarodisalvosmco.wixsite.com/farmacia-centrosalud">

                                <img className="md:hover:scale-110 md:cursor-pointer transition duration-75 ease-linear  h-auto w-[18rem] md:w-[22rem] mx-auto " src="../../assets/frame odontologia.png"
                                    alt=""/>
                                    </a>
    
                            </div>
                            <section>
                                
                                <div className="projects-text-color">
                                    <p className="text-[2rem] text-[#000] font-bold">{texto.proyectos.odontologia} </p>
                                </div>
                                <div className="flex justify-center max-w-maximoAnchosmallwide py-4 mx-auto flex-col ">
                                    <div className="flex justify-center ">

                                        <img className=" transition duration-75 ease-linear h-[4rem] " src="../../assets/wix.svg" alt=""/>
                                
                                    </div>
                                </div>
                                <div className=" m-4 flex justify-evenly gap-1">
        
                                    <a target="_blank" href="https://lautarodisalvosmco.wixsite.com/farmacia-centrosalud"
                                        className="py-[.5rem] px-[1rem] rounded-xl bg-color-botonesproyectos md:hover:bg-hovercolor-botonesproyectos md:hover:scale-110 md:cursor-pointer transition duration-75 ease-linear  box-shadow-tech-desk ">
                                        WEB
                                    </a>
        

                                </div>
                            </section>
                        </article>




                    </section>
                </article>





            </div>
        </article>

    </section>
    
    </>
  )
}
