import React, { useState, useEffect } from "react";
import { readCard, readDeck } from "../../utils/api/index";
import { Link, useHistory } from "react-router-dom";
import Card from "../Cards/Card";
//import "bootstrap/dist/css/bootstrap.min.css";

function Study(cardId, deckId) {
  const [deck, setDeck] = useState();
  const [card, setCard] = useState();
  const history = useHistory();
  useEffect(() => {
    readCard(cardId).then(setCard);
    readDeck(deckId).then(setDeck);
  }, []);
  const homeHandleBtn = () => {
    history.push("/");
  };
  return (
    <div className="container">
      <nav aria-label="breadcrumb">
        <ul className="breadcrumb">
          <li className="breadcrumb">
            <button
              onClick={homeHandleBtn}
              to="/"
              type="button"
              underline="hover"
              color="inherit"
            >
              Home
            </button>
          </li>
          <li>
            <button to="`/${deck.id}/study`"> Deck</button>
          </li>
        </ul>
      </nav>
      <div className="card-box container">
        <div className="card">
          <Card card={card} />
        </div>
        <button></button>
        <button className="btn btn-primary mx-1">Flip</button>
      </div>
    </div>
  );
}

export default Study;
