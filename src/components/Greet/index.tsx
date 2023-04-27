import React from 'react'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import yo from '../../../public/Images/22.webp'
import Typed from 'typed.js'

const Greet = () => {
  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: ['Developer', 'Freelancer', 'Designer', 'Great guy'],
      smartBackspace: true,
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    }
    typed.current = new Typed(el.current, options)
    return () => {
      typed.current.destroy()
    }
  }, [])
  function reveal() {
    var reveals = document.querySelectorAll('.reveal')
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight
      var elementTop = reveals[i].getBoundingClientRect().top
      var elementVisible = 150
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active')
      } else {
        reveals[i].classList.remove('active')
      }
    }
  }
  window.addEventListener('scroll', reveal)
  return (
    <div className="overflow-hidden my-5">
      <p className="opacity-0 animate-fadeLeft font-caveat text-detalled md:ml-2 text-base">
        &#60;html&#62;
      </p>
      <p className="opacity-0 animate-fadeLeft font-caveat text-detalled ml-1 md:ml-6 text-base">
        &#60;body&#62;
      </p>
      <section className="flex flex-col smx:flex-row justify-center items-center lg:gap-20">
        <div className="opacity-0 animate-fadeLeft pt-8" id="sobremi">
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
        <div className="opacity-0 relative h-72 w-10/12 max-w-80 mt-5 animate-fadeRight rounded-t-0 rounded-b-[55px] overflow-hidden transition-all ease-custom duration-700 sm:mx-6 sm:h-72 small:w-80 sm:mt-0">
          <div className="bg-clouds bg-cover h-48 w-full rounded-[55px] absolute top-24 animate-bgmove small:h-64 small:top-16">
            <Image
              className="pointer-events-none relative animate-imagen origin-[50%_bottom] translate-y-0 scale-125 top-[-1rem] w-48 left-1 sm:top-[-2rem] small:w-56 small:left-2"
              src={yo}
              alt="Renzo Lacovara"
            />
            <div className="animate-opacity opacity-0">
              <div className="flex top-[-67px] right-16  p-2 m-5 items-center justify-center text-center text-secundario text-base animate-float rounded-[50%] absolute bg-white h-12 w-12 shadow-[65px_-15px_0_-2px_#fff,_25px_-25px_#fff,_30px_10px_#fff,_60px_15px_0_-10px_#fff,_85px_5px_0_-5px_#fff] small:left-40 small:top-[-38px] "></div>
              <h3 className="absolute text-secundario  text-base  animate-float top-[-35px] right-5 small:top-[-7px] small:right-6  ">
                I need coffee...
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Greet
