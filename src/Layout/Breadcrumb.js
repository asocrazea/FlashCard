import React from "react";
import { Link } from "react-router-dom";
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function BasicBreadcrumbs() {
  return (
    <div onClick={handleClick}>
      {/* Breadcrumb Navigation */}

      <nav aria-label="breadcumb">
        <ul className="breadcrumb">
          <li className="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
          </li>
          <li className="breadcrumb">
            <Link underline="hover" color="inherit" to="">
              {deck.name}
            </Link>
          </li>
          <li>
            <Link underline="hover" to=""></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
