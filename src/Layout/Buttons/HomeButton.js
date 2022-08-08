import React from "react";
import { useHistory } from "react-router-dom";
function HomeButton() {
  const history = useHistory();
  return (
    <button type="button" onClick={() => history.push("/")}>
      Home
    </button>
  );
}
export default HomeButton;
