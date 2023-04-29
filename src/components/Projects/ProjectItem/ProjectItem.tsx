import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { TbWorld } from 'react-icons/tb'
import { RevealWrapper } from 'next-reveal'
import Image from 'next/image'
import { proyecto } from '../../../utility/data/data'
type Props<C extends React.ElementType> = {
  proyectos: proyecto
  as?: C
} & React.ComponentPropsWithoutRef<C>
export default function ProjectItem<C extends React.ElementType>({
  proyectos,
  as,
  ...rest
}: Props<C>) {
  return (
    <div className="project w-[95%] m-auto flex flex-col gap-10 sm:gap-10 xl:gap-14 my-7">
      {proyectos.map((proyecto) => (
        <div className="flex flex-col lg:flex-row justify-center items-center lg:even:flex-row-reverse projectdiv">
          <RevealWrapper
            origin="left"
            delay={200}
            duration={1000}
            easing="ease-in-out"
            distance="500px"
            reset={true}
            mobile={false}
            className="imgcontainer w-full sm:w-[35rem] h-48 sm:h-80"
          >
            <Image
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              src={proyecto.imagen}
              alt={proyecto.titulo}
              className="projectimg small:w-[35rem] sm:h-80 rounded-t-2xl  sm:rounded-2xl object-cover h-full sm:w-full transition-all duration-200 ease-in-out "
            />
          </RevealWrapper>

          <RevealWrapper
            origin="right"
            delay={200}
            duration={1000}
            distance="500px"
            reset={false}
            mobile={false}
            className="sm:h-60 sm:w-[25rem] bg-secundariod rounded-b-3xl sm:rounded-3xl text-center projecttext flex flex-col justify-between w-full sm:mt-[-5rem] lg:mt-0 lg:ml-[-5rem] shadow-card"
          >
            <div className="flex flex-col justify-center items-center gap-2 px-6 pt-6">
              <h3 className="text-xl border-b-[1px] border-principal px-4">
                {proyecto.titulo}
              </h3>
              <p className="text-xs small:text-base">{proyecto.descripcion}</p>
              <ul className="hidden sm:flex justify-center items-center gap-2 flex-wrap">
                {proyecto.herramientas.map(
                  (herramienta) => (
                    console.log(herramienta),
                    (
                      <li
                        className={`${herramienta} text-xs rounded-2xl px-3 pt-1`}
                      >
                        {herramienta}
                      </li>
                    )
                  )
                )}
              </ul>
            </div>
            <div className="flex justify-center items-center gap-4 p-6">
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
        </div>
      ))}
    </div>
  )
}
