import { IPost } from "@interfaces/interfaces";
import { getPosts } from "@services/services";
import { AxiosError, isAxiosError } from "axios";
import { useEffect, useState } from "react";

export const usePostsQuery = (): [
  IPost[] | null,
  boolean,
  AxiosError | null
] => {
  const [posts, setPosts] = useState<IPost[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await getPosts();
        setPosts(response.data);
        setError(null);
      } catch (error) {
        if (isAxiosError(error)) {
          setError(error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return [posts, isLoading, error];
};
