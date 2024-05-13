
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { ImageCard } from "./shared/image-card"


interface ProductsScrollProps{
    data:{
        thumbnail:string,
        images:string[],
        description:string,
        name:string,
        id:number,
        price:number
    }[]
}
export const ProductsScroll = ({data}:ProductsScrollProps) => {
  return (
    <ScrollArea className="w-full   bg-white">
    <div className=" flex w-max space-x-4 px-6 py-4">
       {data.map(mug=>(
        <ImageCard Product={mug} key={mug.id}/>
       ))}
    </div>
    <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
