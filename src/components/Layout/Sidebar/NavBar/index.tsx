import Logo from './Logo'
import { BsStack, BsFillChatQuoteFill } from 'react-icons/bs'
import { BsBriefcaseFill } from 'react-icons/bs'
import { IoSchool } from 'react-icons/io5'
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import { SiAboutdotme } from 'react-icons/si'
import { useResponsive } from '../../../../hooks/useResponsive'

const Navbar = () => {
  const { responsive, setResponsive } = useResponsive()
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    setResponsive(!responsive)
  }
  return (
    <header
      className={`fixed row-start-1 row-end-3 bg-secundariod h-2/3 ${
        responsive ? 'md:w-[130px] w-24' : 'w-11'
      } transition-all duration-500 ease-custom overflow-hidden`}
    >
      <button
        className={`absolute top-2 left-[50%] translate-x-[-50%]  text-white text-xl z-30 ${
          responsive ? 'rotate-180' : 'rotate-0'
        } transition-all duration-500 ease-custom`}
        onClick={handleClick}
        aria-label="expand bar"
      >
        <MdOutlineKeyboardDoubleArrowRight />
      </button>
      <nav className="flex flex-col items-center h-full justify-evenly">
        <Logo />
        <div className="z-20 h-1/2">
          <ul
            className={`flex flex-col items-center justify-center ${
              responsive ? 'gap-4' : 'gap-3'
            } h-full text-sm md:text-[.9rem]`}
          >
            <li>
              <a id="link1" href="#sobremi">
                <span
                  className={`${
                    responsive ? '' : 'hidden'
                  } hover:text-detalled`}
                >
                  ABOUT ME
                </span>
                <SiAboutdotme
                  className={`hover:text-detalled ${
                    responsive ? 'hidden' : 'inline-block'
                  } text-2xl`}
                  aria-label="about me section"
                  name="about me section"
                />
              </a>
            </li>
            <li>
              <a id="link2" href="#proyectos">
                <span
                  className={`${
                    responsive ? 'inline-block' : 'hidden'
                  } hover:text-detalled`}
                >
                  PROJECTS
                </span>
                <BsBriefcaseFill
                  className={`hover:text-detalled ${
                    responsive ? 'hidden' : 'inline-block'
                  } text-2xl`}
                  aria-label="projects section"
                  name="projects section"
                />
              </a>
            </li>
            <li>
              <a id="link3" href="#certificados">
                <span
                  className={`${
                    responsive ? 'inline-block' : 'hidden'
                  } hover:text-detalled`}
                >
                  EDUCATION
                </span>
                <IoSchool
                  className={`hover:text-detalled ${
                    responsive ? 'hidden' : 'inline-block'
                  } text-2xl`}
                  aria-label="education section"
                  name="education section"
                />
              </a>
            </li>
            <li>
              <a id="link4" href="#tools">
                <span
                  className={`${
                    responsive ? 'inline-block' : 'hidden'
                  } hover:text-detalled`}
                >
                  STACK
                </span>
                <BsStack
                  className={`hover:text-detalled ${
                    responsive ? 'hidden' : 'inline-block'
                  } text-2xl`}
                  aria-label="stack section"
                  name="stack section"
                />
              </a>
            </li>
            <li>
              <a id="link5" href="#contacto">
                <span
                  className={`${
                    responsive ? 'inline-block' : 'hidden'
                  } hover:text-detalled`}
                >
                  CONTACT
                </span>
                <BsFillChatQuoteFill
                  className={`hover:text-detalled ${
                    responsive ? 'hidden' : 'inline-block'
                  } text-2xl`}
                  aria-label="contact me section"
                  name="contact me section"
                />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
