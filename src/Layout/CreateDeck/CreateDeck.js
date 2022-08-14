import React from "react";
import { readDeck, createDeck } from "../../utils/api/index";
import DeckForm from "../DeckForm";
import { useState } from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
function CreateDeck() {
  const { url } = useRouteMatch();
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
    <div>
      <nav aria-label="breadcrumb">
        <ul className="breadcrumb">
          <li className="breadcrumb">
            <Link to={"/"}></Link>Home
          </li>
          <li className="breacrumb">
            <Link to={"/decks/new"}>{deck.name}</Link>
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
    </div>
  );
}
export default CreateDeck;
