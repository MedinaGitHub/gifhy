import { useContext, useState, useEffect } from "react";
import getGifs from "../service/getGifs";
import GifsContext from "../context/GifsContext";

export function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false);

  const { gifs, setGifs} = useContext(GifsContext);

  useEffect(() => {
    setLoading(true);

    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random';

    getGifs({ keyword:keywordToUse }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      localStorage.setItem('lastKeyword', keywordToUse);
    });
  }, [keyword,setGifs]);

  return { loading, gifs };
}
