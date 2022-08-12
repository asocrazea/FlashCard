import React, { useEffect } from "react";
import { readDeck, createCard } from "../../utils/api/index";
a;
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
    <>
      <nav>
        <ol>
          <li>
            <Link to="/"></Link>Home
          </li>
          <li>
            <Link to="/decks/:deckId/"></Link>
            {deck.name}
          </li>
          <li>
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
    </>
  );
}
export default AddCard;
