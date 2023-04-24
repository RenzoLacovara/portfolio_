import React, { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
type ModalProps = {
  children: ReactNode;
  id: string;
};

export default function Modal({ children, id }: ModalProps) {
  const modalRoot = document.querySelector(`#${id}`) as HTMLElement;
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
  return createPortal(<div>{children}</div>, elRef.current);
}
