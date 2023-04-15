import Link from "next/link";
import Logo from "../Logo";

const Navbar = () => {
  return (
    <header class="row-start-1 row-end-3 bg-secundariod h-2/3">
      <nav class="flex flex-col justify-evenly items-center h-full">
        <Logo />
        <div class="h-1/2">
          <ul class="flex flex-col items-center justify-center gap-4 h-full text-[.9rem]">
            <li>
              <a id="link1" href="#sobremi" className="hover:text-detalled">
                ABOUT ME
              </a>
            </li>
            <li>
              <a id="link2" href="#proyectos" className="hover:text-detalled">
                PROJECTS
              </a>
            </li>
            <li>
              <a
                id="link3"
                href="#certificados"
                className="hover:text-detalled"
              >
                EDUCATION
              </a>
            </li>
            <li>
              <a id="link4" href="#tools" className="hover:text-detalled">
                STACK
              </a>
            </li>
            <li>
              <a id="link5" href="#contacto" className="hover:text-detalled">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
