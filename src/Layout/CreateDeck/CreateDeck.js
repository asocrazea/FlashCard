import DeckForm from "../Deck/DeckForm";

import React, { useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { createDeck } from "../../utils/api/index.js";
import Breadcrumb from "../Breadcrumb";

function CreateDeck({ updateDecks }) {
  const { params } = useRouteMatch;
  const [currentDeck, setCurrentDeck] = useState({});
  const [newDeck, setNewDeck] = useState({ name: "", description: "" });
  const history = useHistory();

  const initialForm = {
    name: "",
    description: "",
  };
  const [createDeckFormData, setCreateDeckFormData] = useState({
    ...initialForm,
  });

  const [deck, setDeck] = useState();
  const submitForm = async (event) => {
    event.preventDefault();
    const response = await createDeck(newDeck);
    history.push(`/decks/${response.id}`);
    updateDecks(1);
  };
  const handleCreateDeckSubmit = async (event) => {
    event.preventDefault();
    const newDeck = await createDeck(createDeckFormData);
    const newDeckId = newDeck.id;
    history.push(`/decks/${newDeckId}`);
  };

  const handleCreateDeckCancel = (event) => {
    event.preventDefault();
    history.push("/");
  };

  const handleCreateDeckChange = (event) => {
    setCreateDeckFormData({
      createDeckFormData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="container">
      <Breadcrumb middleText={"Create Deck"} />
      <div className="container">
        <DeckForm
          handleCancel={handleCreateDeckCancel}
          handleChange={handleCreateDeckChange}
          handleSubmit={handleCreateDeckSubmit}
          deckData={createDeckFormData}
        />
      </div>
    </div>
  );
}
export default CreateDeck;
