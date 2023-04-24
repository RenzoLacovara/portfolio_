import React from "react";
import { useEffect, useRef } from "react";
import Image from "next/image";
import yo from "../../../public/Images/22.webp";
import Typed from "typed.js";

const Greet = () => {
  const el = useRef(null);
  const typed = useRef(null);
  useEffect(() => {
    const options = {
      strings: ["Developer", "Freelancer", "Designer", "Great guy"],
      smartBackspace: true,
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    };
    typed.current = new Typed(el.current, options);
    return () => {
      typed.current.destroy();
    };
  }, []);
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);
  return (
    <div className="overflow-hidden my-5">
      <p className="animate-fadeLeft font-caveat text-detalled md:ml-2 text-base">
        &#60;html&#62;
      </p>
      <p className="animate-fadeLeft font-caveat text-detalled ml-1 md:ml-6 text-base">
        &#60;body&#62;
      </p>
      <section className="flex flex-col sm:flex-row justify-center items-center">
        <div className="animate-fadeLeft pt-8" id="sobremi">
          <p className="inline-block font-caveat text-detalled absolute md:ml-10 text-base">
            &#60;h1&#62;
          </p>
          <h1 className="inline-block pl-8 text-[2.5rem] lg:text-7xl md:pl-[4.5rem]">
            <span className="animate-intro">
              Hi!
              <br />
              I'm Renzo!
            </span>
            <span className="font-caveat text-detalled pl-2 text-base">
              &#60;/h1&#62;
            </span>
          </h1>
          <br />
          <p className="ml-2 inline-block font-caveat text-detalled text-base md:ml-14 ">
            &#60;p&#62;
          </p>
          <h3 className="inline-block text-detalled mt-2 text-xl lg:text-4xl">
            <span className="text-principal pl-2">I'm a </span>
            <span ref={el}></span>
          </h3>
          <p className="inline-block font-caveat text-detalled text-base">
            &#60;/p&#62;
          </p>
        </div>
        <div className="relative h-72 w-10/12 max-w-80 mt-5 animate-fadeRight rounded-t-0 rounded-b-[55px] overflow-hidden transition-all ease-custom duration-700 shadow-card sm:mx-6 sm:h-72 small:w-80 sm:mt-0">
          <div className="bg-clouds bg-cover h-48 w-full rounded-[55px] absolute top-24 animate-bgmove sm:h-64 sm:top-16">
            <Image
              className="pointer-events-none relative animate-imagen origin-[50%_bottom] translate-y-0 scale-125 top-[-1rem] w-48 left-1 sm:top-[-2rem] sm:w-56 sm:left-2"
              src={yo}
              alt="Renzo Lacovara"
            />
            <div className="flex opacity-0 bg-white p-2 rounded-[30px] min-w-[40px] max-w-[120px] min-h-[60px] absolute m-5 items-center justify-center text-center text-secundario text-base animate-float shadow-card top-[-5.2rem] right-[-.5rem] after:content-[''] after:bg-white after:block after:rounded-full after:absolute after:z-[-1] after:bottom-[-10px] after:right-6 after:w-8 after:h-8 after:shadow-[33px_-25px_0_0_#fff,_-45px_-2px_0_-2px_#fff] before:content-[''] before:bg-white before:block before:rounded-full before:absolute before:z-[-1] before:w-11 before:h-11 before:top-[-12px] before:left-7 before:shadow-[-50px_20px_0_-12px_#fff] sm:right-[-10px] sm:top-[-3.2rem]">
              I need coffee...
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Greet;
