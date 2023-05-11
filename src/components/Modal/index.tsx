import React, { MutableRefObject, useRef } from 'react'
import ImageModal from './ImageModal'

type Props = {
  handleClose: () => void
  src: string
}
type Ref = React.ForwardedRef<any>

const Modal = React.forwardRef((props: Props, ref: Ref) => {
  const { handleClose, src } = props
  const modalImgRef = useRef(null)
  return (
    <div ref={ref} className="modal" onClick={handleClose}>
      <ImageModal ref={modalImgRef} src={src} />
    </div>
  )
})
export default Modal
