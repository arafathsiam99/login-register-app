import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
function App() {
  const [user, setLoginUser] = useState({});

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {user && user._id ? (
              <HomePage setLoginUser={setLoginUser}></HomePage>
            ) : (
              <Login setLoginUser={setLoginUser}></Login>
            )}
          </Route>
          <Route exact path="/homepage">
            <HomePage></HomePage>
          </Route>
          <Route exact path="/login">
            <Login setLoginUser={setLoginUser}></Login>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
