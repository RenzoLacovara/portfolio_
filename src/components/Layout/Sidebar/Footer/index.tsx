import React from 'react'
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa'
import { useResponsive } from '../../../../hooks/useResponsive'
import Social from '../../../Utils/Social'

const Footer = () => {
  const { responsive } = useResponsive()

  return (
    <footer
      className={`bg-secundariod row-start-3 row-end-4 h-1/3 fixed mt-[66vh] ${
        responsive ? 'md:w-[130px] w-24' : 'w-11'
      } transition-all duration-500 ease-custom overflow-hidden h-full`}
    >
      <p
        className={` ${
          responsive ? 'opacity-100 delay-500' : 'opacity-0'
        } text-center md:p-5 py-5 text-xs transition-all duration-300 ease-in-out  `}
      >
        {responsive ? (
          <i>
            Handcrafted <br />
            by Me
          </i>
        ) : (
          <i>
            Hello <br />
            there
          </i>
        )}
      </p>
      <div>
        <ul className="flex flex-col items-center justify-center gap-1">
          <Social contact={false} />
        </ul>
      </div>
    </footer>
  )
}

export default Footer
