/* eslint-disable @typescript-eslint/no-unused-vars */
import { Product, UserDetails } from "@/types";
import { useEffect, useState } from "react";
import GradientButton from "@/components/shared/gradient-button";
import api from "@/actions/api";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/constants";
import { useNavigate } from "react-router-dom";
import { AdminProductCard } from "./components/admin-product-card";
import { AdminLogoutButton } from "./components/admin-logout-button";
import { AdminHeader } from "./components/admin-header";
import { fetchProduts } from "@/actions/FetchProducts";
import { useAdminProductModal } from "@/hooks/useProductModal";
export const Admin = () => {
  const { onOpen } = useAdminProductModal();
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState<UserDetails>(null);
  const [products, setProducts] = useState<Product[]>([]);

  const [name, setName] = useState("");

  const [description, setDescription] = useState("");

  const [price, setPrice] = useState("");

  const [slug, setSlug] = useState("");

  const [images, setImages] = useState([]);

  const [thumbnail, setThumbnail] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    productFetch();
    getUser();
  }, []);

  const productFetch = async () => {
    const res = await fetchProduts();
    setProducts(res);
  };
  const logoutUser = async () => {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    window.location.reload();
    navigate("/super-admin");
  };
  const getUser = async () => {
    try {
      const res = await api.get("/api/user/");
      if (res.status === 200) {
        setUserDetails(res.data);
      }
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };
  const uploadProduct = async () => {
    setLoading(true);
    try {
      const res = await api.post("/api/product/", {
        name,
        description,
        thumbnail,
        images: ["this", "that", "there"],
        price: parseInt(price),
        slug: name,
      });
      if (res.status === 201) {
        setName("");
        setDescription("");
        setThumbnail("");
        setImages([]);
        setPrice("");
        setSlug("");
        window.location.reload();
        return alert("Congrats product uploaded!");
      }
    } catch (error) {
      console.error(error);
      return alert(error);
    } finally {
      setLoading(false);
    }
  };
  const onDelete = async (productId: number) => {
    try {
      const res = await api.delete(`/api/product/delete/${productId}/`);
      if (res.status === 204) {
        alert("Product deleted successfully!");
      }

      window.location.reload();
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  const productsLength = products.length;
  return (
    <div className=" w-full min-h-screen p-6">
      <div className=" w-full my-3 flex  flex-wrap md:flex-row md:justify-between items-center gap-3 md:gap-0">
        <AdminHeader
          username={userDetails === null ? "" : userDetails.username}
        />
        <AdminLogoutButton logout={logoutUser} />
      </div>
      <div className=" grid w-full md:grid-cols-2">
        <ScrollArea className=" h-[500px] p-4 rounded-2xl border border-n-5">
          <div className=" flex flex-col gap-y-3 h-full">
            <h1 className=" font-code  text-4xl font-semibold">
              Products {productsLength}
            </h1>
            {products.map((product) => (
              <AdminProductCard
                key={product.id}
                onClick={() => {
                  onOpen(product);
                }}
                product={product}
                onDelete={() => onDelete(product.id)}
                userId={userDetails?.id}
              />
            ))}
          </div>
        </ScrollArea>

        <div className=" col-span-1 py-4  px-8 ">
          <div className=" relative flex w-full h-full flex-col gap-y-3">
            <div>
              <input
                type="text"
                placeholder="Name of the product"
                className="input-lg input-bordered w-full max-w-xs rounded-3xl text-color-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="textarea-lg w-full textarea-accent rounded-3xl text-color-2"
                placeholder="Description not more than 1000 words.."
              ></textarea>
            </div>
            <div>
              <input
                placeholder="Price of the product"
                className="input-lg input-bordered w-full max-w-xs rounded-3xl text-color-2"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div>
              <input
                placeholder="Thumbnail"
                className="input-lg input-bordered w-full max-w-xs rounded-3xl text-color-2"
                value={thumbnail}
                onChange={(e) => setThumbnail(e.target.value)}
              />
            </div>

            <div>
              <GradientButton content="SUBMIT" onClick={uploadProduct} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
