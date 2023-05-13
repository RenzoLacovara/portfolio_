import React, { useRef } from 'react'
import ImageModal from './ImageModal'

type Props = {
  handleClose: () => void
  src: string
}

const Modal = React.forwardRef((props: Props, ref: React.ForwardedRef<any>) => {
  const { handleClose, src } = props
  const modalImgRef = useRef(null)
  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-50 hidden w-full h-full pt-24 overflow-auto modal bg-bgmodal cursor-zoom-out"
      onClick={handleClose}
    >
      <ImageModal ref={modalImgRef} src={src} />
    </div>
  )
})
export default Modal
