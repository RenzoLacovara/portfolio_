import React from 'react'
import ProjectItem from './ProjectItem/ProjectItem'

export default function Projects() {
  const proyectos = [
    {
      imagen: '../Images/oishii.webp',
      titulo: 'Oishii Ramen Shop',
      descripcion:
        'Website for gastronomic entrepreneurship with dark mode and responsive design',
      herramientas: ['SASS', 'BOOTSTRAP', 'JAVASCRIPT'],
      link: 'https://oishiiramen.vercel.app/',
      linkRepo: 'https://github.com/RenzoLacovara/OishiiRamen',
      class: 'oishii',
    },
    {
      imagen: '../Images/hogsmazon.webp',
      titulo: 'Hogsmazon',
      descripcion:
        'Small e-commerce project simulating a store in the Harry Potter universe',
      herramientas: ['TAILWIND', 'JAVASCRIPT', 'REACT', 'FIREBASE'],
      link: 'https://hogsmazon.vercel.app/',
      linkRepo: 'https://github.com/RenzoLacovara/Hogsmazon_',
      class: 'hogsmazon',
    },
    {
      imagen: '../Images/prosaludmedical.webp',
      titulo: 'Pro Salud Medical',
      descripcion:
        'Website for the health company Pro Salud Medical, team developed to show its services and memberships',
      herramientas: ['SASS', 'BOOTSTRAP', 'JAVASCRIPT', 'REACT'],
      link: 'https://pro-salud-medical.vercel.app/',
      linkRepo: 'https://github.com/MrFontina/ProSaludMedical',
      class: 'psm',
    },
  ]
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
      <p className="block font-caveat text-detalled text-base md:ml-14">
        &#60;section&#62;
      </p>
      <div className="proyectos">
        <ProjectItem proyectos={proyectos} />
      </div>
      <p className="block font-caveat text-detalled text-base md:ml-14">
        &#60;/section&#62;
      </p>
    </div>
  )
}
