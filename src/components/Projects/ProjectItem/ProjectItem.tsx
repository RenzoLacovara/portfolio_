import React from "react";
import { useRender } from "../../../hooks/useRender";
type Props<C extends React.ElementType> = {
  proyectos: {
    imagen: string;
    titulo: string;
    descripcion: string;
    herramientas: string[];
  }[];
  as?: C;
} & React.ComponentPropsWithoutRef<C>;
export default function ProjectItem<C extends React.ElementType>({
  proyectos,
  as,
  ...rest
}: Props<C>) {
  const { screenRef, isOnScreen } = useRender();
  return (
    <div>
      {proyectos.map((proyecto) => (
        <div ref={screenRef}>
          {isOnScreen && (
            <div key={proyecto.titulo}>
              <img src={proyecto.imagen} alt={proyecto.titulo} />
              <h3>{proyecto.titulo}</h3>
              <p>{proyecto.descripcion}</p>
              <ul>
                {proyecto.herramientas.map((herramienta) => (
                  <li key={herramienta}>{herramienta}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
