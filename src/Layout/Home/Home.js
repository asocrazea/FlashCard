import React, { useEffect, useState } from "react";

import { Link, Route, useHistory } from "react-router-dom";
import { listDecks } from "../../utils/api";
import View from "../View";

function Home({}) {
  const history = useHistory();
  const [decks, setDecks] = useState();
  useEffect(() => {
    listDecks().then(setDecks);
  }, []);
  const handleButtonClick = () => {
    history.push("/decks/new");
  };

  return (
    <div className="container">
      <Link to="/deck/new">
        <button type="button" onClick={handleButtonClick}>
          + Create Deck
        </button>
      </Link>
      <h1 className="title">Decks</h1>
      <div>
        <View />
      </div>
    </div>
  );
}
export default Home;
