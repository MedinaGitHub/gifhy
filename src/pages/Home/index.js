import { useGifs } from "hooks/useGifs";
import ListOfGifs from "components/ListOfGifs";
import TrendingSearches from "components/TrendingSearches";
import SearchForm from "components/SearchForm";

export default function Home() {
  //const [path, pushLocation] = useLocation();
  const { loading, gifs } = useGifs();

  //al usar useCallback evitamos que el componente SearchForm se re renderice varias veces
  /*
  const handleSubmit = useCallback(
    ({ keyword }) => {
      //navegar a otra ruta
      pushLocation(`/search/${keyword}`);
    },
    [pushLocation]
  );
  */

  return (
    <>
    <header className="o-header">
    <SearchForm/>
      {/*<SearchForm onSubmit={handleSubmit} /> */}
    </header>
    <div className="App-wrapper">
      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Última búsqueda</h3>
          <ListOfGifs gifs={gifs} />
        </div>
        <div className="App-category">
          <TrendingSearches />
        </div>
      </div>
    </div>
  </>
  );
}
