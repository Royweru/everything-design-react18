export const ProductHeader = ({ title }: { title: string }) => {
  return (
    <div className=" flex w-full justify-center items-center font-semibold font-code my-3 ">
      <h1 className=" text-center md:text-3xl text-xl  text-color-1 ">
        {title}
      </h1>
    </div>
  );
};
