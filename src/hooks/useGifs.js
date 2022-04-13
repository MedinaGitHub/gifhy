import { useContext, useState, useEffect } from "react";
import getGifs from "../service/getGifs";
import GifsContext from "../context/GifsContext";
const INITIAL_PAGE = 0;

export function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);


  const [page, setPage] = useState(INITIAL_PAGE);
  const { gifs, setGifs } = useContext(GifsContext);

  const keywordToUse =
    keyword || localStorage.getItem("lastKeyword") || "random";

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword: keywordToUse }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      localStorage.setItem("lastKeyword", keywordToUse);
    });
  }, [keyword, keywordToUse,setGifs]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;
    setLoadingNextPage(true)
    getGifs({ keyword: keywordToUse , page}).then((nextGifs) => {
      setGifs(prevGif => prevGif.concat(nextGifs));
      setLoadingNextPage(false)
    })
  }, [page, keywordToUse]);

  return { loading, gifs, setPage };
}
