import React, { useEffect, useState } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import { readDeck, updateDeck } from "../../utils/api/index";
import Breadcrumb from "../Breadcrumb";

import DeckForm from "./DeckForm";

function EditDeck() {
  const [editDeckFormData, setEditDeckFormData] = useState({
    name: "",
    description: "",
  });

  const { params } = useRouteMatch();
  const history = useHistory();

  // API call to fetch current deck
  useEffect(() => {
    const abortController = new AbortController();
    async function getDeck() {
      try {
        const fetchedDeck = await readDeck(params.deckId);
        setEditDeckFormData(fetchedDeck);
      } catch (error) {
        console.error(error);
      }
    }
    getDeck();
    return () => abortController.abort();
  }, [params.deckId]);

  // Handlers for submitting, editing, and cancelling on the deck form
  const handleEditDeckSubmit = async (event) => {
    event.preventDefault();
    await updateDeck(editDeckFormData);
    history.push(`/decks/${params.deckId}`);
  };

  const handleEditDeckChange = (event) => {
    event.preventDefault();
    setEditDeckFormData({
      ...editDeckFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleEditDeckCancel = (event) => {
    event.preventDefault();
    history.push(`/decks/${params.deckId}`);
  };

  return (
    <div>
      <Breadcrumb
        middleText={editDeckFormData.name}
        deckId={params.deckId}
        finalText={"Edit Deck"}
      />
      <h1>Edit Deck</h1>
      <DeckForm
        handleCancel={handleEditDeckCancel}
        handleChange={handleEditDeckChange}
        handleSubmit={handleEditDeckSubmit}
        deckData={editDeckFormData}
      />
    </div>
  );
}
export default EditDeck;
