import React, { useEffect, useState } from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import listDecks, { deleteDeck } from "../../utils/api/index";
import DeckForm from "../DeckForm";

function EditDeck() {
  return (
    <div>
      {/* bread crumb navigation */}
      <nav aria-label="breadcrumb">
        <ul className="breadcrumb">
          <li className="breadcrumb">
            <Link to={"/"}></Link>
          </li>
          <li className="breadcrumb">
            <Link to={"/decks/:deckId/edit"}></Link>
          </li>
        </ul>
      </nav>
      <DeckForm />
    </div>
  );
}
export default EditDeck;
