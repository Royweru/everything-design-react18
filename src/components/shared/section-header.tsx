import React from "react";

export const SectionHeader = ({ title }: { title: string }) => {
  return (
    <div className=" w-full px-8  py-5 flex flex-col gap-y-4 font-gothic
     text-7xl font-semibold  text-color-4 items-end my-3">
      <h1>{title}</h1>
      <div className=" relative  h-[2px] bg-white w-[350px]" />
    </div>
  );
};
