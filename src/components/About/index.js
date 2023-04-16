import React from "react";

const About = () => {
  return (
    <div class="animate-fadeBottom active my-8 opacity-0">
      <p class="inline-block font-caveat text-detalled text-base md:ml-10">
        &#60;h2&#62;
      </p>
      <h2 class="drop-shadow-subtitle inline-block ml-1">A little about me</h2>
      <p class="inline-block font-caveat text-detalled text-base ml-1">
        &#60;/h2&#62;
      </p>
      <p class="block font-caveat text-detalled text-base md:ml-10">
        &#60;p&#62;
      </p>
      <p class="text-sm mx-3 text-center md:text-xl md:mx-20 small:text-left">
        I am a self-taught programmer, always curious and willing to learn,
        currently focused mainly on the development of web pages and apps
        prioritizing accessibility, good practices, responsive design and a lot
        of attention to every detail. Will not have have to settle for basic
        solutions and empty templates. I guarantee completely customized and
        attractive designs for your ideas. Your page will be the first
        impression of your customers, let's make it a good one!{" "}
      </p>
      <p class="block font-caveat text-detalled text-base md:ml-10">
        &#60;/p&#62;
      </p>
      <div className="text-center small:text-left">
        <p class="inline-block font-caveat text-detalled text-base md:ml-10 ">
          &#60;a&#62;
        </p>
        <a
          href="/Images/certificados/CV_Renzo_Lacovara.pdf"
          download="RenzoLacovaraCV"
          className="text-base mx-3 py-2 px-4 rounded-[50px] bg-secundariod hover:text-detalled "
          target="_blank"
          rel="noopener noreferrer"
        >
          My Resume
        </a>
        <p class="inline-block font-caveat text-detalled text-base">
          &#60;/a&#62;
        </p>
      </div>
    </div>
  );
};

export default About;
