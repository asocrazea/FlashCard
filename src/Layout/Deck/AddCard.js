import React, { useEffect, useState } from "react";
import { readDeck, createCard } from "../../utils/api/index";
import { useHistory, useParams } from "react-router-dom";
import CardForm from "./CardForm";
function AddCard() {
  const history = useHistory();
  const params = useParams().deckId;
  const [card, setCard] = useState();
  const [deck, setDeck] = useState();
  const submitHandler = () => {
    //  preventDefault();
    setCard({ front: card.front, back: card.back });
  };
  useEffect(() => {
    async function getDeck() {
      let deckList = await readDeck(deck.deckId);
      setDeck(deckList);
    }
    getDeck();
  }, []);
  const handleClick = () => {
    history.push("/");
  };
  return (
    <div>
      <div className="breadcrumb">
        <a href="#" to="/" onClick={handleClick}>
          Home
        </a>
        <a href="#" to="/decks/deckId">
          {deck.name}
        </a>
        <a href="#" to="/decks/:deckId/cards/new">
          Add Card
        </a>
      </div>
      <div>
        <CardForm submitHandler={submitHandler} card={card} deck={deck} />
      </div>
      <div>
        <button type="button" className="btn btn-secondary">
          Cancel
        </button>
        <button type="submit" className="btn btn-primary mx-1">
          Add Card
        </button>
      </div>
    </div>
  );
}
export default AddCard;
