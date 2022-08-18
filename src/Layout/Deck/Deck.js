import React, { useEffect, useState } from "react";

import { Link, useRouteMatch, useHistory } from "react-router-dom";
import { listDecks } from "../../utils/api";
function Deck({ deck, name }) {
  const history = useHistory();
  const [decks, setDecks] = useState();
  useEffect(() => {
    listDecks().then(setDecks);
  }, []);
  const handleStudy = () => {
    history.push(`/decks/:${deck.Id}/study`);
  };
  const handleView = () => {
    history.push(`/deck/${deck.id}`);
  };
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{deck.name}</h3>
          <p className="card-text">{deck.description}</p>
          <div>
            <button
              onClick={() => handleStudy()}
              className="btn btn-primary mx-1"
            >
              Study
            </button>

            <button
              onClick={() => handleView()}
              className="btn btn-primary mx-1"
            >
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Deck;
