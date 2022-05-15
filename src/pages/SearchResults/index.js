import ListOfGifs from "components/ListOfGifs";
import { useGifs } from "hooks/useGifs";
//import useNearScreen
import { useRef, useEffect, useCallback } from "react";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";
import Helmet from "react-helmet";
import SearchForm from "components/SearchForm";

export default function SearchResult({ params }) {
  const { keyword, rating = 'g' } = params;
  const { loading, gifs, setPage } = useGifs({ keyword, rating }); //set page actualiza la paginación
  const title = gifs ? `${gifs.length} resultados de ${keyword}` : "";
  const externalRef = useRef();

  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 1000),
    []
  );

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
          <Helmet>
            <title>{title}</title>
            <meta name="descripcion" content="Gif searcher"></meta>
          </Helmet>
          <header className="o-header">
            <SearchForm initialKeyword={keyword} initialRating={rating} />
          </header>
          <div className="App-wrapper">
            <h3 className="App-title">{decodeURI(keyword)}</h3>
            <ListOfGifs gifs={gifs} />
            <div id="visor" ref={externalRef}></div>
          </div>
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
