import { useContext } from "react"
import { ContextoGlobal } from "../../App"

export const Contact = () => {

    const {texto } = useContext( ContextoGlobal )
  
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
            <div className="flex justify-center w-[20rem] mx-auto">

                <b className="text-center text-[1.2rem]  leading-[3rem]  md:text-[2rem]">{texto.contacto.agradecimiento} !</b>
            </div>

        
            <article className="my-[4rem]  mx-auto max-width ">
                <div className=" gap-5 flex justify-center w-full ">

                    <div className="flex justify-center flex-col cursor-pointer">
                        <div className="flex justify-center p-[3px]">
                            
                            <a href="https://api.whatsapp.com/send?phone:5492494379804" target="_blank"/>

                                <svg className="h-[2.7rem] w-[2.7rem]" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 256 258">
                                    <path fill="#000" d="M128.534 0c34.098.017 66.102 13.29 90.167 37.383c24.066 24.092 37.312 56.12 37.299 90.174c-.028 69.579-56.076 126.318-125.36 127.446l-2.103.017h-.053c-21.005-.007-41.65-5.194-60.051-15.045l-.86-.466L0 257.233l18.083-66.055C6.93 171.852 1.061 149.922 1.07 127.455C1.098 57.178 58.279 0 128.534 0Zm.044 21.53c-58.437 0-105.964 47.523-105.987 105.936c-.008 19.712 5.424 38.921 15.719 55.612l.478.769l2.52 4.009l-10.703 39.093l40.097-10.517l3.869 2.294c16.007 9.499 34.32 14.599 53.017 14.764l.905.004h.044c58.392 0 105.918-47.526 105.942-105.943c.01-28.308-10.998-54.927-31.001-74.952c-20.003-20.024-46.603-31.06-74.9-31.07Zm-45.17 47.063c2.122 0 4.25.02 6.104.115c1.956.096 4.581-.743 7.165 5.466c.992 2.38 2.5 6.057 4.044 9.813l.331.805c2.485 6.045 4.969 12.072 5.447 13.029c.795 1.593 1.325 3.455.264 5.579c-1.06 2.127-1.593 3.454-3.184 5.316c-1.593 1.858-3.344 4.153-4.777 5.579a57.05 57.05 0 0 0-.234.233l-.232.237c-1.42 1.469-2.608 3.153-.93 6.027c1.857 3.19 8.248 13.622 17.716 22.066c12.165 10.85 22.428 14.214 25.613 15.809c3.184 1.594 5.043 1.328 6.9-.8c1.859-2.124 7.961-9.298 10.085-12.487c2.123-3.188 4.246-2.655 7.166-1.593c1.387.505 5.654 2.511 10.092 4.649l1.38.666c4.443 2.15 8.776 4.288 10.29 5.046c3.185 1.595 5.309 2.392 6.104 3.719c.796 1.33.796 7.705-1.858 15.145c-2.653 7.44-15.378 14.23-21.497 15.146c-5.487.818-12.43 1.16-20.06-1.262c-4.624-1.47-10.558-3.429-18.157-6.71c-31.948-13.794-52.815-45.966-54.406-48.09l-.108-.144c-1.941-2.594-12.898-17.445-12.898-32.804c0-15.675 8.229-23.38 11.147-26.569c2.92-3.186 6.37-3.986 8.493-3.986Z"/>
                                </svg>
                        </div>
                        <div className=" flex justify-center">
                            <b>WHATSAPP</b>
                        </div>
                    </div>

                    <div className="flex justify-center flex-col">
                        <div className="flex justify-center ">
                            <a href="mailto:lautarodisalvo5@gmail.com">

                                <svg className="h-[3rem] w-[3rem]" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1025 768">
                                    <path fill="#000" d="M960.585 768h-896q-26 0-45-19t-19-45V64q0-27 18.5-45.5T64.585 0h896q27 0 45.5 18.5t18.5 45.5v640q0 26-18.5 45t-45.5 19zm0-672q0-13-9.5-22.5t-22.5-9.5h-64q-20 0-31.5 1.5t-30 11t-37.5 28.5l-253 253l-253-253q-19-19-37.5-28.5t-29.5-11t-32-1.5h-64q-13 0-22.5 9.5t-9.5 22.5v576q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5v-33l211-210l74 74q15 15 35 7q20 8 35-7l74-74l211 210v33q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5V96zm-128 453l-166-166l166-165v331zm-640-331l166 165l-166 166V218z"/>
                                </svg>
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
        <article>
            <form action="" className="flex flex-col justify-center">
                <input className="bg-box-sections-bgcolor placeholder:text-[#000]"  type="email" name="" id="" placeholder="Email "/>
                <textarea className="bg-box-sections-bgcolor placeholder:text-[#000]" name="" id="" cols="30" rows="10"
                placeholder={texto.contacto.placeholdertextarea}></textarea>
                <button className=" text-[#2f2e2e]  w-[6rem] mx-auto  h-[3rem] ">{texto.contacto.enviar}</button>
            </form>
            
        </article>
    </section>
   
    </>
  )
}
