import React, { useState } from 'react'
import Image from 'next/image'
import { base } from '../../../utility/data/data'
import Modal from '../../Modal'
type Props<C extends React.ElementType> = {
  certificados: base
  as?: C
} & React.ComponentPropsWithoutRef<C>

export default function Certificados<C extends React.ElementType>({
  certificados,
  as,
  ...rest
}: Props<C>) {
  const certificadosArray = certificados.concat(certificados)

  return (
    <div className="w-full h-64 sm:h-80 m-auto overflow-hidden relative ">
      <div className="slide-track p-4 absolute left-0 h-full flex w-[calc(320px_*_18)] animate-scroll">
        {certificadosArray.map((certificado) => (
          <div className="slide sm:w-80 mx-2">
            <Image
              className={`imagen shadow-card w-60 object-cover transition-all duration-300 sm:w-full hover:scale-105 hover:opacity-70`}
              alt={certificado.titulo}
              src={certificado.imagen}
              width={0}
              height={0}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
