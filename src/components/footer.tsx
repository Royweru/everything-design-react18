import { Socials } from "./socials";

export const Footer = () => {
  const footerContent = [
    { id: 1, label: "Home", path: "#top" },
    { id: 1, label: "Services", path: "#services" },
    { id: 1, label: "Featured", path: "#featured" },
    { id: 1, label: "Contact", path: "#contact" },
  ];
  const companyContent = [
    { id: 1, label: "Contact", path: "#contact" },
    { id: 1, label: "About", path: "#about" },
    
  ];
  return (
    <footer
      className=" w-full max-h-max py-6 bg-n-4 grid md:grid-cols-7 gap-x-4
   border-t-2 rounded-t-md  flex-col gap-y-2 text-color-2 font-grotesk mt-1"
    >
     
      <div className=" md:col-span-2 col-span-1 flex flex-col gap-y-4  justify-center items-center ">
        <div className=" font-bold  font-gothic text-center w-full">
               <h4 className=" text-xl  text-neutral-600">
                      SERVICE
               </h4>
            </div>  
        <ul className=" flex flex-col w-full justify-center gap-y-3 items-center h-full">
            {footerContent.map(footer=>(
                <a href="" key={footer.id}>
                        <li className=" font-extralight text-medium font-gothic  text-sm">
                    {footer.label}
                </li>
                </a>
              
            ))}
        </ul>
      </div>

      <div className=" md:col-span-2 col-span-1  flex flex-col gap-y-2  justify-center items-center ">
        <div className=" font-bold  font-gothic text-center w-full">
               <h4 className=" text-xl text-neutral-600">
                      COMPANY
               </h4>
            </div>  
        <ul className=" flex flex-col w-full justify-center gap-y-3 items-center h-full">
            {companyContent.map(footer=>(
                <a href="" key={footer.id}>
                        <li className=" font-extralight text-medium font-gothic  text-sm">
                    {footer.label}
                </li>
                </a>
              
            ))}
        </ul>
      </div>
   <div className=" md:col-span-3 col-span-1">
     <Socials />
   </div>
   


    </footer>
  );
};
