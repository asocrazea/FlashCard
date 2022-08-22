import React, { useState, useEffect } from "react";
import { readCard } from "../../utils/api";

function Card(cardId) {
  const [card, setCard] = useState();
  useEffect(() => {
    readCard(cardId).then(setCard);
  });
  return (
    <div>
      <div>
        <h3>{card.id}</h3>
        <p>{card.front}</p>
        <p>{card.back}</p>
      </div>
    </div>
  );
}
export default Card;
