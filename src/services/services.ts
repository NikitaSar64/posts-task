import { IPost } from "@interfaces/interfaces";
import axios from "axios";

export const getPosts = async () => {
  const response = await axios.get<IPost[]>(import.meta.env.VITE_API_URL);
  return response;
};
