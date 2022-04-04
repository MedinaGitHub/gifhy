import ListOfGifs from "../../components/ListOfGifs";
import {useGifs} from '../../hooks/useGifs'

export default function SearchResult({ params }) {
  const { keyword } = params;
    const { loading, gifs } = useGifs({ keyword });
console.log('-')
  return <>
  { loading ? 
    <h1>Loading...</h1> : 
    <>
      <h3 className="App-title">{keyword}</h3>
      <ListOfGifs gifs={gifs} />
    </>
  }
</>
}