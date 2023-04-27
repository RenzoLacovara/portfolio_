import React from 'react'
import { useRender } from '../../../hooks/useRender'
import { MdViewComfy } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'

type Props<C extends React.ElementType> = {
  proyectos: {
    imagen: string
    titulo: string
    descripcion: string
    herramientas: string[]
    link: string
    linkRepo: string
    class: string
  }[]
  as?: C
} & React.ComponentPropsWithoutRef<C>
export default function ProjectItem<C extends React.ElementType>({
  proyectos,
  as,
  ...rest
}: Props<C>) {
  return (
    <div className="w-[95%] m-auto flex flex-col gap-10">
      {proyectos.map((proyecto) => (
        <div className="project flex">
          <div className="md:w-2/4 grid place-items-center relative z-[1]">
            <div
              key={proyecto.titulo}
              className={
                proyecto.class +
                ` w-[30rem] relative after:content-[''] after:absolute after:inset-[-5px]  after:translate-y-[10px] after:z-[-1] after:filter after:blur-lg after:h-full after:opacity-30 after:left-[-20px] after:w-[28rem] after:transition-all after:ease-in-out after:duration-300 projectdiv`
              }
            >
              <img
                src={proyecto.imagen}
                alt={proyecto.titulo}
                className="projectimg w-[30rem] z-20 rounded-2xl"
              />
            </div>
          </div>
          <div className="md:w-2/4">
            <h3>{proyecto.titulo}</h3>
            <p>{proyecto.descripcion}</p>
            <ul>
              {proyecto.herramientas.map((herramienta) => (
                <li className={herramienta}>{herramienta}</li>
              ))}
            </ul>
            <div className="flex">
              <a href={proyecto.link} className="flex">
                Site
                <MdViewComfy />
              </a>
              <a href={proyecto.linkRepo} className="flex">
                Repo
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
