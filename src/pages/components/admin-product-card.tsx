import { Product } from "@/types";
import { PenIcon, Trash2Icon } from "lucide-react";

export const AdminProductCard = ({
  product,
  onDelete,
  userId,
  onClick,
}: {
  product: Product;
  userId?: number;
  onClick: () => void;
  onDelete: (productId: number) => void;
}) => {
  return (
    <div
      className=" my-4 text-2xl flex rounded-xl 
             bg-n-2  justify-center items-center overflow-hidden
              gap-x-2cursor-pointer w-full p-3 cursor-pointer"
    >
      <div className=" relative w-full p-1 flex justify-center items-center">
        <img
          src={product.thumbnail}
          alt=""
          className=" bg-center relative bg-cover h-[150px] w-[150px] rounded-xl"
        />
      </div>
      <div className=" w-full relative  h-full flex flex-col items-center justify-between gap-y-2">
        <div
          className="  
       flex justify-between items-center text-color-2 w-full relative"
        >
          <h2
            className=" relative w-full text-xl
           font-semibold text-start font-gothic "
          >
            {product.name}
          </h2>

          {userId === product.creator && (
            <div className="relative flex justify-center items-center gap-x-1">
              <button
                className=" p-4  cursor-pointer"
                onClick={() => onDelete(product.id)}
              >
                <Trash2Icon className=" text-rose-700 hover:text-white w-5 h-5" />
              </button>
              <button className=" p-4  cursor-pointer" onClick={onClick}>
                <PenIcon className="  text-emerald-600 hover:text-white w-5 h-5" />
              </button>
            </div>
          )}
        </div>
        <div className=" text-xs text-start font-bold font-code text-n-9 w-full">
          <p>{product.price}</p>
        </div>
        <div className=" relative w-full flex   justify-between items-center">
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
        <div className=" relative w-full flex   justify-between items-center">
          <p className=" text-xs font-semibold max-w-xs text-white">
            {product.images}
          </p>
        </div>
      </div>
    </div>
  );
};
