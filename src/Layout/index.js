import React, { useState, useEffect } from "react";
import AddCard from "./AddCard";
import Study from "./Study";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home";
import Deck from "./Deck";
import CreateDeck from "./CreateDeck";
import EditCard from "./EditCard";
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
      <Header />
      <Router>
        <div className="container">
          <Switch>
            <Route exact={true} path={"/"}>
              <Home />
            </Route>
            <Route path={"/study/"}>
              <Study />
            </Route>
            <Route path={"/decks/:deckId/cards/:cardId/edit"}>
              <EditCard />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
export default Layout;
