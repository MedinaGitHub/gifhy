import { useContext } from "react";
import Gif from "../../components/Gif";
//import GifsContext from "../../context/GifsContext";

import useGlobalGifs from '../../hooks/useGlobalGifs'

export default function Detail({ params }) {
  //esto es a modo de ver que uno puede trarse las cosas del Context
  //const { gifs } = useContext(GifsContext);
  //Pero podríamos traernos los gif del custom hooks de useGIf
  
  const gifs = useGlobalGifs()

  const gif = gifs.find((singleGif) => singleGif.id === params.id);

  console.log(gifs);

  return <>
      <h3 className="App-title">{gif.title}</h3>
      <Gif {...gif} />
    </>
}
