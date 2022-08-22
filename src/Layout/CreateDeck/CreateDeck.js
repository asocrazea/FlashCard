import DeckForm from "../Deck/DeckForm";

import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { createDeck } from "../../utils/api/index.js";
function CreateDeck({ updateDecks }) {
  const [newDeck, setNewDeck] = useState({ name: "", description: "" });
  const history = useHistory();

  const [deck, setDeck] = useState();
  const submitForm = async (event) => {
    event.preventDefault();
    const response = await createDeck(newDeck);
    history.push(`/decks/${response.id}`);
    updateDecks(1);
  };

  const handleClick = () => {
    history.push("/");
  };
  return (
    <div>
      <nav aria-label="breadcumb">
        <ul className="breadcrumb">
          <li className="breadcrumb">
            <button
              type="button"
              underline="hover"
              color="inherit"
              to="/"
              onClick={handleClick}
            >
              Home
            </button>
          </li>
          <li className="breadcrumb">
            <button
              type="button"
              underline="hover"
              color="inherit"
              to="/decks/new"
            >
              Create
            </button>
          </li>
        </ul>
      </nav>
      <div className="container">
        <DeckForm onSubmit={submitForm} />
      </div>
    </div>
  );
}
export default CreateDeck;
