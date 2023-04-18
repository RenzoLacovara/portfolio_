import Link from "next/link";
import Logo from "../Logo";
import { BsStack, BsFillChatQuoteFill } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";
import { HiBriefcase } from "react-icons/hi";
import { IoSchool } from "react-icons/io5";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
const Navbar = ({ hovered, setHovered }) => {
  console.log(hovered);
  return (
    <header
      class={`fixed row-start-1 row-end-3 bg-secundariod h-2/3 ${
        hovered ? "md:w-[130px] w-24" : "w-11"
      } transition-all duration-500 ease-custom overflow-hidden`}
    >
      <button
        className={`absolute top-2 left-[50%] translate-x-[-50%]  text-white text-xl z-20 ${
          hovered ? "rotate-180" : "rotate-0"
        } transition-all duration-500 ease-custom`}
        onClick={() => setHovered(!hovered)}
      >
        <MdOutlineKeyboardDoubleArrowRight />
      </button>
      <nav class="flex flex-col justify-evenly items-center h-full">
        <Logo hovered={hovered} />
        <div class="h-1/2">
          <ul
            class={`flex flex-col items-center justify-center ${
              hovered ? "gap-4" : "gap-3"
            } h-full text-sm md:text-[.9rem]`}
          >
            <li>
              <a id="link1" href="#sobremi">
                <span
                  className={`${
                    hovered ? "inline-block" : "hidden"
                  } hover:text-detalled`}
                >
                  ABOUT ME
                </span>
                <BsFillChatQuoteFill
                  className={`hover:text-detalled ${
                    hovered ? "hidden" : "inline-block"
                  } text-2xl`}
                />
              </a>
            </li>
            <li>
              <a id="link2" href="#proyectos">
                <span
                  className={`${
                    hovered ? "inline-block" : "hidden"
                  } hover:text-detalled`}
                >
                  PROJECTS
                </span>
                <HiBriefcase
                  className={`hover:text-detalled ${
                    hovered ? "hidden" : "inline-block"
                  } text-2xl`}
                />
              </a>
            </li>
            <li>
              <a id="link3" href="#certificados">
                <span
                  className={`${
                    hovered ? "inline-block" : "hidden"
                  } hover:text-detalled`}
                >
                  EDUCATION
                </span>
                <IoSchool
                  className={`hover:text-detalled ${
                    hovered ? "hidden" : "inline-block"
                  } text-2xl`}
                />
              </a>
            </li>
            <li>
              <a id="link4" href="#tools">
                <span
                  className={`${
                    hovered ? "inline-block" : "hidden"
                  } hover:text-detalled`}
                >
                  STACK
                </span>
                <BsStack
                  className={`hover:text-detalled ${
                    hovered ? "hidden" : "inline-block"
                  } text-2xl`}
                />
              </a>
            </li>
            <li>
              <a id="link5" href="#contacto">
                <span
                  className={`${
                    hovered ? "inline-block" : "hidden"
                  } hover:text-detalled`}
                >
                  CONTACT
                </span>
                <IoMdContact
                  className={`hover:text-detalled ${
                    hovered ? "hidden" : "inline-block"
                  } text-2xl`}
                />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
