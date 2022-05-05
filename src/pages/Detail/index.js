import Gif from "components/Gif";
//import GifsContext from "context/GifsContext";

import useSingleGif from 'hooks/useSingleGif'
import { Redirect } from "wouter";

export default function Detail({ params }) {
  //esto es a modo de ver que uno puede trarse las cosas del Context
  //const { gifs } = useContext(GifsContext);
  //Pero podríamos traernos los gif del custom hooks de useGIf
  
  const {gif, isLoading, isError} = useSingleGif({id: params.id})
  
  if (isLoading) return <>cargando...</>
  if(isError) return <Redirect to='/404'/>
  if(!gif) return null

  return <>
      <h3 className="App-title">{gif.title}</h3>
      <Gif {...gif} />
    </>
}
