import { ContextoGlobal } from "../App"
import { Nav } from "./Nav"
import { useContext } from "react"
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";

export const Header = () => {





  const { texto } = useContext(ContextoGlobal)

  return (
    <header id="inicio" className="bg-yoCodeando   bg-no-repeat bg-center relative top-[-2rem] bg-cover h-[104dvh] ">
      <Nav />
      <div
        className="absolute z-index-menor  top-[6rem] flex justify-center flex-wrap content-center flex-col m-auto w-full   h-[81dvh]">

        <div className=" flex justify-center">
          <h5 className="  text-[1.8rem] md:text-[3rem] vlg:text-[3.7rem] ">{texto.header.saludo}</h5>

        </div>
        <div className="flex justify-center ">
          <h1 className="   text-[9vw] md:text-[3rem]  vlg:text-[3.7rem]  " name="Lautaro Di Salvo">{texto.header.nombre} <b>Lautaro Di Salvo</b>
          </h1>

        </div>
        <div>
          <h2 className="es    flex flex-row flex-wrap content-center justify-center text-[8vw] md:text-[3rem]  vlg:text-[3.7rem]">
            <b className="flex flex-wrap content-center  ">
              <img className=" h-[1rem]  md:h-[2.5rem] lg:h-[3rem]"
                src="../../assets/pico-abre.svg" name="Front-End Developer" alt="" />
            </b>

            {texto.header.profesion}

            <b className="flex flex-wrap content-center"><img className=" h-[1rem]  md:h-[2.5rem] lg:h-[3rem]"
              src="../../assets/pico-cierre.svg" alt="" /></b>
          </h2>


        </div>
        {/* escritorio */}
        <div className="hidden sm:block  ">
          <div className="mx-4   ">

            <section className="flex justify-center items-center gap-7">
              <a target="_blank" href="https://www.linkedin.com/in/lautaro-di-salvo-bb2308285/">
                <button
                  href="/"
                  className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#0077b5] from-gray-800 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1rem"
                    height="1rem"
                    viewBox="0 0 512 512"
                    strokeWidth="0"
                    fill="currentColor"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"
                    ></path>
                  </svg>
                  <span
                    className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700"
                  >
                    LinkedIn
                  </span>
                </button>
              </a>
              <section className="flex justify-center items-center">
                <a target="_blank" href="https://github.com/Lautaro-Di-Salvo-Code">
                  <button
                    href="/"
                    className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#7a8083] from-gray-800 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1.1em"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.17c-3.338.726-4.043-1.61-4.043-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.082-.729.082-.729 1.204.085 1.837 1.236 1.837 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.775.419-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.467-2.382 1.235-3.22-.123-.303-.535-1.526.117-3.176 0 0 1.008-.322 3.301 1.23a11.511 11.511 0 0 1 3.003-.404c1.018.005 2.042.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.654 1.65.242 2.873.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.805 5.624-5.476 5.92.43.37.823 1.102.823 2.222v3.293c0 .319.191.692.8.575C20.565 21.797 24 17.298 24 12c0-6.627-5.373-12-12-12z"
                      />
                    </svg>


                    <span
                      className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700"
                    >
                      Github
                    </span>
                  </button>
                </a>
              </section>

            </section>

          </div>
        </div>
        {/* celular */}
        <div className="sm:hidden">
          <section className=" flex flex-row justify-center">
            <div className=" mx-4 md:hover:scale-105 rounded-full  ">
              <a target="_blank" href="https://github.com/Lautaro-Di-Salvo-Code">
                <FiGithub className="text-[3rem]" />
              </a>
            </div>
            <div className="mx-4 md:hover:scale-105 ">
              <a target="_blank" href="https://www.linkedin.com/in/lautaro-di-salvo-bb2308285/">
                <FaLinkedinIn className="text-[3rem]" />
              </a>
            </div>
          </section>
        </div>
        {/* <section className=" flex flex-row justify-center">
          <div className=" mx-4 md:hover:scale-105 rounded-full  ">

          </div>


        </section> */}
        <section className=" flex flex-row justify-center mt-5 ">

          <a href="https://drive.google.com/file/d/1nC1wqn5IuZ83UbDqLFIgTfixuXVu3UlX/view?usp=sharing" target="_blank"
            className=" flex flex-wrap justify-center content-center rounded-[2rem]    bg-[#040405a5] w-[4rem] h-[2rem]  text-[1.6rem] md:w-[6rem] md:h-[3rem] lg:h-[3.4rem]  font-family-mochi transition-all 1s  md:hover:scale-105">CV
          </a>
        </section>

      </div >
    </header >


  )
}
