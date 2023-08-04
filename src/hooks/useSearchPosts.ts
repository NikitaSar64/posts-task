import { IPost } from "@interfaces/interfaces";
import { SearchContext } from "../context/searchContext";
import { useContext, useEffect, useState } from "react";
import { searchPosts } from "../helpers/searchPosts";

export const useSearchPosts = (posts: IPost[] | null): [IPost[] | null] => {
  const { value } = useContext(SearchContext);
  const [newPosts, setNewPosts] = useState(posts);

  useEffect(() => {
    if (posts) {
      if (value != "") {
        setNewPosts(searchPosts(posts, value));
      } else {
        setNewPosts(posts);
      }
    }
  }, [value, posts]);

  return [newPosts];
};
