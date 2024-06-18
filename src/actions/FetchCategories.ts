import api from "./api";

export const FetchCategories = async () => {
  try {
    const res = await api.get("/api/category/");
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};
