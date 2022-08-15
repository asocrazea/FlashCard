import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import listDecks, { deleteDeck } from "../../utils/api/index";
import CardForm from "../CardForm";

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
      <CardForm />
    </div>
  );
}
export default EditCard;