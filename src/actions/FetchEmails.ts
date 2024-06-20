import api from "./api";
export const FetchEmails = async () => {
  try {
    const res = await api.get("/api/email-message/");
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};
