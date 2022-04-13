import ListOfGifs from "components/ListOfGifs";
import { useGifs } from "hooks/useGifs";

export default function SearchResult({ params }) {
  const { keyword } = params;
  const { loading, gifs, setPage } = useGifs({ keyword });

  const handleNextPage = () => setPage(prevPage => prevPage + 1)

  console.log("-");
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h3 className="App-title">{decodeURI(keyword)}</h3>
          <ListOfGifs gifs={gifs} />
        </>
      )}
      <br/>
      <button onClick={handleNextPage}>Get next page</button>
    </>
  );
}
