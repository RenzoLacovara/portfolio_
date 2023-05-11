import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { base } from '../../../utility/data/data'
import Modal from '../../Modal'
import useModal from '../../../hooks/useModal'

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
  const { isOpen, src, modalRef, zoomImg, handleClose } = useModal()
  return (
    <div className="relative w-full h-64 m-auto overflow-hidden sm:h-80 ">
      <div
        className={`slide-track p-4 absolute left-0 h-full flex w-[calc(320px_*_18)] animate-scroll ${
          isOpen ? 'pause' : 'null'
        }`}
      >
        {certificadosArray.map((certificado) => (
          <div className="mx-2 slide sm:w-80">
            <Image
              className={`imagen shadow-card w-60 object-cover transition-all duration-300 sm:w-full hover:scale-105 hover:opacity-70 cursor-zoom-in`}
              alt={certificado.titulo}
              src={certificado.imagen}
              width={0}
              height={0}
              sizes="(max-width: 768px) 80vw,
              (max-width: 1200px) 30vw,
              13vw"
              id="image"
              onClick={zoomImg}
            />
          </div>
        ))}
      </div>
      <Modal handleClose={handleClose} src={src} ref={modalRef} />
    </div>
  )
}
