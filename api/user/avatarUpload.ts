import axios from "../../core/axios";

export default async (file: any) => {
  try {
    const formData = new FormData();
    formData.append("avatar", file);

    const res = await axios.post("/upload", formData, {
      headers: {
        "Content-type": "multipart/form-data",
      },
    });

    return res.data;
  } catch (err) {
    if (err instanceof Error) return err.message;
  }
};
