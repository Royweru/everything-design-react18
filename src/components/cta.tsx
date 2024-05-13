import GradientButton from "./shared/gradient-button"
import TiedGallery from "./shared/tied-gallery"


export const CTA = () => {
  return (
    <div className=' container py-2 h-full flex flex-col gap-y-4' id="#featured">
        <div className=' w-full relative grid md:grid-cols-2 gap-3 '>
             <div className=" font-code font-semibold text-lg col-span-1 leading-[1.75rem] px-6s h-full flex justify-center items-center px-6">
                 <p className=" tracking-wide">
                Branded Hats each having a different artwork and comes in different size is what is popping
                right now make your order now and get it delivered to oyur footstep right now , make your drip
                clean leave it clean and sassy
                 </p>
             </div>
             <div className=" col-span-1 md:py-6 py-0 flex items-center justify-center">
                 <TiedGallery />
             </div>
        </div>
        <div className=" w-full flex justify-center items-center">
            <GradientButton content="View Product"/>
        </div>
    </div>
  )
}
