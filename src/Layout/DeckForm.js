import { Link } from "react-router-dom";

function DeckForm({ submitHandler, changeHandler, deck }) {
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label> Name </label>
          <input
            type="text"
            id="DeckName"
            placeholder="Name of Deck"
            name=""
            value={deck.name}
            onChange={changeHandler}
          />
          <label>Description</label>
          <textarea
            id=""
            placeholder="Add a description of the deck"
            name=""
            value={deck.description}
            onChange={changeHandler}
          ></textarea>
        </div>
        <Link to={"/"} type="button" className=""></Link>
        <button type="submit" className="">
          Submit
        </button>
      </form>
    </div>
  );
}
export default DeckForm;
