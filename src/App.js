import React from "react";
import "./App.css";
import Home from "./Home";
import Details from "./Details.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
        </Switch>
        <Switch>
          <Route path="/Details">
            <Details />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
