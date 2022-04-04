import{useContext}  from 'react'
import GifsContext from '../context/GifsContext';

export default  function useGifsContext(){
    const { gifs } = useContext(GifsContext);
    return gifs
}
