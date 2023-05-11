import React, { MutableRefObject } from 'react'

type Props = {
  ref: MutableRefObject<any>
  src: string
}

export default function ImageModal(props: Props) {
  const { ref, src } = props
  return <img ref={ref} className="modal-content" src={src} />
}
