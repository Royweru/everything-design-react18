import { FaInstagram, FaTwitter,FaWhatsapp } from 'react-icons/fa';

export const ModalSocials = () => {
  return (
    <div className=" w-full flex justify-center items-center space-x-4 font-bold text-color-4">
        <a href="https://wa.me/+254759355344" target='_blank'>
        <FaWhatsapp  className=' w-5 h-5'/>
        </a>
        <a href="https://www.instagram.com/_g.weru/" target='_blank'>
        <FaInstagram  className=' w-5 h-5'/>
        </a>
        <a href="https://wa.me/+254759355344" target='_blank'>
        <FaTwitter className=' w-5 h-5'/>
        </a>
       
    </div>
  )
}
