import React from "react";
import { readDeck, createDeck } from "../../utils/api/index";
import DeckForm from "../DeckForm";
import { useState } from "react";
import { Link, Route, useRouteMatch, useHistory } from "react-router-dom";
function CreateDeck() {
  const { url } = useRouteMatch();

  const [deck, setDeck] = useState();

  const submitHandler = (event) => {
    event.preventdefault();
    setDeck({ name: deck.name, description: deck.description });
  };
  const changeHandler = (event) => {
    event.preventdefault();
    setDeck({});
  };
  function handleClick(event) {
    event.preventdefault();
  }
  return (
    <div>
      <div onClick={handleClick}>
        {/* Breadcrumb Navigation */}

        <nav aria-label="breadcumb">
          <ul className="breadcrumb">
            <li className="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                Home
              </Link>
            </li>
            <li className="breadcrumb">
              <Link underline="hover" color="inherit" to="/decks/new">
                Create
              </Link>
            </li>
          </ul>
        </nav>
      </div>
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
