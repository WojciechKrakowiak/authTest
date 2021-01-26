import './App.css';
import {BrowserRouter, Switch, Route, NavLink} from "react-router-dom";
import Login from "pages/Login/Login";
import Profile from "pages/Profile/Profile";
import Main from "pages/Main/Main";

function App() {
  return (
    <div className="App">

        <BrowserRouter>

          <nav>
            <NavLink to={"/"}>Main</NavLink>
            <NavLink to={"/profile"}>Profile</NavLink>
            <NavLink to={"/login"}>Login</NavLink>
          </nav>
          <Switch>
            <Route path={"/login"}>
              <Login />
            </Route>
            <Route path={"/profile"}>
              <Profile />
            </Route>
            <Route path={"/"}>
              <Main />
            </Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
