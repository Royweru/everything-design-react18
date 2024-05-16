import {  FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa"


export const Socials = () => {
  return (
    <div className=" flex flex-col h-full w-full justify-evenly">
        <h2 className=" font-grotesk text-color-2 font-semibold text-3xl text-center">
            SOCIALS
        </h2>
    <div className=" w-full items-center flex justify-center space-x-4 md:space-x-6 h-full   gap-4">
      <a href="https://www.instagram.com/_g.weru/" target="_blank">
      <FaInstagram className="  h-12 w-12  text-color-5 hover:text-white cursor-pointer" />
      </a>
      <a href="https://wa.me/+254759355344" target="_blank">
      <FaTwitter className="  h-12 w-12  text-color-5 hover:text-white cursor-pointer" />
      </a>
      <a href="https://wa.me/+254716665137" target="_blank">
      <FaWhatsapp className="  h-12 w-12  text-color-5 hover:text-white cursor-pointer" />
      </a>
      
    </div>
    </div>

  )
}
