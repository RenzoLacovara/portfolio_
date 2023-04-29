import React from 'react'
import Certificados from './Certificados/Certificados'
import { certificadosData } from '../../utility/data/data'

export default function Certification() {
  return (
    <div>
      <div className=" h-40 w-full bg-waveup bg-cover bg-no-repeat "></div>
      <div className="bg-waves bg-cover bg-no-repeat pt-10" id="certificados">
        <p className="inline-block font-caveat text-secundariod text-base md:ml-10">
          &#60;h2&#62;
        </p>
        <h2 className="ext-2xl drop-shadow-subtitleLight inline-block ml-1 md:text-3xl ">
          Certifications
        </h2>
        <p className="inline-block font-caveat text-secundariod text-base ml-1">
          &#60;/h2&#62;
        </p>
        <p className="block font-caveat text-secundariod text-base md:ml-10">
          &#60;p&#62;
        </p>
        <p className="text-sm mx-3 text-center md:text-xl md:mx-20 small:text-left">
          I am always looking to learn a little more and grow as professional, I
          have taken several courses and programs to be able to expand my tools
          and guarantee the solution of any problem I find in the path
        </p>
        <p className="block font-caveat text-secundariod text-base md:ml-10">
          &#60;/p&#62;
        </p>
        <p className="block font-caveat text-secundariod text-base ml-4 md:ml-14">
          &#60;section&#62;
        </p>

        <Certificados certificados={certificadosData} />

        <p className="block font-caveat text-secundariod text-base ml-4 md:ml-14">
          &#60;/section&#62;
        </p>
        <div className="text-center flex items-center justify-center ">
          <p className="inline-block font-caveat text-secundariod text-base">
            &#60;a&#62;
          </p>
          <a
            href="https://www.linkedin.com/in/renlacovara/details/certifications/"
            target="_blank"
            className="enlace flex justify-center items-center w-36 relative text-base mx-3 py-2 px-4 rounded-[50px] bg-principal text-[#E54D26] overflow-hidden after:w-0 after:h-full after:content-[' '] after:bg-detalled after:transition-all after:duration-[.4s] after:ease-in-out after:right-0 after:absolute  after:hover:right-auto after:hover:left-0 after:hover:w-full"
            rel="noopener noreferrer"
          >
            <span className="z-20  transition-all duration-[.4s] ease-in-out ">
              See more
            </span>
          </a>
          <p className="inline-block font-caveat text-secundariod text-base">
            &#60;/a&#62;
          </p>
        </div>
      </div>
      <div className=" h-40 w-full bg-wavedown bg-cover bg-no-repeat"></div>
    </div>
  )
}
