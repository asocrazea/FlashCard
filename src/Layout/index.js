import React, { useState, useEffect } from "react";
import AddCard from "./AddCard/AddCard";
import Study from "./Study/Study";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home/Home";
import Deck from "./Deck/Deck";
import CreateDeck from "./CreateDeck/CreateDeck";
import EditDeck from "./EditDeck/EditDeck";
import CardForm from "./CardForm";
import DeckForm from "./DeckForm";
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
            <Route path={"/decks/:deckId/cards/:cardId/edit"}></Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
export default Layout;
