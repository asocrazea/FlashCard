import { Link } from "react-router-dom";
function CardForm({ submitHandler, changeHandler, card, deck }) {
  return (
    <>
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
          <textarea></textarea>
        </div>
      </form>
    </>
  );
}
export default CardForm;
