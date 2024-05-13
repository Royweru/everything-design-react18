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
      <div className=" flex flex-col rounded-2xl overflow-hidden p-3">
        <div className=" relative rounded-xl w-full md:h-[250px]  cursor-pointer group-hover:scale-105">
          <img
            src={Product.thumbnail}
            alt=""
          />
             <div className=" flex justify-center items-center w-full absolute bottom-1 right-0 left-0 opacity-50 
         group-hover:opacity-100 
        ">
         <p className=" text-n-4">
          {Product.name}
         </p>
        </div>
        </div>
     
      </div>
    </div>
  );
};