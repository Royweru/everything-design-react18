import { Product } from "@/types";
import { PenIcon, Trash2Icon } from "lucide-react";

export const AdminProductCard = ({
  product,
  onDelete,
}: {
  product: Product;
  onDelete: (productId: number) => void;
}) => {
  return (
    <div
      className=" my-4 text-2xl flex rounded-xl 
             bg-n-2  justify-center items-center
              gap-x-2cursor-pointer w-full p-3"
    >
      <div className=" relative w-full p-1 flex justify-center items-center">
        <img
          src={product.thumbnail}
          alt=""
          className=" bg-center relative bg-cover h-[150px] w-[150px] rounded-xl"
        />
      </div>
      <div className=" w-full relative   flex flex-col gap-y-1">
        <div
          className="  
       flex justify-between items-center text-color-2 w-full"
        >
          <h2
            className=" relative w-full text-xl
           font-semibold text-start font-gothic "
          >
            {product.name}
          </h2>
          <div className="relative flex justify-center items-center gap-x-1">
            <button
              className=" p-4  cursor-pointer"
              onClick={() => onDelete(product.id)}
            >
              <Trash2Icon className=" text-rose-700 hover:text-white w-5 h-5" />
            </button>
            <button
              className=" p-4  cursor-pointer"
              onClick={() => onDelete(product.id)}
            >
              <PenIcon className="  text-emerald-600 hover:text-white w-5 h-5" />
            </button>
          </div>
        </div>
        <div className=" relative w-full">
          {product.description.length > 100 ? (
            <p className=" text-xs font-gothic tracking-wide leading-relaxed font-semibold text-color-5">
              {product.description.slice(0, 100)}...
            </p>
          ) : (
            <p className=" text-xs tracking-wide font-gothic leading-relaxed font-semibold text-color-5">
              {product.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
