import React, { useState, useRouteMatch, useEffect } from "react";
import { readDeck } from "../../utils/api/index";
import Deck from "../Deck/Deck";
import { Link } from "react-router-dom";
function Study(deckId) {
  const [deck, setDeck] = useState([]);
  useEffect(() => {
    readDeck(deckId).then(setDeck);
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
      {/* <Deck /> */}
    </div>
  );
}

export default Study;
