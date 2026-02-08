import { useEffect, useState } from "react";
import type { Post } from "../types";

const useGetPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/articles?api_key=${import.meta.env.VITE_API_KEY}`,
        );
        const data = await response.json();
        console.log(data);
        setPosts(data.articles);
        setLoading(false);
      } catch (error) {
        setError(error as string);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return { posts, loading, error };
};

export default useGetPosts;
