import { ProductHeader } from "../product-header";

import {
  brandedHatsToppers,
  brandedHoodies,
  brandedMugs,
  brandedTshirts,
} from "@/data/products-details";
import { ProductScroll } from "../products-scroll";

export const Product = () => {
  return (
    <div
      className=" w-full bg-transparent py-0 px-4 font-code text-2xl  font-semibold text-color-5 flex flex-col
     gap-y-4
    "
      id="product"
    >
      <ProductHeader title="Branded Mugs" />
      <ProductScroll Product={brandedMugs} />
      <ProductHeader title="Branded T-shirts/jerseys" />
      <ProductScroll Product={brandedTshirts} />
      <ProductHeader title="Branded Hats/Toppers" />
      <ProductScroll Product={brandedHatsToppers} />
      <ProductHeader title="Branded Hoodies" />
      <ProductScroll Product={brandedHoodies} />
    </div>
  );
};
