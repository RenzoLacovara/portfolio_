import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ onClose, image }) {
  const modalRoot = document.getElementById("modal-root");
  modalRoot.style.position = "relative";

  const elRef = useRef<HTMLDivElement | null>(null);
  if (!elRef.current) elRef.current = document.createElement("div");
  useEffect(() => {
    const el = elRef.current;
    modalRoot.appendChild(el);
    return () => {
      modalRoot.removeChild(el);
    };
  }, []);
  return createPortal(
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <img src={image} alt="" />
      </div>
    </div>
  );
}

function ImageGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  function handleImageClick(image) {
    setSelectedImage(image);
  }

  function handleCloseModal() {
    setSelectedImage(null);
  }

  return (
    <div>
      <div className="image-gallery">
        {images.map((image) => (
          <img
            key={image}
            src={image}
            alt=""
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
      {selectedImage && (
        <Modal onClose={handleCloseModal} image={selectedImage} />
      )}
    </div>
  );
}

export default ImageGallery;
