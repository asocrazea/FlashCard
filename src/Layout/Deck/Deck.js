import React, { useEffect, useState } from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import listDecks from "../../utils/api/index";
function Deck() {
  return (
    <>
      <h1>Decks</h1>
      <nav>
        <ul>
          <li></li>
        </ul>
      </nav>
      <div>
        <Link to="">Edit</Link>
        <Link>Study</Link>
        <Link>+ Add Cards</Link>
        <Link></Link>
      </div>
      <Deck />
    </>
  );
}
export default Deck;
