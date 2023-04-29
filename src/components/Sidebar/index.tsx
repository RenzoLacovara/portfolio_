import React from 'react'
import Navbar from '../NavBar'
import Footer from '../Footer'
import { ResponsiveProvider } from '../../context/navbarContext'
import { useResponsive } from '../../hooks/useResponsive'

const SideBar = () => {
  const { responsive } = useResponsive()
  return (
    <ResponsiveProvider>
      <div
        className={`row-span-3 col-start-1 col-end-2 h-screen fixed ${
          responsive ? 'md:w-[130px] w-24' : 'w-11'
        } z-10 transition-all duration-500 ease-custom animate-fadeLeftFast opacity-0`}
        id="sidebar"
      >
        <Navbar />
        <Footer />
      </div>
    </ResponsiveProvider>
  )
}

export default SideBar
