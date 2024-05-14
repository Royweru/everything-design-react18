import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useProductModal } from "@/hooks/useModal";
import { ModalSocials } from "../shared/modal-socials";
import { ScrollArea } from "../ui/scroll-area";

export const ProductModal = () => {
  const { isOpen, data, onClose } = useProductModal();
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
         
      <DialogContent className="  text-color-2">
      <ScrollArea className=" h-[500px]">
        <DialogHeader>
          <DialogTitle>{data?.name}</DialogTitle>
          <DialogDescription>
           {data?.description}
          </DialogDescription>
        </DialogHeader>
    
        <div className=" w-full relative flex flex-col gap-y-4">
            <div className=" relative w-full grid md:grid-cols-2 gap-1">
              {data?.images?.map((img) => (
                <div key={img} className=" col-span-1 h-[250px]">
                  <img
                    src={img}
                    alt=""
                    className=" rounded-md bg-cover bg-center h-full w-full"
                  />
                </div>
              ))}
            </div>
            <div className=" w-full font-gothic  flex justify-between items-center">
                 <div className=" text-3xl font-extrabold font-code ">
                      Kes {data?.price}
                 </div>
                 <div className=" font-semibold txt-sm italic">
                  only
                 </div>
            </div>
        </div>
        
      
       <DialogFooter className=" w-full px-4 py-3  flex justify-between items-center">
       <h4 className="  text-color-5 text-md font-semibold  font-gothic w-full">
                Make an order now
               </h4>
               <ModalSocials />
       </DialogFooter>
       </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
