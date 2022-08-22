import { Link } from "react-router-dom";
import React from "react";

function DeckForm({ submitHandler, changeHandler, deck }) {
  return (
    <div className="card-box">
      <form onSubmit={submitHandler}>
        <div className="">
          <label> Name </label>
          <input
            type="text"
            id="DeckName"
            placeholder="Name of Deck"
            name=""
            onChange={changeHandler}
          />
          <label>Description</label>
        </div>
        <div className="card">
          <textarea
            id=""
            placeholder="Add a description of the deck"
            name=""
            onChange={changeHandler}
          ></textarea>
        </div>
        <Link to={"/"} type="button" className=""></Link>
        <button type="submit" className="btn btn-primary mx-1">
          Submit
        </button>
      </form>
    </div>
  );
}
export default DeckForm;
