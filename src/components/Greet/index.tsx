import React from 'react'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import yo from '../../../public/Images/22.webp'
import Typed from 'typed.js'
import About from '../About'
import { RevealWrapper } from 'next-reveal'

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

  return (
    <div className="overflow-hidden mt-6">
      <p
        className="opacity-0 animate-fadeLeft font-caveat text-detalled md:ml-2 text-base"
        id="sobremi"
      >
        &#60;html&#62;
      </p>
      <p className="opacity-0 animate-fadeLeft font-caveat text-detalled ml-1 md:ml-6 text-base">
        &#60;body&#62;
      </p>
      <section className="flex flex-col xl:flex-row justify-center items-center lg:gap-00 my-5 lg:my-16">
        <RevealWrapper
          origin="left"
          delay={1500}
          duration={1000}
          easing="cubic-bezier(0.68, -0.55, 0.265, 1.55)"
          distance="500px"
          reset={false}
          mobile={false}
          className="pt-8 xl:w-2/5"
        >
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
          <p className="ml-2 inline-block font-caveat text-detalled text-base md:ml-12 ">
            &#60;p&#62;
          </p>
          <h3 className="inline-block text-detalled mt-2 text-xl lg:text-4xl">
            <span className="text-principal pl-2">I'm a </span>
            <span ref={el}></span>
          </h3>
          <p className="inline-block font-caveat text-detalled text-base">
            &#60;/p&#62;
          </p>
          <About />
        </RevealWrapper>

        <RevealWrapper
          origin="right"
          delay={2000}
          duration={1000}
          easing="cubic-bezier(0.68, -0.55, 0.265, 1.55)"
          distance="500px"
          reset={false}
          mobile={false}
          className=" relative h-72 w-11/12 max-w-80 mt-5 rounded-t-0 rounded-b-[55px] overflow-hidden sm:mx-6 sm:h-[25rem] small:w-8/12 sm:w-[30rem] xl:w-1/3 sm:mt-0 "
        >
          <div className="bg-clouds bg-cover h-48 w-full rounded-[55px] absolute top-24 animate-bgmove sm:h-64 sm:top-36">
            <Image
              className="pointer-events-none relative xl:animate-imagen origin-[50%_bottom] translate-y-0  top-[-1rem] w-48 left-1 sm:top-[-8.3rem] sm:w-72 sm:left-8  scale-125 "
              src={yo}
              alt="Renzo Lacovara"
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            />
            <div className="animate-opacity opacity-0">
              <div className="flex top-[-67px] right-16  p-2 m-5 items-center justify-center text-center text-secundario text-base animate-float rounded-[50%] absolute bg-white h-12 w-12 shadow-[65px_-15px_0_-2px_#fff,_25px_-25px_#fff,_30px_10px_#fff,_60px_15px_0_-10px_#fff,_85px_5px_0_-5px_#fff] xxl:right-[7.4rem] sm:top-[-7.3rem] "></div>
              <h3 className="absolute text-secundario  text-base  animate-float top-[-35px] right-5 sm:top-[-5.3rem] xxl:right-[4.4rem]  ">
                I need coffee...
              </h3>
            </div>
          </div>
        </RevealWrapper>
      </section>
    </div>
  )
}

export default Greet
