import React, { useState, useEffect } from "react";
import AddCard from "./AddCard/AddCard";
import Study from "./Study/Study";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home/Home";

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";

function Layout() {
  const { path } = useRouteMatch();
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact={true} path={"/"}>
            <Home />
          </Route>
          <Route path={"/study"}>
            <Study />
          </Route>

          <Route path={"/decks/:deckId/cards/:cardId/edit"}>
            <EditDeck />
          </Route>
          <Route>
            <NotFound />
          </Route>
          <Route></Route>
        </Switch>
      </Router>
    </div>
  );
}
export default Layout;
