import { useState } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'
const Goup = () => {
  const [visible, setVisible] = useState(false)
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  window.addEventListener('scroll', toggleVisible)
  return (
    <>
      <button
        className=" border-none flex items-center justify-center pl-[1px] fixed h-9 w-9 text-2xl bottom-4 right-9 text-center shadow-card z-50 bg-principal text-secundario rounded-full transition-all duration-300 ease-in-out hover:scale-110 hover:bg-detalled "
        onClick={scrollToTop}
        style={{ opacity: visible ? '1' : '0' }}
      >
        <AiOutlineArrowUp />
      </button>
    </>
  )
}

export default Goup
