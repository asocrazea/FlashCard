import React, { useEffect, useState } from "react";
import { listDecks } from "../utils/api/index";
import DeckList from "./Deck/DeckList";

function View() {
  const [decks, setDecks] = useState([]);
  useEffect(() => {
    listDecks().then(setDecks);
  }, []);

  return (
    <div className="container">
      <div>
        {decks.map((deck) => (
          <DeckList deck={deck} name={deck.name} key={deck.name} />
        ))}
      </div>
    </div>
  );
}

export default View;
