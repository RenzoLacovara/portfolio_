import React from 'react'
import ProjectItem from './ProjectItem/ProjectItem'
import { proyectosData } from '../../../../utility/data/data'
export default function Projects() {
  return (
    <div className="container_proyectos" id="proyectos">
      <p className="inline-block text-base font-caveat text-detalled md:ml-10">
        &#60;h2&#62;
      </p>
      <h3 className="inline-block ml-1 text-2xl drop-shadow-subtitle md:text-3xl">
        My Projects
      </h3>
      <p className="inline-block ml-1 text-base font-caveat text-detalled">
        &#60;/h2&#62;
      </p>
      <p className="block text-base font-caveat text-detalled md:ml-10">
        &#60;p&#62;
      </p>
      <p className="mx-3 text-sm text-center md:text-xl md:mx-20 small:text-left">
        Some ideas I've been working on lately{' '}
      </p>
      <p className="block text-base font-caveat text-detalled md:ml-10">
        &#60;/p&#62;
      </p>
      <p className="block ml-4 text-base font-caveat text-detalled md:ml-14">
        &#60;section&#62;
      </p>
      <div className="proyectos">
        <ProjectItem proyectos={proyectosData} />
      </div>
      <p className="block ml-4 text-base font-caveat text-detalled md:ml-14">
        &#60;/section&#62;
      </p>
    </div>
  )
}
