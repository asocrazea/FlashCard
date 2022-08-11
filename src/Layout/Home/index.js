import React from "react";

import { Link, useHistory } from "react-router-dom";

function Home({ decks }) {
  history = useHistory();

  let deckList = decks.map((deck, index) => (
    <div className="deck-row" key={index}>
      <div className="card" key={index}>
        <div className="card-body">
          <h3 className="card-title">{deck.name}</h3>
          <p className="card-text">{deck.description}</p>
          <p>{deck.cards.length}</p>
        </div>
        <div>
          <Link to={`/decks/:${deck.id}`}>
            <button type="button">View</button>
          </Link>
          <Link to={`/decks/:${deck.id}/study`}>
            <button type="button"></button>
          </Link>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <button
        type="button"
        className="btn btn-secondary mb-2"
        onClick={() => history.push("/decks/new")}
      >
        + Create Deck
      </button>

      <button
        type="button"
        className="btn btn-secondary mb-2"
        onClick={() => history.push("/decks/new")}
      >
        Study
      </button>
      <button
        type="button"
        className="btn btn-secondary mb-2"
        onClick={() => history.push("/decks/new")}
      >
        View
      </button>
    </>
  );
}
export default Home;
