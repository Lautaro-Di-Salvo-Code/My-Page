import { useContext } from "react"
import { ContextoGlobal } from "../../App"

export const Aboutme = () => {

    const {texto  } = useContext( ContextoGlobal )


  return (
    <>

<div className=" flex justify-center w-full  ">
    <h2 
        className="my-[2rem] text-tamaño-letra-titulosDeSecciones font-bold tracking-[5px] md:text-[3rem]  text-titles-section-color">
        {texto.sobreMi.titulo}</h2>
</div>

<article className="w-full   rounded-3xl  ">



    <p className=" flex justify-center w-full text-[1.3rem] my-[5px] md:text-[2rem] text-titles-section-color">{texto.sobreMi.tecnologias}</p>

    <section className=" flex flex-wrap justify-center mx-auto  mb-[1rem]  gap-[7px]  max-w-maximoAnchosmallwide">
        <div className="flex justify-center flex-col   bg-box-sections-bgcolor dimensiones-cajas-tech  rounded-xl shadow-tech">
            <div className="flex justify-center">
                <img 
                className="ancho-imagenes-tech " src="../../assets/html.svg"/>
                

            </div>
            <div>
                <p className="text-center  text-[1rem] font-semibold text-[#000] ">HTML</p>

            </div>
        </div>
        <div
            className="flex justify-center flex-col  md:cursor-pointer  bg-box-sections-bgcolor dimensiones-cajas-tech  rounded-xl shadow-tech">
            <div className="flex justify-center">
                <img 
                className="ancho-imagenes-tech " src="../../assets/css.svg"/>
                

            </div>
            <div>
                <p className="text-center  text-[1rem] font-semibold text-[#000]">CSS</p>

            </div>
        </div>
        <div
            className="flex justify-center flex-col  md:cursor-pointer  bg-box-sections-bgcolor dimensiones-cajas-tech  rounded-xl shadow-tech">
            <div className="flex justify-center">
                <img 
                className="ancho-imagenes-tech " src="../../assets/js.svg"/>
                

            </div>
            <div>
                <p className="text-center  text-[1rem] font-semibold text-[#000]">JavaScript</p>

            </div>
        </div>
        <div className="flex justify-center flex-col   bg-box-sections-bgcolor dimensiones-cajas-tech  rounded-xl shadow-tech">
            <div className="flex justify-center"><img 
            className="ancho-imagenes-tech "
                    src="../../assets/react.svg"/>
                    </div>
            <div>
                <p className="text-center  text-[1rem] font-semibold text-[#000]">React Js</p>
            </div>

        </div>
        <div className="flex justify-center flex-col   bg-box-sections-bgcolor dimensiones-cajas-tech  rounded-xl shadow-tech">
            <div className=" flex justify-center"><img 
            className="ancho-imagenes-tech "
                src="../../assets/tailwind.svg"/>
                </div>
                <div>
                    <p className="text-center text-[1rem] font-semibold text-[#000]">Tailwind</p>
                </div>
                
        </div>
        <div
            className="flex justify-center flex-col md:cursor-pointer  bg-box-sections-bgcolor dimensiones-cajas-tech  rounded-xl shadow-tech">
            <div className="flex justify-center"><img 
            className="ancho-imagenes-tech "
                    src="../../assets/sass.svg"/>
                    </div>
            <div>
                <p className="text-center  text-[1rem] font-semibold text-[#000]">Sass</p>
            </div>


        </div>
        <div className="flex justify-center flex-col   bg-box-sections-bgcolor dimensiones-cajas-tech  rounded-xl shadow-tech">
            <div className="flex justify-center "><img 
            className="  ancho-imagenes-tech "
                src="../../assets/git.svg"/>
                </div>
                <div>
                    <p className="text-center  text-[1rem] font-semibold text-[#000]"> Git </p>
                </div>
                
            </div>
        <div className="flex justify-center flex-col   bg-box-sections-bgcolor dimensiones-cajas-tech  rounded-xl shadow-tech">
            <div className="flex justify-center "><img 
            className="  h-auto w-[4rem] md:w-[5rem] lg:w-[5.5rem]"
                    src="../../assets/node.svg"/>
                    </div>

        
        </div>
        

        <div className="flex justify-center flex-col   bg-box-sections-bgcolor dimensiones-cajas-tech  rounded-xl shadow-tech">
            <div className="flex justify-center">
              <img 
            className=" ancho-imagenes-tech "
                    src="../../assets/figma.svg"/>
                    </div>
            <div>
                <p className="text-center  text-[1rem] font-semibold text-[#000]">Figma</p>
            </div>

        </div>
        <div className="flex justify-center flex-col   bg-box-sections-bgcolor dimensiones-cajas-tech  rounded-xl shadow-tech">
            <div className="flex justify-center "><img 
            className="  ancho-imagenes-tech  "
                    src="../../assets/premiere.svg"/>
                    </div>
            <div>
                <p className="text-center  text-[1rem] font-semibold text-[#000]">Premiere </p>
            </div>

        </div>
        <div className="flex justify-center flex-col   bg-box-sections-bgcolor dimensiones-cajas-tech  rounded-xl shadow-tech">
            <div className="flex justify-center ">
              <img 
              className="  ancho-imagenes-tech  "src="../../assets/wix.svg"/>
              

            </div>
        </div>
        </section>
</article>





    </>
  )
}
