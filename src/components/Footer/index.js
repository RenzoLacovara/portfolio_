import React from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-secundariod row-start-3 row-end-4 h-1/3">
      <p className="opacity-0 md:opacity-100 text-center p-5 text-xs">
        <i>
          Handcrafted <br />
          by Me
        </i>
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
