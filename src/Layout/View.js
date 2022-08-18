import React, { useEffect, useState } from "react";
import { listDecks } from "../utils/api/index";
import { useHistory } from "react-router-dom";
import Deck from "./Deck/Deck";

function View({}) {
  const history = useHistory();
  const [decks, setDecks] = useState([]);
  useEffect(() => {
    listDecks().then(setDecks);
  }, []);

  return (
    <div className="container" key={deck.name}>
      <div>
        {decks.map((deck) => (
          <Deck deck={deck} name={deck.name} key={deck.name} />
        ))}
      </div>
    </div>
  );
}

export default View;
