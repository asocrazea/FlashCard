import React, { useState, useEffect } from "react";
import AddCard from "./AddCard";
import Study from "./Study";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home";
import Deck from "./Deck";
import CreateDeck from "./CreateDeck";
import EditCard from "./EditCard";
import { Switch, Route, useRouteMatch } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />

      <div className="container">
        <Switch>
          <Route>
            <Home />
          </Route>
          <Route>
            <Study />
          </Route>
          <Route>
            <EditCard />
          </Route>
        </Switch>
      </div>
    </>
  );
}
export default Layout;
