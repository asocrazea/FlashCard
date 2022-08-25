import React from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import CardForm from "./CardForm";

function EditCard() {
  const deckId = useParams().deckId;
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };

  return (
    <div>
      <div>
        <a href="/" to="/" onClick={handleClick}>
          Home
        </a>

        <a href="#" to="">
          Edit Deck {deckId}
        </a>
      </div>
      <h1>Edit Deck</h1>
      <div>
        <CardForm />
      </div>
      <div>
        <button type="submit" className="btn btn-secondary">
          {" "}
          Cancel
        </button>
        <button type="submit" className="btn btn-primary mx-1"></button>
      </div>
    </div>
  );
}
export default EditCard;
