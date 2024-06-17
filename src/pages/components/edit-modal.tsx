import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useAdminProductModal } from "@/hooks/useProductModal";
import { ScrollArea } from "@/components/ui/scroll-area";
import api from "@/actions/api";

export const EditModal = () => {
  const { isOpen, data, onClose } = useAdminProductModal();
  const [editName, setEditName] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editPrice, setEditPrice] = useState<number>(0);
  const [editThumbnail, setEditThumbnail] = useState("");
  const [editImages, setEditImages] = useState([]);
  const [editFeatured, setEditFeatured] = useState(false);

  useEffect(() => {
    setEditName(data.name);
    setEditDescription(data.description);
    setEditPrice(data.price);
    setEditThumbnail(data.thumbnail);
    setEditImages(editImages);
    setEditFeatured(data.featured);
  }, []);
  const handleImagesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    const imagesArray = inputValue.split(","); // Assuming comma-separated values
    setEditImages(imagesArray);
  };

  const onSubmit = async () => {
    try {
      const res = await api.patch(`/api/product/update/${data.id}/`, {
        name: editName,
        description: editDescription,
        slug: editName,
        price: editPrice,
        featured: editFeatured,
        images: editImages,
        thumbnail: editThumbnail,
      });
      if (res.status === 200) onClose();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="  text-color-2">
        <DialogHeader className=" flex flex-col gap-y-4 w-full">
          <DialogTitle className=" text-k-3 font-gothic font-semibold text-2xl w-full text-center">
            Edit content for {data.name}
          </DialogTitle>
          <DialogDescription className=" font-gothic text-sm font-light">
            Make changes
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className=" h-[350px]">
          <div className=" w-full relative flex flex-col gap-y-4 md:px-4 px-10 my-4">
            <div>
              <input
                type="text"
                placeholder="Name of the product"
                className="input-lg input-bordered w-full max-w-xs rounded3xl text-color-2"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
            </div>
            <div>
              <textarea
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
                className="textarea-lg w-full textarea-accent rounded text-color-2"
                placeholder="Description not more than 1000 words.."
              ></textarea>
            </div>
            <div>
              <input
                type="number"
                placeholder="Price of the product"
                className="input-lg input-bordered w-full max-w-xs rounded-xl text-color-2"
                value={editPrice}
                onChange={(e) => setEditPrice(parseInt(e.target.value))}
              />
            </div>
            <div>
              <input
                placeholder="Thumbnail"
                className="input-lg input-bordered w-full max-w-xs rounded-xl text-color-2"
                value={editThumbnail}
                onChange={(e) => setEditThumbnail(e.target.value)}
              />
            </div>
            <div>
              <Checkbox
                id="terms1"
                checked={editFeatured}
                onCheckedChange={(val) => setEditFeatured(val)}
              />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="terms1"
                  className="text-sm font-medium leading-none
                   peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Featured
                </label>
              </div>
            </div>
            <div>
              <textarea
                value={editImages}
                onChange={handleImagesChange}
                className="textarea-lg w-full textarea-accent rounded text-color-2"
                placeholder="the images"
              ></textarea>
            </div>
          </div>
        </ScrollArea>
        <DialogFooter>
          <div className=" w-full px-4 py-3 flex items-center justify-center">
            <Button variant="outline" onClick={onSubmit}>
              Save
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
