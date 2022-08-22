import React from "react";
import { readDeck, createDeck } from "../../utils/api/index";
import DeckForm from "../DeckForm";
import { useState } from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
function CreateDeck() {
  const history = useHistory();

  const [deck, setDeck] = useState();

  const submitHandler = (event) => {
    event.preventdefault();
    setDeck({ name: deck.name, description: deck.description });
  };
  const changeHandler = (event) => {
    event.preventdefault();
    setDeck({});
  };
  const handleClick = () => {
    history.push("/");
  };
  return (
    <div>
      <nav aria-label="breadcumb">
        <ul className="breadcrumb">
          <li className="breadcrumb">
            <button
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
            <button
              type="button"
              underline="hover"
              color="inherit"
              to="/decks/new"
            >
              Create
            </button>
          </li>
        </ul>
      </nav>
      <div className="container">
        <DeckForm />
      </div>
    </div>
  );
  // return (
  //   <div className="container">
  //     <div onClick={handleClick}>
  //       {/* Breadcrumb Navigation */}

  //       <nav aria-label="breadcumb">
  //         <ul className="breadcrumb">
  //           <li className="breadcrumb">
  //             <Link
  //               underline="hover"
  //               color="inherit"
  //               to="/"
  //               onClick={handleClick}
  //             >
  //               Home
  //             </Link>
  //           </li>
  //           <li className="breadcrumb">
  //             <Link underline="hover" color="inherit" to="/decks/new">
  //               Create
  //             </Link>
  //           </li>
  //         </ul>
  //       </nav>
  //     </div>
  //     <div className="container create-card">
  //       <DeckForm onChange={changeHandler} onSubmit={submitHandler} />
  //     </div>
  //   </div>
  // );
}
export default CreateDeck;
