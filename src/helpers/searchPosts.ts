import { IPost } from "@interfaces/interfaces";

export const searchPosts = (posts: IPost[], text: string) => {
  const searchPosts = [];
  for (const post of posts) {
    if (
      post.title.toLowerCase().includes(text) ||
      post.text.toLowerCase().includes(text)
    ) {
      searchPosts.push(post);
    }
  }

  return searchPosts;
};
