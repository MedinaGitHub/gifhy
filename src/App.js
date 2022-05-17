import {Suspense} from 'react'
import "./App.css";
import { Link, Route } from "wouter";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import SearchResults from "./pages/SearchResults";
import Header from "components/Header";
import Register from 'pages/Register'
import Login from "pages/Login";
import { UserContextProvider } from "./context/UserContext";
import { GifsContextProvider } from "./context/GifsContext";

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
  //TODO VIDEO MINUTO 1:02:23 same link
  //Nuevo capítulo
  //TODO VIDEO MINUTO 34:38 https://www.youtube.com/watch?v=oCHdFiCgOSE&list=PLV8x_i1fqBw0B008sQn79YxCjkHJU84pC&index=5
  //TODO VIDEO  1:04:40 // termine el infinit scroll, viene una explicacion de useCallback   
  //Nuevo video
  //https://www.youtube.com/watch?v=Wo7_OVtu1ls&list=PLV8x_i1fqBw0B008sQn79YxCjkHJU84pC&index=6
// TODO VIDEO 44:32 https://www.youtube.com/watch?v=Wo7_OVtu1ls&list=PLV8x_i1fqBw0B008sQn79YxCjkHJU84pC&index=7
// TODO VIDEO 58:00
// TODO VIDEO 1:26:00 deploy vercel 
// TODO VIDEO 24:17 https://www.youtube.com/watch?v=b-pwpHaYOTI&list=PLV8x_i1fqBw0B008sQn79YxCjkHJU84pC&index=7
// TODO VIDEO 1:12:00 pendiente implementar helmet en el searchResult ahora viene integracion con githubs
// TODO VIDEO 6:01 https://www.youtube.com/watch?v=Wjy_nlYXTik&list=PLV8x_i1fqBw0B008sQn79YxCjkHJU84pC&index=8
// TODO VIDEO 1:31:00 hacer los test https://www.youtube.com/watch?v=Wjy_nlYXTik&list=PLV8x_i1fqBw0B008sQn79YxCjkHJU84pC&index=9
// TODO hacer un resumen en el Readme por ejemplo se me olvido que hace el suspense.
  //TODO ver en github la clase de inicio sesión, registro y agrgar a favorito https://www.youtube.com/watch?v=VT5S9Y49SYs&list=PLV8x_i1fqBw0B008sQn79YxCjkHJU84pC&index=9
// TODO minuto 27 está luchando con los css https://www.youtube.com/watch?v=dtbI6gDnTFU&list=PLV8x_i1fqBw0B008sQn79YxCjkHJU84pC&index=10
// TODO MIN 49 reu utilizar styled-components https://www.youtube.com/watch?v=DjVGdUM1dHQ&list=PLV8x_i1fqBw0B008sQn79YxCjkHJU84pC&index=11 
// 18 días =O 16 horas.



return (
    <UserContextProvider>
      <div className="App">
      <Suspense fallback={null}>
        <section className="App-content">
          <Header />
          <Link to="/">
            <figure className="App-logo">
              <img alt="Giffy logo" src="/logo.png" />
            </figure>
          </Link>
          <GifsContextProvider>
            <Route component={Home} path="/" />
            <Route component={Login} path="/login" />
            <Route component={Register} path="/register" />
            <Route component={SearchResults} path="/search/:keyword/:rating?" />
            <Route component={Detail} path="/gif/:id" />
            <Route component={()=> <h1>404 ERROR :(</h1>} path="/404" />
          </GifsContextProvider>
        </section>
        </Suspense>
      </div>
      </UserContextProvider>
  );
}

export default App;
