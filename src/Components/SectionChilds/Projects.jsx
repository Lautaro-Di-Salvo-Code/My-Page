import { useContext } from "react"
import { ContextoGlobal } from "../../App"
import data from '../../ObjectData/ObjectData copy.json'
import { ArrayTech } from "./Tecnologias"
import '../SectionChilds/stylesLinksProjects.css'

const dataProjects = data.es.proyectos

export const Projects = () => {

    return (
        <>

            <div className=" flex justify-center w-full ">
                <h2 id="proyectos"
                    className="lg:pt-[5rem] pt-[2rem]  font-bold tracking-[5px]  text-[2rem] md:text-[3rem] text-titles-section-color">
                    Proyectos</h2>
            </div>
            <section className="animacionView bg-box-sections-bgcolor shadow-tech-desk  h-[187rem] md:h-[105rem] rounded-[2.4rem] mx-5  mt-[1rem] mb-[13rem] md:mx-auto max-w-maximoAnchosmallwide">
                <article className="  relative top-[3rem]  ">
                    <div className="mx-auto w-full   absolute top-0  index2">
                        <article className="h-fit gap-7 p-5 text-center ">
                            <section className=" ">
                                {
                                    dataProjects.map(e => (
                                        <article key={e.id} className="animacionView mx-auto md:grid md:grid-cols-3 py-[1rem]   ">
                                            <div className="active md:col-span-2 ">
                                                <a target="_blank" href={e.linkweb}>

                                                    <img className=" md:cursor-pointer transition duration-75 ease-linear w-[350px] mx-auto  max-h-maximoAlto-img " src={e.imagenProyecto} alt="EduSync" />
                                                </a>
                                            </div>
                                            <section>
                                                <div className="">
                                                    <p className="text-[2rem] text-[#000] font-bold">{e.tituloProyecto}</p>
                                                </div>
                                                <div className="flex justify-center flex-row  flex-wrap gap-3 h-auto w-auto">
                                                    {e.TechUsada.map(e =>
                                                        <p key={e.id} className="bg-[#7b7c83] rounded-xl p-2 text-center text-[#fff] text-[1rem]">{e.nombre}</p>
                                                    )}
                                                </div>
                                                <div className=" m-4 flex justify-evenly gap-1 ">
                                                    {
                                                        e.linkweb ?
                                                            <a target="_blank" href={e.linkweb}
                                                                className="a_links"
                                                            // className=" py-[.5rem] px-[1rem] rounded-xl bg-color-botonesproyectos md:hover:bg-hovercolor-botonesproyectos md:hover:scale-110 md:cursor-pointer transition duration-75 ease-linear  box-shadow-tech-desk"
                                                            >web</a>
                                                            : ""
                                                    }
                                                    {
                                                        e.linkRepo ?
                                                            <a target="_blank"
                                                                href={e.linkRepo}
                                                                className="a_links">codigo</a>
                                                            : ""
                                                    }
                                                    {/* <a target="_blank"
                                                        href={e.linkRepo}
                                                        className="a_links"
                                                    // className="bg-color-botonesproyectos md:hover:bg-hovercolor-botonesproyectos rounded-xl py-[.5rem] px-[1rem] md:hover:scale-110 md:cursor-pointer transition duration-75 ease-linear box-shadow-tech-desk  "
                                                    >codigo</a> */}
                                                </div>
                                            </section>
                                        </article>
                                    ))
                                }
                            </section>
                        </article>
                    </div>
                </article>
            </section>
        </>
    )
}
