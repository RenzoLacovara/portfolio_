import React from "react";
import Navbar from "../NavBar";
import Footer from "../Footer";

const SideBar = () => {
  return (
    <div className="h-screen w-11 md:w-[140px] col-span-2 fixed ">
      <Navbar />
      <Footer />
    </div>
  );
};

export default SideBar;
