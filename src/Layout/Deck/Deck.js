import React, { useState, useEffect } from "react";
import { listDecks } from "../../utils/api";

function Deck(deckId) {
  const [deck, setDeck] = useState([]);
  useEffect(() => {
    listDecks(deckId).then(setDeck);
  }, []);
  return (
    <div className="card">
      <div className="card-body">
        <p>{deck.name.length} cards</p>
        <h3 className="card-title">{deck.name}</h3>
        <p className="card-text">{deck.description}</p>
      </div>
    </div>
  );
}
export default Deck;
