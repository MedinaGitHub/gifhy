import "./App.css";
import { Link, Route,Switch } from "wouter";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import SearchResults from "./pages/SearchResults";
import Header from "components/Header";
import Register from 'pages/Register'
import Login from "pages/Login";
import { UserContextProvider } from "./context/UserContext";
import { GifsContextProvider } from "./context/GifsContext";
import ErrorPage from "pages/ErrorPage";

//La palabra provider es por que provee es al que hace el wrapp, luego  con el hooc
// useContext hago la otra parte que es consumirlo
function App() {
return (
    <UserContextProvider>
      <div className="App">
        <section className="App-content">
          <Header />
          <Link to="/">
            <figure className="App-logo">
              <img alt="Giffy logo" src="/logo.png" />
            </figure>
          </Link>
          <GifsContextProvider>
          <Switch>
            <Route component={Home} path="/" />
            <Route component={Login} path="/login" />
            <Route component={Register} path="/register" />
            <Route component={SearchResults} path="/search/:keyword/:rating?" />
            <Route component={Detail} path="/gif/:id" />
            <Route component={ErrorPage}  path="/:rest*" />
            </Switch>
          </GifsContextProvider>
        </section>
      </div>
      </UserContextProvider>
  );
}

export default App;
