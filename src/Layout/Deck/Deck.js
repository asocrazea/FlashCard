import React, { useEffect, useState } from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import listDecks, { deleteDeck } from "../../utils/api/index";
function Deck() {
  const { url } = useRouteMatch;
  const [deck, setDeck] = useState();

  return (
    <div>
      {/* Breadcrumb Navigation */}
      <h1>Decks</h1>
      <nav aria-label="breadcumb">
        <ul className="breadcrumb">
          <li className="breadcrumb">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="breadcrumb">
            <Link to={url}>{deck.name}</Link>
          </li>
        </ul>
      </nav>
      {/* deck name and descriptions */}
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{deck.name}</h3>
          <p className="card-text">{deck.description}</p>
          <div>
            <Link to={`/decks/:${deck.id}/edit`}>Edit</Link>
            <Link to={`/decks/:${deck.id}/study`}>Study</Link>
            <Link to={`/decks/:${deck.id}/cards/new`}>+ Add Cards</Link>
            <button type="button" class="btn">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Deck;
