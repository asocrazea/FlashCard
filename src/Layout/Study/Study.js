import React, { useState, link, useEffect } from "react";
import { readCard, readDeck } from "../../utils/api/index";
import { useHistory, useParams } from "react-router-dom";
import Card from "../Cards/Card";
//import "bootstrap/dist/css/bootstrap.min.css";

function Study() {
  const [deck, setDeck] = useState();

  const deckId = useParams().deckId;
  const history = useHistory();
  useEffect(() => {
    readDeck(deckId).then(setDeck);
  }, []);
  const handleClick = () => {
    history.push("/");
  };
  return (
    <div className="container">
      <div className="breadcrumb">
        <a href="#" to="/" onClick={handleClick}>
          Home
        </a>
        <a href="#" to="/decks/deckId">
          {deckId}
        </a>
        <a href="#" to="">
          Study
        </a>
      </div>
      <div className="container"></div>
      <div className="card-box container">
        <button></button>
        <button className="btn btn-primary mx-1">Flip</button>
      </div>
    </div>
  );
}

export default Study;
