import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa'

type Props<C extends React.ElementType> = {
  contact: boolean
  as?: C
} & React.ComponentPropsWithoutRef<C>
export default function Social<C extends React.ElementType>({
  contact,
  as,
  ...rest
}: Props<C>) {
  return (
    <>
      <li className="z-20">
        <a href="https://www.linkedin.com/in/renlacovara/" target="_blank">
          <FaLinkedinIn
            className={`text-secundario text-2xl bg-principal w-7 h-7 p-1 rounded-full overflow-visible hover:scale-110	hover:animate-shake ${
              contact
                ? 'hover:text-detalled'
                : 'hover:text-principal hover:bg-detalled '
            } transition-all ease-in duration-200`}
            aria-label="linkedin account"
            name="linkedin account"
          />
        </a>
      </li>
      <li className="z-20">
        <a href="https://github.com/RenzoLacovara" target="_blank">
          <FaGithub
            className={`text-secundario text-2xl bg-principal w-7 h-7 p-1 rounded-full overflow-visible hover:scale-110	hover:animate-shake ${
              contact
                ? 'hover:text-detalled'
                : 'hover:text-principal hover:bg-detalled '
            } transition-all ease-in duration-200`}
            aria-label="github account"
            name="github account"
          />
        </a>
      </li>
      <li className="z-20">
        <a href="mailto:rnlacovara@gmail.com" target="_blank">
          <FaEnvelope
            className={`text-secundario text-2xl bg-principal w-7 h-7 p-1 rounded-full overflow-visible hover:scale-110	hover:animate-shake ${
              contact
                ? 'hover:text-detalled'
                : 'hover:text-principal hover:bg-detalled '
            } transition-all ease-in duration-200`}
            aria-label="gmail account"
            name="gmail account"
          />
        </a>
      </li>
    </>
  )
}
