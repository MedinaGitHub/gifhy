import "./App.css";
import { Link, Route } from "wouter";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import SearchResults from "./pages/SearchResults";
import { GifsContextProvider } from "./context/GifsContext";
import StaticContext from "./context/StaticContext";

//La palabra provider es por que provee es al que hace el wrapp, luego  con el hooc
// useCOntext hago la otra parte que es consumirlo

function App() {
  //TODO VIDEO MINUTO 46:48   https://www.youtube.com/watch?v=QBLbXgeXMU8&list=PLV8x_i1fqBw0B008sQn79YxCjkHJU84pC&index=2
  //TODO VIDEO MINUTO 1:22:00  same link to up.
  //TODO VIDEO  MINUTO 1:28:00 (falta escribir lo del contexto pero aun está como explicando) https://www.youtube.com/watch?v=2qgs7buSnHQ&list=PLV8x_i1fqBw0B008sQn79YxCjkHJU84pC&index=3
  //Ver bien el problema de los contextos
  //Nuevo capítulo
  //https://www.youtube.com/watch?v=VcxXipZg1-0&list=PLV8x_i1fqBw0B008sQn79YxCjkHJU84pC&index=4
  //TODO VIDEO MINUTO 32:33 https://www.youtube.com/watch?v=VcxXipZg1-0&list=PLV8x_i1fqBw0B008sQn79YxCjkHJU84pC&index=6

  /* esto del blabla.Provider es una manera pero dentro vemos la otra manera donde le paso el provider de una*/
  return (
    <StaticContext.Provider
      value={{
        name: "seba",
        suscribeteAlCanal: true,
      }}
    >
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <figure className="App-logo">
              <img alt="Giffy logo" src="/logo.png" />
            </figure>
          </Link>
          <GifsContextProvider>
            <Route component={Home} path="/" />
            <Route component={SearchResults} path="/search/:keyword" />
            <Route component={Detail} path="/gif/:id" />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
