import React from 'react'
import Certificados from './Certificados/Certificados'
import { certificadosData } from '../../../../utility/data/data'

export default function Certification() {
  return (
    <div>
      <div className="w-full h-40 bg-no-repeat bg-cover bg-waveup"></div>
      <div className="pt-10 bg-no-repeat bg-cover bg-waves" id="certificados">
        <p className="inline-block text-base font-caveat text-secundariod md:ml-10">
          &#60;h2&#62;
        </p>
        <h3 className="inline-block ml-1 ext-2xl drop-shadow-subtitleLight md:text-3xl ">
          Certifications
        </h3>
        <p className="inline-block ml-1 text-base font-caveat text-secundariod">
          &#60;/h2&#62;
        </p>
        <p className="block text-base font-caveat text-secundariod md:ml-10">
          &#60;p&#62;
        </p>
        <p className="mx-3 text-sm text-center md:text-xl md:mx-20 small:text-left">
          I am always looking to learn a little more and grow as professional, I
          have taken several courses and programs to be able to expand my tools
          and guarantee the solution of any problem I find in the path
        </p>
        <p className="block text-base font-caveat text-secundariod md:ml-10">
          &#60;/p&#62;
        </p>
        <p className="block ml-4 text-base font-caveat text-secundariod md:ml-14">
          &#60;section&#62;
        </p>

        <Certificados certificados={certificadosData} />

        <p className="block ml-4 text-base font-caveat text-secundariod md:ml-14">
          &#60;/section&#62;
        </p>
        <div className="flex items-center justify-center text-center ">
          <p className="inline-block text-base font-caveat text-secundariod">
            &#60;a&#62;
          </p>
          <a
            href="https://www.linkedin.com/in/renlacovara/details/certifications/"
            target="_blank"
            className="group flex justify-center items-center w-40 sm:w-44 relative text-sm sm:text-base mx-3 py-2 px-4 rounded-[50px] bg-principal text-[#E54D26] overflow-hidden after:w-0 after:h-full after:content-[' '] after:bg-detalled after:transition-all after:duration-[.4s] after:ease-in-out after:right-0 after:absolute  after:hover:right-auto after:hover:left-0 after:hover:w-full"
            rel="noopener noreferrer"
            aria-label="See more certifications on my linkedin account"
          >
            <span className="z-20 pt-1 transition-all duration-[.4s] ease-in-out group-hover:animate-scaleUp group-hover:text-secundario ">
              More certifications
            </span>
          </a>
          <p className="inline-block text-base font-caveat text-secundariod">
            &#60;/a&#62;
          </p>
        </div>
      </div>
      <div className="w-full h-40 bg-no-repeat bg-cover bg-wavedown"></div>
    </div>
  )
}
