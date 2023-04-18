import { React, useState } from "react";
import Navbar from "../NavBar";
import Footer from "../Footer";

const SideBar = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`col-start-0 col-end-1 h-screen col-span-2 relative ${
        hovered ? "md:w-[130px] w-24" : "w-11"
      } z-10 transition-all duration-500 ease-custom `}
      id="sidebar"
    >
      <Navbar hovered={hovered} setHovered={setHovered} />
      <Footer hovered={hovered} />
    </div>
  );
};

export default SideBar;
