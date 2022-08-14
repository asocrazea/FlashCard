import React, { useState } from "react";
import { readDeck } from "../../utils/api/index";
import { useRouteMatch, useEffect } from "";
import Deck from "../Deck/Deck";
function Study() {
  let history = useRouteMatch();

  const [decks, setDecks] = useState([]);
  useEffect(() => {
    readDeck().then(setDecks);
  }, []);
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ul className="breadcrumb">
          <li className="breadcrumb">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="breadcrumb">
            <Link to={`/${deck.id}/study`}>Study</Link>
          </li>
        </ul>
      </nav>
      <Deck />
    </div>
  );
}

export default Study;
