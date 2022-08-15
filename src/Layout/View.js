import React, { useEffect, useState } from "react";
import { listDecks } from "../utils/api/index";
import { useHistory } from "react-router-dom";

function View({}) {
  const history = useHistory();
  const [decks, setDecks] = useState([]);
  useEffect(() => {
    listDecks().then(setDecks);
  }, []);

  const deckItems = decks.map((deck) => (
    <div className="card" key={deck.id}>
      <div div className="card-body">
        <h2 className="card-title">{`${deck.name}`}</h2>
        <p className="card-text">{`${deck.description}`}</p>
        <p className="card-text">{`${deck.cards.length} cards`}</p>
      </div>
    </div>
  ));

  return (
    <div>
      {deckItems}
      <button
        className="btn btn-secondary btn-sm"
        onClick={() => history.push(`/decks/${decks.id}`)}
      >
        {" "}
        View{" "}
      </button>
      <button
        className="btn btn-secondary btn-sm"
        onClick={() => history.push(`/decks/${decks.id}/study`)}
      >
        {" "}
        Study{" "}
      </button>

      <button className="btn btn-secondary btn-sm"> Delete </button>
    </div>
  );
}

export default View;
