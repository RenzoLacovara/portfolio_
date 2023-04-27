import React from 'react'

const About = () => {
  return (
    <div className="animate-fadeBottom active my-20 opacity-0">
      <p className="inline-block font-caveat text-detalled text-base md:ml-10">
        &#60;h2&#62;
      </p>
      <h2 className="text-2xl drop-shadow-subtitle inline-block ml-1 md:text-3xl  ">
        A little about me
      </h2>
      <p className="inline-block font-caveat text-detalled text-base ml-1">
        &#60;/h2&#62;
      </p>
      <p className="block font-caveat text-detalled text-base md:ml-10">
        &#60;p&#62;
      </p>
      <p className="text-sm mx-3 text-center md:text-xl md:mx-20 small:text-left">
        I am a self-taught programmer, always curious and willing to learn,
        currently focused mainly on the development of web pages and apps
        prioritizing accessibility, good practices, responsive design and a lot
        of attention to every detail. Will not have have to settle for basic
        solutions and empty templates. I guarantee completely customized and
        attractive designs for your ideas. Your page will be the first
        impression of your customers, let's make it a good one!{' '}
      </p>
      <p className="block font-caveat text-detalled text-base md:ml-10">
        &#60;/p&#62;
      </p>
      <div className="text-center small:text-left flex items-center justify-center small:justify-start">
        <p className="inline-block font-caveat text-detalled text-base md:ml-10 ">
          &#60;a&#62;
        </p>
        <a
          href="/Images/certificados/CV_Renzo_Lacovara.pdf"
          download="RenzoLacovaraCV"
          className="flex justify-center items-center w-36 relative text-base mx-3 py-2 px-4 rounded-[50px] bg-secundariod overflow-hidden after:w-0 after:h-full after:content-[' '] after:bg-detalled after:transition-all after:duration-[.4s] after:ease-in-out after:right-0 after:absolute  after:hover:right-auto after:hover:left-0 after:hover:w-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="z-20 hover:text-secundariod transition-all duration-[.4s] ease-in-out hover:scale-110">
            My Resume
          </span>
        </a>
        <p className="inline-block font-caveat text-detalled text-base">
          &#60;/a&#62;
        </p>
      </div>
    </div>
  )
}

export default About
