import {useState, memo} from 'react'

//Antes este componente estaba junto con el Home, Pero
//la herramienta de provider acusó de que se hacian muchos render innecesarios
//entnces lo movimos a otro lugar para que el cambio de estado del inputs
//no afectara toda la navegación de abajo
function SearchForm({onSubmit}) {
  const [keyword, setKeyword] = useState("");
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    //navegar a otra ruta
    onSubmit({keyword});
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
    <button>Buscar</button>
    <input
      placeholder="Search a gif here..."
      onChange={handleChange}
      type="text"
      value={keyword}
    />
  </form>
  )
}

export default memo(SearchForm)