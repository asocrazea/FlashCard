import React, { useEffect } from "react";
import { readDeck, createCard } from "../../utils/api/index";

import CardForm from "../CardForm";

function AddCard() {
  const [card, setCard] = useState();
  const [deck, setDeck] = useState();
  const submitHandler = () => {
    preventDefault();
    setCard({ front: card.front, back: card.back });
  };
  useEffect(() => {
    async function getDeck() {
      let deckList = await readDeck(deck.deckId);
      setDeck(deckList);
    }
    getDeck();
  }, []);
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb">
            <Link to="/"></Link>Home
          </li>
          <li className="breadcrumb">
            <Link to="/decks/:deckId/"></Link>
            {deck.name}
          </li>
          <li className="breadcrumb">
            <Link to="/decks/:deckId/cards/new"></Link>AddCard
          </li>
        </ol>
      </nav>
      <div>
        <CardForm submitHandler={submitHandler} card={card} deck={deck} />
      </div>
      <div>
        <button type="button"></button>
        <button type="submit" className="btn">
          Add
        </button>
      </div>
    </div>
  );
}
export default AddCard;
