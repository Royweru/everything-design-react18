import api from "./api";
export const fetchProduts = async () => {
  try {
    const res = await api.get("/api/product/");
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};
