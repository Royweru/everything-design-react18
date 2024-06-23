export const SectionHeader = ({ title }: { title: string }) => {
  return (
    <div
      className=" w-full px-8  py-5 flex flex-col gap-y-4 font-gothic
     text-7xl font-semibold    items-end my-3"
    >
      <h1 className="text-accent">{title}</h1>
      <div className=" relative   h-[2px]  bg-color-4 w-[350px]" />
    </div>
  );
};
