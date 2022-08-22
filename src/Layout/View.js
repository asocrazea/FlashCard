import React, { useEffect, useState } from "react";
import { listDecks } from "../utils/api/index";
import Deck from "./Deck/Deck";

function View({}) {
  const [decks, setDecks] = useState([]);
  useEffect(() => {
    listDecks().then(setDecks);
  }, []);

  return (
    <div className="container">
      <div>
        {decks.map((deck) => (
          <Deck deck={deck} name={deck.name} key={deck.name} />
        ))}
      </div>
    </div>
  );
}

export default View;
