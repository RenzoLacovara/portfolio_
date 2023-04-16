import Link from "next/link";
import Logo from "../Logo";
import { BsStack, BsFillChatQuoteFill } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";
import { HiBriefcase } from "react-icons/hi";
import { IoSchool } from "react-icons/io5";

const Navbar = () => {
  return (
    <header class="row-start-1 row-end-3 bg-secundariod h-2/3">
      <nav class="flex flex-col justify-evenly items-center h-full">
        <Logo />
        <div class="h-1/2">
          <ul class="flex flex-col items-center justify-center gap-4 h-full text-[.9rem]">
            <li>
              <a
                id="link1"
                href="#sobremi"
                className="hover:text-detalled hidden md:inline-block"
              >
                ABOUT ME
              </a>
              <a
                id="link1"
                href="#sobremi"
                className="md:hidden hover:text-detalled"
              >
                <BsFillChatQuoteFill className=" hover:text-detalled text-2xl" />
              </a>
            </li>
            <li>
              <a
                id="link2"
                href="#proyectos"
                className="hover:text-detalled hidden md:inline-block"
              >
                PROJECTS
              </a>
              <a
                id="link2"
                href="#proyectos"
                className="md:hidden hover:text-detalled"
              >
                <HiBriefcase className=" hover:text-detalled text-2xl" />
              </a>
            </li>
            <li>
              <a
                id="link3"
                href="#certificados"
                className="hover:text-detalled hidden md:inline-block"
              >
                EDUCATION
              </a>
              <a
                id="link3"
                href="#certificados"
                className="md:hidden hover:text-detalled"
              >
                <IoSchool className=" hover:text-detalled text-2xl" />
              </a>
            </li>
            <li>
              <a
                id="link4"
                href="#tools"
                className="hover:text-detalled hidden md:inline-block"
              >
                STACK
              </a>
              <a
                id="link4"
                href="#tools"
                className="md:hidden hover:text-detalled"
              >
                <BsStack className=" hover:text-detalled text-2xl" />
              </a>
            </li>
            <li>
              <a
                id="link5"
                href="#contacto"
                className="hover:text-detalled hidden md:inline-block"
              >
                CONTACT
              </a>
              <a
                id="link5"
                href="#contacto"
                className="md:hidden hover:text-detalled"
              >
                <IoMdContact className=" hover:text-detalled text-2xl" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
