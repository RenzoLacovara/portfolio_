import React from "react";
import { useEffect, useRef } from "react";
import Image from "next/image";
import yo from "../../../public/Images/2.webp";
import Typed from "typed.js";
const About = () => {
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

  return (
    <div>
      <p class="fade-left active font-caveat text-detalled mt-8 ml-2">
        &#60;html&#62;
      </p>
      <p class="fade-left active font-caveat text-detalled ml-6">
        &#60;body&#62;
      </p>
      <section class="banner-intro">
        <div class="container_intro fade-left active pt-8" id="sobremi">
          <p class="inline-block font-caveat text-detalled absolute ml-10">
            &#60;h1&#62;
          </p>
          <h1 class="namee inline-block drop-shadow-title stroke-secundariod text-7xl pl-24">
            Hi!
            <br />
            I'm Renzo!
          </h1>
          <p class="inline-block font-caveat text-detalled pl-2">
            &#60;/h1&#62;
          </p>
          <br />
          <p class="ml-14 inline-block font-caveat text-detalled">
            &#60;p&#62;
          </p>
          <h3 class="inline-block text-detalled mt-2 text-4xl">
            <span className="text-principal pl-2">I'm a </span>
            <span ref={el}></span>
          </h3>
          <p class="inline-block font-caveat text-detalled">&#60;/p&#62;</p>
        </div>
        <div class="containerr fade-right active">
          <div class="container-inner">
            <Image class="img img1" src={yo} />
            <div class="thought fade-right2 active">I need coffee...</div>
          </div>
        </div>
      </section>
      <div class="container_sobremi fade-bottom2 active">
        <p class="tag tag3 inli">&#60;h2&#62;</p>
        <h2 class="inli intro">
          <span class="intro">A little about me</span>
        </h2>
        <p class="tag inli">&#60;/h2&#62;</p>
        <p class="tag3 tag">&#60;p&#62;</p>
        <p class="sobremi_p">
          I am a self-taught programmer, always curious and willing to learn,
          currently focused mainly on the development of web pages and apps
          prioritizing accessibility, good practices, responsive design and a
          lot of attention to every detail. Will not have have to settle for
          basic solutions and empty templates. I guarantee completely customized
          and attractive designs for your ideas. Your page will be the first
          impression of your customers, let's make it a good one!{" "}
        </p>
        <p class="tag tag3">&#60;/p&#62;</p>
        <p class="tag tag3 inli">&#60;a&#62;</p>
        <a
          href="./certificados/CV Renzo Lacovara.pdf"
          download="RenzoLacovaraCV"
          class="link_cv"
        >
          My Resume
        </a>
        <p class="tag inli">&#60;/a&#62;</p>
      </div>
    </div>
  );
};

export default About;
