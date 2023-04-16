import React from "react";
import dynamic from "next/dynamic";

const Content = () => {
  const Greet = dynamic(() => import("../Greet"));
  const About = dynamic(() => import("../About"));
  return (
    <div className="col-start-2 row-start-1 row-end-4 text-3xl overflow-hidden w-[95%] md:w-full m-auto">
      <Greet />
      <About />
    </div>
  );
};

export default Content;
