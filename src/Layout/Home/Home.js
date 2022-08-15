import React, { useEffect, useState } from "react";
import { listDecks } from "../../utils/api/index";
import { Link, useHistory } from "react-router-dom";
import View from "../View";

function Home() {
  const history = useHistory();
  const [decks, setDecks] = useState([]);
  const handleButtonClick = () => {
    history.push("/decks/new");
  };

  return (
    <div>
      <button type="button" onClick={handleButtonClick}>
        + Create Deck
      </button>
      <div>
        <View />
        <Link to={`/decks/:${decks.id}`}>
          <button type="button">View</button>
        </Link>
        <Link to={`/decks/:${decks.id}/study`}>
          <button type="button">Study</button>
        </Link>
      </div>
    </div>
  );
}
export default Home;
