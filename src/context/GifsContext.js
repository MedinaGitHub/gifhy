import React, { useState } from "react";

const Context = React.createContext({});// aquí no pongo nada por que este caso de uso está
//horientado a que los componentes estarán wrappeados, por lo que vale son lso valores del
// <Conte...Provi..  --> value={} <--

// ESTO AQUÍ ES EL PROVEEDOR CON LA DATA que se carga
export function GifsContextProvider({ children }) {
  const [gifs, setGifs] = useState([]); //al final aquí se almacenan y cambian los gifs de toda al app, ya que esto 
  //se exporta en useGifs y se usa este gifs, y setGifs

  //Children serán todos los componentes que wrapee este componente
  return (
    <Context.Provider value={{ gifs, setGifs }}>{children}</Context.Provider>
  );
}



// esto se exporta para que se consuma la data del contexto.
export default Context;
