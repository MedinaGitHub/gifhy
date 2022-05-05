import { useState, useEffect } from "react";
import { useGifs } from "hooks/useGifs";
import getSingleGif from "service/getSingleGif";

export default function useSingleGif({ id }) {
  const { gifs } = useGifs();
  const gifFromCache = gifs.find((singleGIf) => singleGIf.id === id);
  const [gif, setGif] = useState(gifFromCache);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!gif) {
      setIsLoading(true);
      getSingleGif({ id })
        .then((gif) => {
          setGif(gif);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          setIsError(true);
        });
    }
  }, [gif, id]);

  return { gif, isLoading, isError };
}
