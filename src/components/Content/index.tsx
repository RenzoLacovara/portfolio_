import React from "react";
import dynamic from "next/dynamic";
import Greet from "../Greet";
import About from "../About";
import Parent from "../pruebaParent";

const Content = () => {
  const Projects = dynamic(() => import("../Projects"));

  return (
    <div className="col-start-2 row-start-1 row-end-4 text-3xl overflow-hidden w-[95%] md:w-full m-auto">
      <Greet />
      <About />
      <Projects />
    </div>
  );
};

export default Content;
