
export const ProductHeader = ({title}:{
    title:string
}) => {
  return (
    <div className=" flex w-full justify-center items-center py-4  font-semibold font-gothic my-3 ">
        <h1 className=" text-center text-4xl text-color-1 italic">
            {title}
        </h1>
    </div>
  )
}
