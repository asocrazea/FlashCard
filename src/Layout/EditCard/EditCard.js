import React, { useEffect, useState } from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import listDecks, { deleteDeck } from "../../utils/api/index";

function EditCard() {
  const history = useHistory();

  return (
    <div>
      {/* bread crumb navigation */}
      <nav aria-label="breadcrumb">
        <ul className="breadcrumb">
          <li className="breadcrumb">
            <Link to="/"></Link>
          </li>
          <li>
            <Link></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default EditCard;
