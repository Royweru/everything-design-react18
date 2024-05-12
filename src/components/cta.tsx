import TiedGallery from "./shared/tied-gallery"


export const CTA = () => {
  return (
    <div className=' container py-2 h-full'>
        <div className=' w-full relative grid md:grid-cols-2 gap-3 '>
             <div className=" font-code font-semibold text-lg col-span-1 leading-[1.75rem] px-6s h-full flex justify-center items-center px-6">
                 <p className=" tracking-wide">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                 </p>
             </div>
             <div className=" col-span-1 md:py-6 py-0 flex items-center justify-center">
                 <TiedGallery />
             </div>
        </div>
    </div>
  )
}
