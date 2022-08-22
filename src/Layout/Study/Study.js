import React, { useState, useEffect } from "react";
import { readCard, readDeck } from "../../utils/api/index";
import { Link, useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import FlipCard from "../Cards/FlipCard";
function Study(cardId, deckId) {
  const [deck, setDeck] = useState();
  const [card, setCard] = useState();
  const history = useHistory();
  useEffect(() => {
    readCard(cardId).then(setCard);
    readDeck(deckId).then(setDeck);
  }, []);
  const homeHandleBtn = () => {
    history.push("/");
  };
  return (
    <div className="container">
      <nav aria-label="breadcrumb">
        <ul className="breadcrumb">
          <li className="breadcrumb">
            <button onClick={homeHandleBtn} to="/">
              Home
            </button>
          </li>
          <li>
            <button to="`/${deck.id}/study`"> deck id</button>
          </li>
        </ul>
      </nav>
      <div className="card-box"></div>
    </div>
  );
  // return (
  //   <div>
  //     <nav aria-label="breadcrumb">
  //       <ul className="breadcrumb">
  //         <li className="breadcrumb">
  //           <Link to={"/"}>Home</Link>
  //         </li>
  //         <li className="breadcrumb">
  //           <Link to={`/${deck.id}/study`}>Study</Link>
  //         </li>
  //       </ul>
  //     </nav>
  //     <div>
  //       <div>
  //         <div>
  //           {card.map((card) => {
  //             return;
  //             <FlipCard key={card.id} card={card} />;
  //           })}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default Study;
