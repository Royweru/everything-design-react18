import { FaInstagram, FaTwitter,FaWhatsapp } from 'react-icons/fa';

export const ModalSocials = () => {
  return (
    <div className=" w-full flex justify-center items-center space-x-4 font-bold text-color-4">
        <FaInstagram  className=' w-5 h-5'/>
        <FaTwitter  className=' w-5 h-5'/>
        <FaWhatsapp  className=' w-5 h-5'/>
    </div>
  )
}
