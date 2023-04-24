import React from "react";
import ProjectItem from "./ProjectItem/ProjectItem";

export default function Projects() {
  const proyectos = [
    {
      imagen: "https://ejemplo.com/imagen1.jpg",
      titulo: "Proyecto 1",
      descripcion: "Descripción del proyecto 1",
      herramientas: ["React", "Node.js", "MongoDB"],
    },
    {
      imagen: "https://ejemplo.com/imagen2.jpg",
      titulo: "Proyecto 2",
      descripcion: "Descripción del proyecto 2",
      herramientas: ["React", "Firebase"],
    },
  ];
  return (
    <div className="container_proyectos" id="proyectos">
      <p className="tag tag3 inli">&lth2&gt</p>
      <h2 className="inli reveal intro">
        <span className="reveal intro">My Projects</span>
      </h2>
      <p className="tag inli">&lt/h2&gt</p>
      <p className="tag tag3">&ltp&gt</p>
      <p className="inli proyecto_p">Some ideas I've been working on lately </p>
      <ProjectItem proyectos={proyectos} />
      <p className="tag tag3">&lt/p&gt</p>
      <p className="tag tag4">&ltsection&gt</p>
      <div className="proyectos"></div>
      <p className="tag tag4">&lt/section&gt</p>
    </div>
  );
}
