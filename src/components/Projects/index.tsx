import React from 'react'
import ProjectItem from './ProjectItem/ProjectItem'
import { proyectosData } from '../../utility/data/data'
export default function Projects() {
  return (
    <div className="container_proyectos" id="proyectos">
      <p className="inline-block font-caveat text-detalled text-base md:ml-10">
        &#60;h2&#62;
      </p>
      <h2 className="text-2xl drop-shadow-subtitle inline-block ml-1 md:text-3xl">
        My Projects
      </h2>
      <p className="inline-block font-caveat text-detalled text-base ml-1">
        &#60;/h2&#62;
      </p>
      <p className="block font-caveat text-detalled text-base md:ml-10">
        &#60;p&#62;
      </p>
      <p className="text-sm mx-3 text-center md:text-xl md:mx-20 small:text-left">
        Some ideas I've been working on lately{' '}
      </p>
      <p className="block font-caveat text-detalled text-base md:ml-10">
        &#60;/p&#62;
      </p>
      <p className="block font-caveat text-detalled text-base ml-4 md:ml-14">
        &#60;section&#62;
      </p>
      <div className="proyectos">
        <ProjectItem proyectos={proyectosData} />
      </div>
      <p className="block font-caveat text-detalled text-base ml-4 md:ml-14">
        &#60;/section&#62;
      </p>
    </div>
  )
}
