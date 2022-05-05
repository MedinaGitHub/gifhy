import{useContext}  from 'react'
import GifsContext from '../context/GifsContext';

//este archivo lo unico que hace es retornar los gif que hay en el contexto
export default  function useGifsContext(){
    const { gifs } = useContext(GifsContext);
    return gifs
}
