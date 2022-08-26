import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home/Home";
import EditDeck from "./Deck/EditDeck";
import CreateDeck from "./CreateDeck/CreateDeck";
import React, { useState } from "react";
import Deck from "./Deck/Deck";
import EditCard from "./Deck/EditCard";
import Study from "./Study/Study";
import AddCard from "./Deck/AddCard";
import { Route, Switch } from "react-router-dom";

function Layout() {
  const [deck, setDeck] = useState({ cards: [] });
  return (
    <div className="container">
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/decks/new">
          <CreateDeck />
        </Route>
        <Route exact path="/decks/:deckId">
          <Deck deck={deck} setDeck={setDeck} />
        </Route>
        <Route exact path="/decks/:deckId/edit">
          <EditDeck />
        </Route>
        <Route exact path="/decks/:deckId/study">
          <Study />
        </Route>
        <Route exact path="/decks/:deckId/cards/:cardId/edit">
          <EditCard />
        </Route>
        <Route exact path="/decks/:deckId/cards/new">
          <AddCard />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}
export default Layout;
