import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { listDecks } from "../../utils/api";

function Deck(deckId) {
  const history = useHistory();
  const params = useParams();
  const [deck, setDeck] = useState([]);
  useEffect(() => {
    listDecks(deckId).then(setDeck);
  }, []);
  const handleClick = () => {
    history.push("/");
  };
  return (
    <div>
      <div className="breadcrumb">
        <a href="#" to="/" onClick={handleClick}>
          Home
        </a>
        <a href="#" to="/decks/deckId">
          {deck.name}
        </a>
      </div>
      <div className="card">
        <div className="card-body">
          <p>{deck.name.length} cards</p>
          <h3 className="card-title">{deck.name}</h3>
          <p className="card-text">{deck.description}</p>
        </div>
      </div>
    </div>
  );
}
export default Deck;
