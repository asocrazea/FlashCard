import DeckForm from "../Deck/DeckForm";

import React, { useState } from "react";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { createDeck } from "../../utils/api/index.js";
import Breadcrumb from "../Breadcrumb";

function CreateDeck({ updateDecks }) {
  const { params } = useRouteMatch;
  const [currentDeck, setCurrentDeck] = useState({});
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
      <Breadcrumb middleText={"Create Deck"} />
      <div className="container">
        <DeckForm onSubmit={submitForm} />
      </div>
    </div>
  );
}
export default CreateDeck;
