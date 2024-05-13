interface ImageCardProps{
  Product:{
      thumbnail:string,
      images:string[],
      description:string,
      name:string,
      id:number,
      price:number
  }
}
export const ImageCard = ({Product}:ImageCardProps) => {

  return (
    <div className="  w-[300px] group cursor-pointer">
      <div className=" flex flex-col rounded-2xl bg-color-2 overflow-hidden p-3">
        <div className=" relative rounded-xl w-full md:h-[250px]  cursor-pointer group-hover:scale-105">
          <img
            src={Product.thumbnail}
            alt=""
          />
        </div>
        <div className=" flex justify-center items-center w-full">
          <div className=" font-gothic text-4xl font-bold text-n-4 leading-9">
          Kes {Product.price}
          </div>
          <div className="w-full h-full flex flex-col gap-y-4 font-code">
            <h3 className=" text-2xl font-semibold  font-code capitalize underline text-n-3">
              {Product.name}
            </h3>
            <div className="  text-xs text-n-4 font-gothic font-light">
              <p className=" tracking-wide">
               {Product.description.slice(0,50)} ..... 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};