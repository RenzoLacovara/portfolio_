import { useState, useRef } from 'react'

export default function useModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [src, setSrc] = useState('')
  const modalRef = useRef(null)

  const zoomImg = (e) => {
    const img = e.target
    setIsOpen(true)
    setSrc(img.src)
    modalRef.current.style.display = 'block'
  }

  const handleClose = () => {
    setIsOpen(false)
    modalRef.current.style.display = 'none'
  }

  return { isOpen, src, modalRef, zoomImg, handleClose }
}
