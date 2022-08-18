import React, { useEffect, useState } from "react";

import { Link, useRouteMatch, useHistory } from "react-router-dom";
import { listDecks } from "../../utils/api";
function Deck({ deck }) {
  const history = useHistory();
  const [decks, setDecks] = useState();
  useEffect(() => {
    listDecks().then(setDecks);
  }, []);

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{deck.name}</h3>
          <p className="card-text">{deck.description}</p>
          <div>
            <Link to={`/decks/:${deck.id}`}> View </Link>
            <Link to={`/decks/${deck.id}/study`}> Study</Link>

            <button className="btn btn-secondary btn-sm"> Delete </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Deck;
