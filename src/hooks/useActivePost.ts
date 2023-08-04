import { IPost } from "@interfaces/interfaces";
import { Dispatch, SetStateAction, useState } from "react";
import { useHideScroll } from "./useHideScroll";

export const useActivePost = (): [
  null | IPost,
  Dispatch<SetStateAction<null | IPost>>
] => {
  const [activePost, setActivePost] = useState<null | IPost>(null);

  useHideScroll(activePost);

  return [activePost, setActivePost];
};
