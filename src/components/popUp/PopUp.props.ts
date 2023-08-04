import { IPost } from "@interfaces/interfaces";
import { Dispatch, HTMLAttributes, ReactNode, SetStateAction } from "react";

export interface PopUpProps extends HTMLAttributes<HTMLDivElement> {
  active: null | IPost;
  setActive: Dispatch<SetStateAction<null | IPost>>;
  children: ReactNode;
}
