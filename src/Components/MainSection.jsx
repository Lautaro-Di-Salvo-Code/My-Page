
import { useContext } from "react"
import { Aboutme } from "./SectionChilds/Aboutme"
import { Contact } from "./SectionChilds/Contact"
import { Projects } from "./SectionChilds/Projects"
import { ContextoGlobal } from "../App"

export const Main = () => {


    const {texto  } = useContext( ContextoGlobal )

    
  return (
    <>
<section id="sobremi" className=" lg:pt-[5rem] pt-[1rem] my-margin-secciontexto-global ">


    <Aboutme />


    <article
        className="box-shadow-aboutme rounded-[2.4rem] bg-box-sections-bgcolor mx-auto w-full md:mx-auto relative top-[5rem]  mb-[13rem] max-w-maximoAnchosmallwide ">

        <div className="mx-auto  w-full md:grid md:grid-cols-3 ">

            <article className=" flex justify-center p-[23px] md:p-[1.6rem] w-full  text-center md:col-span-2">
                <p className="text-[1.2rem] md:text-[24px] text-black leading-8  text-[#000] font-semibold">
                    <b className="w-full text-[2rem]  text-black  md:text-[2rem] " aria-description={texto.sobreMi.experiencia}>{texto.sobreMi.experiencia}</b>  <br />
                    {texto.sobreMi.sobremi1} <br />  {texto.sobreMi.sobremi2}<br />{texto.sobreMi.oferta1} <br />  {texto.sobreMi.busquedalaboralmia}
                </p>
            </article>



            <article  className="flex justify-center flex-wrap py-[25px] content-center flex-grow">
                <img className="h-auto  rounded-full ssm:w-[16rem]  md:p-[2rem] md:w-[21rem]"
                    src="../../assets/imagen-mia2024.png" alt=""/>
            </article>




        </div>
    </article>
</section>

    <Projects  />
    <Contact />
    

</>

   




  )
}
