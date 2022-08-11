import React from "react";
import DeckList from "./DeckList";

function Home() {
  return (
    <>
      <button
        type="button"
        className="btn btn-secondary mb-2"
        onClick={() => history.push("/decks/new")}
      >
        + Create Deck
      </button>

      <DeckList />
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
