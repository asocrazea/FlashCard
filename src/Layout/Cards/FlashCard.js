import React, { Link, useEffect, useState } from "react";
import { readCard, readDeck } from "../../utils/api";

function FlashCard(cardId, deckId) {
  const [flip, setFlip] = useState(false);
  const [card, setCard] = useState([]);
  const [deck, setDeck] = useState([]);
  useEffect(() => {
    readCard(cardId).then(setCard);
    readDeck(deckId).then(setDeck);
  }, []);

  return <div onClick={() => setFlip(!flip)}>{card.back}</div>;
}
export default FlipCard;
