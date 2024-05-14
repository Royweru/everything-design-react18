import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useProductModal } from "@/hooks/useModal";
import { ModalSocials } from "../shared/modal-socials";

export const ProductModal = () => {
  const { isOpen, data, onClose } = useProductModal();
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="  text-color-2">
        <DialogHeader>
          <DialogTitle>{data?.name}</DialogTitle>
          <DialogDescription>
           {data?.description}
          </DialogDescription>
        </DialogHeader>
        <div className=" w-full relative flex flex-col gap-y-4">
            <div className=" relative w-full grid grid-cols-2 gap-1">
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
            <div className=" w-full px-4 py-3  font-gothic flex justify-between items-center">
               <h4 className="  text-color-5 text-xl font-semibold">
                Make an order now
               </h4>
               <ModalSocials />
            </div>
        </div>
       
      </DialogContent>
    </Dialog>
  );
};
