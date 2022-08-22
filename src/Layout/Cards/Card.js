import React, { useState, useEffect } from "react";
import { readCard } from "../../utils/api";

function Card(cardId) {
  const [card, setCard] = useState();
  useEffect(() => {
    readCard(cardId).then(setCard);
  }, []);
  return (
    <div>
      <div className="card">
        <h3>{}</h3>
        <p>card front</p>
        <p> car back</p>
      </div>
    </div>
  );
}
export default Card;
