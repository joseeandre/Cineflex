import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./Header";
import HomePage from "./HomePage";
import Days from "./Days";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/sessoes/:idMovie" exact>
            <Days />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));