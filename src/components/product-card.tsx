import { useProductModal } from "@/hooks/useModal";

export const ProductCard = ({
  product,
}: {
  product: {
    thumbnail: string;
    images: string[];
    description: string;
    name: string;
    id: number;
    price: number;
  };
}) => {
  const { onOpen } = useProductModal();
  return (
    <div
      key={product.name}
      className="shrink-0 cursor-pointer flex flex-col gap-y-2 overflow-hidden "
      onClick={() => onOpen(product)}
    >
      <div className=" rounded-md relative">
        <img
          src={product.thumbnail}
          alt={`Photo by ${product.thumbnail}`}
          className=" aspect-square h-56 w-[224px] object-cover rounded-xl"
        />
      </div>
      <div className=" text-sm text-start relative max-w-56 flex flex-col justify-evenly px-1">
        <h4 className=" text-white font-gothic font-semibold">
          {product.name}
        </h4>
        <p className=" italic font-gothic text-color-1 text-xs">
          Kes {product.price}
        </p>
      </div>
    </div>
  );
};