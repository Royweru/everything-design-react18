import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ProductCard } from "./product-card";

export interface Artwork {
  artist: string;
  art: string;
}

export const works: Artwork[] = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
];

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
    <ScrollArea className=" relative w-full  whitespace-nowrap  rounded-3xl border border-n-4 ">
      <div className="flex w-max space-x-3 p-4">
        {Product.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
