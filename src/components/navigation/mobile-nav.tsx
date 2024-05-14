import { FaBars } from "react-icons/fa"
import { useState } from "react"

export const MobileNav = () => {
  const[isOpen,setIsOpen] = useState(false)
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=" w-full md:hidden absolute right-1 h-full flex items-center justify-center">
      <FaBars className=" font-bold text-white" />
       <div className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white flex flex-col items-center justify-center transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
        <a href="#home" className="my-4 text-xl" onClick={toggleDrawer}>Home</a>
        <a href="#about" className="my-4 text-xl" onClick={toggleDrawer}>About</a>
        <a href="#services" className="my-4 text-xl" onClick={toggleDrawer}>Services</a>
        <a href="#contact" className="my-4 text-xl" onClick={toggleDrawer}>Contact</a>
      </div>
    </div>
  )
}
