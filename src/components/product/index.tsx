
import { ProductHeader } from "../product-header"
import { ProductsScroll } from "../products-scroll"
import { brandedHatsToppers, brandedHoodies, brandedMugs, brandedTshits } from "@/data/products-details"


export const Product = () => {
  return (
    <div className=' w-full bg-transparent py-0 px-4 font-code text-2xl  font-semibold text-color-5 flex flex-col
     gap-y-4
    ' id="product">
        
       <ProductHeader title="Branded Mugs" />
       <ProductsScroll data={brandedMugs}/>
       <ProductHeader title="Branded T_shirts/jerseys" />
       <ProductsScroll data={brandedTshits}/>
       <ProductHeader title="Branded Hats" />
       <ProductsScroll data={brandedHatsToppers}/>
       <ProductHeader title="Branded Hoodies" />
       <ProductsScroll data={brandedHoodies}/>
    </div>
  )
}
