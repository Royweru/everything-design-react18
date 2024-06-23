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
      <DialogContent className=" text-light ">
        <ScrollArea className=" h-[500px]">
          <DialogHeader className=" flex flex-col gap-y-4 w-full">
            <DialogTitle className=" text-color-7 font-gothic font-semibold text-2xl w-full text-center">
              {data?.name}
            </DialogTitle>
            <DialogDescription className=" font-gothic text-sm font-light">
              {data?.description}
            </DialogDescription>
          </DialogHeader>

          <div className=" w-full relative flex flex-col gap-y-4 md:px-4 px-10 my-4">
            <div className=" relative w-full grid md:grid-cols-2 gap-2">
              {data?.images?.map((img) => (
                <div
                  key={img}
                  className=" col-span-1 h-[300px]  md:h-[250px]  "
                >
                  <img
                    src={img}
                    alt=""
                    className=" rounded-lg bg-cover bg-center h-full w-full"
                  />
                </div>
              ))}
            </div>
            <div className=" w-full font-gothic  flex justify-between items-center">
              <div className=" text-3xl font-extrabold font-code ">
                Kes {data?.price}
              </div>
              <div className=" font-semibold txt-sm italic">only</div>
            </div>
          </div>

          <DialogFooter>
            <div className=" w-full px-4 py-3 flex items-center justify-center">
              <h4 className="  text-color-5 text-md font-semibold  font-gothic w-full">
                Make an order now
              </h4>
              <ModalSocials />
            </div>
          </DialogFooter>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
