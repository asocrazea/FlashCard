import React, { useState, useEffect } from "react";
import AddCard from "./AddCard/AddCard";
import Study from "./Study/Study";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home/Home";
import EditDeck from "./EditDeck/EditDeck";
import CreateDeck from "./CreateDeck/CreateDeck";

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
    <>
      <Router>
        <Header />
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
            <CreateDeck />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
export default Layout;
