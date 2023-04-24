import React from "react";
import Navbar from "../NavBar";
import Footer from "../Footer";
import { ResponsiveProvider } from "../../context/navbarContext";
import { useResponsive } from "../../hooks/useResponsive";

const SideBar = () => {
  const { responsive } = useResponsive();
  return (
    <ResponsiveProvider>
      <div
        className={`col-start-0 col-end-1 h-screen col-span-2 relative ${
          responsive ? "md:w-[130px] w-24" : "w-11"
        } z-10 transition-all duration-500 ease-custom animate-fadeLeftFast`}
        id="sidebar"
      >
        <Navbar />
        <Footer />
      </div>
    </ResponsiveProvider>
  );
};

export default SideBar;
