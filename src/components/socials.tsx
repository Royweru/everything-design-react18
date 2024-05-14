import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa"


export const Socials = () => {
  return (
    <div className=" flex flex-col h-full w-full justify-evenly">
        <h2 className=" font-grotesk text-color-2 font-semibold text-3xl text-center">
            SOCIALS
        </h2>
    <div className=" w-full items-center flex justify-center space-x-4 md:space-x-6 h-full   gap-4">
        <FaFacebook className="  h-15 w-15 text-n-9 hover:text-white cursor-pointer" />
        <FaTwitter className=" h-15 w-15 text-n-9 hover:text-white cursor-pointer"/>
        <FaWhatsapp className=" h-15 w-15 text-n-9 hover:text-white cursor-pointer"/>
    </div>
    </div>

  )
}
