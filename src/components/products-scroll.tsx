import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ProductCard } from "./product-card";

export interface Artwork {
  artist: string;
  art: string;
}

interface ProductScrollProps {
  Product: {
    thumbnail: string;
    images: string[];
    description: string;
    name: string;
    id: number;
    price: number;
  }[];
}

export function ProductScroll({ Product }: ProductScrollProps) {
  return (
    <ScrollArea
      className=" relative w-full  whitespace-nowrap
      rounded-3xl border-[1.5px] border-acccent bg-transparent "
    >
      <div className="flex w-max space-x-3 p-4">
        {Product.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
