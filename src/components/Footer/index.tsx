import React from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import { useResponsive } from "../../hooks/useResponsive";

const Footer = () => {
  const { responsive } = useResponsive();

  return (
    <footer
      className={`bg-secundariod row-start-3 row-end-4 h-1/3 fixed mt-[66vh] ${
        responsive ? "md:w-[130px] w-24" : "w-11"
      } transition-all duration-500 ease-custom overflow-hidden h-full`}
    >
      <p
        className={` ${
          responsive ? "opacity-100 delay-500" : "opacity-0"
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
          <li>
            <a href="https://www.linkedin.com/in/renlacovara/" target="_blank">
              <FaLinkedinIn className="text-secundario text-2xl bg-principal w-7 h-7 p-1 rounded-full overflow-visible hover:bg-detalled hover:scale-110	hover:animate-shake hover:text-principal transition-all ease-in duration-200" />
            </a>
          </li>
          <li>
            <a href="https://github.com/RenzoLacovara" target="_blank">
              <FaGithub className="text-secundario text-2xl bg-principal w-7 h-7 p-1 rounded-full overflow-visible hover:bg-detalled hover:scale-110	hover:animate-shake hover:text-principal transition-all ease-in duration-200" />
            </a>
          </li>
          <li>
            <a href="mailto:rnlacovara@gmail.com" target="_blank">
              <FaEnvelope className="text-secundario text-2xl bg-principal w-7 h-7 p-1 rounded-full overflow-visible hover:bg-detalled hover:scale-110	hover:animate-shake hover:text-principal transition-all ease-in duration-200" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
