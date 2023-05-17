import React from 'react'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import yo from 'public/images/22.webp'
import Typed from 'typed.js'
import About from '../Greet/About'
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
    <div className="mt-6 overflow-hidden">
      <p
        className="text-base sm:opacity-0 sm:animate-fadeLeft font-caveat text-detalled md:ml-2"
        id="sobremi"
      >
        &#60;html&#62;
      </p>
      <p className="ml-1 text-base sm:opacity-0 sm:animate-fadeLeft font-caveat text-detalled md:ml-6">
        &#60;body&#62;
      </p>
      <section className="flex flex-col items-center justify-center my-5 xl:flex-row lg:gap-00 lg:my-16">
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
          <p className="absolute inline-block text-base font-caveat text-detalled md:ml-10">
            &#60;h1&#62;
          </p>
          <h1 className="inline-block pl-8 text-[2.5rem] lg:text-7xl md:pl-[4.5rem]">
            <span className="animate-intro">
              Hi!
              <br />
              I'm Renzo!
            </span>
            <span className="pl-2 text-base font-caveat text-detalled">
              &#60;/h1&#62;
            </span>
          </h1>
          <br />
          <p className="inline-block ml-2 text-base font-caveat text-detalled md:ml-12 ">
            &#60;p&#62;
          </p>
          <h2 className="inline-block mt-2 text-xl text-detalled lg:text-4xl">
            <span className="pl-2 text-principal">I'm a </span>
            <span ref={el}></span>
          </h2>
          <p className="inline-block text-base font-caveat text-detalled">
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
              priority={true}
            />
            <div className="opacity-0 animate-opacity">
              <div className="flex top-[-67px] right-16  p-2 m-5 items-center justify-center text-center text-secundario text-base animate-float rounded-[50%] absolute bg-white h-12 w-12 shadow-[65px_-15px_0_-2px_#fff,_25px_-25px_#fff,_30px_10px_#fff,_60px_15px_0_-10px_#fff,_85px_5px_0_-5px_#fff] after:shadow-[10px_22px_0_-6px_#fff,_-1px_35px_0_-10px_#fff] after:rounded-[50%] after:content-[''] after:block after:absolute after:z-[-1] after:bottom-[-10px] after:right-[6px] after:w-[30px] after:h-[30px] xxl:right-[7.4rem] sm:top-[-7.3rem] comics "></div>
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
