import React from "react";
import { readDeck, createDeck } from "../../utils/api/index";
import DeckForm from "../DeckForm";
import { useState } from "react";
function CreateDeck(deck, deckId) {
  const [card, setCard] = useState();
  const [deck, setDeck] = useState();

  const submitHandler = (event) => {
    event.preventdefault();
    setDeck({ name: deck.name, description: deck.description });
  };
  const changeHandler = (event) => {
    event.preventdefault();
    setDeck({});
  };
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/"></Link>Home
          </li>
          <li>
            <Link to="/decks/new">{deck.name}</Link>
          </li>
        </ul>
      </nav>
      <div>
        <DeckForm onChange={changeHandler} onSubmit={submitHandler} />
      </div>
      <div>
        <button></button>
        <button></button>
      </div>
    </>
  );
}
export default CreateDeck;
