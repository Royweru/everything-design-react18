import { FaFacebook } from "react-icons/fa"


export const Socials = () => {
  return (
    <div className=" flex flex-col h-full w-full justify-evenly">
        <h2 className=" font-gothic font-semibold text-3xl text-center">
            SOCIALS
        </h2>
    <div className=" w-full items-center flex justify-center space-x-4 md:space-x-6 h-full   gap-4">
        <FaFacebook className=" h-20 w-20 text-white " />
        <FaFacebook className=" h-20 w-20 text-white "/>
        <FaFacebook className=" h-20 w-20 text-white "/>
    </div>
    </div>

  )
}
