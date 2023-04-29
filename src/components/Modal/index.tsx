import Image from 'next/image'
import React, { useState } from 'react'
import About from '../About'
type Props<C extends React.ElementType> = {
  imgUrl: string
  as?: C
} & React.ComponentPropsWithoutRef<C>

export default function Modal({ isOpen, onClose, src }) {
  console.log(src)
  return <>{isOpen && <About />}</>
}
