import { brandedMugs } from "@/data/products-details"
import { ProductHeader } from "../product-header"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { ImageCard } from "../shared/image-card"


export const Product = () => {
  return (
    <div className=' w-full bg-white py-3 px-4 font-code text-2xl  font-semibold text-color-5 flex flex-col
     gap-y-4
    '>
        
       <ProductHeader title="Branded Mugs" />
       <ScrollArea className="w-full rounded-md  ">
        <div className=" flex w-max space-x-4 px-6 py-4">
           {brandedMugs.map(mug=>(
            <ImageCard Product={mug} key={mug.id}/>
           ))}
        </div>
        <ScrollBar orientation="horizontal" />
        </ScrollArea>
    </div>
  )
}
