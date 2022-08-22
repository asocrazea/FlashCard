import React, { Link, useEffect, useState } from "react";
import { readCard, readDeck } from "../../utils/api";

function FlashCard({ cardId, deckId, card }) {
  const [flip, setFlip] = useState(false);

  return (
    <div onClick={() => setFlip(!flip)}>
      <div>{card} card back</div>
      <div>{card} card front</div>
    </div>
  );
}
export default FlashCard;
