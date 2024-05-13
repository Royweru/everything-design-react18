
export const ProductHeader = ({title}:{
    title:string
}) => {
  return (
    <div className=" flex w-full justify-center items-center py-4 font-code my-3 ">
        <h1 className=" text-center text-6xl text-color-1">
            {title}
        </h1>
    </div>
  )
}
