import React from "react";
import { readDeck } from "../../utils/api/index";
import { useRouteMatch, useEffect } from "";
function Study() {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ul className="breadcrumb">
          <li className="breadcrumb">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="breadcrumb">
            <Link to={`/${deck.id}/study`}>Study</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Study;
