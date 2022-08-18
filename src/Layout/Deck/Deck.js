import React, { useEffect, useState } from "react";

import { Link, useRouteMatch, useHistory } from "react-router-dom";
import { listDecks } from "../../utils/api";
import EditDeck from "../EditDeck/EditDeck";
function Deck({ deck }) {
  const history = useHistory();
  const [decks, setDecks] = useState();
  useEffect(() => {
    listDecks().then(setDecks);
  }, []);
  const { pathname } = useRouteMatch;
  const [name, setName] = useState({ name: "" });
  const [description, setDescription] = useState({ description: "" });

  // setName({ name: deck.name });
  // setDescription({ description: deck.description });
  // useEffect(() => {
  //   function addorEdit() {
  //     if (pathname.includes("edit")) {
  //       setName({ name: deck.name });
  //       setDescription({ description: deck.description });
  //     } else {
  //       setIsEdit(false);
  //     }
  //   }
  //   addorEdit();
  // }, [deck, pathname]);
  return (
    <div>
      {/* Breadcrumb Navigation */}
      {/* <nav aria-label="breadcumb">
        <ul className="breadcrumb">
          <li className="breadcrumb">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb">
            <Link to={pathname}>{deck.name}</Link>
          </li>
        </ul>
      </nav> */}
      {/* deck name and descriptions */}
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{deck.name}</h3>
          <p className="card-text">{deck.description}</p>
          <div>
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => history.push(`/decks/${decks.id}`)}
            >
              {" "}
              View{" "}
            </button>
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => history.push(`/decks/${decks.id}/study`)}
            >
              {" "}
              Study{" "}
            </button>

            <button className="btn btn-secondary btn-sm"> Delete </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Deck;
