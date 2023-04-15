import React from "react";
import Navbar from "../NavBar";
import Footer from "../Footer";

const SideBar = () => {
  return (
    <div className="h-screen w-[140px] col-span-2 fixed bg-black">
      <Navbar />
      <Footer />
    </div>
  );
};

export default SideBar;
