import React from "react";

interface ServiceBoxProps {
  service: {
    id: number;
    icon: React.ReactElement<unknown>;
    label: string;
    description: string;
  };
}

export const ServiceBox = ({ service }: ServiceBoxProps) => {
  return (
    <div className=" col-span-1 flex flex-col gap-y-4 font-code ">
      <div className=" rounded-full p-2 bg-transparent flex justify-center items-center w-full">
        <div>{service.icon}</div>
      </div>
      <div className="flex flex-col gap-y-2 px-4">
        <h3 className="  text-color-3 text-3xl font-semibold tracking-wide  leading-[1.5rem] font-grotesk">
          {service.label}
        </h3>
        <p className=" font-code text-color-2 text-sm font-semibold">
          {service.description}
        </p>
      </div>
    </div>
  );
};
