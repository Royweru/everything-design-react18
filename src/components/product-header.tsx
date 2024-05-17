
export const ProductHeader = ({title}:{
    title:string
}) => {
  return (
    <div className=" flex w-full justify-center items-center py-4  font-semibold font-grotesk my-3 ">
        <h1 className=" text-center md:text-4xl text-xl  text-color-1 ">
            {title}
        </h1>
    </div>
  )
}
