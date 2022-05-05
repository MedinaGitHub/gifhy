import ListOfGifs from "components/ListOfGifs";
import { useGifs } from "hooks/useGifs";
//import useNearScreen
import { useRef, useEffect, useCallback } from "react";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";

export default function SearchResult({ params }) {
  const { keyword } = params;
  const { loading, gifs, setPage } = useGifs({ keyword }); //set page actualiza la paginación
  const externalRef = useRef();

  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  const debounceHandleNextPage = useCallback(debounce(() =>setPage(prevPage => prevPage + 1), 1000),
    []);

  useEffect(
    function () {
      if (isNearScreen) debounceHandleNextPage();
    },
    [debounceHandleNextPage, isNearScreen]
  );

  //const handleNextPage = () => setPage(prevPage => prevPage + 1) // del boton next pages

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h3 className="App-title">{decodeURI(keyword)}</h3>
          <ListOfGifs gifs={gifs} />
          <div id="visor" ref={externalRef}></div>
        </>
      )}
      <br />
      {/* 
      //en caso de activar la paginación con un botón
      <button onClick={handleNextPage}>Get next page</button>
      */}
    </>
  );
}
