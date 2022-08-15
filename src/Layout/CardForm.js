import { Link } from "react-router-dom";
function CardForm({ submitHandler, changeHandler, card, deck }) {
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>Front</label>
          <textarea
            className=""
            id="cardFront"
            placeHolder="This is where you type in Term"
            name="front"
            value={card.front}
            onChange={changeHandler}
          ></textarea>
        </div>
        <div>
          <lable>Back</lable>
          <textarea
            className=""
            id="cardBack"
            placeHolder="add definition here"
            name="back"
            value={card.back}
            onChange={changeHandler}
          ></textarea>
        </div>
        <Link to={`/decks/:${deck.id}`} type="button">
          Done
        </Link>
        <button type="submit" className="btn btn">
          Submit
        </button>
      </form>
    </div>
  );
}
export default CardForm;
