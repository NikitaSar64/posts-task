import { IPost } from "@interfaces/interfaces";
import { HTMLAttributes } from "react";

export interface PostProps extends HTMLAttributes<HTMLElement> {
  post: IPost;
  onClick?: () => void;
}
