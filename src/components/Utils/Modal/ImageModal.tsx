import React from 'react'

type Props = {
  src: string
}

const ImageModal = React.forwardRef(
  (props: Props, ref: React.ForwardedRef<any>) => {
    const { src } = props
    return (
      <img
        ref={ref}
        className="modal-content m-auto block h-[90%] w-[90%]  object-contain bg-transparent animate-zoom"
        src={src}
      />
    )
  }
)
export default ImageModal
