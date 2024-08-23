import { useContext } from "react"
import { ContextoGlobal } from "../../App"
import { FaWhatsapp } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
export const Contact = () => {

    const { texto } = useContext(ContextoGlobal)

    return (
        <>
            <div className=" flex justify-center w-full ">
                <h2 id="contacto"
                    className=" lg:pt-[5rem] pt-[2rem]  
            font-bold tracking-[5px]  text-[2rem]
            md:text-[3rem]   text-titles-section-color">
                    {texto.contacto.titulo}</h2>
            </div>

            <section className="my-margin-secciones-global md:grid md:grid-cols-2 mt-[1rem]
     mb-[6rem] bg-box-sections-bgcolor rounded-xl mx-[1rem] md:mx-auto p-[1rem]  max-w-maximoAnchosmallwide box-shadow-form">

                <div className=" md:grid md:place-items-center">


                    <article>
                        <div className="flex justify-center w-[62%] mx-auto">

                            <b className="text-center text-[1.2rem] text-pretty  leading-[3rem]  md:text-[2rem]">{texto.contacto.agradecimiento} !</b>
                        </div>


                        <article className="my-[4rem]  mx-auto max-width ">
                            <div className=" gap-5 flex justify-center w-full ">

                                <div className="flex justify-center flex-col cursor-pointer">
                                    <div className="flex justify-center p-[3px]">

                                        <a href="https://api.whatsapp.com/send?phone=5492494379804" target="_blank">

                                            <FaWhatsapp className="h-auto w-[3rem] drop-shadow-2xl text-[#636363]" />
                                        </a>
                                    </div>
                                    <div className=" flex justify-center">
                                        <b>WHATSAPP</b>
                                    </div>
                                </div>

                                <div className="flex justify-center flex-col">
                                    <div className="flex justify-center ">
                                        <a href="mailto:lautarodisalvo5@gmail.com">

                                            <MdAttachEmail className="h-auto w-[3rem] drop-shadow-2xl text-[#636363]" />
                                        </a>
                                    </div>
                                    <div className="flex justify-center">
                                        <b>GMAIL</b>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </article>
                </div>
                <form action="https://formspree.io/f/xzbnapnk" method="POST" className="flex flex-col justify-center">
                    <input className="bg-box-sections-bgcolor placeholder:px-[1.5rem] placeholder:text-[#000]"
                        type="text" name="first name" id="first name" placeholder={texto.contacto.nombre} />
                    <input className="bg-box-sections-bgcolor placeholder:px-[1.5rem] placeholder:text-[#000]"
                        type="text" name="last name" id="last name" placeholder={texto.contacto.apellido} />
                    <input className="bg-box-sections-bgcolor placeholder:px-[1.5rem] placeholder:text-[#000]"
                        type="email" name="email" id="email" placeholder="Email " />
                    <textarea className="bg-box-sections-bgcolor placeholder:px-[1.5rem] placeholder:text-[#000]"
                        name="message" id="message" cols="30" rows="10"
                        placeholder={texto.contacto.placeholdertextarea}></textarea>
                    <button className=" text-[#2f2e2e]   w-[6rem] mx-auto  h-[3rem] ">{texto.contacto.enviar}</button>
                </form>

            </section>

        </>
    )
}
