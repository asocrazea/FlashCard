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
    <div className="container">
      <div className="breadcrumb">
        <a href="#" to="/" onClick={handleClick}>
          Home
        </a>
        <a href="#" to="">
          Create Deck
        </a>
      </div>
      <div className="container">
        <DeckForm onSubmit={submitForm} />
      </div>
    </div>
  );
}
export default CreateDeck;
