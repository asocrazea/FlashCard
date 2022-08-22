import AddCard from "./AddCard/AddCard";
import Study from "./Study/Study";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home/Home";
import EditDeck from "./EditDeck/EditDeck";
import CreateDeck from "./CreateDeck/CreateDeck";
import React from "react";
//import DeckView from "./Deck/DeckView";
import EditCard from "./EditCard/EditCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";

function Layout() {
  return (
    <div>
      <Router>
        <Header />

        <Switch>
          <Route exact={true} path="/">
            <Home />
          </Route>

          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route path="/decks/deckId"></Route>
          <Route path="/decks/deckId/cards/:cardId/edit">
            <EditDeck />
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
