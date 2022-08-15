import AddCard from "./AddCard/AddCard";
import Study from "./Study/Study";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home/Home";
import EditDeck from "./EditDeck/EditDeck";
import CreateDeck from "./CreateDeck/CreateDeck";
import React from "react";

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
            <CreateDeck path={"/decks/new"} />
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
