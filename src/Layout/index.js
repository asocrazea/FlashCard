import AddCard from "./Deck/AddCard";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home/Home";
import EditDeck from "./Deck/EditDeck";
import CreateDeck from "./CreateDeck/CreateDeck";
import React, { useState } from "react";
import Deck from "./Deck/Deck";
import EditCard from "./Deck/EditCard";
import CardList from "./Study/CardList";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Layout() {
  const [deck, setDeck] = useState({ cards: [] });
  return (
    <div>
      <Router>
        <Header />

        <Switch>
          <Route exact={true} path="/">
            <Home />
          </Route>

          <Route path="/decks/:deckId">
            <Deck deck={deck} setDeck={setDeck} />
          </Route>
          <Route exact path="/decks/deckId/cards/:cardId/edit">
            <EditDeck />
          </Route>
          <Route exact path="/decks/:deckId/study">
            <CardList />
          </Route>
          <Route>
            <CreateDeck path="/decks/new" />
          </Route>
          <Route path="/decks/deckId/cards/new">
            <AddCard />
          </Route>
          <Route path="/decks/deckId/cards/cardId/edit">
            <EditCard />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default Layout;
