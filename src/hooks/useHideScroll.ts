import { IPost } from "@interfaces/interfaces";
import { useEffect } from "react";

export const useHideScroll = (flag: boolean | IPost | null) => {
  useEffect(() => {
    if (flag) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [flag]);
};
