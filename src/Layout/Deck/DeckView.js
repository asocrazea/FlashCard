import React, { useEffect, useState } from "react";
import { listDecks } from "../utils/api/index";
import { useHistory } from "react-router-dom";
import Deck from "./Deck/Deck";

function DeckView({ deck }) {
  return (
    <div>
      <nav aria-label="breadcumb">
        <ul className="breadcrumb">
          <li className="breadcrumb">
            <button
              className="btn btn-primary mx-1"
              type="button"
              underline="hover"
              color="inherit"
              to="/"
              onClick={handleClick}
            >
              Home
            </button>
          </li>
          <li className="breadcrumb">
            <link
              className="btn btn-primary mx-1"
              type="button"
              underline="hover"
              color="inherit"
              to="/decks/new"
              onClick={handleClick}
            >
              Deck Info {}
            </link>
          </li>
        </ul>
      </nav>
      <div className="card">
        <div className="card-body">
          <p>{deck.name.length} cards</p>
          <h3 className="card-title">{deck.name}</h3>
          <p className="card-text">{deck.description}</p>
        </div>
        <button
          onClick={() => handleEdit()}
          className="btn btn-secondary"
        ></button>
        <button onClick={() => handleStudy()} className="btn btn-primary mx-1">
          Study
        </button>

        <button
          onClick={() => handleAddCard()}
          className="btn btn-primary mx-1"
        >
          Add Card
        </button>
      </div>
      <h1>Cards</h1>
      <div>List of</div>
    </div>
  );
}

export default DeckView;
