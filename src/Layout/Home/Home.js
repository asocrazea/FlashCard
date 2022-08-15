import React, { useEffect, useState } from "react";
import { listDecks } from "../../utils/api/index";
import { Link, useHistory } from "react-router-dom";
import View from "../View";

function Home() {
  const history = useHistory();

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
      </div>
    </div>
  );
}
export default Home;
