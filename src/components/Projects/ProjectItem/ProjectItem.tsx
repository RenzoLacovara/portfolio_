import React, { useRef, useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { TbWorld } from 'react-icons/tb'
import { RevealWrapper } from 'next-reveal'
import Image from 'next/image'
import { proyecto } from '../../../utility/data/data'
import { ReadonlyProps } from '../../../utility/types/type'
import Modal from '../../Modal'
import useModal from '../../../hooks/useModal'
interface Props {
  proyectos: proyecto
}
type ReadonlyComponent = ReadonlyProps<Props>
export default function ProjectItem({ proyectos }: ReadonlyComponent) {
  const { src, modalRef, zoomImg, handleClose } = useModal()
  return (
    <div className="project w-[95%] m-auto flex flex-col gap-10 sm:gap-10 xl:gap-14 my-7">
      {proyectos.map((proyecto) => (
        <div
          key={proyecto.titulo}
          className="flex flex-col items-center justify-center lg:flex-row lg:even:flex-row-reverse projectdiv"
        >
          <RevealWrapper
            origin="left"
            delay={200}
            duration={1000}
            easing="ease-in-out"
            distance="500px"
            reset={false}
            mobile={false}
            className="imgcontainer w-full sm:w-[35rem] h-48 sm:h-80 relative"
          >
            <Image
              width={700}
              height={425}
              src={proyecto.imagen}
              alt={proyecto.titulo}
              className="projectimg small:w-[35rem] sm:h-80 rounded-t-2xl  sm:rounded-2xl object-cover h-full sm:w-full transition-all duration-200 ease-in-out cursor-zoom-in "
              onClick={zoomImg}
            />
          </RevealWrapper>

          <RevealWrapper
            origin="right"
            delay={200}
            duration={1000}
            distance="500px"
            reset={false}
            mobile={false}
            className="sm:h-60 sm:w-[25rem] bg-secundariod rounded-b-3xl sm:rounded-3xl text-center projecttext flex flex-col justify-between w-full sm:mt-[-5rem] lg:mt-0 lg:ml-[-5rem] shadow-card "
          >
            <div className="flex flex-col items-center justify-center gap-2 px-6 pt-6 ">
              <h3 className="text-xl border-b-[1px] border-principal px-4 ">
                {proyecto.titulo}
              </h3>
              <p className="text-xs small:text-base">{proyecto.descripcion}</p>
              <ul className="flex-wrap items-center justify-center hidden gap-2 sm:flex">
                {proyecto.herramientas.map((herramienta) => (
                  <li
                    key={herramienta}
                    className={`${herramienta} text-xs rounded-2xl px-3 pt-1`}
                  >
                    {herramienta}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center gap-4 p-6">
              <a
                href={proyecto.link}
                target="_blank"
                className="flex bg-principal text-secundario pt-1 pb-[2px] px-3 rounded-2xl text-base items-center hover:bg-detalled hover:text-principal"
              >
                Site
                <TbWorld className="mb-1 ml-1" />
              </a>
              <a
                href={proyecto.github}
                target="_blank"
                className="flex bg-principal text-secundario pt-1 pb-[2px] px-3 rounded-2xl text-base items-center justify-center hover:bg-detalled hover:text-principal"
              >
                Repo
                <FaGithub className="mb-1 ml-1" />
              </a>
            </div>
          </RevealWrapper>
          <Modal handleClose={handleClose} src={src} ref={modalRef} />
        </div>
      ))}
    </div>
  )
}
