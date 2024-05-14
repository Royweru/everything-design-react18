
import ProductCarousel from "../product-carousel"
import { ProductHeader } from "../product-header"

import { brandedHatsToppers, brandedHoodies, brandedMugs, brandedTshirts } from "@/data/products-details"


export const Product = () => {
  return (
    <div className=' w-full bg-transparent py-0 px-4 font-code text-2xl  font-semibold text-color-5 flex flex-col
     gap-y-4
    ' id="product">
        
       <ProductHeader title="Branded Mugs" />
       <ProductCarousel Product={brandedMugs} />
       <ProductHeader title="Branded T-shirts/jerseys" />
       <ProductCarousel Product={brandedTshirts}/>
       <ProductHeader title="Branded Hats" />
       <ProductCarousel Product={brandedHatsToppers}/>
       <ProductHeader title="Branded Hoodies" />
       <ProductCarousel Product={brandedHoodies}/>
    </div>
  )
}
