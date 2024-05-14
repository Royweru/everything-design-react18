


export const HeroText = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className=" flex flex-col py-12 gap-y-2 px-6">
      <h2 className=" h3 text-color-2 font-bold font-gothic">{title}</h2>
      <p className=" text-n-4  font-semibold font-gothic italic">
        {description}
      </p>
      
    </div>
  );
};
